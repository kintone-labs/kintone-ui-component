---
id: version-1.12.0-tooltip
title: Tooltip
sidebar_label: Tooltip
original_id: tooltip
---

## Overview

Tooltip component allows the user to display a short explanation of the target element when hovering or focusing on the element.

<div class="sample-container" id="tooltip">
  <div id="sample-container__components"></div>
</div>
<script src="/js/samples/desktop/tooltip.js"></script>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| id | string | ""  | Component id name | |
| placement | string | top  | The position of the component relative to the target element | Available options: `top`, `left`, `right`, `bottom` |
| title | string | ""  | The text shown in the component | |
| container *1 | string/HTMLElement | "" | The target element to display the component | The `title` value will be displayed in the situation below<ul><li>When the container element is hovered</li><li>When the container element is focused</li></ul> |
| describeChild *2 | boolean | false  | Provide additional information for assistive technologies to describe the contents of the Tooltip | It is used to control how the Tooltip interacts with the child element and provides additional accessibility information|

> *1: Please use **focusable elements** as much as possible and avoid abusing unfocusable elements for accessibility.

> *2: By understanding how to use the describeChild property, you can effectively improve the accessibility and usability of your application.
> - Set `describeChild` to `false` if the Tooltip represents the purpose of the element itself.
>   - When the Tooltip is used to provide a brief explanation or label for the element it is attached to, you can set `describeChild` to `false`
>   - For example, if you have a button with a Tooltip that says "Save", the Tooltip represents the purpose of the button itself. In this case, set `describeChild` to `false` to indicate that the Tooltip explains the button's purpose
> - Set `describeChild` to `true` if the Tooltip represents the description of the element.
>   - When the Tooltip provides additional information or a description about the element it is attached to, set `describeChild` to `true`
>   - For example, if you have an icon representing a question mark, and the Tooltip provides a description or explanation of what the icon represents, set `describeChild` to `true` to indicate that the Tooltip serves as a description of the icon

### Constructor

Tooltip(options)<br>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options  | object | {} | Object that includes component properties |  |

---

## Sample Code

> Please check the [package installation](../../getting-started/quick-start.md#installation) method first.

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');
const getButtonContainer = (text) => {
  const buttonEl = document.createElement("button");
  buttonEl.innerText = text;
  return buttonEl;
};
const tooltip = new Kuc.Tooltip({
  className: "tooltip-class",
  id: "tooltip-id",
  placement: "bottom",
  title: "Does not add if it already exists.",
  container: getButtonContainer("Add"),
  describeChild: false,
});
space.appendChild(tooltip);
```
