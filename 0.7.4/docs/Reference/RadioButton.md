# RadioButton

## Overview
![RadioButton](../img/radioButton.PNG)


|Number|	Description|
| --- | --- |
|1|Title|	
|2|	Icon when item is selected|
|3|Value of item|	
|4|Icon when item isn't selected|

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.name|String|Conditional|Name of radio button for submit.<br> Name is required if options exists.<br> If value isn't set, the error message will be displayed.|
|options.items|Array&lt;Object&gt;|No|List of item which displayed in radio button.|
|options.items[x].value|String|Conditional|The value of an item. This is required if <b>options.items[x]</b> is specified.<br>If the value is duplicate, the error will be displayed|
|options.items[x].label|String|No|Display string.|
|options.items[x].isDisabled|Boolean|No|Indicate item will be disabled when display. Default value is false.|
|options.value|String|No|Default selected item.|
|options.isDisabled|Boolean|No|The radio button will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The radio button will be visible. <br> Default value: 'true'|

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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
```javascript
import { RadioButton } from '@kintone/kintone-ui-component';
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

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(radioBtn.render());
```
**React**
```javascript
import { RadioButton } from '@kintone/kintone-ui-component';
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
        this.state = {items: items, value: 'Lemon'};
    }
    render() {
        return (
            <RadioButton name='radio' items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
        );
    }
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>

### addItem(item)
Add an item to end of the radio button list.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|item|	Object|	Yes|The item object will be added.|
|item.value|String|Yes|The value of an item.|
|item.label|String|No|Display string.|
|item.isDisabled|Boolean|No|Indicate item will be disabled when display.<br>Default value: 'false'|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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
            }
        ],
    value: 'Banana'
});

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(radioBtn.render());

radioBtn.addItem({label: 'Lemon', value: 'Lemon', isDisabled: true});
```
**React**
```javascript

import { RadioButton } from '@kintone/kintone-ui-component';
import React from 'react';
import Reactdom from "react-dom";
 
export default class Plugin extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            items: [{label:"Banana",value:"Banana"}],
            value: "Banana"
        };
    }

    render() {
        return (
         <div>
          <RadioButton name='radio' items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
          <button onClick={this.handleClick}>Add Item</button>
         </div>
       );
    }

    handleClick = () => {
      const item = {
        label: 'Lemon',
        value: 'Lemon',
        isDisabled: false
      };
      this.setState(prevState => ({
        items: prevState.items ? prevState.items.concat([item]) : [item]
      }))
    }
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>

### removeItem(index)
Remove item at specific index of radio button list.

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

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(radioBtn.render());

radioBtn.removeItem(0);
```
**React**
```javascript
import { RadioButton } from '@kintone/kintone-ui-component';
import React from 'react';
import Reactdom from "react-dom";
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: true
            }],
            value:"Lemon"
        };
    }

    render() {
        return (
         <div>
          <RadioButton name='radio' items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
          <button onClick={this.handleClick}>Remove Item</button>
         </div>
       );
    }

    handleClick = () => {
     this.setState(prevState => {
         if (prevState.items[0]) {
           if (this.state.value === prevState.items[0].value) {
             prevState.value = undefined;
           }
           prevState.items.splice(0, 1)
           return prevState;
         }
         return prevState;
     });
   };
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>

### getItems()
Get all items in radio button list.

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
 
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(radioBtn.render());

var items = radioBtn.getItems();
items.forEach(function(item) {
    console.log(item);
});
```
**React**
```javascript
import { RadioButton } from '@kintone/kintone-ui-component';
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
        this.state = {items: items};
    }
   
    render() {
        return (
         <div>
          <RadioButton name='radio' items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
          <button onClick={this.handleClick}>Get Items</button>
         </div>
       );
    }
  
    handleClick = () => {
        this.state.items.forEach(item => {
            console.log(item);
        });
    }
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>

### setItems(items)
Set all items of the radio button list.
When using this function in pure js, selected value is released.

**Parameter**

| Name| Type| Required | Description |
| --- | --- | --- | --- |
|options| Object| No |A object contains params of constructor.|
|options.items| Array&lt;Object&gt;| Yes |List of items will be displayed in radio button.|
|options.items[x].value| String| Yes |If the value is duplicate, the error message will be displayed.|
|options.items[x].label| String| No |Display string.|
|options.items[x].isDisabled| Boolean| No |Indicate item will be disabled when display.<br>Default value: 'false'.|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var radioBtn = new kintoneUIComponent.RadioButton({
  name: 'fruit',
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
    }
  ],
  value: 'Banana'
});
 
var body = document.getElementsByTagName('BODY')[0];
body.appendChild(radioBtn.render());
 
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
radioBtn.setItems(newItems);
```
**React**
```javascript
import { RadioButton } from '@kintone/kintone-ui-component';
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
        <RadioButton
          name="fruit"
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
Get the selected item in radio button.

**Parameter**

None

**Returns**

|Name|Type|Description|
|---|---|---|
|value|	String	|The value of the selected item|



<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(radioBtn.render());

console.log(radioBtn.getValue());
```
**React**
```javascript

import { RadioButton } from '@kintone/kintone-ui-component';
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
          <RadioButton name='radio' items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
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
Set the selected item for radio button.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|value|String|	Yes|Selected value in radio button.|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(radioBtn.render());

radioBtn.setValue('Lemon');
```
**React**
```javascript
import { RadioButton } from '@kintone/kintone-ui-component';
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
          <RadioButton name='radio' items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
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
Set the disabled item for the radio button.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|value|String|	Yes|The value of an item in radio button.|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**

```javascript
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

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(radioBtn.render());

radioBtn.disableItem('Orange');
```
**React**

```javascript
import { RadioButton } from '@kintone/kintone-ui-component';
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
          <RadioButton name='radio' items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
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
Set the enabled item for radio button.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|value|String|	Yes|Selected value in radio button.|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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
 
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(radioBtn.render());

radioBtn.enableItem('Banana');
```
**React**
```javascript
import { RadioButton } from '@kintone/kintone-ui-component';
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
          <RadioButton name='radio' items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value})}} />
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

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(radioBtn.render());

radioBtn.on('change', function(value) {
    console.log('on change');
});
```
**React**
```javascript
import { RadioButton } from '@kintone/kintone-ui-component';
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
            <RadioButton name='radio' items={this.state.items} value={this.state.value} onChange={this.handleChange } />
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
Display the radio button.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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
 
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(radioBtn.render());

radioBtn.show();
```
**React**
```javascript
import { RadioButton } from '@kintone/kintone-ui-component';
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
            isVisible:false,
        };
    }
    handleShow=()=>{
        this.setState({isVisible:true})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleShow}>Show</button>
                <RadioButton name='radio' items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value});}} isVisible={this.state.isVisible} />
            </div>
        );
    }
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>

### hide()
Hide the radio button.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(radioBtn.render());

radioBtn.hide();
```
**React**
```javascript
import { RadioButton } from '@kintone/kintone-ui-component';
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
            isVisible:true,
        };
    }
    handleHide=()=>{
        this.setState({isVisible:false})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleHide}>Hide</button>
                <RadioButton name='radio' items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value});}} isVisible={this.state.isVisible} />
            </div>
        );
    }
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>

### disable()
Disabled the radio button.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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
 
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(radioBtn.render());

radioBtn.disable();
```
**React**
```javascript

import { RadioButton } from '@kintone/kintone-ui-component';
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
            isDisabled:false,
        };
    }
    handleDisable=()=>{
        this.setState({isDisabled:true})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleDisable}>Dsiable</button>
                <RadioButton name='radio' items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value});}} isDisabled={this.state.isDisabled} />
            </div>
        );
    }
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>

### enable()
Enabled the radio button.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(radioBtn.render());

radioBtn.enable();
```
**React**
```javascript

import { RadioButton } from '@kintone/kintone-ui-component';
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
            isDisabled:true,
        };
    }
    handleEnable=()=>{
        this.setState({isDisabled:false})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleEnable}>Enable</button>
                <RadioButton name='radio' items={this.state.items} value={this.state.value} onChange={(value) => {this.setState({value});}} isDisabled={this.state.isDisabled} />
            </div>
        );
    }
}
Reactdom.render(<Plugin />, document.getElementById("root"));
```
</details>
