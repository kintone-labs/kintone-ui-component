---
id: version-conflicts-issue-solution
title: Version conflicts issue and solution
sidebar_label: Version conflicts issue and solution
---
## Overview

Version conflicts have been a problem for Kintone UI Component users before the release of v1.4.0. This guide will help users understand the version conflicts issue and how to adapt and upgrade the Kintone UI Component package to the latest version starting from v1.4.0.

## Problems of Versioning

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

When using a version before v1.4.0, please use `Kuc` as a global variable but note that it may be conflicting when adding two or more `kuc.min.js` files on kintone app plug-in or customization.

```javascript
const Kuc = Kucs['1.x.x'];

const button = new Kuc.Button({text: 'Button', type: 'submit'});
document.body.appendChild(button);
```

### Using CDN

Users using Kintone UI Component through the CDN will always have the latest version.<br>
Therefore, after the release of v1.4.0, some of your apps and plug-ins will not work correctly. <br>

As explained in the [Using UMD](#using-umd) section, you now need to change from `Kuc` to `Kucs['1.x.x']`.

### Using npm

Users using the Kintone UI Component package through npm do not need to take any action but note the changes in how the components' tags and class names render. See the [Solution](#solution) section.
