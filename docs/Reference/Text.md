# Text

## Overview
![Text](../img/text.PNG)

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains parameters of constructor.|
|options.value|String|No|The value of text field. <br> Default value: ''|
|options.isDisabled|Boolean|No|The text field will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The text field will be visible. <br> Default value: 'true'|

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text= new kintoneUIComponent.Text({value: 'input text'});
```
**React**
```javascript
import {Text} from '@kintone/kintone-ui-component';
import React from 'react';

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'input text'};
    };
    render() {
        return (
            <Text value={this.state.value} />
        );
    };
};


```
</details>

## Methods
### render()
Get DOM element of Text component.

**Parameter**

None

**Returns**

DOM element

<details class="tab-container" markdown="1" open>
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
import ReactDOM from 'react-dom'

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'input text'};
    };
    render() {
        return (
            <Text value={this.state.value} />
        );
    };
};

ReactDOM.render(<Plugin />,document.getElementById('root'));
```
</details>

### setValue(value)
Set the input content value of text field

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|value|String|Yes|The input content value|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({ value: 'input text' });
var btn = document.createElement('button');
btn.textContent = 'Click';
btn.onclick = function() {
    text.setValue('set value input text');
};
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());
body.appendChild(btn);
```
**React**
```javascript
import {Text} from '@kintone/kintone-ui-component';
import React from 'react';

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'input text' };
    };
    render() {
        return (
            <div>
                <Text value={this.state.value} />
                <button onClick={this.setValue}>Click</button>
            </div>
        );
    };
    setValue = () => {
        this.setState({
            value: 'set value'
        });
    };
};

```
</details>

### getValue()
Get the input content value of text field

**Parameter**

None

**Returns**

|Name|Type|Description|
|---|---|---|
|value|	String|	The input content value|


<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({value: 'input text'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());

console.log(text.getValue());
```
**React**
```javascript
import {Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'input text' };
    };

    render() {
        return (
            <div>
                <Text value={this.state.value} />
                <button onClick={this.getValue}>Get Value</button>
            </div>
        );
    };

    getValue = () => {
        console.log(this.state.value);
    };
};

```
</details>

### on(eventName, callback)
Register callback for an event of Text component

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|eventName |String |Yes|Name of event: <ul><li>'click'</li><li>'change'</li></ul>|
|callback|function |Yes|The callback function call when the event occurs|

**Returns**  
None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({value: 'input text'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());

text.on('click', function(event) {
    console.log('onclick event');
    console.log('value: ' + event.target.value);
});

text.on('change', function(event) {
    console.log('onchange event');
    console.log('value: ' + event.target.value);
});
```
**React**
```javascript
import {Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'input text' };
    };
    
    render() {
        return (
            <Text 
                value={this.state.value}
                onChange={this.onChange.bind(this)}
                onClick={this.onClick} 
            />
        );
    };

    onClick = () => {
        console.log('click');
    };

    onChange = (value) => {
        this.setState({ value });
        console.log('onchange value: ' + value);
    };
};

```
</details>

### show()
Display the Text component.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript

var text = new kintoneUIComponent.Text({value: 'input text', isVisible: false});
var btn = document.createElement('button');
btn.textContent = 'Show';
btn.onclick = function() {
    text.show();
};
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());
body.appendChild(btn);

```
**React**
```javascript
import {Text} from '@kintone/kintone-ui-component';
import React from 'react';

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Text is visible', isVisible: false };
    };

    show = () => {
        this.setState({ isVisible: true });
    };
    render() {
        return (
            <div>
                <Text value={this.state.value} isVisible={this.state.isVisible} />
                <button onClick={this.show}>Show</button>
            </div>
        );
    };
};
```
</details>

### hide()
Hide the Text component.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({value: 'input text', isVisible: true});
var btn = document.createElement('button');
btn.textContent = 'Hide';
btn.onclick = function() {
     text.hide();
};
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());
body.appendChild(btn);
```
**React**
```javascript
import {Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Text is invisible', isVisible: true };
    };

    hide = () => {
        this.setState({ isVisible: false });
    };
    render() {
        return (
            <div>
                <Text value={this.state.value} isVisible={this.state.isVisible} />
                <button onClick={this.hide}>Hide</button>
            </div>
        );
    };
};

```
</details>

### disable()
Disabled the Text component.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({ value: 'Text is disabled' });
var btn = document.createElement('button');
btn.textContent = 'Disable';
btn.onclick = function() {
     text.disable();
};
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());
body.appendChild(btn);
```
**React**
```javascript
import {Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Text is disabled', isDisabled: false };
    };
    disable = () => {
        this.setState({isDisabled: true });
    };
    render() {
        return (
            <div>
                <Text value={this.state.value} isDisabled={this.state.isDisabled} />
                <button onClick={this.disable}>Disable</button>
            </div>
        );
    };
};
```
</details>

### enable()
Enabled the Text component.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({ value: 'Text is enabled', isDisabled: true });
var btn = document.createElement('button');
btn.textContent = 'Enabled';
btn.onclick = function() {
     text.enable();
};
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());
body.appendChild(btn);
```
**React**
```javascript
import {Text} from '@kintone/kintone-ui-component';
import React from 'react';

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Text is enabled', isDisabled: true };
    };
    enable = () => {
        this.setState({isDisabled: false });
    };

    render() {
        return (
            <div>
                <Text value={this.state.value} isDisabled={this.state.isDisabled} />
                <button onClick={this.enable}>Enabled</button>
            </div>
        );
    };
};
```
</details>
