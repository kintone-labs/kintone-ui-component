---
id: date-picker
title: DatePicker
sidebar_label: DatePicker
---

## Overview

The DatePicker component allows the user to display a input area and date selection calendar.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=desktop-date-picker--document" title="date picker image" height="80px"></iframe>

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
| language | string | "auto"  | Language setting | Available options: "auto", "en", "ja", "zh" |
| value | string | ""  | Text to be displayed | Format is YYYY-MM-DD<br>The below date can be used (will convert to YYYY-MM-DD internally): 2021/2021-1/2021-01/2021-1-9<br>Will result an error if setting invalid format or value |
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
