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
| Item.label | string | "" | Tab name | |
| Item.value | string | "" | Tab key | `Item.value` is unique and required.<br><li>If `Item.value` is duplicated, the error message 'value' property is not unique in items. will throw in window console.<li>If `Item.value` is NOT set, the error message 'value' property is not specified in items. will throw in window console. |
| Item.content | string/HTMLElement | "" | Tab content | |
| Item.visible | boolean | true | Show/Hide the tab | |
| Item.disabled | boolean | true | Enable/Disable the tab | |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler of when selected tab is changed |  It will pass the event object as the argument<br><br>You can receive the following values in event.detail<br><li>event.detail.oldValue : “value” before the change<li>event.detail.value : “value” after the change |

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
const space = kintone.app.record.getSpaceElement('space');
const tabs = new Kuc.Tabs({
  value:  'tab-a',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  borderVisible: true,
  items: [
    {
      label: 'A',
      value: 'tab-a',
      content: 'a',
      disabled: false,
      visible: true
    },
    {
      label: 'B',
      value: 'tab-b',
      content: 'b',
      disabled: false,
      visible: true
    },
    {
      label: 'C',
      value: 'tab-c',
      content: 'c'
      disabled: true,
      visible: true
    }
  ]
});
space.appendChild(tabs);

tabs.addEventListener('change', event => {
  console.log(event);
});
```
