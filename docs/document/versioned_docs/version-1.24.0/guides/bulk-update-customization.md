---
id: bulk-update-customization
title: Bulk update customization
sidebar_label: Bulk update customization
---

## Overview

This article assumes the following scenario: Dealing with accumulated records that require status approval when using process management. <br/>
Approving multiple records individually is time-consuming. Customization can be used to enable approval in bulk in the Record List page.<br/>
By adding Kintone UI Component to the UI, the user can rapidly create screens that match Kintone.

### Components to use
- [Button](../components/desktop/button.md)
- [Notification](../components/desktop/notification.md)
- [Spinner](../components/desktop/spinner.md)

## Completed image

The completed image of the customized page is as follows:

![Bulk Update](/img/bulk_update.gif)

## What you will need to have ready

Create a dedicated record view for bulk approval of records. The “(Assigned to me)” view can also be used, but for illustrative purposes this article will describe the creation of a separate, dedicated view.<br/>
As an example, this article will show how to create a view that only displays records with the status “In progress” and that are assigned to the logged-in user.

## JavaScript and CSS customization

Import the UMD file of Kintone UI Component to the app and upload the JavaScript file (bulkUpdate.js) with the implementation described below.<br/>
See [Quick Start](../getting-started/quick-start.md) for how to upload a file.<br/>

For this customization, SweetAlert2 is used to create the confirmation dialog box, so the following file must be imported separately:
- https://cdn.jsdelivr.net/npm/sweetalert2@11

A Dialog component is scheduled to be provided in a future version update. In the future it will be possible to use this component instead of manually implementing the confirmation dialog box.

***bulkUpdate.js***

```javascript
kintone.events.on('app.record.index.show', event => {

  // Write the process here

});
```
---
### Place the button in Record List page
---

This section shows how to use the Button component to place a bulk approval button in a Record List page.<br/>
The implementation shown below uses a unique view ID to ensure that the button is only displayed in the dedicated bulk approval view.<br/>
*The view ID can be found in the record view’s URL.

```javascript
if (event.viewId !== 6342505) {
  return event;
}

// Prevent duplication bug with ID granted by property
if (document.getElementById('kuc_button') !== null) {
  return event;
}

const header = kintone.app.getHeaderMenuSpaceElement();
const button = new Kuc.Button({
  type: 'submit',
  text: 'Bulk approval',
  id: 'kuc_button'
});
header.appendChild(button);
```

---
### What happens when the bulk approval button is clicked?
---

The following operation is triggered when the bulk approval button is clicked.<br/>
If there is no applicable record, the processing will be suspended before displaying the confirmation dialog. <br/>
The processing is also suspended if Cancel is selected in the confirmation dialog.<br/>
The Notification component is used to display the message.

```javascript
button.addEventListener('click', () => {

  // When there is no records being processed
  if (event.records.length === 0) {
    const updateAlert = new Kuc.Notification({
      text: 'There are no records being processed.'
    });
    updateAlert.open();
    return;
  }

  Swal.fire({
    title: 'Are you sure to approve the displayed records in bulk?',
    icon: 'question',
    showCancelButton: true
  }).then(resp => {

    // When Cancel is pressed
    if (!resp.isConfirmed) {
      const cancelInfo = new Kuc.Notification({
        text: 'Canceled.',
        type: 'info'
      });
      cancelInfo.open();
      return;
    }

    // Write subsequent process

  });
});
```
Since multiple records are processed, the update may take some time.<br/>
For that reason, a loading screen to be displayed during the update will be implemented.<br/>
The Spinner component is used to implement the loading screen.<br/>

Loading starts by open() method.

```javascript
// Start bulk approval
const spinner = new Kuc.Spinner({
  text: 'now loading...'
});
spinner.open();
```
Next, create parameters used in bulk update processing.

Loop the records being displayed in the Record List page to create array data that contains objects with record IDs and the action names set in the process management settings.<br/>
In obj.action, input the action name set in the process management settings.<br/>
Please note that only records being displayed on the screen will be updated.

```javascript
const records = event.records.map(record => {
  const obj = {};
  obj.id = record.$id.value;
  obj.action = 'Approve';
  return obj;
});

const appId = kintone.app.getId();
const param = {
  app: appId,
  records: records
};
```

A message will be displayed using the Notification component if the records are successfully updated.<br/>
Do not forget to use the close() method of Spinner to end the loading screen.<br/>
The close event added in v1.2.0 can be used to reload the screen when the Close button in the Notification component is clicked.

```javascript
kintone
  .api(kintone.api.url('/k/v1/records/status', true), 'PUT', param)
  .then(() => {
    const successInfo = new Kuc.Notification({
      text: 'Bulk approval was successful!',
      type: 'info'
    });
    successInfo.open();

    // Finish bulk approval
    spinner.close();

    // When close button is pressed
    successInfo.addEventListener('close', () => {
      location.reload();
    });
  })
  .catch(error => {
    // Process when REST API error occurs
  });
```

---
### Display error message
---

The Notification component displays an error message when an error occurs during the process.

```javascript
.catch(error => {
  // Process when REST API error occurs
  let errmsg = 'An error occurred while retrieving the record.';
  if (error.message) {
    errmsg += ' ' + error.message;
  }
  const updateError = new Kuc.Notification({
    text: errmsg
  });
  updateError.open();
  spinner.close();
});
```

:::info
This article was reviewed using Kintone and Google Chrome as of January 2022.<br/>
The version of Kintone UI Component used in this customization is v1.3.0.
:::