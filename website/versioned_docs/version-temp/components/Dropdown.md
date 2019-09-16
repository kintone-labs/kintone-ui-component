---
id: version-0.1.5-dropdown
title: Dropdown
sidebar_label: Dropdown
original_id: dropdown
---

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.items|Array&lt;Object&gt;|No|List of items will be displayed on dropdown.|
|options.items[].value|String|Yes|The value of an item.<br>If the value is duplicate, the error will be displayed|
|options.items[].label|String|No|The label of an item.|
|options.items[].isDisabled|Boolean|No|Indicate item will be disabled when display. Default value is false.|
|options.value|String|No|Default selected value. <br> If the 'options.value' is nonexistent value, the error will be displayed|
|options.isDisabled|Boolean|No|The dropdown will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The dropdown will be visible. <br> Default value: 'true'|


<details class="tab-container" open>
<Summary>View source</Summary>

**Javascript**
```javascript
var dropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: true
        },
        {
            label: 'Banana',
            value: 'Banana',
            isDisabled: false
        }
    ],
    value: 'Banana'
});
```
**React**
```jsx
import { Dropdown } from '@kintone/kintone-ui-component';
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
        this.state = {items: items, value: 'Orange'};
    }

    render() {
        return (
            <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
        );
    }
}
```
</details>