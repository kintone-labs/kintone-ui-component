# QuickStart Javascript

## ESM usage
**Step** 1: Run commands
```
$ mkdir my-customization
$ cd my-customization
$ npm init -y
$ npm install cross-env babel-preset-stage-0 css-loader style-loader webpack webpack-cli babel-loader @babel/core
$ npm install @kintone/kintone-ui-component
$ mkdir src
```
**Step** 2: Add index.js file to src/ folder:
```
import {Button} from '@kintone/kintone-ui-component/esm/js'
(function () {
  kintone.events.on("app.record.index.show", function () {
    var kintoneSpaceElement = kintone.app.getHeaderSpaceElement();
    var button = new Button({text: 'Submit', type:'submit'});
    button.on('click', function(){
      alert('This is my customization');
    })
    kintoneSpaceElement.appendChild(button.render());
  });
})();
```
**Step** 3: Add webpack.config.js file to my-customization/ folder
```
const path = require('path');
module.exports = (env = {}) => {
  return {
    entry: {
      "my-customization.min": './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
          ]
        }
      ]
    },
    watch: env.watch
  }
}
```
**Step** 4: Add a script for buiding by webpack to package.json
```
"scripts": {
  "build-webpack": "cross-env NODE_ENV=production webpack",
  ...
}
```
* Run command to build the customization file
```
$ npm run build-webpack
```
```
result:
* ./dist/my-customization.min.js
```
* Attach my-customization.min.js into [kintone app setting](https://help.kintone.com/en/k/user/js_customize.html)

![](../img/result.PNG)

## UMD usage

<div id="attach_files"></div>
<script>
  (function(){
    var current_vesion = document.getElementById('current_vesion').getAttribute('data-version');
    var content = '*  Attach 2 below files from "./dist" the folder in ';
    content += '<a target="_blank" href="https://github.com/kintone-labs/kintone-ui-component/releases/tag/v'+current_vesion+'">kintone-kintone-ui-component-'+current_vesion+'.tgz</a>';
    content += ' into kintone app.';
    document.getElementById("attach_files").innerHTML = content;
  })();

</script>

```
 ./dist/kintone-ui-component.min.js
 ./dist/kintone-ui-component.min.css
```
* Create index.js file
```
(function () {
    kintone.events.on("app.record.index.show", function (ev) {
      var kintoneSpaceElement = kintone.app.getHeaderSpaceElement();
      var button = new kintoneUIComponent.Button({ text: 'Submit' });
      kintoneSpaceElement.appendChild(button.render());
      button.on('click', function(){
        alert('This is my customization');
      })
    });
  })();
```
* Attach index.js file into [kintone app setting](https://help.kintone.com/en/k/user/js_customize.html)

![](../img/result.PNG)
