---
id: version-0.1.5-checkbox
title: CheckBox
sidebar_label: CheckBox
original_id: checkbox
---

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.items|Array&lt;Object&gt;|No|List of items which will be displayed on checkbox.|
|options.items[].value|String|Yes|String value of item <br> If the value is duplicate, the error message will be displayed|
|options.items[].label|String|No|	String label of item|
|options.items[].isDisabled|Boolean|No|Indicate item will be disabled when display. Default value is false.|
|options.value|Array<String>|No|List of checked item.|
|options.isDisabled|Boolean|No|The checkBox will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The checkBox will be visible. <br> Default value: 'true'|

<details class="tab-container" open>
<Summary>View source</Summary>

**Javascript**
```javascript
var checkbox = new kintoneUIComponent.CheckBox ({
       items: [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            },
            {
                label: 'Banana',
                value: 'Banana',
                isDisabled: true
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
     ],
     value: ['Orange', 'Banana']
});
```

**React**
```jsx
import { CheckBox } from '@kintone/kintone-ui-component';
import React from 'react';

export default class Plugin extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            },
            {
                label: 'Banana',
                value: 'Banana',
                isDisabled: true
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            },
        ];
        this.state = {items: items, value: ['Orange']};
    }

    render() {
        return (
            <CheckBox items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
        );
    }
}
```
</details>