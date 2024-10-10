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
| text | string | ""  | Text to be displayed | |
| type | string | "danger"  | Background color | Available options:<br/>"danger" : Red (#e74c3c)<br/>"info" : Blue (#3498db)<br/>"success" : Green (#91c36c) |
| duration | number | -1  | Milliseconds to close component | Unit is milliseconds<br/>You can specify 0 or a number larger than 0<br/>If you specify invalid value (a number less than 0 or is not a number), component is opened and will not be closed automatically |

### Constructor

Notification(options)<br/>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | Object that includes component properties |  |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| close | function | Event handler when the component has been closed | It will pass the event object as the argument |

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
  type: 'danger',
  className: 'options-class',
  duration: 2000
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
