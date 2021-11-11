---
id: datetime-picker
title: DateTimePicker
sidebar_label: DateTimePicker
---

## Overview

The DateTimePicker component allows the user to display a input area of time & date and each selection part.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=desktop-datetime-picker--document" title="datetime picker image" height="80px"></iframe>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| error | string | ""  | Text to be displayed in error | Error will not be displayed if unspecified or left empty |
| id | string | ""  | Component id name | |
| label | string | ""  | Label for the component | Label will not be displayed if unspecified or left empty |
| language | string | "auto"  | Language setting | TBD |
| value | string | ""  | Text to be displayed | TBD |
| hour12 | boolean | false | Setting of the clock display (12-hour clock/24-hour clock) Default is 24-hour clock | TBD |
| disabled | boolean | false | Enable/Disable the component | |
| requiredIcon | boolean | false | Show/Hide the required icon | |
| visible | boolean | true | Show/Hide the component | |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the value has been changed | It will pass the event object as the argument<br><br>You can receive the following values in event.detail<br>event.detail.oldValue : Value before the change<br>event.detail.value : Value after the change |

### Constructor

DatePicker(options)<br>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options  | object | {} | Object that includes component properties |  |

---
## Sample Code

Here is a sample code when all parameters are specified:

```javascript
const space = kintone.app.record.getSpaceElement('space');
const dateTimePicker = new Kuc.DateTimePicker({
  label: 'DateTime',
  requiredIcon: true,
  language: 'auto',
  hour12: false,
  value: '2021-11-11T11:30:00',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(dateTimePicker);

dateTimePicker.addEventListener('change', event => {
  console.log(event);
});
```
