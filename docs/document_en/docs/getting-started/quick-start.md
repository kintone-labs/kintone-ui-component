---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
---

## What is kintone UI Component?

kintone UI Component is a library that supports Kintone developers when developing UI for Kintone customization and plug-ins.  
It allows the developer to build forms with Kintone's styling with ease.

### Example for Desktop components

![desktop components](assets/desktop_components.png)

### Example for Mobile components

![mobile components](assets/mobile_components.png)

## Preparation: Create App

In this section, you will place a Button component inside the header menu space in the list view screen of a Kintone app.  

First, follow the below steps to create an app to install kintone UI Component.

1. Create a blank app. （[Create an app from scratch](https://jp.cybozu.help/k/ja/user/create_app/tutorial.html)）  
You do not need to set up any fields in this app.

## Installation

Kintone UI Component supports installation via a UMD, a CDN, or NPM package.  
You can choose to import or implement the library according to the environment such as the browser environment or Node.js environment.  
In this article, we will show you how to install and implement using each approach.

> See the Components section in the sidebar for more details on each component.
> (Additional components will be added in order.）

### Using the UMD

1. Download the file located inside Kintone UI Component repository[Each version Release field](https://github.com/kintone-labs/kintone-ui-component/releases). Unzip the attached archives folder (kintone-ui-component-{version} .tgz). Upload the following file to the  `JavaScript and CSS Customization` inside Kintone's app setting.

```text
./umd/kuc.min.js
```

2. Create a `index.js` file.

```js
(() => {
  'use strict';

  kintone.events.on('app.record.index.show', event => {
    const header = kintone.app.getHeaderMenuSpaceElement();

    const button = new Kuc.Button({
      text: 'Submit',
      type: 'submit'
    });
    button.addEventListener('click', event => {
      console.log(event);
    });

    header.appendChild(button);
    return event;
  });
})();
```

3. To apply the customization, upload `index.js` file to the `JavaScript and CSS Customization` inside the App Settings of a Kintone app. （[Customizing apps with JavaSript and CSS](https://jp.cybozu.help/k/ja/user/app_settings/js_customize.html)）

![button customize](assets/button_customize.png)

### Use CDN

1. Add the following CDN URL into the `JavaScript and CSS Customization` of a deployed Kintone app. （[Customizing apps with JavaSript and CSS](https://get.kintone.help/k/ja/user/app_settings/js_customize.html)）  
Once the CDN is being imported to the app, you will have access to the global object of `Kuc`.

   - For the latest version of kintone UI Component:
    ```text
    https://unpkg.com/kintone-ui-component/umd/kuc.min.js
    ```

   - If you want to import a particular version, specify the version number after the project name.
    ```text
    https://unpkg.com/kintone-ui-component@1.0.0/umd/kuc.min.js
    ```

2. The following is the same as the UMD.

> unpkg is not a CDN service provided by Cybozu. It is recommended that you use this for verification.  
> In the production environment, you can use the `kuc.min.js` of the UMD to avoid any failures and problems related to unpkg.

### Using NPM Packages

1. Create a folder name `my-customization`, and move your root into the folder, then execute the following command:

```sh
mkdir my-customization && cd my-customization
npm install kintone-ui-component
npm install webpack
```

> If necessary, install `babel-loader` and `css-loader`.

2. Import the components you want to use, and create a `index.js` files under `src` folder.

```js
import { Button } from 'kintone-ui-component/lib/button';

(() => {
  'use strict';

  kintone.events.on('app.record.index.show', event => {
    const header = kintone.app.getHeaderMenuSpaceElement();

    const button = new Button({
      text: 'Submit',
      type: 'submit'
    });
    button.addEventListener('click', event => {
      console.log(event);
    });

    header.appendChild(button);
    return event;
  });
})();
```
3. Add the following `webpack.config.js` file into the root:

```js
// webpack.config.js
const path = require('path');
module.exports = (env = {}) => {
  return {
    entry: {
      "my-customization": './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].min.js',
    },
    watch: env.watch
  }
}
```

4. Add webpack build script into `package.json`.

```json
// package.json
"scripts": {
  "build:webpack": "cross-env NODE_ENV=production webpack",
  ...
}
```

5. Execute the following command to generate a file for customization:

```text
npm run build:webpack
```

```text
Output Result：
./dist/my-customization.min.js
```

6. Upload the bundled file created in the previous step to the `JavaScript and CSS Customization` option inside Kintone app settings. （[Customizing apps with JavaSript and CSS](https://jp.cybozu.help/k/ja/user/app_settings/js_customize.html)）

![button customize](assets/button_customize.png)

## Browser enabled status

<table>
  <tr>
    <th>Chrome</th>
    <th>Safari</th>
    <th>Firefox</th>
    <th>Edge</th>
    <th>IE11</th>
  </tr>
  <tr>
    <td>○</td>
    <td>○</td>
    <td>○</td>
    <td>○</td>
    <td>△</td>
  </tr>
</table>

> The components have been tested in the latest version of each supported browser.  
> kintone UI Component v1 is a feature that is currently used in Kintone but does not support by IE11.

> You can preview the components in the Overview section in each component's reference page.
> Please be noted that it is not supported in IE11.
