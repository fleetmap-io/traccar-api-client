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
import { Attribute } from '../models';
/**
 * AttributesApi - axios parameter creator
 * @export
 */
export const AttributesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Without params, it returns a list of Attributes the user has access to
         * @summary Fetch a list of Attributes
         * @param {boolean} [all] Can only be used by admins or managers to fetch all entities
         * @param {number} [userId] Standard users can use this only with their own _userId_
         * @param {number} [deviceId] Standard users can use this only with _deviceId_s, they have access to
         * @param {number} [groupId] Standard users can use this only with _groupId_s, they have access to
         * @param {boolean} [refresh] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        attributesComputedGet: async (all?: boolean, userId?: number, deviceId?: number, groupId?: number, refresh?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/attributes/computed`;
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
         * @summary Delete an Attribute
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        attributesComputedIdDelete: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling attributesComputedIdDelete.');
            }
            const localVarPath = `/attributes/computed/{id}`
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
         * @summary Update an Attribute
         * @param {Attribute} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        attributesComputedIdPut: async (body: Attribute, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling attributesComputedIdPut.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling attributesComputedIdPut.');
            }
            const localVarPath = `/attributes/computed/{id}`
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
         * @summary Create an Attribute
         * @param {Attribute} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        attributesComputedPost: async (body: Attribute, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling attributesComputedPost.');
            }
            const localVarPath = `/attributes/computed`;
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
 * AttributesApi - functional programming interface
 * @export
 */
export const AttributesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Without params, it returns a list of Attributes the user has access to
         * @summary Fetch a list of Attributes
         * @param {boolean} [all] Can only be used by admins or managers to fetch all entities
         * @param {number} [userId] Standard users can use this only with their own _userId_
         * @param {number} [deviceId] Standard users can use this only with _deviceId_s, they have access to
         * @param {number} [groupId] Standard users can use this only with _groupId_s, they have access to
         * @param {boolean} [refresh] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async attributesComputedGet(all?: boolean, userId?: number, deviceId?: number, groupId?: number, refresh?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Attribute>>> {
            const localVarAxiosArgs = await AttributesApiAxiosParamCreator(configuration).attributesComputedGet(all, userId, deviceId, groupId, refresh, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Delete an Attribute
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async attributesComputedIdDelete(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await AttributesApiAxiosParamCreator(configuration).attributesComputedIdDelete(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update an Attribute
         * @param {Attribute} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async attributesComputedIdPut(body: Attribute, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Attribute>> {
            const localVarAxiosArgs = await AttributesApiAxiosParamCreator(configuration).attributesComputedIdPut(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Create an Attribute
         * @param {Attribute} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async attributesComputedPost(body: Attribute, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Attribute>> {
            const localVarAxiosArgs = await AttributesApiAxiosParamCreator(configuration).attributesComputedPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AttributesApi - factory interface
 * @export
 */
export const AttributesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Without params, it returns a list of Attributes the user has access to
         * @summary Fetch a list of Attributes
         * @param {boolean} [all] Can only be used by admins or managers to fetch all entities
         * @param {number} [userId] Standard users can use this only with their own _userId_
         * @param {number} [deviceId] Standard users can use this only with _deviceId_s, they have access to
         * @param {number} [groupId] Standard users can use this only with _groupId_s, they have access to
         * @param {boolean} [refresh] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        attributesComputedGet(all?: boolean, userId?: number, deviceId?: number, groupId?: number, refresh?: boolean, options?: any): AxiosPromise<Array<Attribute>> {
            return AttributesApiFp(configuration).attributesComputedGet(all, userId, deviceId, groupId, refresh, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete an Attribute
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        attributesComputedIdDelete(id: number, options?: any): AxiosPromise<void> {
            return AttributesApiFp(configuration).attributesComputedIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update an Attribute
         * @param {Attribute} body 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        attributesComputedIdPut(body: Attribute, id: number, options?: any): AxiosPromise<Attribute> {
            return AttributesApiFp(configuration).attributesComputedIdPut(body, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create an Attribute
         * @param {Attribute} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        attributesComputedPost(body: Attribute, options?: any): AxiosPromise<Attribute> {
            return AttributesApiFp(configuration).attributesComputedPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AttributesApi - object-oriented interface
 * @export
 * @class AttributesApi
 * @extends {BaseAPI}
 */
export class AttributesApi extends BaseAPI {
    /**
     * Without params, it returns a list of Attributes the user has access to
     * @summary Fetch a list of Attributes
     * @param {boolean} [all] Can only be used by admins or managers to fetch all entities
     * @param {number} [userId] Standard users can use this only with their own _userId_
     * @param {number} [deviceId] Standard users can use this only with _deviceId_s, they have access to
     * @param {number} [groupId] Standard users can use this only with _groupId_s, they have access to
     * @param {boolean} [refresh] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributesApi
     */
    public attributesComputedGet(all?: boolean, userId?: number, deviceId?: number, groupId?: number, refresh?: boolean, options?: any) {
        return AttributesApiFp(this.configuration).attributesComputedGet(all, userId, deviceId, groupId, refresh, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Delete an Attribute
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributesApi
     */
    public attributesComputedIdDelete(id: number, options?: any) {
        return AttributesApiFp(this.configuration).attributesComputedIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update an Attribute
     * @param {Attribute} body 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributesApi
     */
    public attributesComputedIdPut(body: Attribute, id: number, options?: any) {
        return AttributesApiFp(this.configuration).attributesComputedIdPut(body, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Create an Attribute
     * @param {Attribute} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributesApi
     */
    public attributesComputedPost(body: Attribute, options?: any) {
        return AttributesApiFp(this.configuration).attributesComputedPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
