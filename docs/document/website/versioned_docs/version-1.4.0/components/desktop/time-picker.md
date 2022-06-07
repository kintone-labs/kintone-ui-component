---
id: version-1.4.0-time-picker
title: TimePicker
sidebar_label: TimePicker
original_id: time-picker
---

## Overview

The TimePicker component allows the user to display a input area and time selection listbox.

<div class="sample-container" id="time-picker">
  <div id="sample-container__components"></div>
</div>
<script src="/js/samples/desktop/time-picker.js"></script>

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
| language | string | "auto" | Language setting | Available options: "auto", "en", "ja", "zh"<br>If setting "auto", it will be according to the HTML lang setting (If the lang setting is other than "en"/"zh"/"ja", the language setting will be "en") |
| max | string | "" | Setting of the time listbox ending point | Format is HH:MM<br>In the time listbox, it is displayed up to the time set to `max`, and it is not displayed after that<br>The below time can be used (it will be converted to HH:MM internally):<li>5:30</li><li>05:3</li><li>5:3</li>If the hour and/or time has only 1 character, 0 will be added to the beginning<br>Will result an error if setting invalid format or value, or `min` time is greater than `max` time |
| min | string | "" | Setting of the time listbox starting point | Format is HH:MM<br>In the time listbox, it is displayed from the time set to `min`, and it is not displayed before that<br>The below time can be used (it will be converted to HH:MM internally):<li>5:30</li><li>05:3</li><li>5:3</li>If the hour and/or time has only 1 character, 0 will be added to the beginning<br>Will result an error if setting invalid format or value, or `min` time is greater than `max` time |
| value | string | "" | Text to be displayed | Format is HH:MM<br>The below time can be used (it will be converted to HH:MM internally):<li>5:30</li><li>05:3</li><li>5:3</li>If the hour and/or time has only 1 character, 0 will be added to the beginning<br>Will result an error if setting invalid format or value, or it is out of valid range set by `min` and `max` properties |
| disabled | boolean | false | Enable/Disable the component | |
| hour12 | boolean | false | Setting of the clock display (12-hour clock/24-hour clock) Default is 24-hour clock | Available options:<br>true: 12-hour clock<br>false: 24-hour clock |
| requiredIcon | boolean | false | Show/Hide the required icon | |
| visible | boolean | true | Show/Hide the component | |
| timeStep | number | 30 | Setting of time interval in the time listbox | Unit is minute (positive integer)<br>Round off to the nearest whole number when the decimal point is set<br>Will result an error if it is not a number or greater than the difference between `max` and `min` |

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
  disabled: false,
  language: 'en',
  timeStep: 30,
  max: '23:59',
  min: '00:00'
});
space.appendChild(timePicker);

timePicker.addEventListener('change', event => {
  console.log(event);
});
```
