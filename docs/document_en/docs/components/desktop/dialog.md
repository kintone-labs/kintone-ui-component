---
id: dialog
title: Dialog
sidebar_label: Dialog
---

## Overview

The Dialog component displays a dialog box.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=dialog--document" title="dialog image" width="700px" height="300px"></iframe>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| title | string | ""  | Header Title | |
| content | string \|   HTMLElement | ""  | DOM inside content | When a string with HTML is assigned, it is automatically converted to HTML and output.<br>The value of the content property is automatically sanitize internally to prevent XSS attacks.
| footer | string \| HTMLElement | ""  | DOM inside footer | When a string with HTML is assigned, it is automatically converted to HTML and output.<br>The value of the Footer property is automatically sanitize internally to prevent XSS attacks |

### Constructor

Dialog(options)<br>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | JSON object that includes component properties | Values in the options are arbitrary |

### Method

Here is a list of available methods:

#### open()
Show the Dialog

##### Parameter
none

##### Return
none

#### close()
Hide the Dialog

##### Parameter
none

##### Return
none

---
## Sample Code

Here is a sample code when all parameters are specified:

```javascript
const dialog = new Kuc.Dialog({
  title:  'Title',
  content: '<div>This is Content</div>',
  footer: 'Footer'
});
dialog.open();
dialog.close();
```
