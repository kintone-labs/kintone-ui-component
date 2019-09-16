---
id: version-0.1.5-quickstart-javascript
title: Quickstart Javascript
sidebar_label: Quickstart Javascript
original_id: quickstart-javascript
---

## Create a customization

*  Attach 2 below files from './dist' folder in [kintone-ui-component](https://github.com/kintone/kintone-ui-component/tree/master) into kintone app
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

![Quick start JS Result](assets/result.PNG)
