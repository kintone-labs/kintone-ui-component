---
id: search-box-customization
Title: Search Box Customization
sidebar_Label: Custom Search box
---

## Overview
This section describes how to create the search box by using the kintone UI's Text component, Button component, and the Notification component.

## Completed image
The complete image of the search box is as follows:

#### Desktop version
![Search box (Desktop)](assets/desktop_search_box.png) 

#### Mobile version
![Search box (MOBILE)](assets/mobile_search_box.png) 

## JavaScript and CSS Customization

When you import the UMD file of kintone UI Component to the app, you can upload the JavaScript files by following these steps:  
How to upload a file [Quick Start](../getting-started/quick-start.md)  For details.

### Display A Search Box

Use the Text component and the Button component to display the search box.  
You can use the placeholder property of the Text component to describe the contents of the entry.  
If you want to enable the mobile version, you can do so by using the MobileButton component for mobile.

```javascript
const header = kintone.app.getHeaderMenuSpaceElement();

// Show entry fields and buttons in the search box
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

### Search character Check

The Button component can specify a click event.  
In this case, the following process is added.

- When you click a button, check whether the characters entered are full-width characters or not.
- If the input value is not a full-width character, assigned the error message.
- Initialize the display message by substituting the empty character with the error message in the text.error property.

```javascript
const button = new Kuc.Button({
  type: 'submit',
  text: 'Search',
  id: 'kuc_button'
});

// Add the process of click events to the displayed buttons
button.addEventListener('click', event => {      
  const keyword = text.value;
  const errorMessage = 'Only full-width can be entered';
  // Initialize displayed messages
  text.error = ''; 
  
  // Determining full-width characters
  if (!keyword.match(/^[^\x01-\x7E\xA1-\xDF]+$/)) {
    // Interrupt the process by displaying an error message except for EM
    text.error = errorMessage;
    return;
  }
});
```

### Component Proliferation bug countermeasures

The id property is used to determine whether the component is already displayed and to prevent the proliferation bug.

```javascript
// Prevent growth bug with ID granted by property
if (document.getElementById('kuc_text') !== null) {
  return event;
}

const header = kintone.app.getHeaderMenuSpaceElement();
const text = new Kuc.Text({
  placeholder: 'Enter keywords',
  id: 'kuc_text' // Add ID
});
```

### Show results in notifications

Displays the message for success or failure in the REST API runtime using the Notification component.  
The Notification is invoked using the `open()` method and the Type property will set the background color.  

For this example, it is set to be displayed in the following situation:  

- When no records are found
- When the REST API fails to execute

```javascript
const app = kintone.app.getId();
const params = {
  app: app,
  query: 'text like "' + keyword + '"'
};

kintone.api(kintone.api.url('/k/v1/records', true), 'GET', params).then(resp => {
  if (resp.records.length !== 0) {
    // Process of displaying record retrieval results
    const url = '?view=' + id + '&q=f6054049%20like%20' + '"' + keyword + '"';
    window.location.replace(url);
  } else if (resp.records.length === 0) {
    // Process when no record result is found
    const info = new Kuc.Notification({
      text: 'No records',
      type: 'info' // Blue background color is set
    });
    info.open();　// Show info
  }
}).catch(error => {
  // Process when REST API error occurs
  const errmsg = 'An error occurred while retrieving the record.';
  if (error.message !== undefined) {
    errmsg += '\n' + error.message;
  }
  const alert = new Kuc.Notification({
    text: errmsg
    // If the type property is not specified, the red background color is set
  });
  alert.open();　// Show alert
});
```

## Conclusion

How is it working out for you? This section explains how to create a search box using the kintone UI Component.  
We hope you can easily develop kintone customization by using the Kintone UI Component library.

> This article will be reviewed by kintone and Google Chrome as of February, 2021.  
> In addition, the version of kintone UI Component that is used for customization is v1.0.0.
