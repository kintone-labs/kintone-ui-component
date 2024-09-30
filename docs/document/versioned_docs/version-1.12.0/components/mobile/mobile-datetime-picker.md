---
id: mobile-datetime-picker
title: MobileDateTimePicker
sidebar_label: MobileDateTimePicker
---

## Overview

The MobileDateTimePicker component allows the user to display a input area of time & date and each selection part.

import { MobileDateTimePickerComponent } from "@site/static/js/samples/mobile/datetime-picker.jsx"

<MobileDateTimePickerComponent />

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
| language *1 | string | "auto"  | Language setting | Available options: "auto", "en", "ja", "zh", "zh-TW"<br/>If setting "auto", it will be according to the HTML lang setting (If the lang setting is other than "en"/"zh"/"zh-TW"/"ja", the language setting will be "en") |
| value | string | ""  | Text to be displayed | Format is YYYY-MM-DDTHH:MM:SS<br/>The below date and time can be used (it will be converted to YYYY-MM-DDTHH:MM:SS internally):<li>2021</li><li>2021T01</li><li>2021-06</li><li>2021-12-12</li><li>2021-12-12T01</li><li>2021-12-12T01:01</li>If the date and/or month is ignored, it will be supplemented with 01<br/>If the hour, minute, and/or second is ignored, it will be supplemented with 00<br/>Will result an error if setting invalid format or value |
| disabled | boolean | false | Enable/Disable the component | |
| hour12 | boolean | false | Setting of the clock display (12-hour clock/24-hour clock) Default is 24-hour clock | Available options:<br/>true: 12-hour clock<br/>false: 24-hour clock |
| requiredIcon | boolean | false | Show/Hide the required icon | |
| visible | boolean | true | Show/Hide the component | |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the value has been changed | It will pass the event object as the argument<br/><br/>You can receive the following values in event.detail<br/>event.detail.oldValue : Value before the change<br/>event.detail.value : Value after the change<br/>event.detail.changedPart : "date" or "time" which has been changed |

:::info
 *1: The displayed date format is automatically switched depending on the `language` property setting as follows:
 - "en": MM/DD/YYYY
 - "ja", "zh", "zh-TW": YYYY-MM-DD
:::

### Constructor

MobileDateTimePicker(options)<br/>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options  | object | \{\} | Object that includes component properties |  |

---
## Sample Code

:::tip
Please check the [package installation](../../getting-started/quick-start.md#installation) method first.
:::

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');

const mobileDateTimePicker = new Kuc.MobileDateTimePicker({
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
space.appendChild(mobileDateTimePicker);

mobileDateTimePicker.addEventListener('change', event => {
  console.log(event);
});
```
