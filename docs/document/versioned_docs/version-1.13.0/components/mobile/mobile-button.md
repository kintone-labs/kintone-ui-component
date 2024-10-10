---
id: mobile-button
title: MobileButton
sidebar_label: MobileButton
---

## Overview

The MobileButton component allows the user to create and displays buttons.

import { MobileButtonComponent } from "@site/static/js/samples/mobile/button.jsx"

<MobileButtonComponent />

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name |  |
| id | string | ""  | Component id name |  |
| text | string | ""  | Text to be displayed in buttons | If `content` is unspecified, the value of `text` will be displayed<br/>In other cases, the `text` will be ignored |
| type | string | "normal"  | Button design type | Available options:<br/>"normal" : White (#ffffff)<br/>"submit" : Blue (#206694) |
| content *1 | string/HTMLElement | ""  | The DOM inside button | If a string with HTML is set, it will be automatically converted to HTML and displayed as it is |
| disabled | boolean | false | Enable/Disable the component | |
| visible | boolean | true | Show/Hide the component | |

:::caution
*1: [Security] Kintone UI Component does NOT sanitize this property value. It is the developer's responsibility to escape any user input when using this option so that XSS attacks would be prevented.
:::

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| click | function | Event handler when Clicked | It will pass the event object as the argument |

### Constructor

MobileButton(options)<br/>
Here is a list of available constructors:

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | Object that includes component properties |  |

---

## Sample Code

:::tip
Please check the [package installation](../../getting-started/quick-start.md#installation) method first.
:::

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const header = kintone.mobile.app.getHeaderMenuSpaceElement();

const mobileButton = new Kuc.MobileButton({
  text: 'Submit',
  type: 'submit',
  content: `<div>
              <svg>...</svg>
              <span>Search</span>
            </div>;`,
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
header.appendChild(mobileButton);

mobileButton.addEventListener('click', event => {
  console.log(event);
});
```

---

## Related Articles

- [Mobile timecard customization](../../guides/mobile-timecard-customization.md)
