#QuickStart React

## Requirement
* [Nodejs](https://nodejs.org/en/)
* [Git](https://git-scm.com/)

## Create a customization
**Step** 1: Run commands
```
$ npm install -g create-react-app
$ create-react-app my-customization
$ cd my-customization
$ npm install --only=dev cross-env babel-preset-stage-0 css-loader style-loader
$ npm install --only=dev kintone-ui-components
$ rm -f src/*
```
**Step** 2: Add index.js file to src/ folder:
```
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'kintone-ui-component';
class MyCustomization extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
        <Button text='Submit' type='success' onClick={function() {alert('This is my customization');}}/>
    );
  }
}

// Adding your customization into header space of kintone app
kintone.events.on("app.record.index.show", function(ev) {
    var kintoneSpaceElement = kintone.app.getHeaderSpaceElement();
    ReactDOM.render(<MyCustomization />, kintoneSpaceElement);
});
```

**Step** 3: Add webpack.config.js file to my-customization/ folder 
```
const path = require('path');
const webpack = require('webpack');
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
                        loader: 'babel-loader',
                        options: {
                            presets: ['react','env'],
                            plugins: ["transform-class-properties"]
                        }
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
        watch: env.watch,
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                include: /\.min\.js$/,
                minimize: true
            })
        ]
    }
}
```
**Step** 4: Add a script to buiding by webpack to package.json
```
"scripts": {
    "build-webpack": "cross-env NODE_ENV=production webpack",
    ...
}
```
* Run command to build customization file
```
$ npm run build-webpack
```
```
result:
* ./dist/my-customization.min.js
```
* Attach my-customization.min.js into [kintone app setting](https://help.kintone.com/en/k/user/js_customize.html)

![](../img/result.PNG)