---
id: radio-button
title: RadioButton
sidebar_label: RadioButton
---

## Overview

The RadioButton component allows the user to select one out of several options.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=radio-button--document" title="radio-button image" height="80px"></iframe>

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
| value | string | ""  | Selected value | Nothing will be updated if value is unspecified |
| BorderVisible | Boolean | False | Show/Hide the border | |
| disabled | boolean | false | Enable/Disable the component | |
| requiredIcon | boolean | false | Show/Hide the required icon | |
| visible | boolean | true | Show/Hide the component | |
| items | Array\<Item\> | []  | List of options to select from | Will result an error if the value of items is not an array |
| Item.label | string | null | Text for each option | If `Item.label` is unspecified, the value of Item.value is displayed on the UI |
| Item.value | string | null | Value of each option | Will result an error if there is duplicated value in Item.value |

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
  value : 'Orange',
  itemLayout: 'horizontal',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(radioButton);

radioButton.addEventListener('change', event => {
  console.log(event);
});
```
