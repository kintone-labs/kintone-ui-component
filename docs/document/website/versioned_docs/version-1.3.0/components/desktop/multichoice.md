---
id: version-1.3.0-multichoice
title: MultiChoice
sidebar_label: MultiChoice
original_id: multichoice
---

## Overview

The MultiChoice component allows the user to select multiple values from multiple options.

<div class="sample-container" id= "multichoice">
  <div id="sample-container__components"></div>
</div>
<script src="/js/samples/desktop/multichoice.js"></script>

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
| items | Array\<Item\> | []  | List of options to display | Will result an error if the value of `items` is not an array |
| Item.label | string | null | Label text for each option | If `Item.label` is unspecified, the value of `Item.value` is displayed on the UI |
| Item.value | string | null | Value of each option | Can set duplicated value in `Item.value` |
| value *1 | Array\<string\> | []  | Selected value | No option will be selected if the `value` and `selectedIndex` are unspecified<br>If setting duplicated value and not setting `selectedIndex`, the first mapped value item in `Item.value` will be selected and `selectedIndex` will be the index number<br>Will result an error if the value of `items` is not an array |
| selectedIndex *1 | Array\<Number\> | []  | List of index of selected item | It supports specifying which duplicated Item.value will be selected if there is duplicated `Item.value` in `items`<br>If `value` is not set and `selectedIndex` is valid, item that has the index number will be selected<br>If `value` is set with duplicated Item.value and `selectedIndex` value maps with duplicated `Item.value` specified in `value`, item that has the index number will be selected<br>Will result an error if the value of `selectedIndex` is not an array |

> *1: You can set duplicated value in `value` and `Item.value`. In case setting duplicated value, you can handle selected item using `value` and `selectedIndex` property.<br>
> Example: When setting `items = [{label: 'Orange', value: 'fruit'}, {label: 'Apple', value: 'fruit'}, {label: 'Carrot', value: 'vegetable'}, {label: 'Lemon', value: 'fruit'}]`
>
> - If setting `value` and not setting `selectedIndex` as follows:
>   - value = ['fruit', 'vegetable']: The first and third items will be selected.
>   - value = ['meat', 'other']: No item will be selected.
>
> - If not setting `value` and setting `selectedIndex` as follows:
>   - selectedIndex = [0, 1]: The first and second items will be selected.
>   - selectedIndex = [98, 99]: No item will be selected.
>
> - If setting `value` and `selectedIndex` as follows:
>   - value = ['fruit', 'vegetable'], selectedIndex = [1, 3]: The second and third items will be selected.
>   - value = ['fruit', 'fruit', 'vegetable'], selectedIndex = [1, 3]: The second, third, and fourth items will be selected.
>   - value = ['fruit', 'fruit'], selectedIndex = [1, 2, 3]: The first and second items will be selected.<br>
> ※ If both `value` and `selectedIndex` are set at the same time, the priority of `value` will be higher. Therefore, in the first and third examples above, the item corresponding to 3 of selectedIndex will not be selected.

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
  value: ['Orange'],
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
