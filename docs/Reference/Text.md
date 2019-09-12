# Text

## Overview
![Text](../img/text.PNG)

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.value|String|No|The value of text field. <br> Default value: ''|
|options.isDisabled|Boolean|No|The text field will be disabled. <br> Default value: **false**|
|options.isVisible|Boolean|No|The text field will be visible. <br> Default value: **true**|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text= new kintoneUIComponent.Text({value: 'input text'});
```
**React**
```javascript
import {Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component<{}, { value: string }> {
    constructor(props: any) {
        super(props);
        this.state = { value: 'input text'};
    };
    render() {
        return (
            <Text value={this.state.value} onChange={(value) => {this.setState({value})}} />
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
import ReactDOM from 'react-dom'

export default class Plugin extends React.Component<{}, { value: string }> {
    constructor(props: any) {
        super(props);
        this.state = { value: 'input text'};
    };
    render() {
        return (
            <Text value={this.state.value} onChange={(value) => {this.setState({value})}} />
        );
    };
};

ReactDOM.render(<Plugin />,document.getElementById('root'))
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

export default class Plugin extends React.Component<{}, { value: string }> {
    constructor(props: any) {
        super(props);
        this.state = { value: 'input text' };
    };
    render() {
        return (
            <div>
                <Text value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    };
    handleClick = () => {
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


<details class="tab-container" open>
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
import { Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component<{}, { value: string }> {
    constructor(props: any) {
        super(props);
        this.state = { value: 'input text' };
    };

    render() {
        return (
            <div>
                <Text value={this.state.value} onChange={(value) => { this.setState({ value }) }} />
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    };

    handleClick = () => {
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

| Name| Type| Description |
| --- | --- | --- |
|event |Object| event data of callback function

<details class="tab-container" open>
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
import { Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component<{}, { value: string }> {
    constructor(props: any) {
        super(props);
        this.state = { value: 'input text' };
    };
    
    render() {
        return (
            <Text 
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                onClick={() => { 
                    console.log('click');
                }} 
            />
        );
    };

    handleChange = (value: string) => {
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
 
export default class Plugin extends React.Component<{}, { value: string }> {
    constructor(props: any) {
        super(props);
        this.state = { value: 'Text is visible'};
    };

    render() {
        return (
            <Text value={this.state.value} isVisible={true} />
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
 
export default class Plugin extends React.Component<{}, { value: string }> {
    constructor(props: any) {
        super(props);
        this.state = { value: 'Text is invisible'};
    };

    render() {
        return (
            <Text value={this.state.value} isVisible={false} />
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

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({value: 'Text is disabled'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());

text.disable();
```
**React**
```javascript
import { Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component<{}, { value: string }> {
    constructor(props: any) {
        super(props);
        this.state = { value: 'Text is disabled'};
    };

    render() {
        return (
            <Text value={this.state.value} isDisabled={true} />
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

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({value: 'Text is enabled'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());

text.enable();
```
**React**
```javascript
import { Text} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component<{}, { value: string }> {
    constructor(props: any) {
        super(props);
        this.state = { value: 'Text is enabled'};
    };
    render() {
        return (
            <Text value={this.state.value} isDisabled={false} />
        );
    };
};
```
</details>
