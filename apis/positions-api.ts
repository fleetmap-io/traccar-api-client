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
import { Position } from '../models';
/**
 * PositionsApi - axios parameter creator
 * @export
 */
export const PositionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.
         * @summary Fetches a list of Positions
         * @param {number} [deviceId] _deviceId_ is optional, but requires the _from_ and _to_ parameters when used
         * @param {Date} [from] in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
         * @param {Date} [to] in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
         * @param {number} [id] To fetch one or more positions. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        positionsGet: async (deviceId?: number, from?: Date, to?: Date, id?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/positions`;
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

            if (from !== undefined) {
                localVarQueryParameter['from'] = (from as any instanceof Date) ?
                    (from as any).toISOString() :
                    from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = (to as any instanceof Date) ?
                    (to as any).toISOString() :
                    to;
            }

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
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
 * PositionsApi - functional programming interface
 * @export
 */
export const PositionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.
         * @summary Fetches a list of Positions
         * @param {number} [deviceId] _deviceId_ is optional, but requires the _from_ and _to_ parameters when used
         * @param {Date} [from] in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
         * @param {Date} [to] in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
         * @param {number} [id] To fetch one or more positions. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async positionsGet(deviceId?: number, from?: Date, to?: Date, id?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Position>>> {
            const localVarAxiosArgs = await PositionsApiAxiosParamCreator(configuration).positionsGet(deviceId, from, to, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PositionsApi - factory interface
 * @export
 */
export const PositionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.
         * @summary Fetches a list of Positions
         * @param {number} [deviceId] _deviceId_ is optional, but requires the _from_ and _to_ parameters when used
         * @param {Date} [from] in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
         * @param {Date} [to] in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
         * @param {number} [id] To fetch one or more positions. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        positionsGet(deviceId?: number, from?: Date, to?: Date, id?: number, options?: any): AxiosPromise<Array<Position>> {
            return PositionsApiFp(configuration).positionsGet(deviceId, from, to, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PositionsApi - object-oriented interface
 * @export
 * @class PositionsApi
 * @extends {BaseAPI}
 */
export class PositionsApi extends BaseAPI {
    /**
     * We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.
     * @summary Fetches a list of Positions
     * @param {number} [deviceId] _deviceId_ is optional, but requires the _from_ and _to_ parameters when used
     * @param {Date} [from] in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     * @param {Date} [to] in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     * @param {number} [id] To fetch one or more positions. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PositionsApi
     */
    public positionsGet(deviceId?: number, from?: Date, to?: Date, id?: number, options?: any) {
        return PositionsApiFp(this.configuration).positionsGet(deviceId, from, to, id, options).then((request) => request(this.axios, this.basePath));
    }
}
