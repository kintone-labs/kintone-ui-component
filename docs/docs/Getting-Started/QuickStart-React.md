#QuickStart React

## Requirement
* [Nodejs](https://nodejs.org/en/)
* [Git](https://git-scm.com/)

## ESM usage with JSX
**Step** 1: init your project
```
$ mkidr customization
$ cd customization
$ npm init
```

**Step** 2: install devDependences
```
$ npm i -D webpack-cli webpack 
$ npm i -D tslib babel-loader @babel/preset-env @babel/preset-react
$ npm i -D style-loader css-loader
$ npm i -D react@16.8.6 react-dom@16.8.6
$ npm i -D @kintone/kintone-ui-component
```

**Step** 3: creating /customization/src/index.jsx
```
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button} from '@kintone/kintone-ui-component';
class MyCustomization extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Button text='Submit' type='submit' onClick={function() {alert('This is my customization');}}/>
    );
  }
}

// Adding your customization into header space of kintone app
kintone.events.on("app.record.index.show", function(ev) {
    var kintoneSpaceElement = kintone.app.getHeaderSpaceElement();
    ReactDOM.render(<MyCustomization />, kintoneSpaceElement);
});
```

**Step** 4: creating /customization/webpack.config.js
```
const path = require('path');

module.exports = (env = {}) => {
  return {
    entry: {
      "customization.min": './src/index.jsx'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        }
      ]
    }
  }
}
```

**Step** 5: Add a script to buiding by webpack to package.json
```
"scripts": {
    "build:webpack": "webpack --mode=production",
    ...
}
```
* Run command to build the customization file
```
$ npm run build:webpack
```
```
result:
* ./dist/customization.min.js
```
* Attach customization.min.js into [kintone app setting](https://help.kintone.com/en/k/user/js_customize.html)

![](../img/result.PNG)

## UMD usage without JSX
*  Attach 'react' and 'react-dom' UMD scripts into kintone app
```
https://unpkg.com/react@16/umd/react.production.min.js
https://unpkg.com/react-dom@16/umd/react-dom.production.min.js
```

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
 ./dist/react/kintone-ui-component.min.js
 ./dist/react/kintone-ui-component.min.css
```
* Create index.js file
```
(function () {
  kintone.events.on("app.record.index.show", function (ev) {
    var kintoneSpaceElement = kintone.app.getHeaderSpaceElement();
    ReactDOM.render(
      React.createElement(kintoneUIComponent.Button, {text: 'Submit', type: 'submit', onClick: function(){
        alert('This is my customization');
      }}),
      kintoneSpaceElement
    );
  });
})();
```
* Attach index.js file into [kintone app setting](https://help.kintone.com/en/k/user/js_customize.html)

![](../img/result.PNG)
