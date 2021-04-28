---
id: dropdown
title: Dropdown
sidebar_label: Dropdown
---

## Overview

Dropdown can select one of several options.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=dropdown--document" title="dropdown image" height="140px"></iframe>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name  | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| error | string | ""  | Text to be displayed in error | Error will not be displayed if unspecified or empty |
| id | string | ""  | Component ID name | |
| label | string | ""  | Label for the component | Label is not displayed if unspecified or empty |
| value | string | ""  | Selected value | Nothing is updated if the value is unspecified |
| disabled | boolean | false | Disable the component | |
| requiredIcon | boolean | false | Display the required icon | |
| visible | boolean | true | Show the component | |
| items | Array\<Item\> | []  | List of options to display | User will receive error when the value of items is not an array |
| Item.label | string | null | Text label for each option | If `Item.label` is unspecified, the value of Item.value is displayed on the UI |
| Item.value | string | null | Value of each option | Will result an error if there is duplicated value in Item.value |

### Event

A list of events that can be specified.

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the value has been changed | It will pass the event object as the argument<br><br>You can receive the following values in event.detail<br>event.detail.oldValue  : Value before the change<br>event.detail.value  : Value after changing |

### Constructor

Dropdown(options)
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
const dropdown = new Kuc.Dropdown({
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
  value:  'Orange',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(dropdown);

dropdown.addEventListener('change', event => {
  console.log(event);
});
```
