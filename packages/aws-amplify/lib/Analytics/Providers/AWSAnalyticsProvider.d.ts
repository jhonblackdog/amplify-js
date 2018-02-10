import { AnalyticsProvider } from '../types';
export default class AWSAnalyticsProvider implements AnalyticsProvider {
    private _config;
    private mobileAnalytics;
    private pinpointClient;
    private _sessionId;
    constructor(config?: any);
    /**
     * get the category of the plugin
     */
    getCategory(): string;
    /**
     * get provider name of the plugin
     */
    getProviderName(): string;
    /**
     * configure the plugin
     * @param {Object} config - configuration
     */
    configure(config: any): object;
    /**
     * record an event
     * @param {Object} params - the params of an event
     */
    record(params: any): Promise<boolean>;
    /**
     * @private
     * @param params
     */
    private _startSession(params);
    /**
     * @private
     * @param params
     */
    private _stopSession(params);
    /**
     * @private
     * @param params
     */
    private _recordCustomEvent(params);
    /**
     * @private
     * @param code
     * Check if the error is retryable
     */
    private _checkErrCode(code);
    /**
     * @private
     * @param config
     * Init the clients
     */
    private _init(config);
    /**
     * @private
     * Init the MobileAnalytics client
     */
    private _initMobileAnalytics();
    /**
     * @private
     * Init Pinpoint with configuration and update pinpoint client endpoint
     * @return - A promise resolves if endpoint updated successfully
     */
    private _initPinpoint();
    /**
     * EndPoint request
     * @return {Object} - The request of updating endpoint
     */
    private _endpointRequest();
    /**
     * @private
     * generate client context with endpoint Id and app Id provided
     */
    private _generateClientContext();
}
