---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
---

## What is kintone UI Component?

kintone UI Component is a UI Component library to help you develop UI for Kintone customization and plug-ins.  
The following kintone-like UI is easy to create so you can use it conveniently when you want to make a form part yourself.

### Example Desktop components

![desktop components](assets/desktop_components.png)

### Example of Mobile components

![mobile components](assets/mobile_components.png)

## Sphere: Create App

In this section, you will place the Button component in the header menu space on the default kintone list screen.  
First, create an app to install kintone UI Component.

1. Create a blank app. （[Create an app from scratch](https://jp.cybozu.help/k/ja/user/create_app/tutorial.html)）  
In particular, you do not need to set up a field.

## Introduction and Implementation method

The kintone UI Component provides a UMD and a CDN and a NPM package.  
Select one or more to import and implement it according to the environment such as the browser environment and the. JS environment.  
In this article, we will show you how to install and implement each one.

> For details on each component, see the Components category in the sidebar.  
> (The sequential components are also to be added. ）

### Using the UMD

1. kintone in the UI Component repository[Each version Release field](https://github.com/kintone-labs/kintone-ui-component/releases)Unzip the attached Archives folder (kintone-ui-component-{version} .tgz) and set the following files to Kintone `JavaScript / CSS でカスタマイズ`.

```text
./umd/kuc.min.js
```

2. Create a index.js file.

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

3. index.js kintone App Settings `JavaScript /CSS でカスタマイズ`And apply the customization. （[Customizing apps with JavaSript and CSS](https://jp.cybozu.help/k/ja/user/app_settings/js_customize.html)）

![button customize](assets/button_customize.png)

### Use CDN

1. The following CDN URL creates the kintone app settings `JavaScript /CSS でカスタマイズ`. （[Customizing apps with JavaSript and CSS](https://get.kintone.help/k/ja/user/app_settings/js_customize.html)）  
When you import a CDN, Kuc is added as a global object.

   - When you want to import the latest version of kintone UI Component
    ```text
    https://unpkg.com/kintone-ui-component/umd/kuc.min.js
    ```

   - If you want to import by version, specify the version number after the project name.
    ```text
    https://unpkg.com/kintone-ui-component@1.0.0/umd/kuc.min.js
    ```

2. The following is the same as the UMD.

> Unpkg is not a CDN service provided by Cybozu. It is recommended that you use this for verification.  
> In the production environment, you can use the kuc.min.js of the UMD to avoid the effects of UNPKG failures and problems.

### Using NPM Packages

1. Under the root of the project, execute the following command:

```sh
npm install kintone-ui-component
npm install webpack
```

> If necessary, install Babel-loader and Css-loader.

2. Import the components you want to use, and create index.js files in src/subordinate.

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
3. Create a My-customization folder and create the following Webpack.config.js file.

```js
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

4. Add a script to build Package.json in Webpack.

```json
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
出力結果：
./dist/my-customization.min.js
```

6. When you create a file bundled with the above, the kintone app settings `JavaScript /CSS でカスタマイズ`And apply the customization. （[Customizing apps with JavaSript and CSS](https://jp.cybozu.help/k/ja/user/app_settings/js_customize.html)）

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

> We confirm the operation in the latest version of each supported browser.  
> kintone UI Component v1 is a feature that is currently used in Kintone and does not work properly in IE11.

> On each component's reference page, you can preview the components in Overview.  
> Please be aware that IE11 does not work.
