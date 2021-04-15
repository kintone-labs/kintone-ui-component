---
id: button
title: Button
sidebar_label: Button
---

## Overview

Button displays buttons.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=button--document" title="button image" width="550px" height="80px"></iframe>

---

## Specification

### Property

A list of available properties. You can update the value with the specified property.

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component Class name |  |
| id | string | ""  | Component ID Name |  |
| text | string | ""  | Text to be displayed in buttons | |
| type | string | "normal"  | Button design Type | The following can be specified<br>"normal"  : Gray (#f7f9fA)<br>"submit"  : Blue (#3498db)<br>"alert"  : Red (#e74c3c) |
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
