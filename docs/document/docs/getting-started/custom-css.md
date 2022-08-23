---
id: custom-css
title: Custom CSS
sidebar_label: Custom CSS
---

## Overview

**Kintone UI Component** provide some Custom CSS properties for each component by using [CSS inheritance](#css-inheritance) and [CSS variables and custom properties](#css-variables-and-custom-properties) together, it's easy to create themable elements. By applying css selectors to customize CSS custom properties, tree-based and per-instance theming is straightforward to apply.

### CSS inheritance

CSS inheritance lets parent and host elements propagate certain CSS properties to their descendants.

### CSS variables and custom properties

All CSS custom properties (`--custom-property-name`) inherit. You can use this to make your component's styles configurable from outside.

KUC will publicize some properties for each element, based on that users can customize css easily (_For now we will publicize some properties for **Button** and **Text** component first_).

## Usage

You can set the value for `--my-background` by using the CSS element Selector:

```javascript
<style>
  my-element {
    --my-background: #d9092f;
  }
</style>
<my-element></my-element>
```

`--my-background` is configurable per instance of `my-element`:

```javascript
<style>
  my-element {
    --my-background: #d9092f;
  }
  my-element.sample-class {
    --my-background: #a8a632;
  }
   my-element#sample-id {
    --my-background: #1ac9b8;
  }
</style>
<my-element></my-element>
<my-element class="sample-class"></my-element>
<my-element id="sample-id"></my-element>
```

> You can find list Custom CSS properties in the **Custom CSS** section in each component.

## Sample code

Here is a sample code when custom some properties for `Text` component

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
