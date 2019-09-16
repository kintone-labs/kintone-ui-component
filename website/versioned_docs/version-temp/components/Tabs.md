---
id: version-0.1.5-tabs
title: Tabs
sidebar_label: Tabs
original_id: tabs
---

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | - | --- | ----- |
|options|Object|Yes|An object contains params of constructor.|
|options.items|Array&lt;Object&gt;|No|List of tabs.|
|options.columns[x].tabName|String|Yes|Name of a tab.|
|options.columns[x].tabContent|String|No|The value of an item.|
|options.columns[x].isDisabled|Boolean|No|Indicate if tab will be disabled. <br> Default value: 'false'|
|options.value|Integer|No|Index of selected tab.|

<details class="tab-container" open>
<Summary>View source</Summary>

**Javascript**
```
var tab = new kintoneUIComponent.Tabs({
    items: [
        {
            tabName: "Tab1",
            tabContent: "This is Tab1"
        },
        {
            tabName: "Tab2",
            tabContent: "This is Tab2"
        },
    　  {
            tabName: "Tab3",
            tabContent: "This is Tab3"
        }
　  ]
});
```
**React**
```
import { Tabs } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
 
class Sample extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                tabName: "Tab1",
                tabContent: 'This is Tab1'
            },
            {
                tabName: "Tab2",
                tabContent: "This is Tab2"
            },
            {
                tabName: "Tab3",
                tabContent: "This is Tab3"
            }
        ];
        this.state = { items: items, value: 1};
    }
 
    render() {
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} />
            </div>
        );
    }
}
```
</details>