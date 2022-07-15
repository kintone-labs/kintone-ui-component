---
id: version-1.4.0-version-conflicts-issue-solution
title: Version conflicts issue and solution
sidebar_label: Version conflicts issue and solution
original_id: version-conflicts-issue-solution
---
## Overview

Version conflicts have been a problem for Kintone UI Component (KUC) users before the release of v1.4.0. This guide will help users understand the version conflicts issue and how to adapt and upgrade the Kintone UI Component package to the latest version starting from v1.4.0.

## Problems of versioning

It is common when an app uses two or more versions of the same library.
The problem of version conflicts occurs when those different versions try to define the same custom HTML tag.<br>

When a library registers a custom HTML tag, and later another library tries to define the same tag again, the app will not work correctly. It is because `CustomElementRegistry` is a global window object.<br>

In summary, if a custom HTML tag is already registered, defining it again will cause a problem.

![Different versions of the same library try to define the same custom HTML tag](assets/version-conflict-diagram.jpeg)

In our case, the app will not work as expected when users import more than one `kuc.min.js` file of the same version, and the error will also occur when users import multiple `kuc.min.js` files of different versions in an app.

## Solution

Because we cannot register the same custom HTML tag more than once, from v1.4.0, custom HTML tags will include a version number at the end. This change also applies to class names to avoid conflicting CSS styles. 

![Custom HTML tag example](assets/version-conflict-html-tag.png)
<center>Tag and class names will include the version number at the end</center>

![CSS example](assets/version-conflict-css.png)
<center>Aside from the changes in tag and class names, the CSS of the component also changes to include the version number</center>

In addition, we also check to see whether a custom HTML tag has been registered or not before defining it.

## Upgrading to the latest version

### Using UMD

We recommend that you should upgrade Kintone UI Component to the latest version for your projects.<br>

From v1.4.0, please use `Kucs["1.x.x"]` instead of `Kuc` and specify your expected version (ex. `Kucs["1.4.0"]`).<br>

> You may still use `Kuc` as a global variable but **note that it may be conflicting when adding two or more `kuc.min.js` files** on Kintone customization or plug-in. In this case, the `Kuc` object refers to the last loaded `kuc.min.js` file.<br>
>If you only have one `kuc.min.js` file in your system, or you are okay with using the `kuc.min.js` file loaded last, you can remove the "`const Kuc = Kucs['1.x.x']`" line.
```javascript
const Kuc = Kucs['1.x.x'];

const button = new Kuc.Button({text: 'Button', type: 'submit'});
document.body.appendChild(button);
```

### Using CDN

Users using Kintone UI Component through the CDN using the below link will always have the latest version.<br>
Therefore, after the release of v1.4.0, some of your apps and plug-ins might not work correctly. <br>
```sh
https://unpkg.com/kintone-ui-component/umd/kuc.min.js
```
If you want to use a particular `Kuc` version, please specify the version number after the project name.
```sh
https://unpkg.com/kintone-ui-component@1.0.0/umd/kuc.min.js
```
As explained in the [Using UMD](#using-umd) section, you may still use `Kuc` as a global variable but be aware of the possible version conflicts errors that may occur.

### Using npm

Users using the Kintone UI Component package through npm do not need to take any action but note the changes in how the components' tags and class names render. See the [Solution](#solution) section.

## Caution required

### For users using versions before v1.4.0

Below are the common version conflicts errors that might occur:
#### 1. When importing multiple KUC packages and files (both ESM and UMD) of the same version or different versions:

In the example below, we load a v1.2.0 `kuc.min.js` file in the Kintone system and a v1.3.0 `kuc.min.js` file in our app. An `Illegal constructor` error will show when we try to create a new KUC Button component.

![Illegal constructor error when importing multiple kuc.min.js files](assets/UMD_multi_files.jpeg)

#### 2. When importing multiple KUC packages (ESM) and using custom HTML tags directly:

For example, we have two scripts as follow:
- One script uses v1.2.0 and specifies the text color of Dropdown to be green.
- One script uses v1.3.1 and specifies the text color of Dropdown to be red

In the first case, we have the v1.2.0 script loaded first and v1.3.1 loaded last. We can see that the text color of Dropdown in the v1.3.1 script is overridden by v1.2.0 script.

![Custom element is overridden by the first loaded file](assets/ESM_multi_files_1.png)

Now, if the order of import is switched, and the v1.3.1 is loaded first. We can see the text color of Dropdown in the v1.2.0 script is overridden by v1.3.1 script.

![Custom element is overridden by the first loaded file](assets/ESM_multi_files_2.png)

### For users using version v1.4.0 and above

After the release of v1.4.0, loading multiple KUC packages (ESM) of the same version or different versions will not cause version conflicts errors anymore.

However, please note that when loading multiple `kuc.min.js` files (UMD), only **the last loaded** one is used. Therefore, if you use `Kuc` instead of the recommended `Kucs` object, please note that it will refer to the last loaded `kuc.min.js` file and that may not be the version you wanted.

The following example import orders will not cause version conflicts errors:
- v1.4.0 > v1.3.2 > v1.4.1: `window.Kuc.version` returns 1.4.1 and no errors
- v1.4.0 > v1.4.1 > v1.4.0: `window.Kuc.version` returns 1.4.0 and no errors

The following example import orders will result in an `Illegal constructor` error:
- v1.4.1 > v1.3.2 > v1.3.0: `window.Kuc.version` returns 1.3.0 and an `Illegal constructor` error occurs
- v1.3.2 > v1.4.0 > v1.3.2: `window.Kuc.version` returns 1.3.2 and an `Illegal constructor` error occurs

Therefore, when using the `Kuc` object, it is important that the last loaded `kuc.min.js` is v1.4.0 or above. 