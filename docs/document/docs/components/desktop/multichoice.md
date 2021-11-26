---
id: multichoice
title: MultiChoice
sidebar_label: MultiChoice
---

## Overview

The MultiChoice component allows the user to select multiple values from multiple options.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=desktop-multichoice--document" title="multichoice image" height="130px"></iframe>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name  | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| error | string | ""  | Text to be displayed in error | Error will not be displayed if unspecified or empty |
| id | string | ""  | Component id name | |
| label | string | ""  | Label for the component | Label is not displayed if unspecified or emptied |
| disabled | boolean | false | Enable/Disable the component | |
| requiredIcon | boolean | false | Show/Hide the required icon | |
| visible | boolean | true | Show/Hide the component | |
| items | Array\<Item\> | []  | List of options to display | Will result an error if the value of items is not an array |
| Item.label | string | null | Label text for each option | If `Item.label` is unspecified, the value of Item.value is displayed on the UI |
| Item.value | string | null | Value of each option | Can set duplicated value in Item.value |
| value *1 | Array\<string\> | []  | Selected value | Will result an error if the value of items is not an array<br>No option will be selected if the value or selectedIndex is unspecified<br>If setting duplicated value and not setting `selectedIndex`, the first mapped value item in Item.value will be selected and `selectedIndex` will be the index number |
| selectedIndex *1 | Array\<Number\> | []  | List of index of selected item | If `selectedIndex` is valid, item that has the index number will be selected<br>If `value` is set and `selectedIndex` value exists in `items`, item that has the index number will be selected<br>Will result an error if the value of selectedIndex is not an array |

> *1: You can define duplicated value in value and Item.value. In case defining duplicated value, you can handle selected item using `value` and `selectedIndex` property.<br>
> Example: When defining `items = [{label: 'Orange', value: 'fruit'}, {label: 'Apple', value: 'fruit'}, {label: 'Carrot', value: 'vegetable'}]`<br>
> - If setting `value` as below:<br>
>   - ['fruit', 'vegetable']: The first and third items will be selected.<br>
>   - ['meat', 'other']: No item will be selected.<br>
>
> - If don't setting `value` and setting `selectedIndex` as below:<br>
>   - [0, 1]: The first and second items will be selected.<br>
>   - [98, 99]: No item will be selected.

### Event
Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the value has been changed | It will pass the event object as the argument.<br><br>You can receive the following values in event.detail<br>event.detail.oldValue : Value before the change<br>event.detail.value : Value after changing |

### Constructor

MultiChoice(options)<br>
Here is a list of available constructors:

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | Object that includes component properties | |

---
## Sample Code

Here is a sample code when all parameters are specified:

```javascript
const space = kintone.app.record.getSpaceElement('space');
const multiChoice = new Kuc.MultiChoice({
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
  value : ['Orange'],
  selectedIndex: [0],
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(multiChoice);

multiChoice.addEventListener('change', event => {
  console.log(event);
});
```
