[![npm version][npm-image]][npm-url]

<p align="center">
  <img src="./images/logo.png" alt="kuc-logo" align="center" height="100" style="margin: 30px; 0;">
</p>

---

<p align="center">
kintone UI Component is UI Component for kintone customization.<br />
It supports you to develop kintone customization and kintone plugin.<br />
<strong>The document page is <a href="https://ui-component.kintone.dev" rel="noopener" target="_blank">here. </a></strong>
</p>

<p align="center">
  English | <a href="./README-JP.md">日本語</a>
</p>

- [Installation](#installation)
  - [Use with downloading kuc.min.js file](#use-with-downloading-kucminjs-file)
  - [npm](#npm)
  - [CDN](#cdn)
  
- [Usage](#usage)
- [Browser Support](#browser-support)
- [v0 Usage](#v0-usage)
- [Migration Guide](#migration-guide)
- [Contributing Guideline](#contributing-guideline)
- [Roadmap](#roadmap)
- [License](#license)

## Installation
Kintone UI Component is available as the downloaded `kuc.min.js` file, a npm package, or a CDN.

### Use with downloading kuc.min.js file
Please use `kuc.min.js` downloaded from [releases page](https://github.com/kintone-labs/kintone-ui-component/releases).
```
./umd/kuc.min.js
```
### npm
Please install and use `kintone-ui-component` with npm.
```bash
npm install kintone-ui-component
```

### CDN
Please use these CDN link.

- If you want to specify the version and load it (specify the version number after the project name):
  ```
  https://unpkg.com/kintone-ui-component@1.0.0/umd/kuc.min.js
  ```

- If you want to load the latest version of kintone UI Component:
  ```
  https://unpkg.com/kintone-ui-component/umd/kuc.min.js
  ```

> unpkg is not a CDN service provided by Cybozu. It is recommended that you use this for verification.<br/>
> In the production environment, you can [download the `kuc.min.js` file](#use-with-downloading-kucminjs-file) from GitHub and use it to avoid any failures and problems related to unpkg.

## Usage

```javascript
// UMD
const Kuc = Kucs["1.x.x"];

const text = new Kuc.Text({
  value: "this is text!"
});
```

```javascript
// ES modules
import { Text } from "kintone-ui-component/lib/text";

const text = new Text({
  value: "this is text!"
});
text.addEventListener("change", event => {
  console.log(`text value is changed to ${event.detail.value}`);
});
```

> When using a version on and after v1.4.0, please use `Kucs["1.x.x"]` instead of Kuc and specify your expected version (ex. `new Kucs["1.4.0"].Button()`).<br>
> The rendered components' tags and class names will include the version number.<br>
> You may still use `Kuc` as a global variable but **note that it may be conflicting when adding two or more `kuc.min.js` files** on Kintone customization or plug-in. In this case, the `Kuc` object refers to the last loaded `kuc.min.js` file.<br>
> In case that there is only one `kuc.min.js` file in the Kintone system or there is no problem with using last loaded `kuc.min.js` file, you can use Kuc object. Please remove `const Kuc = Kucs['1.x.x'];` line.
> When using a version before v1.4.0, please use `Kuc` as a global variable but **note that it may be conflicting when adding two or more `kuc.min.js` files** on Kintone customization or plug-in.<br>
> Please visit [Quick Start](https://ui-component.kintone.dev/docs/getting-started/quick-start#installation) and [Version conflicts issue and solution](https://ui-component.kintone.dev/docs/guides/version-conflicts-issue-solution) for more information!

## Browser Support

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

> We confirmed the operation with the latest version of each compatible browser.

## v0 Usage
:warning::warning: The maintenance of kintone UI Component v0 ended on 31 December 2023. We recommend migrating to [kintone UI Component v1](https://github.com/kintone-labs/kintone-ui-component). :warning::warning:

## Migration Guide
There are differences in specifications and interfaces between v0 and v1.<br />
Please be sure to verify enough when you updating.<br />
For more details, please refer to the articles below.
- [The difference of the way to code between v0 and v1](https://ui-component.kintone.dev/docs/guides/comparison-v0-v1)
- [v1.0.0 Release Notes](https://ui-component.kintone.dev/docs/releases/release-notes-v1.0.0)

> About the React version provided in v0, we haven't supported it in v1 now.

## Contributing Guideline
We welcome contributions to kintone UI Component.<br>
For the details, please check [Contributing Guideline](https://github.com/kintone-labs/kintone-ui-component/blob/master/CONTRIBUTING.md).<br>

If you have a question or feature request, please register [GitHub issue](https://github.com/kintone-labs/kintone-ui-component/issues).<br>
About questions, you can also utilize the following community spaces. These communities are made up of volunteers.<br>
- [kintone developer forum (English site)](https://forum.kintone.dev/c/general/1)
- [cybozu developer community (Japanese site)](https://community.cybozu.dev/c/kintone/5)

And we use [Discussions feature of GitHub](https://github.com/kintone-labs/kintone-ui-component/discussions) as our community page dedicated to this tool.<br>

## Roadmap
We published our development roadmap.<br>
For more details, please refer to [here](https://github.com/kintone-labs/kintone-ui-component/discussions/987).

## License
[MIT LICENSE](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/kintone-ui-component.svg
[npm-url]: https://npmjs.org/package/kintone-ui-component
