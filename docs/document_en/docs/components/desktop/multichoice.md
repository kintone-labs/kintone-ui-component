---
id: multichoice
title: MultiChoice
sidebar_label: MultiChoice
---

## Overview

The MultiChoice component allows the user to select multiple values from multiple options.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=multichoice--document" title="multichoice image" height="130px"></iframe>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name  | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| error | string | ""  | Text to be displayed in error | Error will not be displayed if unspecified or empty |
| id | string | ""  | Component id Name | |
| label | string | ""  | Label for the component | Label is not displayed if unspecified or emptied |
| value | string | ""  | Selected value | Nothing is updated if the value is unspecified |
| disabled | boolean | false | Disable the component | |
| requiredIcon | boolean | false | Display the required icon | |
| visible | boolean | true | Show component | |
| items | Array\<Item\> | []  | List of options to display | User will receive error when the value of items is not an array |
| Item.label | string | null | Label text for each option | If `Item.label` is unspecified, the value of Item.value is displayed on the UI |
| Item.value | string | null | Value of each option | Will result an error if there is duplicated value in Item.value |

### Event
A list of events that can be specified.

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the value has been changed | It will pass the event object as the argument.<br><br>You can receive the following values in event.detail<br>event.detail.oldValue  : Value before the change<br>event.detail.value  : Value after changing |

### Constructor

MultiChoice(options)
A list of available constructors.

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | JSON object that includes component properties | Values in the options are arbitrary |

---
## Sample Code

Sample code with all the parameters specified.

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
