---
id: how-to-use-kuc-types-in-typescript
title: How to use KUC types in TypeScript
sidebar_label: How to use KUC types in TypeScript
---
## Overview

You can add static typing to JavaScript to improve developer productivity and code quality thanks to TypeScript.
<br>
In this guide, you can learn how to integrate Kintone UI Component (KUC) with TypeScript and Webpack.

## Install and configuration

As initialization, create a new KUC project named ``kuc-demo-ts`` using ``npm``
```
mkdir kuc-demo-ts
cd kuc-demo-ts
npm init -y
```

Install ``webpack`` locally and install ``webpack-cli`` (the tool used to run webpack on the command line):

```
npm install --save-dev webpack webpack-cli
```

Install the TypeScript compiler and loader:
```
npm install --save-dev typescript ts-loader
```

Assuming you have successfully created a project with the following structure:
```
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
Install ``kintone-ui-component``
```
npm install kintone-ui-component
```

Modify ``src/index.ts``
```
import { Dropdown, DropdownProps, DropdownItem } from 'kintone-ui-component';

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
root.appendChild(dropdown);
```
Now run the following command to build:
```
npm run build
```

Open ``index.html`` in the ``dist`` directory in your browser and, if everything went right, you can see a Dropdown component displayed on the page.
![dropdown image](assets/kuc-dropdown.png)
KUC is written in TypeScript with complete definitions, so please try it out and enjoy the property suggestion and typing check.

![dropdown param image](assets/kuc-dropdown-param.png)

![dropdown props image](assets/kuc-dropdown-props.png)

You can choose any component of KUC to develop your application.
Now you can use some type of definition in your project:
1. Items property (ex: DropdownItem)
2. Component property (ex: DropdownProps, DatePickerProps)
