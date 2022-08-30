---
id: custom-css
title: Custom CSS
sidebar_label: Custom CSS
---

## Overview

**Kintone UI Component (KUC)** provides some CSS custom properties to create customizable elements by using [CSS inheritance](#css-inheritance), [CSS custom properties](#css-custom-properties) together. By applying CSS selectors to customize CSS custom properties, tree-based and per-instance theming are straightforward to apply.

### CSS inheritance

[CSS inheritance](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance) lets parent elements propagate certain CSS properties to their descendants.

### CSS custom properties

All [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (`--custom-property-name`) inherit their value from their parent. You can use this to make your component's styles configurable from the outside.

KUC will publish some properties for each element and based on that, users can easily customize CSS properties of the element.

## Usage

You can set the value for `--my-background` by using the CSS selectors:

```javascript
<style>
  my-element {
    --my-background: #d9092f;
  }
  .sample-class {
    --my-background: #a8a632;
  }
  #sample-id {
    --my-background: #1ac9b8;
  }
</style>
<my-element></my-element>
<my-element class="sample-class"></my-element>
<my-element id="sample-id"></my-element>
```

> You can find a list of the CSS custom properties in the **Custom CSS** section on each component page.

## Sample code

Here is a sample code when customizing some CSS properties for `Text` component:

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
