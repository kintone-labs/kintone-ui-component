---
id: dialog
title: Dialog
sidebar_label: Dialog
---

## Overview

Dialog box is displayed.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=dialog--document" title="dialog image" width="700px" height="300px"></iframe>

---

## Specification

### Property

A list of available properties. You can update the value with the specified property.

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| title | string | ""  | Header Title | |
| content | string \|   HTMLElement | ""  | Content Internal DOM | When a string with HTML is assigned, it is automatically converted to HTML and output.<br>The value of the Content property is automatically sanitize internally to prevent XSS attacks.
| footer | string \| HTMLElement | ""  | DOM Inside Footer | When a string with HTML is assigned, it is automatically converted to HTML and output.<br>The value of the Footer property is automatically sanitize internally to prevent XSS attacks |

### Constructor

Dialog(options)
A list of available constructors.

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | JSON object with Component Properties | Values in options are optional |

### Method

This is a list of available methods.

#### open()
Show Dialog

##### Parameter
none

##### Return
none

#### close()
Hide Dialog

##### Parameter
none

##### Return
none

---
## Sample Code

Sample code when all parameters are specified.

```javascript
const dialog = new Kuc.Dialog({
  title:  'Title',
  content: '<div>This is Content</div>',
  footer: 'Footer'
});
dialog.open();
dialog.close();
```
