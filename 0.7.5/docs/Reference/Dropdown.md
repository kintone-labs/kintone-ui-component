# Dropdown

## Overview
![Dropdown](../img/dropdown.PNG)

|Number|	Description|
| --- | --- |
|1|	Main area|	
|2|	Content area|
|3|Selected item|	
|4|Not selected item|
|5|Disabled item|
|6|Hover item|

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.items|Array&lt;Object&gt;|No|List of items will be displayed on dropdown.|
|options.items[x].value|String|Conditional|The value of an item. This is required if <b>options.items[x]</b> is specified.<br>If the value is duplicate, the error will be displayed|
|options.items[x].label|String|No|The label of an item.|
|options.items[x].isDisabled|Boolean|No|Indicate item will be disabled when display. Default value is false.|
|options.value|String|No|Default selected value. <br> If the 'options.value' is nonexistent value, the error will be displayed|
|options.isDisabled|Boolean|No|The dropdown will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The dropdown will be visible. <br> Default value: 'true'|


<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

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
```javascript
import { Dropdown } from '@kintone/kintone-ui-component';
import React from 'react';
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        const items = [
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

## Methods
### render()
Get dom element of component.

**Parameter**

None

**Returns**

Dom element

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

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

var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(dropdown.render());

```
**React**
```javascript
import { Dropdown } from '@kintone/kintone-ui-component';
import React from 'react';
import Reactdom from "react-dom";
    
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        const items = [
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
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>



### addItem(item)
Add an item to dropdown list.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|item|	Object|	Yes|The item will be added to dropdown list.|
|item.value|String|Yes|The value of an item.|
|item.label|String|No|Display string.|
|item.isDisabled|Boolean|No|Indicate item will be disabled when display. <br>Default value: 'false' |

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

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

var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(dropdown.render());
    
dropdown.addItem({label: 'Lemon', value: 'Lemon', isDisabled: true});
```
**React**
```javascript
import { Dropdown } from '@kintone/kintone-ui-component';
import React from 'react';
import Reactdom from "react-dom";
   
export default class Plugin extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            items: [{
                label:"hehe",
                value:"123"
            }],
            value: "123"
        };
    }

    render() {
        return (
         <div>
          <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
          <button onClick={this.handleClick}>Add Item</button>
         </div>
        );
    }

    handleClick= () => {
      const item = {
        label: 'Lemon',
        value: 'Lemon',
        isDisabled: false
      };
      this.setState(prevState => ({
        items: prevState.items ? prevState.items.concat([item]) : [item]
      }))
    };
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>



### removeItem(index)
Remove an item at specific position in dropdown's list.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|index|Integer|	Yes|The index of remove item.|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

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

var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(dropdown.render());
var firstItem = dropdown.getItems()[0];
dropdown.removeItem(0);
console.log(firstItem);
```
**React**
```javascript
import { Dropdown } from '@kintone/kintone-ui-component';
import React from 'react';
import Reactdom from "react-dom";
   
export default class Plugin extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
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
            value:"Orange"
        };
        
    }

    handleClick= (index) => {
      let {items}=this.state;      
      items = items.slice(index+1);
      let value = items[0].value;
      this.setState({items,value});
    };

    render() {
        return (
         <div>
          <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
          <button onClick={()=>this.handleClick(0)}>Remove Item</button>
         </div>
        );
    } 
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>

### getItems()
Get all items of the dropdown.

**Parameter**

None

**Returns**

The list contains all items of dropdown.

| Name| Type| Description |
| --- | --- | --- |
|items|List&lt;Object&gt;|List of items objects in dropdown.|
|items[].label|String|Display string.|
|items[].value|String|The value of an item.|
|items[].isDisabled|Boolean|Indicate item was disabled.|

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

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

var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(dropdown.render());

var list = dropdown.getItems();
list.forEach(function(item) {
    console.log(item);
});
```
**React**
```javascript
import { Dropdown } from '@kintone/kintone-ui-component';
import React from 'react';
import Reactdom from "react-dom";
   
export default class Plugin extends React.Component {
    constructor(props) {
    super(props);
    const items = [
      {
        label: "Orange",
        value: "Orange",
        isDisabled: false
      },
      {
        label: "Banana",
        value: "Banana",
        isDisabled: true
      },
      {
        label: "Lemon",
        value: "Lemon",
        isDisabled: true
      }
    ];
    this.state = { items: items, value: "Banana" };
  }

  render() {
    return (
      <div>
        <Dropdown
          items={this.state.items}
          value={this.state.value}
          onChange={value => {
            this.setState({ value });
          }}
        />
        <button onClick={this.handleClick}>Get Items</button>
      </div>
    );
  }

  handleClick = () => {
    this.state.items.forEach(item => {
      console.log(item);
    });
  };
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>

### setItems(items)
Set all items of the dropdown list.
When using this function in pure js, selected value is released.

**Parameter**

| Name| Type| Required | Description |
| --- | --- | --- | --- |
|options| Object| No |A object contains params of constructor.|
|options.items| Array&lt;Object&gt;| Yes |List of items will be displayed on dropdown.|
|options.items[x].value| String| Yes |If the value is duplicate, the error message will be displayed.|
|options.items[x].label| String| No |Display string.|
|options.items[x].isDisabled| Boolean| No |Indicate item will be disabled when display.<br>Default value: 'false'.|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

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
 
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(dropdown.render());
 
var newItems = [
  {
    label: 'Apple',
    value: 'Apple',
    isDisabled: true
  },
  {
    label: 'Grapes',
    value: 'Grapes',
    isDisabled: false
  }
];
dropdown.setItems(newItems);
```
**React**
```javascript
import { DropDown } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
  constructor(opts) {
    super(opts);
    this.state = {
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
    };
  }
 
  render() {
    return (
      <div>
        <Dropdown
          items={this.state.items}
          value={this.state.value}
          onChange={value => {
            this.setState({ value });
          }}
        />
        <button onClick={this.handleClick}>Set Items</button>
      </div>
    );
  }
 
  handleClick = () => {
    const newItems = [
      {
        label: 'Apple',
        value: 'Apple',
        isDisabled: true
      },
      {
        label: 'Grapes',
        value: 'Grapes',
        isDisabled: false
      }
    ];
    this.setState({ items: newItems, value: 'Apple' });
  };
}
```
</details>

### getValue()
Get value of the selected item

**Parameter**

None

**Returns**

|Name|Type|Description|
|---|---|---|
|value	|String	|The value of the selected item|

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

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

var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(dropdown.render());

var selectedItem = dropdown.getValue();
console.log(selectedItem);
```
**React**
```javascript
import { Dropdown } from '@kintone/kintone-ui-component';
import React from 'react';
import Reactdom from "react-dom";
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        const items = [
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
        this.state = {
            items: items,
            value: 'Banana'
        };
    }

    render() {
        return (
         <div>
          <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
          <button onClick={this.handleClick}>Get Value</button>
         </div>
        );
    }
   
    handleClick = () => {
        console.log(this.state.value);
    }
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>



### setValue(value)
Set the selected value for dropdown.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|value|String|	Yes|The value of an Item in dropdown. <br> If the 'value' is nonexistent value, the error will be displayed|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

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

var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(dropdown.render());

dropdown.setValue('Orange');
```
**React**
```javascript
import { Dropdown } from '@kintone/kintone-ui-component';
import React from 'react';
import Reactdom from "react-dom";
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        const items = [
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
        this.state = {
            items: items,
            value: 'Banana'
        };
    }
   
    render() {
        return (
         <div>
          <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
          <button onClick={this.handleClick}>Set Value</button>
         </div>
        );
    }
   
    handleClick = () => {
        this.setState({value: 'Orange'});
    }
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>



### disableItem(value)
Set the disabled item for dropdown.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|value|String|	Yes|The value of an Item in dropdown.|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

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

var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(dropdown.render());

dropdown.disableItem('Orange');
```
**React**
```javascript
import { Dropdown } from '@kintone/kintone-ui-component';
import React from 'react';
import Reactdom from "react-dom";
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        const items = [
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
        this.state = {
            items: items,
            value: 'Banana'
        };
    }
   
   render() {
        return (
         <div>
          <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
          <button onClick={this.handleClick}>Disabled Item</button>
         </div>
        );
    }
 
    handleClick = () => {
        const items = [...this.state.items];
        items[0].isDisabled = true;
 
        this.setState({ items: items });
    }
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>



### enableItem(value)
Set the enabled item for dropdown.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|value|String|	Yes|The value of an Item in dropdown.|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

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

var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(dropdown.render());

dropdown.enableItem('Banana');
```
**React**
```javascript
import { Dropdown } from '@kintone/kintone-ui-component';
import React from 'react';
import Reactdom from "react-dom";
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        const items = [
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
        this.state = {
            items: items,
            value: 'Banana'
        };
    }
   
   render() {
        return (
         <div>
          <Dropdown items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
          <button onClick={this.handleClick}>Enabled Item</button>
         </div>
        );
    }
 
    handleClick = () => {
        const items = [...this.state.items];
        items[1].isDisabled = false;
 
        this.setState({ items: items });
    }
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>



### on(eventName, callBack)
Register callback for change event

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|eventName|	String|	Yes|Name of event: <ul><li>'change'</li></ul>|
|callback|function |Yes|callback|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

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

var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(dropdown.render());

dropdown.on('change', function(value) {
    console.log('on change');
});
```
**React**
```javascript
import { Dropdown } from '@kintone/kintone-ui-component';
import React from 'react';
import Reactdom from "react-dom";
  
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        const items = [
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
        this.state = {
            items: items,
            value: 'Banana'
        };
    }
  
   render() {
        return (
            <Dropdown items={this.state.items}  value={this.state.value} onChange={this.handleChange } />
        );
    }
        handleChange = (value) => {
            this.setState({value});
            console.log('value: ' + value);
        }
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>



### show()
Display the dropdown.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

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

var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(dropdown.render());

dropdown.show();
```
**React**
```javascript
import { Dropdown } from '@kintone/kintone-ui-component';
import React from 'react';
import Reactdom from "react-dom";
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        const items = [
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
        this.state = {
            items: items,
            value: 'Banana',
            isVisible:false
        };
    }
    handleShow=()=>{
        this.setState({isVisible:true})
    }
   render() {
        return (
            <div>
                <button onClick={this.handleShow}>Show</button>
                <Dropdown items={this.state.items}  value={this.state.value} isVisible={this.state.isVisible} />

            </div>
        );
    }
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>



### hide()
Hide the dropdown.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

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

var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(dropdown.render());

dropdown.hide();
```
**React**
```javascript
import { Dropdown } from '@kintone/kintone-ui-component';
import React from 'react';
import Reactdom from "react-dom";
   
export default class Plugin extends React.Component {
    c  constructor(props) {
        super(props);
        const items = [
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
        this.state = {
            items: items,
            value: 'Banana',
            isVisible:true
        };
    }
    handleHide=()=>{
        this.setState({isVisible:false})
    }
   render() {
        return (
            <div>
                <button onClick={this.handleHide}>Hide</button>
                <Dropdown items={this.state.items}  value={this.state.value} isVisible={this.state.isVisible} />
            </div>
        );
    }
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>



### disable()
Disabled the dropdown.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

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

var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(dropdown.render());

dropdown.disable();
```
**React**
```javascript
import { Dropdown } from '@kintone/kintone-ui-component';
import React from 'react';
import Reactdom from "react-dom";
   
export default class Plugin extends React.Component {
      constructor(props) {
        super(props);
        const items = [
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
        this.state = {
            items: items,
            value: 'Banana',
            isDisabled:false
        };
    }
    handleDisable=()=>{
        this.setState({isDisabled:true})
    }
   render() {
        return (
            <div>
                <button onClick={this.handleDisable}>Disable</button>
                <Dropdown items={this.state.items}  value={this.state.value} isDisabled={this.state.isDisabled} />

            </div>
        );
    }
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>

### enable()
Enabled the dropdown.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

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

var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(dropdown.render());

dropdown.enable();
```

**React**
```javascript
import { Dropdown } from '@kintone/kintone-ui-component';
import React from 'react';
import Reactdom from "react-dom";
   
export default class Plugin extends React.Component {
   constructor(props) {
        super(props);
        const items = [
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
        this.state = {
            items: items,
            value: 'Banana',
            isDisabled:true
        };
    }
    handleEnable=()=>{
        this.setState({isDisabled:false})
    }
   render() {
        return (
            <div>
                <button onClick={this.handleEnable}>Enable</button>
                <Dropdown items={this.state.items}  value={this.state.value} isDisabled={this.state.isDisabled} />

            </div>
        );
    }
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>
