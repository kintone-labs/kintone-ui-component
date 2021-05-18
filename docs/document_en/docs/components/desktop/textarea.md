---
id: textarea
title: TextArea
sidebar_label: TextArea
---

## Overview

The TextArea component allows the user to display multiple lines of text element.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=textarea--document" title="textarea image" width="350px" height="170px"></iframe>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| error | string | ""  | Text to be displayed in error | Error will not be displayed if unspecified or left empty |
| id | string | ""  | Component id name | |
| label | string | ""  | Label for the component | Label will not be displayed if unspecified or is empty |
| placeholder | string | ""  | Placholder text for entry example | |
| value | string | ""  | Text to be displayed | |
| disabled | boolean | false | Disable the component | |
| requiredIcon | boolean | false | Display the required icon | |
| visible | boolean | true | Show the component | |

### Event

A list of events that can be specified.

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the value has been changed | It will pass the event object as the argument<br><br>You can receive the following values in event.detail<br>event.detail.oldValue  : Value before the change<br>event.detail.value  : Value after the change |
| focus | function | Event handler for the focused time | It will pass the event object as the argument<br><br>You can receive the following values in event.detail<br>event.detail.value  : Value at the time of focus |

### Constructor

TextArea(options)
A list of available constructors.

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | JSON object that includes component properties | Values in the options are arbitrary |

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
