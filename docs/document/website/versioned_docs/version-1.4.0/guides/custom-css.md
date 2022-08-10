---
id: version-1.4.0-custom-css
title: Custom css
sidebar_label: Custom css
original_id: custom-css
---

## Overview
**Kintone UI Component** provide some Custom CSS properties for each component by using CSS inheritance(*) and CSS variables and custom properties(*) together, it's easy to create themable elements. By applying css selectors to customize CSS custom properties, tree-based and per-instance theming is straightforward to apply.

### CSS inheritance

CSS inheritance lets parent and host elements propagate certain CSS properties to their descendants.

### CSS variables and custom properties

All CSS custom properties (--custom-property-name) inherit. You can use this to make your component's styles configurable from outside.

KUC will publicize some properties for each element, based on that users can customize css easily (*For now we will publicize some properties for Button and Text first).

## Usage
Users of this component can set the value of --my-background, using the my-element tag as a CSS selector:

```javascript
<style>
  my-element {
    --my-background: rgb(67, 156, 144);
  }
</style>
<my-element></my-element>
```

--my-background is configurable per instance of my-element:
```javascript
<style>
  my-element {
    --my-background: rgb(67, 156, 144);
  }
  my-element.stuff {
    --my-background: #111111;
  }
</style>
<my-element></my-element>
<my-element class="stuff"></my-element>
```

## Properties
#### Button
| Name | Description |
| :--- | :--- |
| --kuc-button-width | Button width |
| --kuc-button-background-color | Button backgound-color |
| --kuc-button-background-hover | backgound-color when the button hover |
| --kuc-button-background-active | backgound-color when the button activated |
| --kuc-button-background-focus | backgound-color when the button focused |
| --kuc-button-font-size | font-size of Button |

#### Text
| Name | Description |
| :--- | :--- |
| --kuc-text-input-width | input text width |
| --kuc-text-input-height | input text height |
| --kuc-text-input-font-size | input text font-size |
| --kuc-text-input-color | input text color |

#### Sample code
Here is a sample code when custom some properties for Text
```javascript
<style>
  kuc-text {
    --kuc-text-input-width: 200px;
    --kuc-text-input-height: 200px;
  }
  .sample-class {
    --kuc-text-input-font-size: 16px;
  }
  #sample-id {
    --kuc-text-input-color: #f25b0a;
  }
</style>

<kuc-text></kuc-text>
<kuc-text class="sample-class"></kuc-text>
<kuc-text id="sample-id"></kuc-text>
```
