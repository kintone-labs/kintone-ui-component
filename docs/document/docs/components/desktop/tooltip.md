---
id: tooltip
title: Tooltip
sidebar_label: Tooltip
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
| placement | string | "top"  | The position of the component relative to the target element | Available options: `top`, `left`, `right`, `bottom` |
| title | string | ""  | The text shown in the component | |
| container *1 | string/HTMLElement | "" | The target element to display the component | The `title` value will be displayed in the situation below<ul><li>When the container element is hovered</li><li>When the container element is focused</li></ul> |
| describeChild *2 | boolean | false  | Provide additional information for assistive technologies to describe the contents of the component | It is used to control how the tooltip interacts with the child element and provides additional accessibility information |

> *1: Please use **focusable elements** as much as possible and avoid abusing unfocusable elements for accessibility.

> *2: By understanding how to use the describeChild property, you can effectively improve the accessibility and usability of your application.
> - Set `describeChild` to `false` if the Tooltip represents the purpose of the element itself (provides a brief explanation or label for the element it is attached to).
>   - The `aria-label` attribute will be added to the first child element of the Tooltip component with the value of the `title` property.
>   - For example, if you have a button with a Tooltip that says "Save", the Tooltip represents the purpose of the button itself. In this case, set `describeChild` to `false` to indicate that the Tooltip explains the purpose of the button.
>     ```javascript
>       <kuc-tooltip>
>         <button aria-label=“Save”>Save</button>
>         <div id="tooltip-ID">Save</div>
>       </kuc-tooltip>
>     ```
>    - You can learn more about [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label).

> - Set `describeChild` to `true` if the Tooltip represents the description of the element (provides additional information or a description about the element it is attached to).
>   - The `aria-describedby` attribute will be added to the first child element of the Tooltip component with the value of the ID of the tooltip wrapper element.
>   - For example, if you have an icon that represents a question mark, and the Tooltip provides a description or explanation of what the icon represents. In this case, set `describeChild` to `true` to indicate that the Tooltip serves as a description of the icon.
>     ```javascript
>       <kuc-tooltip>
>         <button aria-describedby=“tooltip-ID”>
>           <span class="icon-question-mark"></span>
>         </button>
>         <div id="tooltip-ID">This is a help icon. Click for more information</div>
>       </kuc-tooltip>
>     ```
>   - You can learn more about [aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

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
const buttonEl = document.createElement('button');
buttonEl.innerText ='Add';

const tooltip = new Kuc.Tooltip({
  title: "Do not add if it exists.",
  container: buttonEl,
  placement: 'bottom',
  describeChild: false,
  className: 'tooltip-class',
  id: 'tooltip-id',
});
space.appendChild(tooltip);
```
