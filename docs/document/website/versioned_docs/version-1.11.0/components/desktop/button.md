---
id: version-1.11.0-button
title: Button
sidebar_label: Button
original_id: button
---

## Overview

The Button component allows the user to create and display buttons.

<div class="sample-container" id="button">
  <div id="sample-container__components"></div>
</div>
<script src="/js/samples/desktop/button.js"></script>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name |  |
| id | string | ""  | Component id name |  |
| text | string | ""  | Text to be displayed inside the button | If `content` is unspecified, the value of `text` will be displayed<br>In other cases, the `text` will be ignored |
| content | string/HTMLElement | ""  | The DOM inside button | If a string with HTML is set, it will be automatically converted to HTML and displayed as it is |
| type | string | "normal"  | Button design type | Available options:<br>"normal" : Gray (#f7f9fA)<br>"submit" : Blue (#3498db)<br>"alert" : Red (#e74c3c) |
| disabled | boolean | false | Enable/Disable the component | |
| visible | boolean | true | Show/Hide the component | |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| click | function | Event handler when clicked | It will pass the event object as the argument |

### Constructor

Button(options)<br>
Here is a list of available constructors:

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | Object that includes component properties | |

### Custom CSS
> Please check [Custom CSS feature guide](../../getting-started/custom-css.md) at first.

Here is a list of properties that can be used for modifying component style:
#### Property
| Name |
| :--- |
| --kuc-button-width |
| --kuc-button-height |
| --kuc-button-background-color |
| --kuc-button-background-color-hover |
| --kuc-button-background-color-active |
| --kuc-button-background-color-focus |
| --kuc-button-font-size |
| --kuc-button-text-color |

---

## Sample Code

> Please check the [package installation](../../getting-started/quick-start.md#installation) method first.

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const header = kintone.app.getHeaderMenuSpaceElement();

const button = new Kuc.Button({
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
header.appendChild(button);

button.addEventListener('click', event => {
  console.log(event);
});
```

---

## Related Articles

- [Search box customization](../../guides/search-box-customization.md)
- [Cleaning check list customization](../../guides/cleaning-check-list-customization.md)
- [Bulk update customization](../../guides/bulk-update-customization.md)
- [Format setting plug-in](../../guides/format-setting-plugin.md)
- [Attachment customization](../../guides/attachment-customization.md)
