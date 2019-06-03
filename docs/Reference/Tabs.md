# Tabs

## Overview
![Tabs](../img/tabs.PNG)

|Number|	Description|
| --- | --- |
|1|Selected Tab|	
|2|Not selected Tab|
|3|Disabled Tab|	
|4|Tab content|

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
<Summary>Sample</Summary>

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

## Methods
### render()
Get dom element of component.

**Parameter**

None

**Returns**

Dom element

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var button = new kintoneUIComponent.Button({
    text: 'Hello',
    type: 'submit'
});
button.on('click',function(e){
    alert('hello')
})
var tab = new kintoneUIComponent.Tabs({
    items: [
        {
            tabName: "Tab1",
            tabContent: button.render()
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

kintone.events.on('app.record.index.show', function(event) {
    var el = kintone.app.getHeaderMenuSpaceElement()
    el.appendChild(tab.render());
});
```

**React**
```
import { Tabs } from '../src/js/components-react/index';
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
 
kintone.events.on('app.record.index.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.getHeaderSpaceElement()
    );
});
```
</details>

### addItem(item)
Add an item to end of the tab list.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|item|	Object|	Yes|	The new tab to be added.|
|item.tabName|	String|	Yes|	Name of the new tab.|
|item.tabContent|	String|	No|	Content of the new tab.|
|item.isDisabled|	Boolean|	No|	Indicate tab will be disabled when display. <br>Default value: 'false'.|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var tab = new kintoneUIComponent.Tabs({
    items: [
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
    ]
});
kintone.events.on('app.record.index.show', function(event) {
    var el = kintone.app.getHeaderMenuSpaceElement();
    var item = { tabName: "Tab4", tabContent: "This is Tab4", isDisabled: true };

    el.appendChild(tab.render());
    tab.addItem(item);
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
 
    handleClick = () => {
        const item = { tabName: "Tab4", tabContent: "This is Tab4", isDisabled: true };
        this.setState(prevState => ({
            items: prevState.items ? prevState.items.concat([item]) : [item]
        }))
    }
 
    render() {
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} />
                <button onClick={this.handleClick}>Add Item</button>
            </div>
        );
    }
}
 
kintone.events.on('app.record.index.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.getHeaderSpaceElement()
    );
});
```

</details>

### removeItem(index)
Remove item at specific index of tab list.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|index|	Interger|Yes|The position of tab to be removed.<br>If the index does not define a position in the Item, No item will be removed.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var tab = new kintoneUIComponent.Tabs({
    items: [
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
    ]
});
kintone.events.on('app.record.index.show', function(event) {
    var el = kintone.app.getHeaderMenuSpaceElement();

    el.appendChild(tab.render());
    tab.removeItem(0);
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
 
    handleClick = () => {
        this.setState(prevState => {
            if (prevState.items) {
                return prevState.items.splice(0, 1);
            }
            return prevState;
        });
    }
 
    render() {
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} />
                <button onClick={this.handleClick}>Remove Item</button>
            </div>
        );
    }
}
 
kintone.events.on('app.record.index.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.getHeaderSpaceElement()
    );
});
```

</details>

### ()
Get all tabs.

**Parameter**

None

**Return**

The array contains all tabs.

| Name| Type| Description |
| --- | --- | --- |
|items|	Array&lt;Object&gt; | The new tab to be added. |
|items[].tabName | String|	Name of the new tab.|
|items[].tabContent| String|	Content of the tab.|
|items[].isDisabled| Boolean| Indicate tab is disabled when display.|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var tab = new kintoneUIComponent.Tabs({
    items: [
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
    ]
});

kintone.events.on('app.record.index.show', function(event) {
    var el = kintone.app.getHeaderMenuSpaceElement();
    el.appendChild(tab.render());

    var items = tab.getItems();
    items.forEach(function(item) {
        console.log(item);
    });
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
 
    handleClick = () => {
        this.state.items.forEach(item => {
            console.log(item);
        });
    }
 
    render() {
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} />
                <button onClick={this.handleClick}>Get Items</button>
            </div>
        );
    }
}
 
kintone.events.on('app.record.index.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.getHeaderSpaceElement()
    );
});
```

</details>

### getValue()
Remove item at specific index of tab list.

**Parameter**

None

**Return**

| Name| Type| Description |
| --- | --- | --- |
|value|	Interger|The selected tab index.|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var tab = new kintoneUIComponent.Tabs({
    items: [
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
    ]
});

kintone.events.on('app.record.index.show', function(event) {
    var el = kintone.app.getHeaderSpaceElement();
    el.appendChild(tab.render());

    console.log(tab.getValue());
});
```

**React**
```
import { Tabs } from '@kintone/kintone-ui-component';
import React from 'react';
  
export default class Plugin extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                tabName: "Tab1",
                tabContent: 'This is Tab1',
                isDisabled: true
            },
            {
                tabName: "Tab2",
                tabContent: "This is Tab2",
                isDisabled: false
            },
            {
                tabName: "Tab3",
                tabContent: "This is Tab3",
                isDisabled: true
            }
        ];
        this.state = {
            items: items,
            value: 0
        };
    }
  
    render() {
        return (
         <div>
          <Tabs items={this.state.items} value={this.state.value} onSelect={(item, index) => {this.setState({value: index})}} />
          <button onClick={this.handleClick}>Get Value</button>
         </div>
       );
    }
  
    handleClick = () => {
        console.log(this.state.value);
    }
}
```

</details>

### setValue(value)
Set the selected value for the tab.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|value|	Interger| Yes |The selected tab index.|

**Return**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var tab = new kintoneUIComponent.Tabs({
    items: [
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
    ]
});
kintone.events.on('app.record.index.show', function(event) {
    var el = kintone.app.getHeaderSpaceElement();
    el.appendChild(tab.render());

    tab.setValue(1);
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
 
    handleClick = () => {
        this.setState({ value: 0 });
    }
 
    render() {
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} />
                <button onClick={this.handleClick}>Set Value</button>
            </div>
        );
    }
}
 
kintone.events.on('app.record.index.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.getHeaderSpaceElement()
    );
});
```

</details>

### disableItem(tabName)
Disable a tab.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|tabName|String| Yes |The name of tab.|

**Return**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var tab = new kintoneUIComponent.Tabs({
    items: [
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
    ]
});
kintone.events.on('app.record.index.show', function(event) {
    var el = kintone.app.getHeaderSpaceElement();
    el.appendChild(tab.render());

    tab.disableItem('Tab2');
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
 
    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = true;
        this.setState({ items: items });
    }
 
    render() {
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} />
                <button onClick={this.handleClick}>Set disabled</button>
            </div>
        );
    }
}
 
kintone.events.on('app.record.index.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.getHeaderSpaceElement()
    );
});
```

</details>

### enableItem(tabName)
Enable a tab.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|tabName|String| Yes |The name of tab.|

**Return**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var tab = new kintoneUIComponent.Tabs({
    items: [
        {
            tabName: "Tab1",
            tabContent: 'This is Tab1'
        },
        {
            tabName: "Tab2",
            tabContent: "This is Tab2",
            isDisabled: true
        },
    　  {
            tabName: "Tab3",
            tabContent: "This is Tab3"
        }
    ]
});
kintone.events.on('app.record.index.show', function(event) {
    var el = kintone.app.getHeaderSpaceElement();
    el.appendChild(tab.render());

    tab.enableItem('Tab2');
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
                tabContent: 'This is Tab1',
                isDisabled: true
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
 
    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = false;
        this.setState({ items: items });
    }
 
    render() {
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} />
                <button onClick={this.handleClick}>Set disabled</button>
            </div>
        );
    }
}
 
kintone.events.on('app.record.index.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.getHeaderSpaceElement()
    );
});
```

</details>