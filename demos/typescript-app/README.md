# ESModule TypeScript Demo Project
This is the demo for running ui-component's ESModule using TypeScript.

## Getting Started
1. set up `kintone-ui-component` package
```bash
$ pnpm run build:esm
$ pnpm link
```
> Note: Please run the build and link at the repo root.

2. set up this typescript-demo project
```bash
$ pnpm install --frozen-lockfile
$ pnpm link kintone-ui-component  
```
> Note: Run link after installing dependencies in `demos/typescript-app`.

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
$ pnpm run build:dev
```
> Note: Run the build in the `demos/typescript-app` directory.

5. check demo

Please open ./dist/index.html on your browser and check the demo project.

6. remove package

Please remove the package after the demo.
```bash
$ pnpm remove kintone-ui-component
```

> Note: Run remove in the `demos/typescript-app` directory.
