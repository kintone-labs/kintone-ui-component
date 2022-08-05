---
id: version-1.4.0-button
title: Button
sidebar_label: Button
original_id: button
---

## Overview

The Button component allows the user to create and display buttons.

<div class="sample-container" id="button">
  <div id="sample-container__components"></div>
</div>
<script src="/js/samples/desktop/button.js"></script>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name |  |
| id | string | ""  | Component id name |  |
| text | string | ""  | Text to be displayed inside the button | |
| type | string | "normal"  | Button design type | Available options:<br>"normal" : Gray (#f7f9fA)<br>"submit" : Blue (#3498db)<br>"alert" : Red (#e74c3c) |
| disabled | boolean | false | Enable/Disable the component | |
| visible | boolean | true | Show/Hide the component | |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| click | function | Event handler when clicked | It will pass the event object as the argument |

### Constructor

Button(options)<br>
Here is a list of available constructors:

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | Object that includes component properties | |

---

## Sample Code

> Please check the [package installation](../../getting-started/quick-start.md#installation) method first.

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs["1.x.x"];

const header = kintone.app.getHeaderMenuSpaceElement();

const button = new Kuc.Button({
    text: 'Submit',
    type: 'submit',
    className: 'options-class',
    id: 'options-id',
    visible: true,
    disabled: false
});

header.appendChild(button);

button.addEventListener('click', event => {
  console.log(event);
});
```

### Custom CSS
#### Property
| Name | Description |
| :--- | :--- |
| --kuc-button-width | Button width |
| --kuc-button-background-color | Button backgound-color |
| --kuc-button-background-hover | backgound-color when the button hover |
| --kuc-button-background-active | backgound-color when the button activated |
| --kuc-button-background-focus | backgound-color when the button focused |
| --kuc-button-font-size | font-size of Button |


#### Sample code
Here is a sample code when custom some properties for Button

```javascript
<style>
  kuc-button {
    --kuc-button-background-color: #439c90;
    --kuc-button-background-hover: #c5e305;
  }
  .sample-class {
    --kuc-button-background-active: #e305ab;
  }
  #sample-id {
    --kuc-button-font-size: 16px;
  }
</style>

<kuc-button></kuc-button>
<kuc-button class="sample-class"></kuc-button>
<kuc-button id="sample-id"></kuc-button>
```
