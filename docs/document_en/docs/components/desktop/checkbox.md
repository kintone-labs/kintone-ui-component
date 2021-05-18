---
id: checkbox
title: Checkbox
sidebar_label: Checkbox
---

## Overview

The Checkbox component displays a checkbox element for multiple selections.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=checkbox--document" title="checkbox image" height="80px"></iframe>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| error | string | ""  | Text to be displayed in error | Error will not be displayed if unspecified or left empty |
| id | string | ""  | Component id name | |
| itemLayout | string | "horizontal"  | Orientation for displaying the options | The following can be specified<br>"horizontal"  : Horizontal<br>"vertical"  : Vertical |
| label | string | ""  | Label for the component | Label will not be displayed if unspecified or left empty |
| BorderVisible | Boolean | True | Display Border | |
| disabled | boolean | false | Disable the field | |
| requiredIcon | boolean | false | Display the required icon | |
| visible | boolean | true | Show the component | |
| items | Array\<Item\> | []  | List of options to display | User will receive error when the value of items is not an array |
| Item.label | string | null | Text label for each option | If `Item.label` is unspecified, the value of Item.value is displayed on the UI |
| Item.value | string | null | Value of each option | Will result an error if there is duplicated value in Item.value |
| value | Array\<string\> | ""  | Selected value | Will result an error if the value is not included in the items of options<br> Will result an error if there is duplicated value in Item.value |

### Event

A list of events that can be specified.

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the value has been changed | It will pass the event object as the argument<br><br>You can receive the following values when used in event.detail<br>event.detail.oldValue  : Value before the change<br>event.detail.value  : Value after the change |

### Constructor

Checkbox(options)
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
