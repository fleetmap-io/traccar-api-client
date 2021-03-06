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
import { Device } from '../models';
import { DeviceAccumulators } from '../models';
/**
 * DevicesApi - axios parameter creator
 * @export
 */
export const DevicesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Without any params, returns a list of the user's devices
         * @summary Fetch a list of Devices
         * @param {boolean} [all] Can only be used by admins or managers to fetch all entities
         * @param {number} [userId] Standard users can use this only with their own _userId_
         * @param {number} [id] To fetch one or more devices. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60;
         * @param {string} [uniqueId] To fetch one or more devices. Multiple params can be passed like &#x60;uniqueId&#x3D;333331&amp;uniqieId&#x3D;44442&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        devicesGet: async (all?: boolean, userId?: number, id?: number, uniqueId?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/devices`;
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

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (uniqueId !== undefined) {
                localVarQueryParameter['uniqueId'] = uniqueId;
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
         * @summary Update total distance and hours of the Device
         * @param {DeviceAccumulators} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        devicesIdAccumulatorsPut: async (body: DeviceAccumulators, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling devicesIdAccumulatorsPut.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling devicesIdAccumulatorsPut.');
            }
            const localVarPath = `/devices/{id}/accumulators`
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
         * @summary Delete a Device
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        devicesIdDelete: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling devicesIdDelete.');
            }
            const localVarPath = `/devices/{id}`
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
         * @summary Update a Device
         * @param {Device} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        devicesIdPut: async (body: Device, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling devicesIdPut.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling devicesIdPut.');
            }
            const localVarPath = `/devices/{id}`
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
         * @summary Create a Device
         * @param {Device} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        devicesPost: async (body: Device, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling devicesPost.');
            }
            const localVarPath = `/devices`;
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
    }
};

/**
 * DevicesApi - functional programming interface
 * @export
 */
export const DevicesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Without any params, returns a list of the user's devices
         * @summary Fetch a list of Devices
         * @param {boolean} [all] Can only be used by admins or managers to fetch all entities
         * @param {number} [userId] Standard users can use this only with their own _userId_
         * @param {number} [id] To fetch one or more devices. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60;
         * @param {string} [uniqueId] To fetch one or more devices. Multiple params can be passed like &#x60;uniqueId&#x3D;333331&amp;uniqieId&#x3D;44442&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async devicesGet(all?: boolean, userId?: number, id?: number, uniqueId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Device>>> {
            const localVarAxiosArgs = await DevicesApiAxiosParamCreator(configuration).devicesGet(all, userId, id, uniqueId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update total distance and hours of the Device
         * @param {DeviceAccumulators} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async devicesIdAccumulatorsPut(body: DeviceAccumulators, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DevicesApiAxiosParamCreator(configuration).devicesIdAccumulatorsPut(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Delete a Device
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async devicesIdDelete(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DevicesApiAxiosParamCreator(configuration).devicesIdDelete(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update a Device
         * @param {Device} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async devicesIdPut(body: Device, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Device>> {
            const localVarAxiosArgs = await DevicesApiAxiosParamCreator(configuration).devicesIdPut(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Create a Device
         * @param {Device} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async devicesPost(body: Device, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Device>> {
            const localVarAxiosArgs = await DevicesApiAxiosParamCreator(configuration).devicesPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DevicesApi - factory interface
 * @export
 */
export const DevicesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Without any params, returns a list of the user's devices
         * @summary Fetch a list of Devices
         * @param {boolean} [all] Can only be used by admins or managers to fetch all entities
         * @param {number} [userId] Standard users can use this only with their own _userId_
         * @param {number} [id] To fetch one or more devices. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60;
         * @param {string} [uniqueId] To fetch one or more devices. Multiple params can be passed like &#x60;uniqueId&#x3D;333331&amp;uniqieId&#x3D;44442&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        devicesGet(all?: boolean, userId?: number, id?: number, uniqueId?: string, options?: any): AxiosPromise<Array<Device>> {
            return DevicesApiFp(configuration).devicesGet(all, userId, id, uniqueId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update total distance and hours of the Device
         * @param {DeviceAccumulators} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        devicesIdAccumulatorsPut(body: DeviceAccumulators, id: number, options?: any): AxiosPromise<void> {
            return DevicesApiFp(configuration).devicesIdAccumulatorsPut(body, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a Device
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        devicesIdDelete(id: number, options?: any): AxiosPromise<void> {
            return DevicesApiFp(configuration).devicesIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a Device
         * @param {Device} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        devicesIdPut(body: Device, id: number, options?: any): AxiosPromise<Device> {
            return DevicesApiFp(configuration).devicesIdPut(body, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a Device
         * @param {Device} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        devicesPost(body: Device, options?: any): AxiosPromise<Device> {
            return DevicesApiFp(configuration).devicesPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DevicesApi - object-oriented interface
 * @export
 * @class DevicesApi
 * @extends {BaseAPI}
 */
export class DevicesApi extends BaseAPI {
    /**
     * Without any params, returns a list of the user's devices
     * @summary Fetch a list of Devices
     * @param {boolean} [all] Can only be used by admins or managers to fetch all entities
     * @param {number} [userId] Standard users can use this only with their own _userId_
     * @param {number} [id] To fetch one or more devices. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60;
     * @param {string} [uniqueId] To fetch one or more devices. Multiple params can be passed like &#x60;uniqueId&#x3D;333331&amp;uniqieId&#x3D;44442&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public devicesGet(all?: boolean, userId?: number, id?: number, uniqueId?: string, options?: any) {
        return DevicesApiFp(this.configuration).devicesGet(all, userId, id, uniqueId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update total distance and hours of the Device
     * @param {DeviceAccumulators} body 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public devicesIdAccumulatorsPut(body: DeviceAccumulators, id: number, options?: any) {
        return DevicesApiFp(this.configuration).devicesIdAccumulatorsPut(body, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Delete a Device
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public devicesIdDelete(id: number, options?: any) {
        return DevicesApiFp(this.configuration).devicesIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update a Device
     * @param {Device} body 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public devicesIdPut(body: Device, id: number, options?: any) {
        return DevicesApiFp(this.configuration).devicesIdPut(body, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Create a Device
     * @param {Device} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public devicesPost(body: Device, options?: any) {
        return DevicesApiFp(this.configuration).devicesPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
