---
id: version-1.6.0-datetime-picker
title: DateTimePicker
sidebar_label: DateTimePicker
original_id: datetime-picker
---

## Overview

The DateTimePicker component allows the user to display a input area of time & date and each selection part.

<div class="sample-container" id="datetime-picker">
  <div id="sample-container__components">
    <iframe id="iframe" title="datetime-picker" width="500px" height="200px"></iframe>
  </div>
</div>
<script src="/js/samples/desktop/datetime-picker.js"></script>

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
| language *1 | string | "auto"  | Language setting | Available options: "auto", "en", "ja", "zh", "zh-TW"<br>If setting "auto", it will be according to the HTML lang setting (If the lang setting is other than "en"/"zh"/"zh-TW"/"ja", the language setting will be "en") |
| max | string | "" | Setting of the time listbox ending point | Format is HH:MM<br>In the time listbox, it is displayed up to the time set to `max`, and it is not displayed after that<br>The below time can be used (it will be converted to HH:MM internally):<li>5:30</li><li>05:3</li><li>5:3</li>If the hour and/or time has only 1 character, 0 will be added to the beginning<br>Will result an error if setting invalid format or value, or `min` time is greater than `max` time |
| min | string | "" | Setting of the time listbox starting point | Format is HH:MM<br>In the time listbox, it is displayed from the time set to `min`, and it is not displayed before that<br>The below time can be used (it will be converted to HH:MM internally):<li>5:30</li><li>05:3</li><li>5:3</li>If the hour and/or time has only 1 character, 0 will be added to the beginning<br>Will result an error if setting invalid format or value, or `min` time is greater than `max` time |
| value | string | "" | Text to be displayed | Format is YYYY-MM-DDTHH:MM:SS<br>The below date and time can be used (it will be converted to YYYY-MM-DDTHH:MM:SS internally):<li>2021</li><li>2021T01</li><li>2021-06</li><li>2021-12-12</li><li>2021-12-12T01</li><li>2021-12-12T01:01</li>If the date and/or month is ignored, it will be supplemented with 01<br>If the hour, minute, and/or second is ignored, it will be supplemented with 00<br>Will result an error if setting invalid format or value, or it is out of valid range set by `min` and `max` properties |
| disabled | boolean | false | Enable/Disable the component | |
| hour12 | boolean | false | Setting of the clock display (12-hour clock/24-hour clock) Default is 24-hour clock | Available options:<br>true: 12-hour clock<br>false: 24-hour clock |
| requiredIcon | boolean | false | Show/Hide the required icon | |
| visible | boolean | true | Show/Hide the component | |
| timeStep | number | 30 | Setting of time interval in the time listbox | Unit is minute (positive integer)<br>Round off to the nearest whole number when the decimal point is set<br>Will result an error if it is not a number or greater than the difference between `max` and `min` |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the value has been changed | It will pass the event object as the argument<br><br>You can receive the following values in event.detail<br>event.detail.oldValue : Value before the change<br>event.detail.value : Value after the change<br>event.detail.changedPart : "date" or "time" which has been changed |

> *1: The displayed date format is automatically switched depending on the `language` property setting as follows:
> - "en": MM/DD/YYYY
> - "ja", "zh", "zh-TW": YYYY-MM-DD

### Constructor

DateTimePicker(options)<br>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options  | object | {} | Object that includes component properties |  |

---
## Sample Code

> Please check the [package installation](../../getting-started/quick-start.md#installation) method first.

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

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
  disabled: false,
  timeStep: 30,
  max: '23:59',
  min: '00:00'
});
space.appendChild(dateTimePicker);

dateTimePicker.addEventListener('change', event => {
  console.log(event);
});
```
