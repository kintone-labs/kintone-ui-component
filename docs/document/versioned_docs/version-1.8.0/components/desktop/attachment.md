---
id: attachment
title: Attachment
sidebar_label: Attachment
---

## Overview

The Attachment component allows the user to upload files by selecting or dragging.

import { AttachmentComponent } from "@site/static/js/samples/desktop/attachment.jsx"

<AttachmentComponent />

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
| language *1 | string | "auto"  | Language setting | Available options: "auto", "en", "ja", "zh", "zh-TW"<br/>If setting "auto", it will be according to the HTML lang setting (If the lang setting is other than "en"/"zh"/"zh-TW"/"ja", the language setting will be "en") |
| disabled | boolean | false | Enable/Disable the component | |
| requiredIcon | boolean | false | Show/Hide the required icon | |
| visible | boolean | true | Show/Hide the component | |
| files | Array\<File\> | [] | List of files | You can specify [File object](https://developer.mozilla.org/en-US/docs/Web/API/File) or object contains `name` and `size`<br/>Will result an error if the value of `files` is not an array |
| File.name | string | "" | File name | |
| File.size | string | "" | File size | There are 4 types to show the size:<li>size >= 1073741824: xxx GB</li><li>1073741824 > size >= 1048576: xxx MB</li><li>1048576 > size >= 1024: xxx KB</li><li>1024 > size: xxx bytes</li> |

:::info
*1: The text of "Browse" button and "Drag & drop zone" will be changed according to the `language` property.
:::

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the files have been changed | It will pass the event object as the argument<br/>You can receive the following values in event.detail <li>add-file (Triggered if add any file)<ul><li>event.detail.type: "add-file"</li><li>event.detail.oldFiles: Files before add</li><li>event.detail.files: Files after add</li><li>event.detail.fileIndex: Index number of the added file (Type: Array\<number\>)<ul><li>You can get the added file by "event.detail.files[event.detail.fileIndex[x]]"</li></ul></li></ul></li><li>remove-file (Triggered if remove any file)<ul><li>event.detail.type: "remove-file"</li><li>event.detail.oldFiles: Files before remove</li><li>event.detail.files: Files after remove</li><li>event.detail.fileIndex: Index number of the removed file (Type: Array\<number\>)<ul><li>You can get the removed file by "event.detail.oldFiles[event.detail.fileIndex[x]]"</li></ul></li></ul></li> |

### Constructor

Attachment(options)<br/>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options  | object | \{\} | Object that includes component properties |  |

---
## Sample Code

:::tip
Please check the [package installation](../../getting-started/quick-start.md#installation) method first.
:::

Here is a sample code when all parameters are specified:
``` javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');

const attachment = new Kuc.Attachment({
  label: 'Attachment',
  files: [
    { name: 'file.txt', size: '150' },
    new File(['foo'], 'foo.txt', { type: 'text/plain' })
  ],
  language: 'auto',
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
