---
id: version-0.1.5-radiobutton
title: RadioButton
sidebar_label: RadioButton
original_id: radiobutton
---

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.name|String|Yes|Name of radio button for submit.<br> If value isn't set, the error message will be displayed.|
|options.items|Array&lt;Object&gt;|No|List of item which displayed in radio button.|
|options.items[].value|String|Yes|The value of an item.If the value is duplicate, the error will be displayed|
|options.items[].label|String|No|Display string.|
|options.items[].isDisabled|Boolean|No|Indicate item will be disabled when display. Default value is false.|
|options.value|String|No|Default selected item.|
|options.isDisabled|Boolean|No|The radio button will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The radio button will be visible. <br> Default value: 'true'|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var radioBtn = new kintoneUIComponent.RadioButton({
     name: "fruit",
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
    value: 'Banana'
});
```
**React**
```
import { RadioButton } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
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
        this.state = {items: items, value: 'Lemon'};
    }
    render() {
        return (
            <RadioButton name='radio' items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
        );
    }
}
```
</details>