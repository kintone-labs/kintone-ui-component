---
id: field-group
title: FieldGroup
sidebar_label: FieldGroup
---

## Overview
The FieldGroup component allows the user to create a content area that can be collapsed and expanded.

import { FieldGroupComponent } from "@site/static/js/samples/desktop/field-group.jsx"

<FieldGroupComponent />

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | "" | Component class name |  |
| id | string | "" | Component id name |  |
| label | string | "" | Label of the component | |
| content *1 | string/HTMLElement | "" | DOM inside content | If a string with HTML is set, it will be automatically converted to HTML and displayed as it is |
| disabled | boolean | false | Enable/Disable the component | |
| expanded | boolean | false | Collapsed/Expanded the component | |
| visible | boolean | true | Show/Hide the component | |

:::caution
*1: [Security] Kintone UI Component does NOT sanitize this property value. It is the developer's responsibility to escape any user input when using this option so that XSS attacks would be prevented.
:::

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the component is collapsed or expanded | It will pass the event object as the argument <br/><br/>You can receive the following values when used in event.detail<br/>event.detail.expanded : The status of "expanded" after the change (boolean) |

### Constructor

FieldGroup(options)<br/>
Here is a list of available constructors:

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | Object that includes component properties | |

## Sample Code
:::tip
Please check the [package installation](../../getting-started/quick-start.md#installation) method first.
:::

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');

const text = new Kuc.Text({
  label: 'Text',
  value: 'orange'
});
const fieldGroup = new Kuc.FieldGroup({
  className: 'options-class',
  id: 'options-id',
  label: 'FieldGroup',
  disabled: false,
  expanded: false,
  visible: true,
  content: text
});

space.appendChild(fieldGroup);

fieldGroup.addEventListener('change', event => {
  console.log(event);
});
```
