---
id: attachment
title: Attachment
sidebar_label: Attachment
---

## Overview

The Attachment component allows the user to upload files by selecting or dragging.

<div class="sample-container" id="attachment">
  <div id="sample-container__components"></div>
</div>
<script src="/js/samples/desktop/attachment.js"></script>

---

## Specification

### Property
Here is a list of properties that can be used for modifying the component:

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| error | string | ""  | Text to be displayed in error | Error will not be displayed if unspecified or left empty |
| id | string | ""  | Component id name | |
| label | string | ""  | Label for the component | Label will not be displayed if unspecified or left empty |
| language *1 | string | "auto"  | Language setting | Available options: "auto", "en", "ja", "zh", "zh-TW"<br>If setting "auto", it will be according to the HTML lang setting (If the lang setting is other than "en"/"zh"/"zh-TW"/"ja", the language setting will be "en") |
| disabled | boolean | false | Enable/Disable the component | |
| requiredIcon | boolean | false | Show/Hide the required icon | |
| visible | boolean | true | Show/Hide the component | |
| files | Array\<File> | [] | The files of the selected | [File objects](https://developer.mozilla.org/en-US/docs/Web/API/File)<br>Or objects contain "name" and "size"
| File.name | string | "" | The file name | |
| File.size | string | "" | The file size | There are 4 types to show the size.<li>size >= 1073741824  :  xxx GB</li><li>1073741824 > size >= 1048576  :  xxx MB</li><li>1048576 > size >= 1024  :  xxx KB</li><li>1024 > size  :  xxx bytes</li> |

> *1 The text of “Browse“ button and “Drag & drop zone” will be changed according to language property

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the selected files has been changed | It will pass the event object as the argument<br>You can receive the following values in event.detail <li>add-file(Triggered if select any file)  <ul><li>event.detail.type: add-file<li>event.detail.oldFiles : Files before added<li>event.detail.files : Files after added<li>event.detail.fileIndex: Index of the added files(Type: number[])<ul><li>We can get the added files by "event.detail.files[event.detail.fileIndex[0]]"</ul></li></ul><li>remove-file(Triggered if remove any file)<ul><li>event.detail.type: remove-file<li>event.detail.oldFiles : Files before removed<li>event.detail.files : Files after removed<li>event.detail.fileIndex: Index of the removed file(Type: number[])<ul><li>We can get the removed file by "event.detail.oldFiles[event.detail.fileIndex[0]]"</ul></li></ul></li> |

### Constructor

Attachment(options)<br>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options  | object | {} | Object that includes component properties |  |

---
## Sample Code

> Please check the [package installation](../../getting-started/quick-start.md#installation) method first.

Here is a sample code when all parameters are specified:
``` javascript
const Kuc = Kucs['1.x.x'];
const space = kintone.app.record.getSpaceElement('space');
const attachment = new Kuc.Attachment({
  label: 'Attachment',
  files: [{name: 'file.txt', size: '150'}],
  language: 'auto'
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false,
  requiredIcon: false
});
space.appendChild(attachment);

attachment.addEventListener('change', event => {
  console.log(event);
});
```