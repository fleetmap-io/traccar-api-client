## @traccar-api

Generated with swagger and fixed some issues with multi-value parameters.

TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Installing

```
npm install traccar-api
```
### Example code for devices
```
const {DevicesApi} = require('traccar-api')
const devicesApi = new DevicesApi({
            basePath: 'https://your_traccar_server/api',
            baseOptions: {withCredentials: true}
        })

const devices = devicesApi.devicesGet().then(r => r.data)
```