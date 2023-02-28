---
id: version-1.10.0-tabs
title: Tabs
sidebar_label: Tabs
original_id: tabs
---

## Overview

A multiple tabs component that can switch displaying contents with buttons.

<div class="sample-container" id="tabs">
  <div id="sample-container__components"></div>
</div>
<script src="/js/samples/desktop/tabs.js"></script>

---

## Specification

### Property
Here is a list of properties that can be used for modifying the component:

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| id | string | ""  | Component id name | |
| value | string | ""  | Component id name | The first tab will be displayed if the `value` is unspecified or there is no matching value in items. |
| borderVisible | boolean | true  | Show/Hide the border surrounding the content | |
| visible | boolean | true | Show/Hide the component | |
| items | Array\<Item> | [] | List of items for tab will be displayed | If the items is not an array, the error message 'items' property is not array. will throw in window console. |
| Item.content | string/HTMLElement | "" | Tab content | |
| Item.label | string | "" | Tab name | |
| Item.value | string | "" | Tab key | `Item.value` is unique and required.<br>Will result an error if the `Item.value` is duplicated in `items` or not specified |
| Item.disabled | boolean | true | Enable/Disable the tab | |
| Item.visible | boolean | true | Show/Hide the tab | |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler of when selected tab is changed |  It will pass the event object as the argument<br><br>You can receive the following values in event.detail<br><li>event.detail.oldValue : “value” before the change</li><li>event.detail.value : “value” after the change</li> |

### Constructor

Tabs(options)<br>
Here is a list of available constructors:

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | Object that includes component properties | |

---
## Sample Code

> Please check the [package installation](../../getting-started/quick-start.md#installation) method first.

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];
const space = kintone.app.record.getSpaceElement('space');

const firstContent = document.createElement('div');
const textArea = new Kuc.TextArea({
  label: 'フルーツ',
  requiredIcon: true,
  value: 'Apple',
  error: 'エラーです',
  visible: true,
  disabled: false,
  placeholder: '',
});
firstContent.appendChild(textArea);

const secondContent = document.createElement('div');
const dialog = new Kuc.Dialog({
  title: 'Title',
  content: 'Content with Icon',
  footer: 'Footer',
  icon: 'success',
});
const button = new Kuc.Button({ text: 'Button' });
button.addEventListener('click', () => {
dialog.open();
});
secondContent.appendChild(button);

const thirdContent = document.createElement('div');
thirdContent.innerText = 'tab3_content';
const tabs = new Kuc.Tabs({
  borderVisible: true,
  className: 'kuc-tabs-class',
  id: 'sample-id',
  items: [
    {
      label: 'Tab1',
      content: firstContent,
      value: 'tab1',
      disabled: false,
    },
    {
      label: 'Tab2',
      content: secondContent,
      value: 'tab2',
    },
    {
      value: 'tab3',
      label: 'Tab3',
      content: thirdContent,
    },
  ],
  value: 'tab2',
  visible: true,
});
space.appendChild(tabs);

tabs.addEventListener('change', event => {
  console.log(event);
});
```
