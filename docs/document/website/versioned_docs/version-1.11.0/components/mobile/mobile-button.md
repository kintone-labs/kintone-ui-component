---
id: version-1.11.0-mobile-button
title: MobileButton
sidebar_label: MobileButton
original_id: mobile-button
---

## Overview

The MobileButton component allows the user to create and displays buttons.

<div class="sample-container" id="mobile-button">
  <div id="sample-container__components" class="mobile"></div>
</div>
<script src="/js/samples/mobile/mobile-button.js"></script>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name |  |
| id | string | ""  | Component id name |  |
| text | string | ""  | Text to be displayed in buttons | If `content` is unspecified, the value of `text` will be displayed<br>In other cases, the `text` will be ignored |
| content | string/HTMLElement | ""  | The DOM inside button | If a string with HTML is set, it will be automatically converted to HTML and displayed as it is |
| type | string | "normal"  | Button design type | Available options:<br>"normal" : White (#ffffff)<br>"submit" : Blue (#206694) |
| disabled | boolean | false | Enable/Disable the component | |
| visible | boolean | true | Show/Hide the component | |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| click | function | Event handler when Clicked | It will pass the event object as the argument |

### Constructor

MobileButton(options)<br>
Here is a list of available constructors:

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | Object that includes component properties |  |

---

## Sample Code

> Please check the [package installation](../../getting-started/quick-start.md#installation) method first.

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const header = kintone.mobile.app.getHeaderMenuSpaceElement();

const mobileButton = new Kuc.MobileButton({
  text: 'Submit',
  type: 'submit',
  content: `<div>
                <span style="display: inline-block; vertical-align: middle;">
                  <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                  </svg>
                </span>
                <span style="display: inline-block;">Search</span>
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
