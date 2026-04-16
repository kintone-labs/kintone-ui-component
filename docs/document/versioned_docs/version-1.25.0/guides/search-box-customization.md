---
id: search-box-customization
title: Search box customization
sidebar_label: Search box customization
---

## Overview
This section describes how to create the search box by using the kintone UI Component's Text component, Button component, and the Notification component.

## Completed image
The complete image of the search box is as follows:

#### Desktop version
![Search box (Desktop)](/img/desktop_search_box.png)

#### Mobile version
![Search box (Mobile)](/img/mobile_search_box.png)

## JavaScript and CSS Customization

When you import the UMD file of Kintone UI Component to the app, you can upload the JavaScript files by following these steps:<br/>
You can see how to upload a file in the [Quick Start](../getting-started/quick-start.md).

### Display a search box

Use the Text component and the Button component to display the search box.<br/>
You can use the placeholder property of the Text component to describe the contents of the entry.<br/>
If you want to enable the mobile version, you can do so by using the MobileButton component for mobile.

```javascript
const header = kintone.app.getHeaderMenuSpaceElement();

// Show entry field and button in the search box
const text = new Kuc.Text({
  placeholder: 'Enter keywords',
  id: 'kuc_text'
});

const button = new Kuc.Button({
  type: 'submit',
  text: 'Search',
  id: 'kuc_button'
});
header.appendChild(text);
header.appendChild(button);
```

### Search character check

The Button component can specify a click event.<br/>
In this case, the following process is added.

- When you click a button, check if there is a value in the text box.
- If the input value is blank, assign the error message to the error property and display it.
- Hide the error message by setting the error property to an empty string.

```javascript
const button = new Kuc.Button({
  type: 'submit',
  text: 'Search',
  id: 'kuc_button'
});

// Add the process of click event to the displayed button
button.addEventListener('click', event => {
  const keyword = text.value;
  const errorMessage = 'Please enter a value.';
  // Hide the error message
  text.error = '';

  // Check if there is a value
  if (!keyword) {
    // Show the error message
    text.error = errorMessage;
    return;
  }
});
```

### Component duplication bug prevention

The id property is used to determine whether the component is already displayed and to prevent the duplication bug.

```javascript
// Prevent duplication bug with ID granted by property
if (document.getElementById('kuc_text') !== null) {
  return event;
}

const header = kintone.app.getHeaderMenuSpaceElement();
const text = new Kuc.Text({
  placeholder: 'Enter keywords',
  id: 'kuc_text' // Add ID
});
```

### Show results with Notification

Displays the message for success or failure in the REST API runtime using the Notification component.<br/>
The Notification is invoked using the `open()` method and the type property will set the background color.

For this example, it is set to be displayed in the following situation:

- When no records are found
- When the REST API fails to execute

```javascript
const app = kintone.app.getId();
const params = {
  app: app,
  query: 'text like "' + keyword + '"'
};

kintone
  .api(kintone.api.url('/k/v1/records', true), 'GET', params)
  .then(resp => {
    if (resp.records.length !== 0) {
      // Process of displaying record retrieval result
      const url = '?view=' + id + '&q=f6054049%20like%20"' + keyword + '"';
      window.location.replace(url);
    } else if (resp.records.length === 0) {
      // Process when no record is found
      const info = new Kuc.Notification({
        text: 'No records',
        type: 'info' // Blue background color is set
      });
      info.open(); // Show info
    }
  })
  .catch(error => {
    // Process when REST API error occurs
    let errmsg = 'An error occurred while retrieving the record.';
    if (error.message !== undefined) {
      errmsg += ' ' + error.message;
    }
    const alert = new Kuc.Notification({
      text: errmsg
      // If the type property is not specified, red background color is set
    });
    alert.open(); // Show alert
  });
```

## Conclusion

How is it working out for you? This section explains how to create a search box using the Kintone UI Component.<br/>
We hope you can easily develop kintone customizations by using the kintone UI Component library.

:::info
This article was reviewed by Kintone and Google Chrome as of February, 2021.<br/>
In addition, the version of Kintone UI Component that is used for customizations is v1.0.0.
:::
