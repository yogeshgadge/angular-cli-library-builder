# ngx-library-builder

Custom build for angular library projects to produce FESM, ES5, ES6, Typings, inlined templates, resources URL

## Prerequisites

--libDir must contain two files `tsconfig.es5.json` and `tsconfig.lib.json`

With the `tsconfig.es5.json` must have `"target": "es5"`.
And the  `tsconfig.lib.json` must have `"target": "es2015"`  

These must have angular compiler options `flatModuleId` and `flatModuleOutFile` as shown below.

```json
"angularCompilerOptions": {
    "annotateForClosureCompiler": true,
    "strictMetadataEmit": true,
    "skipTemplateCodegen": true,
    "flatModuleOutFile": "example-lib.js",
    "flatModuleId": "example-lib",
    "genDir": "../../out-tsc/lib-gen-dir/"
  }  
```


## Usage CLI

--rootDir - This is your project's root
--libDir - This is where the library code is present - 


```bash
ngx-library-builder --rootDir ./example --libDir ./example/src/lib
```

## Usage Programmatic (recommended)

```bash
npm install ngx-library-builder --save-dev
```

Your build-lib.js that you can run. 
```javascript
var ngxLibraryBuilder = require('ngx-library-builder/lib/builder');
var path = require('path');
var process = require('process');


ngxLibraryBuilder.build({rootFolder: path.resolve('.'), srcFolder : path.resolve('src', 'app')}).then(() => {
    console.log('Build Completed Successfully ');
    process.exit(0);
}).catch((error) => {
    console.log('Build Failed ');
    console.log(error);
    process.exit(1);
});

```




