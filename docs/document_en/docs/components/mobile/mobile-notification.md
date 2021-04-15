---
id: mobile-notification
title: MobileNotification
sidebar_label: MobileNotification
---

## Overview

MobileNotification displays notifications of pop-ups.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=mobile-notification--document" title="mobile notification image" height="70px"></iframe>

---

## Specification

### Property

A list of available properties. You can update the value with the specified property.

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component Class name | |
| text | string | ""  | Text to be displayed | |

### Constructor

MobileNotification(options)
A list of available constructors.

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | JSON object with Component Properties | Values in options are optional |

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
