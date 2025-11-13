---
id: mobile-timecard-customization
title: Mobile timecard customization
sidebar_label: Mobile timecard customization
---

## Overview

This section describes how to use the MobileButton component and the MobileNotification component to create a mobile timecard to log punch-in and punch-out times.

## Completed image

The completed image of the timecard customization is as follows:

![Timecard](/img/timecard.png)<br/>
![Stamp message](/img/timecard_notification.png)

## JavaScript and CSS Customization

When you import the Kintone UI Component UMD file to the app, you can upload the JavaScript files by following the steps described below.<br/>
See [Quick Start](../getting-started/quick-start.md) for how to upload a file.

### Show punch-in and punch-out buttons

Use the MobileButton component to display the punch-in and punch-out buttons.

```javascript
kintone.events.on('mobile.app.record.index.show', event => {
  // Prevent button duplication bug
  if (
    document.getElementById('kuc_punch_in_button') ||
    document.getElementById('kuc_punch_out_button')
  ) {
    return event;
  }

  const app = kintone.mobile.app.getId();

  // Display MobileButtons
  const header = kintone.mobile.app.getHeaderSpaceElement();
  const punchInButton = new Kuc.MobileButton({
    text: 'Punch-in',
    type: 'submit',
    id: 'kuc_punch_in_button'
  });
  const punchOutButton = new Kuc.MobileButton({
    text: 'Punch-out',
    type: 'normal',
    id: 'kuc_punch_out_button'
  });
  header.appendChild(punchInButton);
  header.appendChild(punchOutButton);
```

### Adjust the spacing of buttons using CSS

To adjust the spacing of the buttons in CSS, assign a value to the `id` property of the MobileButton component.

```css
@charset "UTF-8";
#kuc_punch_in_button {
  margin: 5px 5px 5px 5px;
}
#kuc_punch_out_button {
  margin: 5px 0px 5px 0px;
}
```

### Create a time stamp

The following function is used to retrieve the current time when you click the punch-in button and the punch-out button:<br/>
Creates a value for the Time field format (HH: MM).

```javascript
// Create time stamp
const getTime = () => {
  const time = new Date();
  const formatedTime = time.getHours() + ':' + time.getMinutes();
  return formatedTime;
};
```

### Reload process after stamping

After the timecard is stamped, the process of updating the screen takes place.

```javascript
// Reload function
const reload = waitSeconds => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(document.location.reload());
    }, waitSeconds * 1000);
  });
};
```

### What happens when the punch-in button is clicked?

The MobileButton component can specify a click event.<br/>
When you click the "punch-in" button, the following process is added.

- Judge whether or not there is a record of the user logging in on the day.
- Show the notification when there is a record.

```javascript
// Process of punchInButton
punchInButton.addEventListener('click', async () => {
  try {
    // Check for records on the day
    const getParams = {
      app,
      query:
        'date = TODAY() and creator in (LOGINUSER()) order by $id desc limit 1 offset 0'
    };
    const resp = await kintone.api(
      kintone.api.url('/k/v1/records', true),
      'GET',
      getParams
    );

    // Display the message if there are any records on the day
    if (resp.records.length) {
      const info = new Kuc.MobileNotification({
        text: 'You have already punched-in!'
      });
      info.open();
      return;
    }
```

After checking for the presence or absence of records, the following process is added.

- Stamp the punch-in time if there is no record.
- Show the notification when punch-in time stamping is completed.

```javascript
// If there is no record on the day, punch-in
if (!resp.records.length) {
  const postParams = {
    app,
    record: {
      start: {
        value: getTime()
      }
    }
  };
  await kintone.api(
    kintone.api.url('/k/v1/record', true),
    'POST',
    postParams
  );

  // Display the message when punch-in
  const info = new Kuc.MobileNotification({
    text: 'Registered a punch-in time!'
  });
  info.open();
  await reload(5);
}
```

### What happens when the punch-out button is clicked?

When you click the punch-out button, the following process takes place in the same way as when you click the punch-in button:

- Judge whether or not there is a record of the user logging in on the day.
- Show the notification when there is no record.
- Stamp the punch-out time if there is a record.
- Show the notification when the punch-out time stamping is completed.

\*The code is omitted because there are a lot of parts that are similar to the punch-in process.<br/>
\*The same process is performed when an error message is displayed.

### Show error messages

If an error occurs during the process, use the MobileNotification component to display the message.

```javascript
} catch (error) {
  console.log(error);
  let errmsg = 'An error occurred.';
  if (error.message) {
    errmsg += ' ' + error.message;
  }
  const alert = new Kuc.MobileNotification({
    text: errmsg
  });
  alert.open();
}
```

:::info
This article was reviewed by Kintone and Google Chrome as of August, 2021.<br/>
In addition, the version of Kintone UI Component that is used for customization is v1.0.5.
:::
