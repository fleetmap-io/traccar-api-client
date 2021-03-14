/* tslint:disable */
/* eslint-disable */
/**
 * Traccar
 * Traccar GPS tracking server API documentation. To use the API you need to have a server instance. For testing purposes you can use one of free [demo servers](https://www.traccar.org/demo-server/). For production use you can install your own server or get a [subscription service](https://www.traccar.org/product/tracking-server/).
 *
 * OpenAPI spec version: 4.11
 * Contact: support@traccar.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { Command } from '../models';
import { CommandType } from '../models';
/**
 * CommandsApi - axios parameter creator
 * @export
 */
export const CommandsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Without params, it returns a list of Saved Commands the user has access to
         * @summary Fetch a list of Saved Commands
         * @param {boolean} [all] Can only be used by admins or managers to fetch all entities
         * @param {number} [userId] Standard users can use this only with their own _userId_
         * @param {number} [deviceId] Standard users can use this only with _deviceId_s, they have access to
         * @param {number} [groupId] Standard users can use this only with _groupId_s, they have access to
         * @param {boolean} [refresh] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commandsGet: async (all?: boolean, userId?: number, deviceId?: number, groupId?: number, refresh?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/commands`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required

            if (all !== undefined) {
                localVarQueryParameter['all'] = all;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (deviceId !== undefined) {
                localVarQueryParameter['deviceId'] = deviceId;
            }

            if (groupId !== undefined) {
                localVarQueryParameter['groupId'] = groupId;
            }

            if (refresh !== undefined) {
                localVarQueryParameter['refresh'] = refresh;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete a Saved Command
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commandsIdDelete: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling commandsIdDelete.');
            }
            const localVarPath = `/commands/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a Saved Command
         * @param {Command} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commandsIdPut: async (body: Command, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling commandsIdPut.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling commandsIdPut.');
            }
            const localVarPath = `/commands/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a Saved Command
         * @param {Command} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commandsPost: async (body: Command, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling commandsPost.');
            }
            const localVarPath = `/commands`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support
         * @summary Fetch a list of Saved Commands supported by Device at the moment
         * @param {number} [deviceId] Standard users can use this only with _deviceId_s, they have access to
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commandsSendGet: async (deviceId?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/commands/send`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required

            if (deviceId !== undefined) {
                localVarQueryParameter['deviceId'] = deviceId;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Dispatch a new command or Saved Command if _body.id_ set
         * @summary Dispatch commands to device
         * @param {Command} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commandsSendPost: async (body: Command, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling commandsSendPost.');
            }
            const localVarPath = `/commands/send`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Fetch a list of available Commands for the Device or all possible Commands if Device ommited
         * @param {number} [deviceId] Internal device identifier. Only works if device has already reported some locations
         * @param {string} [protocol] Protocol name. Can be used instead of device id
         * @param {boolean} [textChannel] When &#x60;true&#x60; return SMS commands. If not specified or &#x60;false&#x60; return data commands
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commandsTypesGet: async (deviceId?: number, protocol?: string, textChannel?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/commands/types`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required

            if (deviceId !== undefined) {
                localVarQueryParameter['deviceId'] = deviceId;
            }

            if (protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }

            if (textChannel !== undefined) {
                localVarQueryParameter['textChannel'] = textChannel;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CommandsApi - functional programming interface
 * @export
 */
export const CommandsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Without params, it returns a list of Saved Commands the user has access to
         * @summary Fetch a list of Saved Commands
         * @param {boolean} [all] Can only be used by admins or managers to fetch all entities
         * @param {number} [userId] Standard users can use this only with their own _userId_
         * @param {number} [deviceId] Standard users can use this only with _deviceId_s, they have access to
         * @param {number} [groupId] Standard users can use this only with _groupId_s, they have access to
         * @param {boolean} [refresh] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commandsGet(all?: boolean, userId?: number, deviceId?: number, groupId?: number, refresh?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Command>>> {
            const localVarAxiosArgs = await CommandsApiAxiosParamCreator(configuration).commandsGet(all, userId, deviceId, groupId, refresh, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Delete a Saved Command
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commandsIdDelete(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await CommandsApiAxiosParamCreator(configuration).commandsIdDelete(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update a Saved Command
         * @param {Command} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commandsIdPut(body: Command, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Command>> {
            const localVarAxiosArgs = await CommandsApiAxiosParamCreator(configuration).commandsIdPut(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Create a Saved Command
         * @param {Command} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commandsPost(body: Command, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Command>> {
            const localVarAxiosArgs = await CommandsApiAxiosParamCreator(configuration).commandsPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support
         * @summary Fetch a list of Saved Commands supported by Device at the moment
         * @param {number} [deviceId] Standard users can use this only with _deviceId_s, they have access to
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commandsSendGet(deviceId?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Command>>> {
            const localVarAxiosArgs = await CommandsApiAxiosParamCreator(configuration).commandsSendGet(deviceId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Dispatch a new command or Saved Command if _body.id_ set
         * @summary Dispatch commands to device
         * @param {Command} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commandsSendPost(body: Command, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Command>> {
            const localVarAxiosArgs = await CommandsApiAxiosParamCreator(configuration).commandsSendPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Fetch a list of available Commands for the Device or all possible Commands if Device ommited
         * @param {number} [deviceId] Internal device identifier. Only works if device has already reported some locations
         * @param {string} [protocol] Protocol name. Can be used instead of device id
         * @param {boolean} [textChannel] When &#x60;true&#x60; return SMS commands. If not specified or &#x60;false&#x60; return data commands
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commandsTypesGet(deviceId?: number, protocol?: string, textChannel?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CommandType>>> {
            const localVarAxiosArgs = await CommandsApiAxiosParamCreator(configuration).commandsTypesGet(deviceId, protocol, textChannel, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CommandsApi - factory interface
 * @export
 */
export const CommandsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Without params, it returns a list of Saved Commands the user has access to
         * @summary Fetch a list of Saved Commands
         * @param {boolean} [all] Can only be used by admins or managers to fetch all entities
         * @param {number} [userId] Standard users can use this only with their own _userId_
         * @param {number} [deviceId] Standard users can use this only with _deviceId_s, they have access to
         * @param {number} [groupId] Standard users can use this only with _groupId_s, they have access to
         * @param {boolean} [refresh] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commandsGet(all?: boolean, userId?: number, deviceId?: number, groupId?: number, refresh?: boolean, options?: any): AxiosPromise<Array<Command>> {
            return CommandsApiFp(configuration).commandsGet(all, userId, deviceId, groupId, refresh, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a Saved Command
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commandsIdDelete(id: number, options?: any): AxiosPromise<void> {
            return CommandsApiFp(configuration).commandsIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a Saved Command
         * @param {Command} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commandsIdPut(body: Command, id: number, options?: any): AxiosPromise<Command> {
            return CommandsApiFp(configuration).commandsIdPut(body, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a Saved Command
         * @param {Command} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commandsPost(body: Command, options?: any): AxiosPromise<Command> {
            return CommandsApiFp(configuration).commandsPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support
         * @summary Fetch a list of Saved Commands supported by Device at the moment
         * @param {number} [deviceId] Standard users can use this only with _deviceId_s, they have access to
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commandsSendGet(deviceId?: number, options?: any): AxiosPromise<Array<Command>> {
            return CommandsApiFp(configuration).commandsSendGet(deviceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Dispatch a new command or Saved Command if _body.id_ set
         * @summary Dispatch commands to device
         * @param {Command} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commandsSendPost(body: Command, options?: any): AxiosPromise<Command> {
            return CommandsApiFp(configuration).commandsSendPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Fetch a list of available Commands for the Device or all possible Commands if Device ommited
         * @param {number} [deviceId] Internal device identifier. Only works if device has already reported some locations
         * @param {string} [protocol] Protocol name. Can be used instead of device id
         * @param {boolean} [textChannel] When &#x60;true&#x60; return SMS commands. If not specified or &#x60;false&#x60; return data commands
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commandsTypesGet(deviceId?: number, protocol?: string, textChannel?: boolean, options?: any): AxiosPromise<Array<CommandType>> {
            return CommandsApiFp(configuration).commandsTypesGet(deviceId, protocol, textChannel, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CommandsApi - object-oriented interface
 * @export
 * @class CommandsApi
 * @extends {BaseAPI}
 */
export class CommandsApi extends BaseAPI {
    /**
     * Without params, it returns a list of Saved Commands the user has access to
     * @summary Fetch a list of Saved Commands
     * @param {boolean} [all] Can only be used by admins or managers to fetch all entities
     * @param {number} [userId] Standard users can use this only with their own _userId_
     * @param {number} [deviceId] Standard users can use this only with _deviceId_s, they have access to
     * @param {number} [groupId] Standard users can use this only with _groupId_s, they have access to
     * @param {boolean} [refresh] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApi
     */
    public commandsGet(all?: boolean, userId?: number, deviceId?: number, groupId?: number, refresh?: boolean, options?: any) {
        return CommandsApiFp(this.configuration).commandsGet(all, userId, deviceId, groupId, refresh, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Delete a Saved Command
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApi
     */
    public commandsIdDelete(id: number, options?: any) {
        return CommandsApiFp(this.configuration).commandsIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update a Saved Command
     * @param {Command} body 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApi
     */
    public commandsIdPut(body: Command, id: number, options?: any) {
        return CommandsApiFp(this.configuration).commandsIdPut(body, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Create a Saved Command
     * @param {Command} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApi
     */
    public commandsPost(body: Command, options?: any) {
        return CommandsApiFp(this.configuration).commandsPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support
     * @summary Fetch a list of Saved Commands supported by Device at the moment
     * @param {number} [deviceId] Standard users can use this only with _deviceId_s, they have access to
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApi
     */
    public commandsSendGet(deviceId?: number, options?: any) {
        return CommandsApiFp(this.configuration).commandsSendGet(deviceId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Dispatch a new command or Saved Command if _body.id_ set
     * @summary Dispatch commands to device
     * @param {Command} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApi
     */
    public commandsSendPost(body: Command, options?: any) {
        return CommandsApiFp(this.configuration).commandsSendPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Fetch a list of available Commands for the Device or all possible Commands if Device ommited
     * @param {number} [deviceId] Internal device identifier. Only works if device has already reported some locations
     * @param {string} [protocol] Protocol name. Can be used instead of device id
     * @param {boolean} [textChannel] When &#x60;true&#x60; return SMS commands. If not specified or &#x60;false&#x60; return data commands
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApi
     */
    public commandsTypesGet(deviceId?: number, protocol?: string, textChannel?: boolean, options?: any) {
        return CommandsApiFp(this.configuration).commandsTypesGet(deviceId, protocol, textChannel, options).then((request) => request(this.axios, this.basePath));
    }
}