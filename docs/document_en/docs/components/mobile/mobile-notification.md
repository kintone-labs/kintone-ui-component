---
id: mobile-notification
title: MobileNotification
sidebar_label: MobileNotification
---

## Overview

The MobileNotification component allows the user to display pop-up notifications.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=mobile-notification--document" title="mobile notification image" height="70px"></iframe>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| text | string | ""  | Text to be displayed | |

### Constructor

MobileNotification(options)
A list of available constructors.

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | JSON object that includes component properties | Values in the options are arbitrary |

### Method

This is a list of available methods.

#### open()
Show MobileNotification

##### Parameter
none

##### Return
none

#### close()
Hide MobileNotification

##### Parameter
none

##### Return
none

---
## Sample Code

Sample code when all parameters are specified.

```javascript
const mobileNotification = new Kuc.MobileNotification({
  text:  'Error occurred!',
  className: 'options-class'
});
mobileNotification.open();
mobileNotification.close();
```
