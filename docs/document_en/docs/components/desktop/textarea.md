---
id: textarea
title: TextArea
sidebar_label: TextArea
---

## Overview

TextArea displays multiple lines of text.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=textarea--document" title="textarea image" width="350px" height="170px"></iframe>

---

## Specification

### Property

A list of available properties. You can update the value with the specified property.

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component Class name | |
| error | string | ""  | Text to be displayed in error | Unspecified or empty text: error is not displayed |
| id | string | ""  | Component ID Name | |
| label | string | ""  | Component Description Labels | Label is not displayed for unspecified or empty characters |
| placeholder | string | ""  | Text that is displayed as an example entered in the Blank Space | |
| value | string | ""  | Text to be displayed | |
| disabled | boolean | false | Edit/Disable component settings | |
| requiredIcon | boolean | false | Component required icon Display/Hide Settings | |
| visible | boolean | true | Show/Hide Components | |

### Event

A list of events that can be specified.

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the value has been changed | The argument must be an event object.<br><br>You can receive the following values in event.detail<br>event.detail.oldValue  : Value before the change<br>event.detail.value  : Value of values after changing |
| focus | function | Event handler for the focused time | The argument must be an event object.<br><br>You can receive the following values in event.detail<br>event.detail.value  : Value in Focus Time |

### Constructor

TextArea(options)
A list of available constructors.

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | JSON object with Component Properties | Values in options are optional |

---
## Sample Code

Sample code when all parameters are specified.

```javascript
const space = kintone.app.record.getSpaceElement('space');
const textarea = new Kuc.TextArea({
  label: 'Fruit',
  requiredIcon: true,
  placeholder: 'Apple',
  value: 'Apple',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(textarea);

textarea.addEventListener('change', event => {
  console.log(event);
});

textarea.addEventListener('focus', event => {
  console.log(event);
});
```
