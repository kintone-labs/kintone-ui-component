---
id: time-picker
title: TimePicker
sidebar_label: TimePicker
---

## Overview

The TimePicker component allows the user to display a input area and time selection listbox.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=desktop-time-picker--document" title="time picker image" height="80px"></iframe>

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
| value | string | ""  | Text to be displayed | Format is HH:MM<br>The below time can be used (will convert to HH:MM internally): 5:30/05:3/5:3<br>Will result an error if setting invalid format or value  |
| disabled | boolean | false | Enable/Disable the component | |
| hour12 | boolean | false | Setting of the clock display (12-hour clock/24-hour clock) Default is 24-hour clock | Available options:<br>true: 12-hour clock<br>false: 24-hour clock |
| requiredIcon | boolean | false | Show/Hide the required icon | |
| visible | boolean | true | Show/Hide the component | |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the value has been changed | It will pass the event object as the argument<br><br>You can receive the following values in event.detail<br>event.detail.oldValue : Value before the change<br>event.detail.value : Value after the change |

### Constructor

TimePicker(options)<br>
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
const timePicker = new Kuc.TimePicker({
  label: 'Time',
  requiredIcon: true,
  hour12: false,
  value: '11:30',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(timePicker);

timePicker.addEventListener('change', event => {
  console.log(event);
});
```
