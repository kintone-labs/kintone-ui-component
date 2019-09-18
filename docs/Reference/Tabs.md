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
|options|Object|Yes|An object contains parameters of constructor.|
|options.items|Array&lt;Object&gt;|No|List of tabs.|
|options.items[x].tabName|String|Optional|Name of a tab-pane. <br> If options.items exist, the name of a tab-pane must be required|
|options.items[x].tabContent|String or DOM |No|The content of a tab-pane.|
|options.items[x].isDisabled|Boolean|No|Indicate if tab-pane will be disabled. <br> Default value: **false**|
|options.value|Integer|No|Index of selected tab-pane. <br>If the value is non-existent, the **INVALID_ARGUMENT** message will be displayed|

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var items = [{
    tabName: "Tab1",
}, {
    tabName: "Tab2",
}, {
    tabName: "Tab3",
}];

var tab = new kintoneUIComponent.Tabs({items});
```
**React**
```javascript
import { Tabs } from '@kintone/kintone-ui-component';
import React from 'react';
 
const items = [{
    tabName: "Tab 1",
}, {
    tabName: "Tab 2",
}, {
    tabName: "Tab 3",
}];

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: items };
    };

    render() {
        return (
            <Tabs items={this.state.items} />
        );
    };
};
```
</details>

## Methods
### render()
Get DOM element of Tabs component.

**Parameter**

None

**Returns**

DOM element

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var items = [{
    tabName: "Tab 1",
}, {
    tabName: "Tab 2",
}, {
    tabName: "Tab 3",
}];

var tab = new kintoneUIComponent.Tabs({items});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(tab.render());
```

**React**
```javascript
import { Tabs } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
 
const items = [{
    tabName: "Tab 1",
}, {
    tabName: "Tab 2",
}, {
    tabName: "Tab 3",
}];
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: items };
    };

    render() {
        return (
            <Tabs items={this.state.items} />
        );
    };
};

ReactDOM.render(<Plugin />, document.getElementById('root'));
```
</details>

### addItem(item)
Add a tab-pane to end of the list of the tabs.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|item|	Object|	Yes|	The new tab-pane to be added.|
|item.tabName|	String|	Yes|	Name of the new tab-pane.|
|item.tabContent|	String or DOM|	No|	Content of the new tab-pane.|
|item.isDisabled|	Boolean|	No|New tab-pane will be disabled when display. <br>Default value: **false**.|

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var items = [{
    tabName: "Tab1",
    tabContent: 'This is Tab1'
}, {
    tabName: "Tab2",
    tabContent: "This is Tab2"
}, {
    tabName: "Tab3",
    tabContent: "This is Tab3"
}];

var tabs = new kintoneUIComponent.Tabs({ items });
var newTab = { tabName: "Tab 4", tabContent: "This is Tab 4" };
var btn = document.createElement('button'); 
btn.textContent = 'Add Tab';
btn.onclick = function() {
    tabs.addItem(newTab);
};
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(tabs.render());
body.appendChild(btn);
```

**React**
```javascript
import {Tabs} from '@kintone/kintone-ui-component';
import React from 'react';

const items = [{
    tabName: "Tab 1",
}, {
    tabName: "Tab 2",
}, {
    tabName: "Tab 3",
}];

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: items };
    };

    addItem = () => {
        const item = { tabName: "Tab 4"};
        items.push(item);
        this.setState({items});
    };
 
    render() {
        return (
            <div>
                <Tabs items={this.state.items} />
                <button onClick={this.addItem}>Add Tab</button>
            </div>
        );
    };
};
```

</details>

### removeItem(index)
Remove a tab-pane at a specific index in the list of the tabs.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|index|	Interger|Yes|The position of a tab-pane to be removed.<br>If the index is undefined, there isn't tab-pane will be removed.|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var items = [{
    tabName: "Tab 1",
    tabContent: 'This is Tab 1'
}, {
    tabName: "Tab 2",
    tabContent: "This is Tab 2"
}, {
    tabName: "Tab 3",
    tabContent: "This is Tab 3"
}];

var tabs = new kintoneUIComponent.Tabs({ items });
var btn = document.createElement('button'); 
btn.textContent = 'Remove Tab';
btn.onclick = function() {
    tabs.removeItem(0);
};

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(tabs.render());
body.appendChild(btn);
```

**React**
```javascript
import {Tabs} from '@kintone/kintone-ui-component';
import React from 'react';
 
const items = [{
    tabName: "Tab 1",
}, {
    tabName: "Tab 2",
}, {
    tabName: "Tab 3",
}];

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: items };
    };

    removeItem = () => {
        items.splice(0, 1);
        this.setState({items});
    };

    render() {
        return (
            <div>
                <Tabs items={this.state.items} />
                <button onClick={this.removeItem}>Remove Tab</button>
            </div>
        );
    };
};
```

</details>

### getItems()
Get all tab-panes of Tabs component.

**Parameter**

None

**Return**

The array contains all tabs.

| Name| Type| Description |
| --- | --- | --- |
|items|	Array&lt;Object&gt; | The list information of tabs |
|items[].tabName | String|Name of a tab-pane.|
|items[].tabContent| String|Content of a tab-pane.|
|items[].isDisabled| Boolean| A tab-pane is disabled when display.|

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var items = [{
    tabName: "Tab 1",
    tabContent: 'This is Tab 1'
}, {
    tabName: "Tab 2",
    tabContent: "This is Tab 2"
}, {
    tabName: "Tab 3",
    tabContent: "This is Tab 3"
}];

var tabs = new kintoneUIComponent.Tabs({ items });
var items = tabs.getItems();

items.forEach(function(item) {
    console.log(item);
});

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(tabs.render());
```

**React**
```javascript
import {Tabs} from '@kintone/kintone-ui-component';
import React from 'react';

const items = [{
    tabName: "Tab 1",
}, {
    tabName: "Tab 2",
}, {
    tabName: "Tab 3",
}];

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: items };
    };

    getItems = () => {
        this.state.items.forEach(item => {
            console.log(item);
        });
    };

    render() {
        return (
            <div>
                <Tabs items={this.state.items} />
                <button onClick={this.getItems}>Get Tabs</button>
            </div>
        );
    };
};
```

</details>

### getValue()
Get index of selected tab-pane.

**Parameter**

None

**Return**

| Name| Type| Description |
| --- | --- | --- |
|value|	Interger|The index position of selected tab-pane.|

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var items = [{
    tabName: "Tab 1",
    tabContent: 'This is Tab 1'
}, {
    tabName: "Tab 2",
    tabContent: "This is Tab 2"
}, {
    tabName: "Tab 3",
    tabContent: "This is Tab 3"
}];

var tabs = new kintoneUIComponent.Tabs({ items, value: 1 });
console.log(tabs.getValue());

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(tabs.render());
```

**React**
```javascript
import {Tabs} from '@kintone/kintone-ui-component';
import React from 'react';
  
const items = [{
    tabName: "Tab1",
    tabContent: 'This is Tab1'
}, {
    tabName: "Tab2",
    tabContent: "This is Tab2"
}, {
    tabName: "Tab3",
    tabContent: "This is Tab3"
}];

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: items, value: 1 };
    };

    getValue = () => {
        console.log(this.state.value);
    };

    render() {
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} />
                <button onClick={this.getValue}>Get value</button>
            </div>
        );
    };
};
```

</details>

### setValue(value)
Set selected tab-pane by index.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|value|	Interger| Yes |The selected tab-pane index.|

**Return**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var items = [{
    tabName: "Tab 1",
    tabContent: 'This is Tab 1'
}, {
    tabName: "Tab 2",
    tabContent: "This is Tab 2"
}, {
    tabName: "Tab 3",
    tabContent: "This is Tab 3"
}];

var tabs = new kintoneUIComponent.Tabs({ items, value: 1 });
var btn = document.createElement('button'); 
btn.textContent = 'Set value';
btn.onclick = function() {
    tabs.setValue(2);
};

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(tabs.render());
body.appendChild(btn);
```

**React**
```javascript
import {Tabs} from '@kintone/kintone-ui-component';
import React from 'react';

const items = [{
    tabName: "Tab1",
    tabContent: 'This is Tab1'
}, {
    tabName: "Tab2",
    tabContent: "This is Tab2"
}, {
    tabName: "Tab3",
    tabContent: "This is Tab3"
}];

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: items, value: 1 };
    };

    setValue = () => {
        this.setState({value: 2});
    };

    render() {
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} />
                <button onClick={this.setValue}>Set value</button>
            </div>
        );
    };
};
```

</details>

### disableItem(tabName)
Disable a tab-pane.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|tabName|String| Yes |The name of tab-pane will be disabled.|

**Return**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var items = [{
    tabName: "Tab 1",
    tabContent: 'This is Tab 1'
}, {
    tabName: "Tab 2",
    tabContent: "This is Tab 2"
}, {
    tabName: "Tab 3",
    tabContent: "This is Tab 3"
}];

var tabs = new kintoneUIComponent.Tabs({ items, value: 1 });
var btn = document.createElement('button'); 
btn.textContent = 'Disable Tab 3';
btn.onclick = function() {
    tabs.disableItem('Tab 3');
};

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(tabs.render());
body.appendChild(btn);
```

**React**
```javascript
import {Tabs} from '@kintone/kintone-ui-component';
import React from 'react';

const items = [{
    tabName: "Tab1",
    tabContent: 'This is Tab1'
}, {
    tabName: "Tab2",
    tabContent: "This is Tab2"
}, {
    tabName: "Tab3",
    tabContent: "This is Tab3"
}];

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: items, value: 1 };
    };

    disableItem = () => {
        let items = [...this.state.items];
        items[2].isDisabled = true;
        this.setState({items: items});
    };

    render() {
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} />
                <button onClick={this.disableItem}>Disable tab3</button>
            </div>
        );
    };
};
```

</details>

### enableItem(tabName)
Enable a tab.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|tabName|String| Yes |The name of tab-pane will be enabled.|

**Return**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var items = [{
    tabName: "Tab 1",
    tabContent: 'This is Tab 1'
}, {
    tabName: "Tab 2",
    tabContent: "This is Tab 2"
}, {
    tabName: "Tab 3",
    tabContent: "This is Tab 3",
    isDisabled: true
}];

var tabs = new kintoneUIComponent.Tabs({ items, value: 1 });
var btn = document.createElement('button'); 
btn.textContent = 'Enable Tab 3';
btn.onclick = function() {
   tabs.enableItem('Tab 3');
};

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(tabs.render());
body.appendChild(btn);
```

**React**
```javascript
import {Tabs} from '@kintone/kintone-ui-component';
import React from 'react';
const items = [{
    tabName: "Tab1",
    tabContent: 'This is Tab1',
    isDisabled: true
}, {
    tabName: "Tab2",
    tabContent: "This is Tab2"
}, {
    tabName: "Tab3",
    tabContent: "This is Tab3"
}];

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: items, value: 1 };
    };

    enableItem = () => {
        const items = [...this.state.items];
        items[0].isDisabled = false;
        this.setState({ items: items });
    };

    render() {
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} />
                <button onClick={this.enableItem}>Enable tab1</button>
            </div>
        );
    };
};
```

</details>   

### on(eventName, callback)
Register callback for an event of Tabs component

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|eventName |String |Yes|Name of event: <ul><li>'clickTabItem'</li></ul>|
|callback|function |Yes|The callback function call when the event occurs|

**Return**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var items = [{
    tabName: "Tab 1",
    tabContent: 'This is Tab 1',
}, {
    tabName: "Tab 2",
    tabContent: "This is Tab 2"
}, {
    tabName: "Tab 3",
    tabContent: "This is Tab 3",
}];

var tabs = new kintoneUIComponent.Tabs({ items, value: 0 });
tabs.on('clickTabItem', (value) => {
    console.log(value);
});

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(tabs.render());
```

**React**
```javascript
import { Tabs } from '@kintone/kintone-ui-component';
import React from 'react';
const items = [{
    tabName: "Tab1",
    tabContent: 'This is Tab1',
}, {
    tabName: "Tab2",
    tabContent: "This is Tab2"
}, {
    tabName: "Tab3",
    tabContent: "This is Tab3"
}];

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: items, value: 0 };
    };

    render() {
        return (
            <Tabs
                items={this.state.items}
                value={this.state.value}
                onClickTabItem={(value) => this.setState({ value })}
            />
        );
    };
};
```

</details>