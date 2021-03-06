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
/**
 * 
 * @export
 * @interface Server
 */
export interface Server {
    /**
     * 
     * @type {number}
     * @memberof Server
     */
    id?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Server
     */
    registration?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Server
     */
    readonly?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Server
     */
    deviceReadonly?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Server
     */
    limitCommands?: any;
    /**
     * 
     * @type {string}
     * @memberof Server
     */
    map?: any;
    /**
     * 
     * @type {string}
     * @memberof Server
     */
    bingKey?: any;
    /**
     * 
     * @type {string}
     * @memberof Server
     */
    mapUrl?: any;
    /**
     * 
     * @type {string}
     * @memberof Server
     */
    poiLayer?: any;
    /**
     * 
     * @type {number}
     * @memberof Server
     */
    latitude?: any;
    /**
     * 
     * @type {number}
     * @memberof Server
     */
    longitude?: any;
    /**
     * 
     * @type {number}
     * @memberof Server
     */
    zoom?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Server
     */
    twelveHourFormat?: any;
    /**
     * 
     * @type {string}
     * @memberof Server
     */
    version?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Server
     */
    forceSettings?: any;
    /**
     * 
     * @type {string}
     * @memberof Server
     */
    coordinateFormat?: any;
    /**
     * 
     * @type {any}
     * @memberof Server
     */
    attributes?: any;
}
