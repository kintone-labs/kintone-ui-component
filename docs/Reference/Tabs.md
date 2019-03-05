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
|options|Object|No|The object contains params of constructor.|
|options.items|Array&lt;Object&gt;|No|List of items which will be displayed on tabs.|
|options.items[].tabName|String|No|String name of tab|
|options.items[].tabContent|String|No|The value of an item.|
|options.items[].isDisabled|Boolean|No|Indicate item will be disabled when display. Default value is false.|
|options.value|Integer|No|Default selected item.|
|options.isDisabled|Boolean|No|The tab will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The tab will be visible. <br> Default value: 'true'|

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
 
kintone.events.on('app.record.detail.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.record.getSpaceElement('uicomponent')
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
 
kintone.events.on('app.record.detail.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.record.getSpaceElement('uicomponent')
    );
});
```
</details>

### addItem(item)
Add an item to the end of tab list.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|item|Object|Yes|The item object will be added.|
|item.tabName|String|No|Display string.|
|item.tabContent|String|Yes|The value of an item.|
|item.isDisabled|Boolean|No|Indicate item will be disabled when display. <br> Default value: 'false'|

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
 
var item = { label: "Tab4", value: "This is Tab4", isDisabled: true };
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
        const item = { label: "Tab4", value: "This is Tab4", isDisabled: true };
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
 
kintone.events.on('app.record.detail.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.record.getSpaceElement('uicomponent')
    );
});
```
</details>

### removeItem(index)
Remove the specific item from tab list.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|index|	Integer|Yes|The position of retrieved item.|

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
 
kintone.events.on('app.record.detail.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.record.getSpaceElement('uicomponent')
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
 
kintone.events.on('app.record.detail.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.record.getSpaceElement('uicomponent')
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
import { RadioButton } from 'kintone-ui-component';
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
            value: 'Banana'
        };
    }
  
    render() {
        return (
         <div>
          <RadioButton name='radio' items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
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
 
kintone.events.on('app.record.detail.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.record.getSpaceElement('uicomponent')
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
 
kintone.events.on('app.record.detail.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.record.getSpaceElement('uicomponent')
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
 
kintone.events.on('app.record.detail.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.record.getSpaceElement('uicomponent')
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
 
    handleSelect = (value) => {
        this.setState({value});
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
 
kintone.events.on('app.record.detail.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.record.getSpaceElement('uicomponent')
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
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} isVisible={isVisible}/>
                <button onClick={this.handleClick}>Show</button>
            </div>
        );
    }
}
 
kintone.events.on('app.record.detail.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.record.getSpaceElement('uicomponent')
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
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} isVisible={isVisible}/>
                <button onClick={this.handleClick}>Hide</button>
            </div>
        );
    }
}
 
kintone.events.on('app.record.detail.show', function (event) {
    ReactDOM.render(
        <Sample />,
        kintone.app.record.getSpaceElement('uicomponent')
    );
});
```
</details>
