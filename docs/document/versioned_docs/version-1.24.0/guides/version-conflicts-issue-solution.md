---
id: version-conflicts-issue-solution
title: Version conflicts issue and solution
sidebar_label: Version conflicts issue and solution
---
## Overview

Version conflicts have been a problem for Kintone UI Component (KUC) users before the release of v1.4.0.<br/>
This guide will help users understand the version conflicts issue and how to adapt and upgrade the KUC package to the latest version starting from v1.4.0.

## Problems of version conflicts

It is a problem that the version conflicts error occurs and the component cannot render successfully when an app uses multiple KUC packages of the same version or different versions.<br/>
This issue occurs in both UMD and ESM ways.<br/>
For KUC, we use [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) and create a component defining a [custom HTML tag](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).<br/>
The [CustomElementRegistry](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry) that we use in that case is a global window object and we cannot define an already registered custom HTML tag again with Web Components.<br/>
When a KUC package tries to register a custom HTML tag, and a later loaded package also tries to define the same tag again, the rendering problem occurs.

![Multiple packages try to define the same custom HTML tag](/img/version-conflict-diagram.jpeg)

## Solution

Because we cannot register the same custom HTML tag more than once, from v1.4.0, custom HTML tags will include a version number at the end. This change also applies to class names to avoid conflicting CSS styles.

![Custom HTML tag example](/img/version-conflict-html-tag.png)
 
<center>Tag and class names will include the version number at the end</center>

![CSS example](/img/version-conflict-css.png)

<center>CSS of the component also changes to include the version number</center>

In addition, we also check to see whether a custom HTML tag has been registered or not before defining it.

## Upgrading to the latest version

We recommend that you should upgrade KUC to the latest version for your projects.
### Using UMD

When using a version on and after v1.4.0, please use `Kucs["1.x.x"]` instead of Kuc and specify your expected version (ex. `new Kucs["1.4.0"].Button()`).<br/>
The rendered components' tags and class names will include the version number. See the [Solution](#solution) section.

:::tip
You may still use `Kuc` as a global variable but **note that it may be conflicting when adding two or more `kuc.min.js` files** on Kintone customization or plug-in. In this case, the `Kuc` object refers to the last loaded `kuc.min.js` file.<br/>
In case that there is only one `kuc.min.js` file in the Kintone system or there is no problem with using last loaded `kuc.min.js` file, you can use Kuc object. Please remove `const Kuc = Kucs['1.x.x'];` line.
:::

When using a version before v1.4.0, please use `Kuc` as a global variable but **note that it may be conflicting when adding two or more `kuc.min.js` files** on Kintone customization or plug-in.<br/>

```javascript
const Kuc = Kucs['1.x.x'];

const button = new Kuc.Button({text: 'Button', type: 'submit'});
document.body.appendChild(button);
```

### Using CDN
See the guidance and sample code at [Using UMD](#using-umd) section. CDN behavior is the same with using the `kuc.min.js` file.

### Using npm

Users using the KUC package through npm do not need to take any action but note the changes in how the components' tags and class names render. See the [Solution](#solution) section.

## Case study

### For users using versions before v1.4.0

When using a version before v1.4.0, the below version conflicts errors might occur:

#### When importing multiple KUC packages and files (both ESM and UMD) of the same version or different versions:

For example, we load the v1.2.0 `kuc.min.js` file in the Kintone system and the v1.3.0 `kuc.min.js` file in our app. An `Illegal constructor` error will show when we try to create a new KUC Button component.

![Illegal constructor error when importing multiple kuc.min.js files](/img/UMD_multi_files.jpeg)

### For users using version on and after v1.4.0

When using a version on and after v1.4.0, loading multiple KUC packages (ESM) of the same version or different versions will not cause version conflicts errors anymore.

However, please note that when loading multiple `kuc.min.js` files (UMD), only **the last loaded** one is used if you use `Kuc` instead of the recommended `Kucs` object. Please note that it may not be the version you wanted.

When there are both versions before and on/after v1.4.0, you need to be careful.<br/>

1. The case importing a version on and after v1.4.0 last
- v1.4.0 > v1.3.2 > v1.4.x: `window.Kuc.version` returns 1.4.x and no errors
- v1.4.0 > v1.4.x > v1.4.0: `window.Kuc.version` returns 1.4.0 and no errors

2. The case importing a version before v1.4.0 last
- v1.4.0 > v1.3.2 > v1.3.0: `window.Kuc.version` returns 1.3.0 and an `Illegal constructor` error occurs
- v1.3.2 > v1.4.0 > v1.3.2: `window.Kuc.version` returns 1.3.2 and an `Illegal constructor` error occurs

In summary, when using the `Kuc` object, it will occur an error in case that the last loaded `kuc.min.js` is the version before v1.4.0.

If you have any questions, please submit on [GitHub issue](https://github.com/kintone-labs/kintone-ui-component/issues).
