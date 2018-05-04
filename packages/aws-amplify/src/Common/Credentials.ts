import { ConsoleLogger as Logger } from './Logger';
import { AWS } from './Facet';
import JS from './JS';
import Platform from './Platform';
import { FacebookOAuth, GoogleOAuth } from './OAuthHelper';

const logger = new Logger('Credentials');

export class Credentials {
    private _config;
    private _credentials;
    private _credentials_source;
    private _gettingCredPromise = null;
    private _authClass = null;
    private _cacheClass = null;
    private _refreshHandlers = {};

    constructor(config) {
        this.configure(config);
        this._refreshHandlers['google'] = GoogleOAuth.refreshGoogleToken;
        this._refreshHandlers['facebook'] = FacebookOAuth.refreshFacebookToken;
    }

    public setAuthClass(auth) {
        this._authClass = auth;
    }

    public setCacheClass(cache) {
        this._cacheClass = cache;
    }

    public getCredSource() {
        return this._credentials_source;
    }

    public configure(config){
        if (!config) return this._config || {};

        this._config = Object.assign({}, this._config, config);
        return this._config;
    }

    public get() {
        logger.debug('getting credentials');
        return this._pickupCredentials();
    }

    private _pickupCredentials() {
        logger.debug('picking up credentials');
        if (!this._gettingCredPromise || !this._gettingCredPromise.isPending()) {
            logger.debug('getting new cred promise');
            if (AWS.config && AWS.config.credentials && AWS.config.credentials instanceof Credentials) {
                this._gettingCredPromise = JS.makeQuerablePromise(this._setCredentialsFromAWS());
            } else {
                this._gettingCredPromise = JS.makeQuerablePromise(this._keepAlive());
            }
        } else {
            logger.debug('getting old cred promise');
        }

        return this._gettingCredPromise;
    }

    private _keepAlive() {
        logger.debug('checking if credentials exists and not expired');
        const cred = this._credentials;
        if (cred && !this._isExpired(cred)) {
            logger.debug('credentials not changed and not expired, directly return');
            return Promise.resolve(cred);
        }

        logger.debug('need to get a new credential or refresh the existing one');
        return this.currentUserCredentials();
    }

    public currentUserCredentials() {
        const that = this;
        logger.debug('Getting current user credentials');
        if (Platform.isReactNative) {
            // asyncstorage
            return this._cacheClass.getItem('federatedInfo')
                .then((federatedInfo) => {
                    if (federatedInfo) {
                        // refresh the jwt token here if necessary
                        return that._refreshFederatedToken(federatedInfo);
                    } else {
                        return that._cacheClass.currentSession()
                            .then(session => {
                                return that._setCredentialsFromSession(session);
                            }).catch((error) => {
                                return that._setCredentialsForGuest();
                            });
                    }
                }).catch((error) => {
                    return Promise.reject(error);
                });
        } else {
            // first to check whether there is federation info in the local storage
            const federatedInfo = this._cacheClass.getItem('federatedInfo');
            if (federatedInfo) {
                // refresh the jwt token here if necessary
                return this._refreshFederatedToken(federatedInfo);
            } else {
                return this._authClass.currentSession()
                    .then(session => {
                        logger.debug('getting session success', session);
                        return this._setCredentialsFromSession(session);
                    }).catch((error) => {
                        logger.debug('getting session failed', error);
                        return this._setCredentialsForGuest();
                    });
            }
        }
    }
    
    private _refreshFederatedToken(federatedInfo) {
        logger.debug('Getting federated credentials');
        const { provider, user } = federatedInfo;
        let token = federatedInfo.token;
        let expires_at = federatedInfo.expires_at;

        const that = this;
        logger.debug('checking if federated jwt token expired');
        if (expires_at < new Date().getTime()
            && typeof that._refreshHandlers[provider] === 'function') {
            logger.debug('getting refreshed jwt token from federation provider');
            return that._refreshHandlers[provider]().then((data) => {
                logger.debug('refresh federated token sucessfully', data);
                token = data.token;
                expires_at = data.expires_at;
                // Cache.setItem('federatedInfo', { provider, token, user, expires_at }, { priority: 1 });
                return that._setCredentialsFromFederation({ provider, token, user, expires_at });
            }).catch(e => {
                logger.debug('refresh federated token failed', e);
                this.clear();
                return Promise.reject('refreshing federation token failed: ' + e);
            });
        } else {
            if (!that._refreshHandlers[provider]) {
                logger.debug('no refresh handler for provider:', provider);
                this.clear();
                return Promise.reject('no refresh handler for provider');
            } else {
                logger.debug('token not expired');
                return this._setCredentialsFromFederation({provider, token, user, expires_at });
            }
        }
    }

    private _isExpired(credentials): boolean {
        if (!credentials) {
            logger.debug('no credentials for expiration check');
            return true;
        }
        logger.debug('is this credentials expired?', credentials);
        const ts = new Date().getTime();
        const delta = 10 * 60 * 1000; // 10 minutes
        const { expired, expireTime } = credentials;
        if (!expired && expireTime > ts + delta) {
            return false;
        }
        return true;
    }

    private _setCredentialsForGuest() {
        logger.debug('setting credentials for guest');
        const { identityPoolId, region, mandatorySignIn } = this._config;
        if (mandatorySignIn) {
            return Promise.reject('cannot get guest credentials when mandatory signin enabled');
        }

        const credentials = new AWS.CognitoIdentityCredentials(
            {
            IdentityPoolId: identityPoolId
        },  {
            region
        });

        const that = this;
        return this._loadCredentials(credentials, 'guest', false, null);
    }

    private _setCredentialsFromAWS() {
        const credentials = AWS.config.credentials;
        logger.debug('setting credentials from aws');
        const that = this;
        if (credentials instanceof AWS.Credentials){
            return this._loadCredentials(credentials, 'aws', undefined, null);
        } else {
            logger.debug('AWS.config.credentials is not an instance of AWS Credentials');
            return Promise.reject('AWS.config.credentials is not an instance of AWS Credentials');
        }
    }

    private _setCredentialsFromFederation(params) {
        const { provider, token, user, expires_at } = params;
        const domains = {
            'google': 'accounts.google.com',
            'facebook': 'graph.facebook.com',
            'amazon': 'www.amazon.com',
            'developer': 'cognito-identity.amazonaws.com'
        };

        // Use custom provider url instead of the predefined ones
        const domain = domains[provider] || provider;
        if (!domain) {
            return Promise.reject('You must specify a federated provider');
        }

        const logins = {};
        logins[domain] = token;

        const { identityPoolId, region } = this._config;
        const credentials = new AWS.CognitoIdentityCredentials(
            {
            IdentityPoolId: identityPoolId,
            Logins: logins
        },  {
            region
        });

        return this._loadCredentials(
            credentials, 
            'federated', 
            true, 
            { provider, token, expires_at, user}
        );
    }

    private _setCredentialsFromSession(session) {
        logger.debug('set credentials from session');
        const idToken = session.getIdToken().getJwtToken();
        const { region, userPoolId, identityPoolId } = this._config;
        const key = 'cognito-idp.' + region + '.amazonaws.com/' + userPoolId;
        const logins = {};
        logins[key] = idToken;
        const credentials = new AWS.CognitoIdentityCredentials(
            {
            IdentityPoolId: identityPoolId,
            Logins: logins
        },  {
            region
        });

        const that = this;
        return this._loadCredentials(credentials, 'userPool', true, null);
    }

    private _loadCredentials(credentials, source, authenticated, info) {
        const that = this;
        return new Promise((res, rej) => {
            credentials.getPromise().then(
                () => {
                    logger.debug('Load credentials successfully', credentials);
                    that._credentials = credentials;
                    that._credentials.authenticated = authenticated;
                    that._credentials_source = source;
                    if (source === 'federated') {
                        const user = Object.assign(
                            { id: this._credentials.identityId },
                            info.user
                        );
                        const { provider, token, expires_at } = info;
                        this._cacheClass.setItem('federatedInfo', { provider, token, user, expires_at }, { priority: 1 });
                    }
                    res(that._credentials);
                },
                (err) => {
                    logger.debug('Failed to load credentials', credentials);
                    rej(err);
                }
            );
        });
    }

    public set(params, source) {
        if (source === 'session') {
            return this._setCredentialsFromSession(params);
        } else if (source === 'federation') {
            return this._setCredentialsFromFederation(params);
        } else if (source === 'guest') {
            return this._setCredentialsForGuest();
        } else {
            logger.debug('no source specified for setting credentials');
            return Promise.reject('invalid source');
        }
    }

    public async clear() {
        const { identityPoolId, region } = this._config;
        if (identityPoolId) {
            // work around for cognito js sdk to ensure clearCacheId works
            const credentials = new AWS.CognitoIdentityCredentials(
                {
                IdentityPoolId: identityPoolId
            },  {
                region
            });
            credentials.clearCachedId();
        }
        await this._cacheClass.removeItem('federatedInfo');
    }
}

const instance = new Credentials(null);

export default instance;
