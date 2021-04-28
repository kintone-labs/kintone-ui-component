---
id: button
title: Button
sidebar_label: Button
---

## Overview

The Button component allows the user to create and displays buttons.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=button--document" title="button image" width="550px" height="80px"></iframe>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component Class name |  |
| id | string | ""  | Component ID Name |  |
| text | string | ""  | Text to be displayed inside the button | |
| type | string | "normal"  | Button design Type | Available Options: <br>"normal"  : Gray (#f7f9fA)<br>"submit"  : Blue (#3498db)<br>"alert"  : Red (#e74c3c) |
| disabled | boolean | false | Disable the component | |
| visible | boolean | true | Show the component | |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| click | function | Event handler when clicked | It will pass the event object as the argument |

### Constructor

Button(options)
Here is a list of available constructors.

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | JSON object that includes component properties | Values in the options are arbitrary |

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
