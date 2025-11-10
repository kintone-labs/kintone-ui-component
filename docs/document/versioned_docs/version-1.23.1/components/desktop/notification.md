---
id: notification
title: Notification
sidebar_label: Notification
---

## Overview

The Notification component allows the user to display pop-up notifications.

import { NotificationComponent } from "@site/static/js/samples/desktop/notification.jsx"

<NotificationComponent />

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| id | string | "" | Component id name | |
| text | string | ""  | Text to be displayed | If `content` is unspecified, the value of `text` will be displayed<br/>In other cases, the `text` will be ignored |
| type | string | "danger"  | Background color | Available options:<br/>"danger" : Red (#e74c3c)<br/>"info" : Blue (#3498db)<br/>"success" : Green (#91c36c) |
| content *1 | string/HTMLElement | ""  | The DOM to be displayed | If a string with HTML is set, it will be automatically converted to HTML and displayed as it is |
| duration | number | -1  | Milliseconds to close component | Unit is milliseconds<br/>You can specify 0 or a number larger than 0<br/>If you specify invalid value (a number less than 0 or is not a number), component is opened and will not be closed automatically |
| container | HTMLElement | document.body | Target element to append the component | By default, it uses the body of the top-level document object, so it's simply `document.body` most of the time<br/>Will result an error if the value of `container` is not an HTMLElement |

:::caution
*1: [Security] Kintone UI Component does NOT sanitize this property value. It is the developer's responsibility to escape any user input when using this option so that XSS attacks would be prevented.
:::

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| close | function | Event handler when the component has been closed | It will pass the event object as the argument |

### Constructor

Notification(options)<br/>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | Object that includes component properties |  |

### Method

Here is a list of available methods:

#### open()
Show the Notification

##### Parameter
none

##### Return
none

#### close()
Hide the Notification

##### Parameter
none

##### Return
none

### Custom CSS
:::tip
Please check [Custom CSS feature guide](../../getting-started/custom-css.md) at first.
:::

Here is a list of properties that can be used for modifying component style:
#### Property
| Name |
| :--- |
| --kuc-notification-font-size |
| --kuc-notification-color |
| --kuc-notification-background-color |
| --kuc-notification-close-button-background-color |

---
## Sample Code

:::tip
Please check the [package installation](../../getting-started/quick-start.md#installation) method first.
:::

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const notification = new Kuc.Notification({
  text: 'Error occurred!',
  content:
    'Error occurred!<br>Please click the <a href="#">Link</a> for details.',
  type: 'danger',
  className: 'options-class',
  id: 'options-id',
  duration: 2000,
  container: document.body
});

notification.addEventListener('close', event => {
  console.log(event);
});

notification.open();
notification.close();
```

---

## Related Articles

- [Search box customization](../../guides/search-box-customization.md)
- [Cleaning check list customization](../../guides/cleaning-check-list-customization.md)
- [Bulk update customization](../../guides/bulk-update-customization.md)
