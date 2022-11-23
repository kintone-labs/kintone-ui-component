---
id: attachment-customization
title: Attachment customization
sidebar_label: Attachment customization
---

## Overview
This article assumes the following scenario: 
1. Create a file object (blob/arrayBuffer pattern and simple object pattern) and apply it to KUC Attachment component
2. Get the file info that user attached
3. Validate the file type/size and show error in case it is invalid
4. Apply KUC Attachment component files into native kintone Attachment field

### Components to use
- [Attachment](../components/desktop/attachment.md)
- [Button](../components/desktop/button.md)
- [Spinner](../components/desktop/spinner.md)

# Completed image

The completed image of the customized page is as follows:
![attachment customize](assets/attachment_customize.gif)

## JavaScript and CSS Customization

When you import the UMD file of Kintone UI Component to the app, you can upload the JavaScript files by following these steps:

You can see how to upload a file in the [Quick Start](../getting-started/quick-start.md).


## What you will need to have ready

Create a app that include a attachment field with id "Attachment" and a blank space filed with id "space". 

### Display custom attachment area
Display the kuc attachment component(We can directly add the files in the native kintone attachment field to the files property of kuc attachment) and two buttons:
- add custom files to KUC Attachment
- upload to native kintone Attachment

```javascript
kintone.events.on('app.record.detail.show',async (event)=>{
  if(event.record[`${ATTACHMENT_FIELD_ID}`]){
    const attachment = new Kuc.Attachment({files: record[`${ATTACHMENT_FIELD_ID}`].value, label:'KUC Attachment'});
    const addCustomFilesButton = new Kuc.Button({text: 'add custom files to KUC Attachment'});
    const uploadButton = new Kuc.Button({text: 'upload to native kintone Attachment'});
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
### Create some file objects and apply them to KUC Attachment component
Add a click event listener for addCustomFilesButton. 
When the button was clicked it will create three types of file objects(modify blob/arrayBuffer to [File object](https://developer.mozilla.org/en-US/docs/Web/API/File) and simple object pattern{name: "xx", size: "xx"})
and add them to the file properties of the attachment.
```javascript
const addCustomFilesButton = new Kuc.Button({text: 'add custom files to KUC Attachment'});
addCustomFilesButton.addEventListener('click', ()=>{
  attachment.files = attachment.files.concat(initCustomFiles());
});
function initCustomFiles(){
    const blob = new Blob(['this type is blob'], {type:'txt'});
    const buffer = new ArrayBuffer(8);
    const customFiles = [
      arrayBufferToFile(buffer, 'array-buffer-file.txt', 'txt'),
      blobToFile(blob,'blob-file.txt'),
      {name: 'custom-file.txt', size: '150', type: 'txt'}
    ]
    return customFiles;
  }

function arrayBufferToFile(buffer, filename, type){
  const blob = new Blob([buffer], { type: type });
  return new File([blob], filename, { type: type });
};

function blobToFile(blob, filename){
  return new File([blob], filename , { type: blob.type });
}
```
### Get the files info by user selected and validate the type and size of them
Add a change event listener for attachment.
When user select/delete any files. We can get the file info by the callback of change event.
Validate the type/size("text/50Mb") of file and get the index of invalid files.
```javascript
attachment.addEventListener('change',(event)=>{
  console.log(event.detail);//The changed file info
  attachment.error = validateAttachmentFiles(event.detail.files);
});
function validateAttachmentFiles(files){
  const acceptType = 'text';
  const maxSize = 1024 * 1024 * 50;//50Mb
  let error = '';
  files.forEach((file,index)=>{
    let types = [];
    if(file.type){
      types = file.type.split('/');
    }
    //The file type in the native kintone attachment field file is "contentType"
    if(file.contentType){
      types = file.contentType.split('/');
    }
    if(!types.includes(acceptType)){
        error = 'There is an invalid file type!';
        console.log(`Invalid type file index is ${index}`);
    }
    if(!file.size || parseInt(file.size) > maxSize){
        error = 'There is an invalid file size!'
        console.log(`Invalid size file index is ${index}`);
    }
  });
  return error;
}
```
### Apply KUC Attachment component files into native kintone Attachment field
Add a click event listener for uploadButton.
When the button was clicked the kuc spinner will be displayed. 
Use the "uploadFile" method of KintoneRestApiClient to upload files without fileKey attribute to kintone.
Then use the fileKeys returned by the upload method to generate a new record and update it to the kintone record.
Finally close the kuc spinner and refresh this page
All API calls use [@kintone/rest-api-client](https://github.com/kintone/js-sdk/tree/master/packages/rest-api-client) Friends who need it can try it.

```javascript
const uploadButton = new Kuc.Button({text: 'upload to native kintone Attachment'});
uploadButton.addEventListener('click',async ()=>{
  spinner.open();
  const fileKeys = await uploadFiles(attachment.files);
  const params = generateRecordParams(fileKeys,record[`${ID}`].value)
  await updateRecord(params);
  spinner.close();
  location.reload();
});
function generateRecordParams(fileKeys, recordId){
  const app = kintone.app.getId();
  const record = {};
  record[`${ATTACHMENT_FIELD_ID}`] = {value: fileKeys};
  return {app: app, id:recordId, record: record};
}

async function uploadFiles(files){
  const fileKeys = [];
  for(const file of files){
    if(!file.fileKey){
        const response = await uploadFile({name:file.name, data: file});
        file.fileKey = response.fileKey;
    }
    fileKeys.push({fileKey:file.fileKey});
  }
  return fileKeys;
}

const client = new KintoneRestAPIClient();

function uploadFile(files){
  return client.file.uploadFile({file:files});
}

function updateRecord(params){
  return client.record.updateRecord(params)
}
```

## Conclusion

How is it working out for you?<br>
We hope you will experience a better Kintone development than ever before using the new Kintone UI Component library.

> This article was reviewed by Kintone and Google Chrome as of November, 2022.<br>
> In addition, the version of Kintone UI Component that is used for customizations is v1.8.0.

> The documentation for v0 is a separate site.Please check [here](https://kintone-labs.github.io/kintone-ui-component/latest/).