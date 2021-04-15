---
id: checkbox
title: Checkbox
sidebar_label: Checkbox
---

## Overview

The checkbox displays the check boxes of multiple selections.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=checkbox--document" title="checkbox image" height="80px"></iframe>

---

## Specification

### Property

A list of available properties. You can update the value with the specified property.

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component Class name | |
| error | string | ""  | Text to be displayed in error | Unspecified or empty text: error is not displayed |
| id | string | ""  | Component ID Name | |
| itemLayout | string | "horizontal"  | How to Arrange Options | The following can be specified<br>"horizontal"  : Horizontal<br>"vertical"  : Vertical Row |
| label | string | ""  | Component Description Labels | Label is not displayed for unspecified or empty characters |
| BorderVisible | Boolean | True | Hide/show Border Settings | |
| disabled | boolean | false | Component selectable/not allowed | |
| requiredIcon | boolean | false | Component required icon Display/Hide Settings | |
| visible | boolean | true | Show/Hide Components | |
| items | Array\<Item\> | []  | List of options to display | Output an error when items is not an array |
| Item.label | string | null | Text for each option | If Item.label is unspecified, the value of Item.value is displayed on the UI |
| Item.value | string | null | Value of each option | When the value of Item.value is duplicated, the error is output |
| value | Array\<string\> | ""  | Selected value | Output an error if value is not an array<br>Output an error when a duplicate value in an array exists |

### Event

A list of events that can be specified.

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| Change | Function | Event handler when the value has been changed | The argument must be an event object.<br><br>You can receive the following values in event.detail<br>event.detail.oldValue  : Value before the change<br>event.detail.value  : Value of values after changing |

### Constructor

Checkbox(options)
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
const checkbox = new Kuc.Checkbox({
  label: 'Fruit',
  requiredIcon: true,
  items: [
    {
      label: 'orange',
      value: 'Orange'
    },
    {
      label: 'apple',
      value: 'Apple'
    }
  ],
  value: ['Orange'],
  itemLayout: 'horizontal',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false,
  borderVisible: true
});
space.appendChild(checkbox);

checkbox.addEventListener('change', event => {
  console.log(event);
});
```
