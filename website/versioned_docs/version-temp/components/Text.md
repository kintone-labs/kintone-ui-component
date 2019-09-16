---
id: version-0.1.5-text
title: Text
sidebar_label: Text
original_id: text
---

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.value|String|No|The value of text field. <br> Default value: ''|
|options.isDisabled|Boolean|No|The text field will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The text field will be visible. <br> Default value: 'true'|

<details class="tab-container" open>
<Summary>View source</Summary>

**Javascript**
```
var text= new kintoneUIComponent.Text({value: '12345'});
```
**React**
```
import {Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    state = { value: ''}
    render() {
        return (
            <Text value={this.state.value} onChange={(value) => {this.setState({value})}} />
        );
    }
}

```
</details>