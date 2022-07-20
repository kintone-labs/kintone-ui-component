---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
---

## What is Kintone UI Component?

Kintone UI Component is a library that enables Kintone developers to build forms with Kintone's styling with ease.

### Example for Desktop components

![desktop components](assets/desktop_components.png)

### Example for Mobile components

![mobile components](assets/mobile_components.png)

## Preparation: Create App

In this tutorial, you will place a Button component inside the header menu space on the Record List page of a Kintone app.

First, follow the below steps to create an app to install Kintone UI Component.

1. Create a blank app. ([Creating an App from Scratch](https://get.kintone.help/k/en/user/create_app/tutorial.html))<br>
You do not need to set up any fields in this app.

## Installation

Kintone UI Component supports installation via a UMD, a CDN, or a npm package.<br>
You can choose to import or implement the library according to the environment such as the browser environment or Node.js environment.<br>
In this article, we will show you how to install and implement using each approach.

> See the Components section in the sidebar for more details on each component.<br>
> (Additional components will be added in order.)

### Use the UMD
> We recommend that you should upgrade Kintone UI Component to the latest version for your projects. <br>
> From v1.4.0, please use `Kucs["1.x.x"]` instead of `Kuc` and specify your expected version (ex. `Kucs["1.4.0"]`).<br>
>The rendered components' tags and class names will include the version number.<br>
> When using a version before v1.4.0, please use `Kuc` as a global variable but **note that it may be conflicting when adding two or more `kuc.min.js` files** on Kintone app plug-in or customization.<br>
> Please read this [Version conflicts issue and solution](../guides/version-conflicts-issue-solution) article for more information!

1. Download the file located inside Kintone UI Component repository's [each version Release field](https://github.com/kintone-labs/kintone-ui-component/releases). Unzip the attached archives folder (kintone-ui-component-{version} .tgz). Upload the following file to the `JavaScript and CSS Customization` inside Kintone's app setting.

```text
./umd/kuc.min.js
```

2. Create a `index.js` file.

```js
const Kuc = Kucs["1.x.x"];

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
```

3. To apply the customization, upload `index.js` file to the `JavaScript and CSS Customization` inside the Kintone app settings. ([Customizing an App with JavaScript and CSS](https://get.kintone.help/k/en/user/app_settings/js_customize.html))

![button customize](assets/button_customize.png)

### Use the CDN
> Following the [Version conflicts issue and solution](../guides/version-conflicts-issue-solution#using-cdn) guide, please use `Kucs['1.x.x']` instead of `Kuc`.<br>
> See the sample code at [Use UMD](#use-the-umd) section.

1. Add the following CDN URL into the `JavaScript and CSS Customization` of a deployed Kintone app. ([Customizing an App with JavaScript and CSS](https://get.kintone.help/k/en/user/app_settings/js_customize.html))<br>
Once the CDN is being imported to the app, you will have access to the global object of `Kuc`.

   - For the latest version of Kintone UI Component:
    ```text
    https://unpkg.com/kintone-ui-component/umd/kuc.min.js
    ```

   - If you want to import a particular version, specify the version number after the project name.
    ```text
    https://unpkg.com/kintone-ui-component@1.0.0/umd/kuc.min.js
    ```

2. The following is the same as the UMD.

> unpkg is not a CDN service provided by Cybozu. It is recommended that you use this for verification.<br>
> In the production environment, you can use the `kuc.min.js` of the UMD to avoid any failures and problems related to unpkg.

### Use the npm package

> From v1.4.0, rendered components' tags and class names will include the version number.<br>
> Please read this [Version conflicts issue and solution](../guides/version-conflicts-issue-solution) article for more information! <br>

1. Create a folder name `customization`, and move your root into the folder, then execute the following command:

```sh
mkdir customization && cd customization
npm init -y
npm install kintone-ui-component
npm install webpack webpack-cli --save-dev
```

> If necessary, install `babel-loader` and `css-loader`.

2. Import the components you want to use, and create a `index.js` files under `src` folder.

```js
import { Button } from 'kintone-ui-component/lib/button';

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

```
3. Add the following `webpack.config.js` file into the root:

```js
const path = require('path');
module.exports = (env = {}) => {
  return {
    entry: {
      "customization": './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].min.js',
    }
  }
}
```

4. Add webpack build script into `package.json`.

```json
"scripts": {
  "build:webpack": "webpack --mode production",
  ...
}
```

5. Execute the following command to generate a file for customization:

```text
npm run build:webpack
```

```text
Output Result：
./dist/customization.min.js
```

6. Upload the bundled file created in the previous step to the `JavaScript and CSS Customization` option inside Kintone app settings. ([Customizing an App with JavaScript and CSS](https://get.kintone.help/k/en/user/app_settings/js_customize.html))

![button customize](assets/button_customize.png)

## Browser support status

<table>
  <tr>
    <th>Chrome</th>
    <th>Safari</th>
    <th>Firefox</th>
    <th>Edge</th>
  </tr>
  <tr>
    <td>○</td>
    <td>○</td>
    <td>○</td>
    <td>○</td>
  </tr>
</table>

> The components have been tested in the latest version of each supported browser.

> You can preview the components in the Overview section in each component's reference page.