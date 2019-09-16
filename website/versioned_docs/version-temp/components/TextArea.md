---
id: version-0.1.5-textarea
title: TextArea
sidebar_label: TextArea
original_id: textarea
---

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.value|String|No|The value of textarea field.|
|options.isDisabled|Boolean|No|The textarea field will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The textarea field will be visible. <br> Default value: 'true'|

<details class="tab-container" open>
<Summary>View source</Summary>

**Javascript**
```
var textArea = new kintoneUIComponent.TextArea({value: 'textarea'});
```
**React**
```
import {TextArea} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    state = { value: ''}
    render() {
        return (
            <TextArea value={this.state.value} onChange={(value) => {this.setState({value})}} />
        );
    }
}

```
</details>