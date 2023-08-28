---
id: attachment-customization
title: Attachment customization
sidebar_label: Attachment customization
---

## Overview
This article explains how to utilize and customize the Attachment component.<br/>
We assume the following scenario:
1. Create a file object (Blob/ArrayBuffer pattern and simple object pattern) and add it to the KUC (Kintone UI Component) Attachment component
2. Get the file info that the user attached
3. Validate the file type/size and show an error in case it is invalid
4. Upload KUC Attachment component files into the native Kintone Attachment field

### Components to use
- [Attachment](../components/desktop/attachment.md)
- [Button](../components/desktop/button.md)
- [Spinner](../components/desktop/spinner.md)

## Completed image

The completed image of the customized page is as follows:
![attachment customize](/img/attachment_customize.gif)

## What you will need to have ready

Create an app that includes an attachment field with the id "Attachment" and a blank space field with the id "space".

## JavaScript and CSS Customization

When you import the UMD file of Kintone UI Component to the app, you can upload the JavaScript files by following these steps:<br/>
You can see how to upload a file in the [Quick Start](../getting-started/quick-start.md).

### Display custom attachment area
Display the KUC Attachment component and two Button components:
- add custom files to KUC Attachment
- upload to native kintone Attachment

```javascript
const KINTONE_ATTACHMENT_FIELD = 'Attachment'; // kintone attachment field ID
const SPACE_ID = 'space'; // kintone space ID
const Kuc = Kucs['1.x.x'];
kintone.events.on('app.record.detail.show', async event => {
  if (event.record[`${KINTONE_ATTACHMENT_FIELD}`]) {
    const attachment = new Kuc.Attachment({
      files: record[`${KINTONE_ATTACHMENT_FIELD}`].value,
      label: 'KUC Attachment'
    });
    const addCustomFilesButton = new Kuc.Button({
      text: 'add custom files to KUC Attachment'
    });
    const uploadButton = new Kuc.Button({
      text: 'upload to native kintone Attachment',
      type: 'submit'
    });
    const spinner = new Kuc.Spinner();
    const spaceElement = kintone.app.record.getSpaceElement(SPACE_ID);
    const container = document.createElement('div');
    container.appendChild(attachment);
    container.appendChild(addCustomFilesButton);
    container.appendChild(uploadButton);
    spaceElement.appendChild(container);
  }
  return event;
});
```
### Create some file objects and apply them to the KUC Attachment component
Add a click event listener for `addCustomFilesButton`.<br/>
When the button is clicked, it will create three types of file objects as follows:
- Blob/ArrayBuffer files modified to [File object](https://developer.mozilla.org/en-US/docs/Web/API/File)
- Simple object (`{name: "xx", size: "xx"}`)
And add them to the `files` property of the KUC Attachment component.

```javascript
const addCustomFilesButton = new Kuc.Button({
  text: 'add custom files to KUC Attachment'
});
addCustomFilesButton.addEventListener('click', () => {
  attachment.files = attachment.files.concat(initCustomFiles());
});
function initCustomFiles() {
  const blob = new Blob(['this type is blob'], { type: 'text' });
  const buffer = new ArrayBuffer(8);
  const customFiles = [
    arrayBufferToFile(buffer, 'array-buffer-file.txt', 'text'),
    blobToFile(blob, 'blob-file.txt'),
    { name: 'custom-file.txt', size: '150', type: 'text' }
  ];
  return customFiles;
}

function arrayBufferToFile(buffer, filename, type) {
  const blob = new Blob([buffer], { type: type });
  return new File([blob], filename, { type: type });
}

function blobToFile(blob, filename) {
  return new File([blob], filename, { type: blob.type });
}
```
### Get the files info selected by a user and validate the type and size of them
Add a change event listener for `attachment`.<br/>
When a user selects/deletes any files, we can get the file info by the callback of the change event.<br/>
Validate the type/size("text/50MB") of the files and get the index of invalid files.

```javascript
attachment.addEventListener('change', event => {
  console.log(event.detail); // The changed file info
  attachment.error = validateAttachmentFiles(event.detail.files);
});
function validateAttachmentFiles(files) {
  const acceptType = 'text';
  const maxSize = 1024 * 1024 * 50; // 50Mb
  let error = '';
  let typeErrorCount = 0;
  let sizeErrorCount = 0;
  files.forEach((file, index) => {
    let types = [];
    if (file.type) {
      types = file.type.split('/');
    }
    // The file type in the native kintone attachment field file is "contentType"
    if (file.contentType) {
      types = file.contentType.split('/');
    }
    if (!types.includes(acceptType)) {
      typeErrorCount++;
      console.log(`Invalid type file index is ${index}`);
    }
    if (!file.size || parseInt(file.size, 10) > maxSize) {
      sizeErrorCount++;
      console.log(`Invalid size file index is ${index}`);
    }
  });
  if (typeErrorCount > 0) {
    error = `There ${
      typeErrorCount === 1
        ? 'is an invalid type file'
        : 'are ' + typeErrorCount + ' invalid type files'
    }!`;
  }
  if (sizeErrorCount > 0) {
    error = `There ${
      sizeErrorCount === 1
        ? 'is an invalid size file'
        : 'are ' + sizeErrorCount + ' invalid size files'
    }!`;
  }
  return error;
}
```
### Upload KUC Attachment component files into the native Kintone Attachment field
Add a click event listener for `uploadButton`.<br/>
When the button is clicked, show the KUC Spinner component.<br/>
Use the `uploadFile` method of KintoneRestApiClient to upload files to Kintone.<br/>
Then use the fileKeys returned by the upload method to update the Kintone record.<br/>
Finally, close the KUC Spinner component and refresh the page.<br/>
All API calls use [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) or [kintone REST API](https://kintone.dev/en/docs/kintone/rest-api/).

```javascript
const KINTONE_ATTACHMENT_FIELD = 'Attachment'; // kintone attachment field ID
const ID = '$id';
const uploadButton = new Kuc.Button({
  text: 'upload to native kintone Attachment',
  type: 'submit'
});
uploadButton.addEventListener('click', async () => {
  spinner.open();
  const fileKeys = await uploadFiles(attachment.files);
  const params = generateRecordParams(fileKeys, record[`${ID}`].value);
  await updateRecord(params);
  spinner.close();
  location.reload();
});

function generateRecordParams(fileKeys, recordId) {
  const app = kintone.app.getId();
  const record = {};
  record[`${KINTONE_ATTACHMENT_FIELD}`] = { value: fileKeys };
  return { app: app, id: recordId, record: record };
}

async function uploadFiles(files) {
  const fileKeys = [];
  for (const file of files) {
    if (!file.fileKey) {
      const response = await uploadFile(file);
      file.fileKey = response.fileKey;
    }
    fileKeys.push({ fileKey: file.fileKey });
  }
  return fileKeys;
}

function uploadFile(file) {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    const blob = new Blob([file], { type: file.type ?? '' });
    formData.append('__REQUEST_TOKEN__', kintone.getRequestToken());
    formData.append('file', blob, file.name);
    const url = 'https://{domain}//k/v1/file.json';
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onload = () => {
      if (xhr.status === 200) {
        // success
        resolve(JSON.parse(xhr.responseText));
      } else {
        // error
        reject(JSON.parse(xhr.responseText));
      }
    };
    xhr.send(formData);
  });
}

function updateRecord(params) {
  return kintone.api(
    kintone.api.url('/k/v1/record.json', true),
    'PUT',
    params
  );
}
```

:::info
This article was reviewed by Kintone and Google Chrome as of February, 2023.<br/>
In addition, the version of Kintone UI Component that is used for customizations is v1.9.0.
:::
