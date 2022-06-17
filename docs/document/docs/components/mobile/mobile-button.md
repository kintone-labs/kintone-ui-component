---
id: mobile-button
title: MobileButton
sidebar_label: MobileButton
---

## Overview

The MobileButton component allows the user to create and displays buttons.

<div class="sample-container" id="mobile-button">
  <div id="sample-container__components" class="mobile"></div>
</div>
<script src="/js/samples/mobile/mobile-button.js"></script>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name |  |
| id | string | ""  | Component id name |  |
| text | string | ""  | Text to be displayed in buttons | |
| type | string | "normal"  | Button design type | Available options:<br>"normal" : White (#ffffff)<br>"submit" : Blue (#206694) |
| disabled | boolean | false | Enable/Disable the component | |
| visible | boolean | true | Show/Hide the component | |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| click | function | Event handler when Clicked | It will pass the event object as the argument |

### Constructor

MobileButton(options)<br>
Here is a list of available constructors:

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | Object that includes component properties |  |

---

## Sample Code

Here is a sample code when all parameters are specified:

```javascript
const header = kintone.mobile.app.getHeaderMenuSpaceElement();
const mobileButton = new Kuc.MobileButton({
  text: 'Submit',
  type: 'submit',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
header.appendChild(mobileButton);

mobileButton.addEventListener('click', event => {
  console.log(event);
});
```
