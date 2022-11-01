# ESModule TypeScript Demo Project
This is the demo for running ui-component's ESModule using TypeScript.

## Getting Started
1. set up `kintone-ui-component` package
```bash
$ npm run build:esm
$ npm link
```
> Note: Please run `npm run build:esm` and `npm link` at the root directory.

2. set up this typescript-demo project
```bash
$ npm ci
$ npm link kintone-ui-component
```
> Note: Please run `npm link` after running `npm install` at the demos/typescript-app directory.

3. write code

Please write code at ./src/index.ts.

**Example code**
```javascript
import { Dropdown, DropdownProps, DropdownItem, DropdownChangeEventDetail } from 'kintone-ui-component';

const root = document.getElementById('root');
const items: DropdownItem[] = [
  {
    label: '-----',
    value: '-----',
  },
  {
    label: 'Orange',
    value: 'orange',
  },
  {
    label: 'Banana',
    value: 'banana',
  },
];
const dropdownProps: DropdownProps = {
  items: items,
  value: '-----',
  label: 'Fruit',
  error: 'Error occurred!',
};

const dropdown = new Dropdown(dropdownProps);
dropdown.addEventListener('change', ((event: CustomEvent) => {
  const detail: DropdownChangeEventDetail = event.detail;
  console.log(detail);
}) as EventListener);
root.appendChild(dropdown);

```

4. build

Please run the build command and build ./dist/main.js.
```bash
$ npm run build:dev
```
> Note: Please run `npm run build:dev` at the demos/typescript-app directory.

5. check demo

Please open ./dist/index.html on your browser and check the demo project.

6. unlink package

Please unlink the package after the demo.
```bash
$ npm unlink kintone-ui-component
```
> Note: Please run `npm unlink` at the demos/typescript-app directory.