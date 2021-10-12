# ESModule Demo Project
This is the demo for running ui-component's ESModule.

## Getting Started
1. set up `kintone-ui-component` package
```bash
$ npm run build:esm
$ npm link
```
> Note: Please run `npm run build:esm` and `npm link` at the root directory.

2. set up this demo project
```bash
$ npm ci
$ npm link kintone-ui-component
```
> Note: Please run `npm link` after running `npm install` at the demos/esm-dev-app directory.

3. write code

Please write code at ./src/index.js.

**Example code**
```javascript
import { Text } from "kintone-ui-component";

const text = new Text();
```

4. build

Please run the build command and build ./dist/main.js.
```bash
$ npm run build:prod
or
$ npm run build:dev
```
> Note: Please run `npm run build` at the demos/esm-dev-app directory.

5. check demo

Please open ./dist/index.html on your browser and check the demo project.

6. unlink package

Please unlink the package after the demo.
```bash
$ npm unlink kintone-ui-component
```
> Note: Please run `npm unlink` at the demos/esm-dev-app directory.