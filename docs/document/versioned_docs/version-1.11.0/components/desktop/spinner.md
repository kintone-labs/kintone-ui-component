---
id: spinner
title: Spinner
sidebar_label: Spinner
---

## Overview

The Spinner component allows the user to display a rolling spinner.

import { SpinnerComponent } from "@site/static/js/samples/desktop/spinner.jsx"

<SpinnerComponent />


---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| text | string | ""  | Text to be displayed at the bottom of the loader icon | Displays the default value if the value for text is unspecified or empty |

:::info
If the text is unspecified or empty, consider assigning a visually-hidden class and given the word "Now loading..." in a hidden state for accessibility.
:::

### Constructor

Spinner(options)<br/>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | Object that includes component properties |  |

### Method
Here is a list of available methods:

#### open()
Show the component

##### Parameter
none

##### Return
none

#### close()
Hide the component

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
| --kuc-spinner-loader-width |
| --kuc-spinner-loader-height |
| --kuc-spinner-loader-color |
| --kuc-spinner-text-font-size |
| --kuc-spinner-text-color |

---
## Sample Code

:::tip
Please check the [package installation](../../getting-started/quick-start.md#installation) method first.
:::

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const spinner = new Kuc.Spinner({
  text: 'now loading...'
});

spinner.open();
spinner.close();
```

---

## Related Articles

- [Bulk update customization](../../guides/bulk-update-customization.md)
- [Attachment customization](../../guides/attachment-customization.md)
