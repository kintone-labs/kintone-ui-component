---
id: date-picker
title: DatePicker
sidebar_label: DatePicker
---

## Overview

The DatePicker component allows the user to display a input area and date selection calendar.

import { DatePickerComponent } from "@site/static/js/samples/desktop/date-picker.jsx"

<DatePickerComponent />

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
| language *1 | string | "auto"  | Language setting | Available options: "auto", "en", "ja", "zh", "zh-TW", "es"<br/>If setting "auto", it will be according to the HTML lang setting (If the lang setting is other than "en"/"ja"/"zh"/"zh-TW"/"es", the language setting will be "en") |
| value | string | ""  | Text to be displayed | Format is YYYY-MM-DD<br/>The below date can be used (it will be converted to YYYY-MM-DD internally):<li>2021</li><li>2021-1</li><li>2021-01</li><li>2021-1-9</li><li>21-01-01</li>If the year is less than 4 characters, 0 will be added to the beginning<br/>If the date and/or month is ignored, it will be supplemented with 01<br/>If the date and/or month has only 1 character, 0 will be added to the beginning<br/>Will result an error if setting invalid format or value |
| disabled | boolean | false | Enable/Disable the component | |
| requiredIcon | boolean | false | Show/Hide the required icon | |
| visible | boolean | true | Show/Hide the component | |

:::info
*1: The displayed date format is automatically switched depending on the `language` property setting as follows:
- "en": MM/DD/YYYY
- "ja", "zh", "zh-TW", "es": YYYY-MM-DD
:::

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the value has been changed | It will pass the event object as the argument<br/><br/>You can receive the following values in event.detail<br/>event.detail.oldValue : Value before the change<br/>event.detail.value : Value after the change |

### Constructor

DatePicker(options)<br/>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options  | object | \{\} | Object that includes component properties |  |

### Custom CSS
:::tip
Please check [Custom CSS feature guide](../../getting-started/custom-css.md) at first.
:::

Here is a list of properties that can be used for modifying component style:
#### Property
| Name |
| :--- |
| --kuc-date-picker-input-width |
| --kuc-date-picker-input-height |
| --kuc-date-picker-input-color |
| --kuc-date-picker-input-font-size |

---
## Sample Code

:::tip
Please check the [package installation](../../getting-started/quick-start.md#installation) method first.
:::

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');

const datePicker = new Kuc.DatePicker({
  label: 'Date',
  requiredIcon: true,
  language: 'auto',
  value: '2021-11-11',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(datePicker);

datePicker.addEventListener('change', event => {
  console.log(event);
});
```

---

## Related Articles

- [Format setting plug-in](../../guides/format-setting-plugin.md)
