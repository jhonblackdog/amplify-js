/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

import {
    ConsoleLogger as Logger,
    missingConfig,
    Hub,
<<<<<<< HEAD
    Parser
=======
    Parser,
>>>>>>> upstream/master
} from '../Common';
import AWSAnalyticsProvider from './Providers/AWSAnalyticsProvider';
import Platform from '../Common/Platform';
import Auth from '../Auth';

import { AnalyticsProvider, EventAttributes, EventMetrics } from './types';

const logger = new Logger('AnalyticsClass');

const dispatchAnalyticsEvent = (event, data) => {
    Hub.dispatch('analytics', { event, data }, 'Analytics');
};

<<<<<<< HEAD
=======
// events buffer
const BUFFER_SIZE = 1000;
const MAX_SIZE_PER_FLUSH = BUFFER_SIZE * 0.1;
const interval = 5*1000; // 5s
const RESEND_LIMIT = 5;
>>>>>>> upstream/master
/**
* Provide mobile analytics client functions
*/
export default class AnalyticsClass {
    private _config;
    private _provider;
    private _pluggables: AnalyticsProvider[];
    private _disabled;
    private _autoSessionRecord;

    /**
     * Initialize Analtyics
     * @param config - Configuration of the Analytics
     */
    constructor() {
        this._config = {};
        this._pluggables = [];
        this._disabled = false;
    }

    /**
     * configure Analytics
     * @param {Object} config - Configuration of the Analytics
     */
    public configure(config?) {
        logger.debug('configure Analytics');
        if (!config) return this._config;

        const amplifyConfig = Parser.parseMobilehubConfig(config);
        this._config = Object.assign({}, this._config, amplifyConfig.Analytics, config);

        if (this._config['disabled']) {
            this._disabled = true;
        }

        if (this._config['autoSessionRecord'] === undefined) {
            this._config['autoSessionRecord'] = true;
        }

        this._pluggables.forEach((pluggable) => {
            // for backward compatibility
            if (pluggable.getProviderName() === 'AWSAnalytics' && !this._config['AWSAnalytics']) {
                pluggable.configure(this._config);  
            } else {
                pluggable.configure(this._config[pluggable.getProviderName()]);
            }
        });

        if (this._pluggables.length === 0) {
            this.addPluggable(new AWSAnalyticsProvider());
        }

        dispatchAnalyticsEvent('configured', null);
        return this._config;
    }

    /**
     * add plugin into Analytics category
     * @param {Object} pluggable - an instance of the plugin
     */
    public addPluggable(pluggable: AnalyticsProvider) {
        if (pluggable && pluggable.getCategory() === 'Analytics') {
            this._pluggables.push(pluggable);
            let config = {};
            // for backward compatibility
            if (pluggable.getProviderName() === 'AWSAnalytics' && !this._config['AWSAnalytics']) {
                config = pluggable.configure(this._config);  
            } else {
                config = pluggable.configure(this._config[pluggable.getProviderName()]);
            }
            return config;
        }
    }

    /**
     * Get the plugin object
     * @param providerName - the name of the plugin 
     */
    public getPluggable(providerName) {
        for (let i = 0; i < this._pluggables.length; i += 1) {
            const pluggable = this._pluggables[i];
            if (pluggable.getProviderName() === providerName) {
                return pluggable;
            }
        }
      
        logger.debug('No plugin found with providerName', providerName);
        return null;
    }

    /**
     * Remove the plugin object
     * @param providerName - the name of the plugin
     */
    public removePluggable(providerName) {
        let idx = 0;
        while (idx < this._pluggables.length) {
            if (this._pluggables[idx].getProviderName() === providerName) {
                break;
            }
            idx += 1;
        }

        if (idx === this._pluggables.length) {
            logger.debug('No plugin found with providerName', providerName);
            return;
        } else {
            this._pluggables.splice(idx, idx + 1);
            return;
        }
    }

    /**
     * stop sending events
     */
    public disable() {
        this._disabled = true;
    }

    /**
     * start sending events
     */
    public enable() {
        this._disabled = false;
    }

    /**
    * Receive a capsule from Hub
    * @param {any} capsuak - The message from hub
    */
   public onHubCapsule(capsule: any): void {}


    /**
     * Record Session start
     * @return - A promise which resolves if buffer doesn't overflow
     */
    public async startSession(provider?: string) {
        const params = { event: { name: '_session_start' },  provider };
        return this._sendEvent(params);
    }

    /**
     * Record Session stop
     * @return - A promise which resolves if buffer doesn't overflow
     */
    public async stopSession(provider?: string) {
        const params = { event: { name: '_session_stop' }, provider };
        return this._sendEvent(params);
    }

    /**
     * Record one analytic event and send it to Pinpoint
     * @param {String} name - The name of the event
     * @param {Object} [attributs] - Attributes of the event
     * @param {Object} [metrics] - Event metrics
     * @return - A promise which resolves if buffer doesn't overflow
     */
    public async record(event: string | object, provider? , metrics?: EventMetrics) {
        let params = null;
        // this is just for compatibility, going to be deprecated
        if (typeof event === 'string') {
            params =  {
                'event': {
                    name: event, 
                    attributes: provider, 
                    metrics
                }, 
                provider: undefined
            };
        } else {
            params = { event, provider };
        }
        return this._sendEvent(params);
    }

    public async updateEndpoint(attrs, provider?) {
        const event = Object.assign({ name: '_update_endpoint' }, attrs);

        return this.record(event, provider);
    }

    private _sendEvent(params) {
        if (this._disabled) {
            logger.debug('Analytics has been disabled');
            return Promise.resolve();
        }
        const provider = params.provider? params.provider: 'AWSAnalytics';
        
        this._pluggables.forEach((pluggable) => {
            if (pluggable.getProviderName() === provider) {
                pluggable.record(params);
            }
        });

        return Promise.resolve();
    }
}
