---
id: notification
title: Notification
sidebar_label: Notification
---

## Overview

The Notification component allows the user to display pop-up notifications.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=notification--documentinfo" title="notification info image" height="70px"></iframe>

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=notification--documentsuccess" title="notification success image" height="70px"></iframe>

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=notification--documenterror" title="notification error image" height="70px"></iframe>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| text | string | ""  | Text to be displayed | |
| type | string | "danger"  | Background Color | The following type can be specified: <br>"danger"  : Red (#e74c3c)<br>"info"  : Blue (#3498db)<br>"success"  : Green (#91c36c) |

### Constructor

Notification(options)
A list of available constructors.

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | JSON object that includes component properties | Values in the options are arbitrary |

### Method

This is a list of available methods.

#### open()
Show notifications

##### Parameter
none

##### Return
none

#### close()
Hiding notifications

##### Parameter
none

##### Return
none

---
## Sample Code

Sample code when all parameters are specified.

```javascript
const notification = new Kuc.Notification({
  text:  'Error occurred!',
  type: 'danger',
  className: 'options-class'
});
notification.open();
notification.close();
```
