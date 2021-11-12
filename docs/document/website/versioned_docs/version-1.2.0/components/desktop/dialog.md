---
id: version-1.2.0-dialog
title: Dialog
sidebar_label: Dialog
original_id: dialog
---

## Overview

The Dialog component displays a dialog box.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=desktop-dialog--document" title="dialog image" width="700px" height="300px"></iframe>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| title | string | ""  | Header Title | |
| content | string \|   HTMLElement | ""  | DOM inside content | When a string with HTML is assigned, it is automatically converted to HTML and output.<br>The value of the content property is automatically sanitized internally to prevent XSS attacks.
| footer | string \| HTMLElement | ""  | DOM inside footer | When a string with HTML is assigned, it is automatically converted to HTML and output.<br>The value of the Footer property is automatically sanitized internally to prevent XSS attacks |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| close | function | Event handler when the component has been closed | It will pass the event object as the argument |

### Constructor

Dialog(options)<br>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | Object that includes component properties | |

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

dialog.addEventListener('close', event => {
  console.log(event);
});

dialog.open();
dialog.close();
```