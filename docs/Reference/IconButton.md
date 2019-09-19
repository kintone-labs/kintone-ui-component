# IconButton

## Overview
![IconButton](../img/iconButton.PNG)

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.color|String|No |Color of icon button:<ul><li>  'gray'</li><li>'blue'</li><li>'red'</li><li>'green'</li><li>'transparent'</li></ul>Default value is 'gray'.|
|options.size|String|No|Size of icon button:<ul><li> 'normal'</li><li> 'small'</li></ul> Default value is 'normal'.|
|options.shape|String|No|The shape of of button. The value is one of::<ul><li> 'circle'</li><li> 'normal'</li></ul> Default value is 'circle'.|
|options.type|String|No|The type of of button. The value is one of: <ul><li> 'insert'</li><li> 'remove'</li><li> 'close'</li><li> 'file'</li><li> 'right'</li><li> 'left'</li></ul> Default value is 'insert'.|
|options.isDisabled|Boolean|No|The icon button will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The icon button will be visible. <br> Default value: 'true'|

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var insertBtn = new kintoneUIComponent.IconButton({type: 'insert',color:'blue', size: 'small'});
```

**React**
```javascript
import { IconButton } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <IconButton type='insert' size='small' color='blue' />
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
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());
```

**React**
```javascript
import { IconButton } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <IconButton type='insert' size='small' color='blue' />
        );
    }
}
```
</details>

### setColor(color)
Change color of icon button.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|color|String|Yes|The color of the button. The value is one of the following: <ul><li>  'gray'</li><li> 'blue'</li><li> 'red'</li><li> 'green'</li><li>'transparent'</li></ul> Default value is 'gray'.|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());
iconBtn.setColor('green');
```

**React**
```javascript
import { IconButton } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
     constructor(props) {
      super(props);
      this.state={
          color:"red",
      }
    }
    handleSetColor=()=>{
        this.setState({color:"blue"})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleSetColor}>Set Color</button>
                <IconButton type='insert' color={this.state.color} />
            </div>
        );
    }
}
```
</details>

### setShape(shape)
Change shape of icon button.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|shape|String|Yes|The shape of the button. The value is one of the following: <ul><li>  'circle'</li><li> 'normal'</li></ul> Default value is 'circle'.|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());
iconBtn.setShape('normal');
```

**React**
```javascript
import { IconButton } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          color:"red",
          shape:"circle"
      }
    }
    handleSetShape=()=>{
        this.setState({shape:"normal"})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleSetShape}>Set Shape</button>
                <IconButton type='insert' color={this.state.color} shape={this.state.shape}/>
            </div>
        );
    }
}
```
</details>

### setSize(size)
Change size of icon button.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|size|String|Yes|The size of the button. The value is one of the following: <ul><li>  'normal'</li><li> 'small'</li></ul> Default value is 'normal'.|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());

iconBtn.setSize('small');
```

**React**
```javascript
import { IconButton } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          color:"red",
          size:"normal"
      }
    }
    handleSetSize=()=>{
        this.setState({size:"small"})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleSetSize}>Set Size</button>
                <IconButton type='insert' color={this.state.color} size={this.state.size}/>
            </div>
        );
    }
}
```
</details>

### setType(type)
Set the type of the button.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|type|String|Yes|The type of button. The value is one of following: <ul><li> 'insert'</li><li> 'remove'</li><li>'close'</li><li> 'file'</li><li> 'right'</li><li> 'left'</li></ul> Default value is 'insert'.|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());

iconBtn.setType('remove');
```

**React**
```javascript
import { IconButton } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
   constructor(props) {
      super(props);
      this.state={
          color:"red",
          type:'insert'
      }
    }
    handleSetType=()=>{
        this.setState({type:"remove"})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleSetType}>Set type</button>
                <IconButton  color={this.state.color} type={this.state.type}/>
            </div>
        );
    }
}

```
</details>

### on(eventName, callback)
Register callback for click event

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|eventName|	String|	Yes|Name of event: <ul><li>'click'</li></ul>|
|callback|function |Yes|callback|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());

iconBtn.on('click', function(event) {
    console.log('on click');
});
```

**React**
```javascript
import { IconButton } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <IconButton type='insert' size='small' color='blue' onClick={this.handleClick} />
        );
    }
    handleClick = () => {
        console.log('on click');
    }
}

```
</details>

### show()

Display the icon button.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());

iconBtn.show();
```

**React**
```javascript
import { IconButton } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
  constructor(props) {
      super(props);
      this.state={
          color:"red",
          isVisible:false
      }
    }
    handleShow=()=>{
        this.setState({isVisible:true})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleShow}>Show</button>
                <IconButton  color={this.state.color} isVisible={this.state.isVisible}/>
            </div>
        );
    }
}

```
</details>

### hide()
Hide the icon button.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());

iconBtn.hide();
```

**React**
```javascript
import { IconButton } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
  constructor(props) {
      super(props);
      this.state={
          color:"red",
          isVisible:true
      }
    }
    handleHide=()=>{
        this.setState({isVisible:false})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleHide}>Hide</button>
                <IconButton  color={this.state.color} isVisible={this.state.isVisible}/>
            </div>
        );
    }
}

```
</details>

### disable()
Disabled the icon button.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());

iconBtn.disable();
```

**React**
```javascript
import { IconButton } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
   constructor(props) {
      super(props);
      this.state={
          color:"red",
          isDisabled:false
      }
    }
    handleDisable=()=>{
        this.setState({isDisabled:true})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleDisable}>Disable</button>
                <IconButton  color={this.state.color} isDisabled={this.state.isDisabled}/>
            </div>
        );
    }
}

```
</details>

### enable()
Enabled the icon button.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());

iconBtn.enable();
```

**React**
```javascript
import { IconButton } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
  constructor(props) {
      super(props);
      this.state={
          color:"red",
          isDisabled:true
      }
    }
    handleEnable=()=>{
        this.setState({isDisabled:false})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleEnable}>Enable</button>
                <IconButton  color={this.state.color} isDisabled={this.state.isDisabled}/>
            </div>
        );
    }
}

```
</details>
