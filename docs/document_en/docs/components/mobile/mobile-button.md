---
id: mobile-button
title: MobileButton
sidebar_label: MobileButton
---

## Overview

MobileButton show the buttons.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=mobile-button--document" title="mobile button image" width="300px" height="80px"></iframe>

---

## Specification

### Property

A list of available properties. You can update the value with the specified property.

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component Class name |  |
| id | string | ""  | Component ID Name |  |
| text | string | ""  | Text to be displayed in buttons | |
| type | string | "normal"  | Button design Type | The following can be specified<br>"normal"  : White (#ffffff)<br>"submit"  : Blue (#206694) |
| disabled | boolean | false | Edit/Disable component settings | |
| visible | boolean | true | Show/Hide Components | |

### Event

A list of events that can be specified.

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| click | function | Event handler when Clicked | Arguments are Event Objects |

### Constructor

Button(options)
A list of available constructors.

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | JSON object with Component Properties | Values in options are optional |

---

## Sample Code

Sample code when all parameters are specified.

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
