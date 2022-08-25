---
id: version-1.5.0-custom-css
title: Custom CSS
sidebar_label: Custom CSS
original_id: custom-css
---

## Overview

**Kintone UI Component (KUC)** provides some Custom CSS properties for each component by using [CSS inheritance](#css-inheritance) and [CSS variables and custom properties](#css-variables-and-custom-properties) together. It's easy to create customizable elements. By applying CSS selectors to customize CSS custom properties, tree-based and per-instance theming are straightforward to apply.

### CSS inheritance

CSS inheritance lets parent and host elements propagate certain CSS properties to their descendants.

### CSS variables and custom properties

All CSS custom properties (`--custom-property-name`) inherit. You can use this to make your component's styles configurable from outside.

KUC will publish some properties for each element, based on that users can customize CSS easily.

## Usage

You can set the value for `--my-background` by using the CSS element selector:

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

> You can find the list of Custom CSS properties in the **Custom CSS** section on each component page.

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