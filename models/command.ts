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
 * @interface Command
 */
export interface Command {
    /**
     * 
     * @type {number}
     * @memberof Command
     */
    id?: any;
    /**
     * 
     * @type {number}
     * @memberof Command
     */
    deviceId?: any;
    /**
     * 
     * @type {string}
     * @memberof Command
     */
    description?: any;
    /**
     * 
     * @type {string}
     * @memberof Command
     */
    type?: any;
    /**
     * 
     * @type {any}
     * @memberof Command
     */
    attributes?: any;
}
