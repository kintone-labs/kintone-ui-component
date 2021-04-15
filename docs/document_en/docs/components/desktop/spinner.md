---
id: spinner
title: Spinner
sidebar_label: Spinner
---

## Overview

Spinner, show Roading Spinner.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=spinner--document" title="spinner image" width="300px" height="200px"></iframe>

---

## Specification

### Property

A list of available properties. You can update the value with the specified property.

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| text | string | ""  | Text to be displayed at the bottom of the loader icon | If text is unspecified or empty*Display Default value |

\*  If text is unspecified or empty, the Visually-hidden class must be considered for accessibility.
Grant and"Now loading..."  Display the wording in a visually unseen state

### Constructor

Spinner(options)
A list of available constructors.

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | JSON object with Component Properties | Values in options are optional |

### Method
This is a list of available methods.

#### open()
Show components

##### Parameter
none

##### Return
none

#### close()
Hide Components

##### Parameter
none

##### Return
none

---
## Sample Code

Sample code when all parameters are specified.

```javascript
const spinner = new Kuc.Spinner({
  text: 'now loading...'
});
spinner.open();
spinner.close();
```
