---
id: mobile-textarea
title: MobileTextArea
sidebar_label: MobileTextArea
---

## Overview

The MobileTextArea component allows the user to display multiple lines of text element.

<div class="sample-container display-block-mobile" id="mobile-textarea">
  <div id="sample-container__components" class="mobile"></div>
</div>
<script src="/js/samples/mobile/mobile-textarea.js"></script>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| error | string | ""  | Text to be displayed in error | Error will not be displayed if unspecified or left empty |
| id | string | ""  | Component id name | |
| label | string | ""  | Label for the component | Label will not be displayed if unspecified or is empty |
| placeholder | string | ""  | Placeholder text for entry example | |
| value | string | ""  | Text to be displayed | |
| disabled | boolean | false | Enable/Disable the component | |
| requiredIcon | boolean | false | Show/Hide the required icon | |
| visible | boolean | true | Show/Hide the component | |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the value has been changed | It will pass the event object as the argument.<br><br>You can receive the following values in event.detail<br>event.detail.oldValue : Value before the change<br>event.detail.value : Value after the change |
| focus | function | Event handler for the focused time | It will pass the event object as the argument.<br><br>You can receive the following values in event.detail<br>event.detail.value : Value at the time of focus |
| input | function | Event handler when the value has been inputting | It will pass the event object as the argument<br><br>You can receive the following values in event.detail<br>event.detail.data : Value of inserted characters<br>event.detail.value : Value of target element<br><br>*Notes on the value of "event.detail.data"<br>It is inserted characters when inserting text<br>It will be "null" when inserting by "Paste" or "Drag and Drop" or pressing "Enter", "Delete", or "Backspace" |

### Constructor

MobileTextArea(options)<br>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | Object that includes component properties |  |

---
## Sample Code

Here is a sample code when all parameters are specified:

```javascript
const space = kintone.mobile.app.record.getSpaceElement('space');
const mobileTextArea = new Kuc.MobileTextArea({
  label: 'Fruit',
  requiredIcon: true,
  placeholder: 'Apple',
  value: 'Apple',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(mobileTextArea);

mobileTextArea.addEventListener('change', event => {
  console.log(event);
});

mobileTextArea.addEventListener('focus', event => {
  console.log(event);
});

mobileTextArea.addEventListener('input', event => {
  console.log(event);
});
```
