---
id: version-1.4.0-dialog
title: Dialog
sidebar_label: Dialog
original_id: dialog
---

## Overview

The Dialog component displays a dialog box.

<div class="sample-container" id="dialog">
  <div id="sample-container__components">
    <iframe id="iframe" title="dialog image" width="700px" height="300px"></iframe>
  </div>
</div>
<script src="/js/samples/desktop/dialog.js"></script>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| icon | string | "" | The icon displayed in upper left of content area | Available options:<li>"info" : ![info](assets/icon-info.png)</li><li>"success" : ![success](assets/icon-success.png)</li><li>"error" : ![error](assets/icon-error.png)</li><li>"warning" : ![warning](assets/icon-warning.png)</li><li>"question" : ![question](assets/icon-question.png)</li><li>"" : No icon</li> |
| title | string | ""  | Header Title | |
| content *1 | string/HTMLElement | ""  | DOM inside content | If a string with HTML is set, it will be automatically converted to HTML and displayed as it is |
| footer *1 | string/HTMLElement | ""  | DOM inside footer | If a string with HTML is set, it will be automatically converted to HTML and displayed as it is |

> *1: [Security] Kintone UI Component does NOT sanitize this property value. It is the developer's responsibility to escape any user input when using this option so that XSS attacks would be prevented.

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

---
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
  footer: 'Footer',
  icon: 'info'
});

dialog.addEventListener('close', event => {
  console.log(event);
});

dialog.open();
dialog.close();
```
