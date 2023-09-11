---
id: usage-with-typescript
title: Usage with TypeScript
sidebar_label: Usage with TypeScript
---
## Overview

You can add static typing to JavaScript to improve developer productivity and code quality thanks to TypeScript.<br/>
In this guide, you can learn how to integrate Kintone UI Component (KUC) with TypeScript and webpack.

## Install and configuration

1. As initialization, create a new KUC project named `kuc-demo-ts` using `npm`.
```bash
mkdir kuc-demo-ts
cd kuc-demo-ts
npm init -y
```

2. Install `webpack` locally and install `webpack-cli` (the tool used to run webpack on the command line).

```bash
npm install --save-dev webpack webpack-cli
```

3. Install the TypeScript compiler and loader.
```bash
npm install --save-dev typescript ts-loader
```

4. Assuming you have successfully created a project with the following structure.
```bash
kuc-demo-ts
  |- dist
    |- index.html
  |- /src
    |- index.ts
  |- package.json
  |- package-lock.json
  |- webpack.config.js
  |- tsconfig.json
```

You can refer to the files and their contents at the sample project using TypeScript on the [KUC repository](https://github.com/kintone-labs/kintone-ui-component/tree/master/demos/typescript-app).

## Import KUC
1. Install `kintone-ui-component`.
```bash
npm install kintone-ui-component
```

2. Modify `src/index.ts`.
```js
import {
  Dropdown,
  DropdownChangeEventDetail,
  DropdownItem,
  DropdownProps,
} from 'kintone-ui-component';

const root = document.getElementById('root');
const items: DropdownItem[] = [
  {
    label: '-----',
    value: '-----'
  },
  {
    label: 'Orange',
    value: 'orange'
  },
  {
    label: 'Banana',
    value: 'banana'
  }
];
const dropdownProps: DropdownProps = {
  items: items,
  value: '-----',
  label: 'Fruit',
  error: 'Error occurred!'
};
const dropdown = new Dropdown(dropdownProps);
dropdown.addEventListener('change', ((event: CustomEvent) => {
  const detail: DropdownChangeEventDetail = event.detail;
  console.log(detail);
}) as EventListener);
root.appendChild(dropdown);
```
3. Now run the following command to build.
```bash
npm run build
```

Open `index.html` in the `dist` directory in your browser and, if everything went right, you can see a Dropdown component displayed on the page.
![dropdown image](/img/kuc-dropdown.png)
KUC is written in TypeScript with complete definitions, so please try it out and enjoy the property suggestion and typing check.

![dropdown param image](/img/kuc-dropdown-param.png)

![dropdown props image](/img/kuc-dropdown-props.png)

You can choose any component of KUC to develop your application.
Now you can use some type of definition in your project:
- Items property (ex: DropdownItem)
- Component property (ex: DropdownProps, DatePickerProps)
- CustomEvent.detail property (ex: DropdownChangeEventDetail)
