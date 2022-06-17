---
id: mobile-notification
title: MobileNotification
sidebar_label: MobileNotification
---

## Overview

The MobileNotification component allows the user to display pop-up notifications.

<div class="sample-container" id="mobile-notification">
  <div id="sample-container__components" class="mobile">
    <iframe id="iframe" title="mobile notification image" width="300px" height="70px"></iframe>
  </div>
</div>
<script src="/js/samples/mobile/mobile-notification.js"></script>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| text | string | ""  | Text to be displayed | |
| duration | number | -1  | Milliseconds to close component | Unit is milliseconds<br>You can specify 0 or a number larger than 0<br>If you specify invalid value (a number less than 0 or is not a number), component is opened and will not be closed automatically |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| close | function | Event handler when the component has been closed | It will pass the event object as the argument |

### Constructor

MobileNotification(options)<br>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | Object that includes component properties |  |

### Method

Here is a list of available methods:

#### open()
Show the MobileNotification

##### Parameter
none

##### Return
none

#### close()
Hide the MobileNotification

##### Parameter
none

##### Return
none

---
## Sample Code

Here is a sample code when all parameters are specified:

```javascript
const mobileNotification = new Kuc.MobileNotification({
  text:  'Error occurred!',
  className: 'options-class',
  duration: 2000
});

mobileNotification.addEventListener('close', event => {
  console.log(event);
});

mobileNotification.open();
mobileNotification.close();
```
