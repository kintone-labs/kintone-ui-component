# Text

## Overview
![Text](../img/text.PNG)

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.value|String|No|The value of text field. <br> Default value: ''|
|options.isDisabled|Boolean|No|The text field will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The text field will be visible. <br> Default value: 'true'|
|options.style|Object|No|The css style of component|
|options.className|String|No|The css class name of component|  

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text= new kintoneUIComponent.Text({value: '12345'});
```
**React**
```javascript
import {Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};
    };
    render() {
        return (
            <Text value={this.state.value} onChange={(value) => {this.setState({value})}} />
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
```javascript
var text = new kintoneUIComponent.Text({value: 'input text'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());
```
**React**
```javascript
import {Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};
    };
    render() {
        return (
            <Text value={this.state.value} onChange={(value) => {this.setState({value})}} />
        );
    }
}

```
</details>

### setStyles(style)
Set style of container dom element.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|style|object|Yes|Set the style for container dom element. For Key of Style Object Properties, please read references: https://www.w3schools.com/jsref/dom_obj_style.asp |

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({value: 'input text'});
text.setStyles({background:"blue",fontSize:'20px'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());
```
**React**
```javascript
import {Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};
    };
    render() {
        return (
            <Text style={{background:"blue", fontSize:'20px'}} value={this.state.value} onChange={(value) => {this.setState({value})}} />
        );
    }
}

```
</details>


### setClassName(className)
Set className of container dom element.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|className|string|Yes|Set className for container dom element. Add trailing space for multiple className|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({value: 'input text'});
text.setClassName("class1 class2");
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());
```
**React**
```javascript
import {Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};
    };
    render() {
        return (
            <Text className="class1 class2" value={this.state.value} onChange={(value) => {this.setState({value})}} />
        );
    }
}

```
</details>

### setValue(value)
Set the value of text field.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|text|	String|	Yes|	The value of text field.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({value: 'input text'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());

text.setValue('input text');
```
**React**
```javascript
import { Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '1'};
    };
    render() {
        return (
        <div>
          <Text value={this.state.value} onChange={(value) => {this.setState({value})}} />
          <button onClick={this.handleClick}>Click</button>
        </div>
      );
    }
    handleClick= () => {
        this.setState({
            value: 'samp 1'
        });
    };
}

```
</details>

### getValue()
Get the value of text field.

**Parameter**

None

**Returns**

|Name|Type|Description|
|---|---|---|
|value|	String|	The value of text field.|


<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({value: 'input text'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());

text.getValue();
```
**React**
```javascript
import { Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '1'};
    };
    render() {
        return (
        <div>
          <Text value={this.state.value} onChange={(value) => {this.setState({value})}} />
          <button onClick={this.handleClick}>Click</button>
        </div>
      );
    }
    handleClick= () => {
        console.log(this.state.value);
    };
}

```
</details>

### on(eventName, callBack)
Register callback for a event of component

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|eventName |String |Yes|Name of event: <ul><li>'click'</li><li>'change'</li></ul>|
|callback|function |Yes|callback|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({value: 'input text'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());

text.on('click', function(event) {
    console.log('on click');
    console.log('value: ' + event.target.value);
});
```
**React**
```javascript
import { Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '1'};
    };
    render() {
        return (
            <Text value={this.state.value} onChange={this.handleChange.bind(this)} onClick={() => {console.log('click')}} />
        );
    }
    handleChange = (value) => {
            this.setState({value});
            console.log('value: ' + value);
        }
}

```
</details>

### show()
Display the Text field.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({value: 'input text'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());

text.show();
```
**React**
```javascript
import { Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '1'};
    };
    render() {
        return (
            <Text value={this.state.value} onChange={this.handleChange.bind(this)} isVisible={true} />
        );
    }
    handleChange = (value) => {
        this.setState({value});
        console.log('value: ' + value);
    }
}

```
</details>

### hide()
Hide the Text field.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({value: 'input text'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());

text.hide();
```
**React**
```javascript
import { Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '1'};
    };  
    render() {
        return (
            <Text value={this.state.value} onChange={this.handleChange.bind(this)} isVisible={false} />
        );
    }
    handleChange = (value) => {
        this.setState({value});
        console.log('value: ' + value);
    }
}

```
</details>

### disable()
Disabled the Text field.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({value: 'input text'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());

text.disable();
```
**React**
```javascript
import { Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '1'};
    };
    render() {
        return (
            <Text value={this.state.value} onChange={this.handleChange.bind(this)} isDisabled={true} />
        );
    }
    handleChange = (value) => {
        this.setState({value});
        console.log('value: ' + value);
    }
}

```
</details>

### enable()
Enabled the Text field.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({value: 'input text'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());

text.enable();
```
**React**
```javascript
import { Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '1'};
    };
    render() {
        return (
            <Text value={this.state.value} onChange={this.handleChange.bind(this)} isDisabled={false} />
        );
    }
    handleChange = (value) => {
        this.setState({value});
        console.log('value: ' + value);
    }
}

```
</details>
