# Tab

## Overview
![Tab](../img/tabs.PNG)

|Number|	Description|
| --- | --- |
|1|	Selected Tab |	
|2|	Not selected Tab |
|3| Disabled Tab |	
|4| Display item zone |

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|Yes|An object contains params of constructor.|
|options.items|Array&lt;Object&gt;|No|List of tabs.|
|options.items[].tabName|String|Yes|Name of a tab.|
|options.items[].tabContent|String|No|The value of an item.|
|options.items[].isDisabled|Boolean|No|Indicate item will be disabled when display. Default value is false.|
|options.value|Integer|No|Selected tab index.|
|options.isVisible|Boolean|No|The whole tab component is visible or not. <br> Default value: 'true'|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const radioBtn = new kintoneUIComponent.RadioButton({
  items: [{ label: 'Orange', value: 'orange' }, { label: 'Banana', value: 'banana' }],
  value: 'orange',
  name: 'Fruit'
});
 
var tab = new kintoneUIComponent.Tabs({
  items: [
  {
    tabName: "Tab1",
    tabContent: radioBtn.render()
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
var el = kintone.app.getHeaderSpaceElement();
el.appendChild(tab.render());
```

**React**
```javascript
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
```javascript
const radioBtn = new kintoneUIComponent.RadioButton({
  items: [{ label: 'Orange', value: 'orange' }, { label: 'Banana', value: 'banana' }],
  value: 'orange',
  name: 'Fruit'
});
 
var tab = new kintoneUIComponent.Tabs({
  items: [
  {
    tabName: "Tab1",
    tabContent: radioBtn.render()
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
var el = kintone.app.getHeaderSpaceElement();
el.appendChild(tab.render());
```

**React**
```javascript
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
Add an item to the end of tab list.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|item|Object|Yes|The tab that will be added.|
|item.tabName|String|Yes|The tab name.|
|item.tabContent|String|No|The tab content.|
|item.isDisabled|Boolean|No|Indicate tab will be disabled. <br> Default value: 'false'|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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
var el = kintone.app.getHeaderSpaceElement();
el.appendChild(tab.render());
 
var item = { tabName: "Tab4", tabContent: "This is Tab4", isDisabled: true };
tab.addItem(item);
```

**React**
```javascript
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
Remove the specific tab from tab list.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|index|	Integer|Yes|The position of the tab to be removed.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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
var el = kintone.app.getHeaderSpaceElement();
el.appendChild(tab.render());
tab.removeItem(0);
```

**React**
```javascript
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
        kintone.app.getHeaderSpaceElement();
    );
});
```
</details>


### getItems()
Get all items of tha tab.

**Parameter**

None

**Returns**

The list contains all items of the dropdown.

| Name| Type| Description |
| --- | --- | --- |
|items|	Array&lt;Object&gt;|List items of the tab|
|items[].tabName|String|Display string.|
|items[].tabContent|Object|The value of an item.|
|items[].isDisabled|Boolean|Indicate item will be disabled when display.|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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
var el = kintone.app.getHeaderSpaceElement();
el.appendChild(tab.render());
 
var items = tab.getItems();
items.forEach(function(item) {
    console.log(item);
});
```

**React**
```javascript
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
Get the selected values of the tab.

**Parameter**

None

**Returns**

The value of the selected item.

| Name| Type| Description |
| --- | --- | --- |
|value |List&lt;String&gt; |The value of selected items.|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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
var el = kintone.app.getHeaderSpaceElement();
el.appendChild(tab.render());
tab.getValue();
```

**React**
```javascript
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
Set the selected value of tab.

**Parameter**

|Name|	Type|	Required|	Description|
| --- | --- | --- |---|
|value|	Integer |Yes|Index of tab|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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
var el = kintone.app.getHeaderSpaceElement();
el.appendChild(tab.render());
tab.setValue(1);
```

**React**
```javascript
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
Set the disabled item for tab.

**Parameter**

|Name|	Type|	Required|	Description|
| --- | --- | --- |---|
|tabName| String | Yes |The name of tab.|


**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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
var el = kintone.app.getHeaderSpaceElement();
el.appendChild(tab.render());
tab.disableItem('Tab2');
```

**React**
```javascript
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
Set the enabled item for tab.

**Parameter**

|Name|	Type|	Required|	Description|
| --- | --- | --- |---|
|tabName|String|Yes|The name of tab.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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
var el = kintone.app.getHeaderSpaceElement();
el.appendChild(tab.render());
tab.enableItem('Tab2');
```

**React**
```javascript
import { Tabs } from '../src/js/components-react/index';
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

### on(eventName, callBack)
Register callback for select event

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|eventName|	String|	Yes|Name of event: <ul><li>'select'</li></ul>|
|callback|function |Yes|callback|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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
var el = kintone.app.getHeaderSpaceElement();
el.appendChild(tab.render());
tabSuccess.on("select", function(value, index, last) {
  console.log(value.tabName + " : " + value.tabContent);
});
```

**React**
```javascript
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
 
    handleSelect = (value, index) => {
        this.setState({value: index});
        console.log(value.tabName + " : " + value.tabContent);
    }
 
    render() {
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} onSelect={this.handleSelect}/>
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

### show()
Display the tab.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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
  ],
  isVisible: false
});
var el = kintone.app.getHeaderSpaceElement();
el.appendChild(tab.render());
tab.show();
```

**React**
```javascript
import { Tabs } from '../src/js/components-react/index';
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
        this.state = { items: items, value: 1 isVisible: false};
    }
 
    handleClick = () => {
        this.setState({isVisible: true})
    }
 
    render() {
        const {isVisible} = this.state;
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} isVisible={isVisible}/>
                <button onClick={this.handleClick}>Show</button>
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

### hide()
Hide the tab.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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
  ],
  isVisible: true
});
var el = kintone.app.getHeaderSpaceElement();
el.appendChild(tab.render());
tab.hide();
```

**React**
```javascript
import { Tabs } from '../src/js/components-react/index';
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
        this.state = { items: items, value: 1 isVisible: true};
    }
 
    handleClick = () => {
        this.setState({isVisible: false})
    }
 
    render() {
        const {isVisible} = this.state;
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} isVisible={isVisible}/>
                <button onClick={this.handleClick}>Hide</button>
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
