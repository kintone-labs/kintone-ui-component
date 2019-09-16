---
id: version-0.1.5-label
title: Label
sidebar_label: Label
original_id: label
---

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.text|String|No|Caption of label.|
|options.isRequired|Boolean|No|Display the '*' character at the end of the caption. <br> Default value is false.|
|options.textColor|String|No|Color of caption. <br> Can set like 'red' or '#e74c3c' or 'rgba(0, 0, 0, 1)'|
|options.backgroundColor|String|No|Color of background. <br> Can set like 'red' or '#e74c3c' or 'rgba(0, 0, 0, 1)'|
|options.isDisabled|Boolean|No|The label will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The label will be visible. <br> Default value: 'true'|

<details class="tab-container" open>
<Summary>View source</Summary>

**Javascript**
```javascript
var label = new kintoneUIComponent.Label({
    text: 'Name',
    textColor: '#e74c3c',
    backgroundColor: 'yellow',
    isRequired: true
});
```

**React**
```jsx
import { Label } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Label text='Name' textColor='#e74c3c' backgroundColor='yellow' isRequired={true} />
        );
    }
}
```
</details>