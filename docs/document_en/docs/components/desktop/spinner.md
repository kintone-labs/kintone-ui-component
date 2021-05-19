---
id: spinner
title: Spinner
sidebar_label: Spinner
---

## Overview

The Spinner component allows the user to display a rolling spinner.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=spinner--document" title="spinner image" width="300px" height="200px"></iframe>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| text | string | ""  | Text to be displayed at the bottom of the loader icon | Displays the default value if the value for text is unspecified or empty |

\*  If the text is unspecified or empty,
consider assigning a visually-hidden class and given the word "Now loading..." in a hidden state for accessibility.

### Constructor

Spinner(options)
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | JSON object that includes component properties | Values in the options are arbitrary |

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

---
## Sample Code

Here is a sample code when all parameters are specified:

```javascript
const spinner = new Kuc.Spinner({
  text: 'now loading...'
});
spinner.open();
spinner.close();
```
