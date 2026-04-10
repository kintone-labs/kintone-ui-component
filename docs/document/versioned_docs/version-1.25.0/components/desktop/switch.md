---
id: switch
title: Switch
sidebar_label: Switch
---

## Overview

The Switch component allows the user to toggle between two states.

import { SwitchComponent } from "@site/static/js/samples/desktop/switch.jsx"

<SwitchComponent />

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| checkedText | string | "" | Text to be displayed when the component state is "checked" | |
| className | string | "" | Component class name | |
| id | string | "" | Component id name | |
| label | string | "" | Label for the component | Label will not be displayed if unspecified or left empty |
| labelPlacement | string | "left" | The position where the label is displayed | Available options: `top`, `left`, `right`, `bottom` |
| unCheckedText | string | "" | Text to be displayed when the component state is "unchecked" | |
| checked | boolean | false | Check/Uncheck the component | |
| disabled | boolean | false | Enable/Disable the component | |
| visible | boolean | true | Show/Hide the component | |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the checked state has been changed | It will pass the event object as the argument<br/><br/>You can receive the following values in event.detail<br/>event.detail.checked : Checked state after the change |

### Constructor

Switch(options)<br/>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | Object that includes component properties | |

---

## Sample Code

:::tip
Please check the [package installation](../../getting-started/quick-start.md#installation) method first.
:::

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');

const kucSwitch = new Kuc.Switch({
  label: 'Switch',
  labelPlacement: 'left',
  checkedText: 'ON',
  unCheckedText: 'OFF',
  checked: false,
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(kucSwitch);

kucSwitch.addEventListener('change', event => {
  console.log(event);
});
```
