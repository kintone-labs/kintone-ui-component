---
id: radio-button
title: RadioButton
sidebar_label: RadioButton
---

## Overview

The RadioButton component allows the user to select one out of several options.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=desktop-radio-button--document" title="radio-button image" height="80px"></iframe>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name  | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| error | string | ""  | Text to be displayed in error | Error will not be displayed if unspecified or left empty |
| id | string | ""  | Component id name | |
| itemLayout | string | "horizontal"  | Orientation for displaying the options | Available options:<br>"horizontal" : Horizontal<br>"vertical" : Vertical |
| label | string | ""  | Label for the component | Label will not be displayed if unspecified or left empty |
| value *1 | string | ""  | Selected value | No option will be selected if the `value` and `selectedIndex` are unspecified<br>If setting duplicated value and not setting `selectedIndex`, the first mapped value item in `Item.value` will be selected and `selectedIndex` will be the index number |
| selectedIndex *1 | number | -1  | Index of selected item | It supports specifying which duplicated `Item.value` will be selected if there is duplicated `Item.value` in `items`<br>If `value` is not set and `selectedIndex` is valid, item that has the index number will be selected<br>If `value` is set with duplicated `Item.value` and `selectedIndex` value maps with duplicated `Item.value` specified in `value`, the item that has the index number will be selected<br>Will result an error if the value of `selectedIndex` is not a number |
| borderVisible | boolean | true | Show/Hide the border | |
| disabled | boolean | false | Enable/Disable the component | |
| requiredIcon | boolean | false | Show/Hide the required icon | |
| visible | boolean | true | Show/Hide the component | |
| items | Array\<Item\> | []  | List of options to select from | Will result an error if the value of items is not an array |
| Item.label | string | null | Text for each option | If `Item.label` is unspecified, the value of `Item.value` is displayed on the UI |
| Item.value | string | null | Value of each option | Can set duplicated value in `Item.value` |

> *1: You can set duplicated value in `Item.value`. In case setting duplicated value, you can handle selected item using `value` and `selectedIndex` property.<br>
> Example: When setting `items = [{label: 'Orange', value: 'fruit'}, {label: 'Apple', value: 'fruit'}, {label: 'Carrot', value: 'vegetable'}]`
>
> - If setting `value` and not setting `selectedIndex` as follows:
>   - value = 'fruit': The first item will be selected.
>   - value = 'other': No item will be selected.
>
> - If not setting `value` and setting `selectedIndex` as follows:
>   - selectedIndex = 1: The second item will be selected.
>   - selectedIndex = 99: No item will be selected.

### Event
Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the value has been changed | It will pass the event object as the argument<br><br>You can receive the following values in event.detail<br>event.detail.oldValue : Value before the change<br>event.detail.value : Value after the change |

### Constructor

RadioButton(options)<br>
Here is a list of available constructors:

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | Object that includes component properties |  |

---
## Sample Code

Here is a sample code when all parameters are specified:

```javascript
const space = kintone.app.record.getSpaceElement('space');
const radioButton = new Kuc.RadioButton({
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
  value: 'Orange',
  selectedIndex: 0,
  itemLayout: 'horizontal',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false,
  borderVisible: true
});
space.appendChild(radioButton);

radioButton.addEventListener('change', event => {
  console.log(event);
});
```
