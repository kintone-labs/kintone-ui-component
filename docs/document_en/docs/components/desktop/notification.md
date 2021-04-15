---
id: notification
title: Notification
sidebar_label: Notification
---

## Overview

Notification displays pop-up notifications.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=notification--documentinfo" title="notification info image" height="70px"></iframe>

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=notification--documentsuccess" title="notification success image" height="70px"></iframe>

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=notification--documenterror" title="notification error image" height="70px"></iframe>

---

## Specification

### Property

A list of available properties. You can update the value with the specified property.

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component Class name | |
| text | string | ""  | Text to be displayed | |
| type | string | "danger"  | Background Color | The following can be specified<br>"danger"  : Red (#e74c3c)<br>"info"  : Blue (#3498db)<br>"success"  : Green (#91c36c) |

### Constructor

Notification(options)
A list of available constructors.

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | JSON object with Component Properties | Values in options are optional |

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
