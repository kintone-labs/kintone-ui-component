# ESModule Demo Project
This is the demo for running ui-component's ESModule.

## Getting Started
1. set up `kintone-ui-component` package
```bash
$ pnpm run build:esm
$ pnpm link
```
> Note: Please run the build and link at the repo root.

2. set up this demo project
```bash
$ pnpm install --frozen-lockfile
$ pnpm link kintone-ui-component
```
> Note: Run link after installing dependencies in `demos/esm-dev-app`.

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
$ pnpm run build:prod
# or
$ pnpm run build:dev
```
> Note: Run the build in the `demos/esm-dev-app` directory.

5. check demo

Please open ./dist/index.html on your browser and check the demo project.

6. remove package

Please remove the package after the demo.
```bash
$ pnpm remove kintone-ui-component
```

> Note: Run remove in the `demos/esm-dev-app` directory.
