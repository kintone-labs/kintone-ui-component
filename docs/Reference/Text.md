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
None

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

var text = new kintoneUIComponent.Text({value: 'input text', isVisible: false});
var btn = new kintoneUIComponent.Button({ text: 'Show', type: 'normal' })
btn.on('click', function () {
    text.show();
})
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());
body.appendChild(btn.render());

```
**React**
```javascript
import { Text, Button } from '@kintone/kintone-ui-component';
import React from 'react';

export default class Plugin extends React.Component<{}, { value: string, isVisible: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = { value: 'Text is visible', isVisible: false };
    };

    render() {
        return (
            <div>
                <Text value={this.state.value} isVisible={this.state.isVisible} />
                <Button
                    text='Show'
                    type='normal'
                    onClick={() => {
                        this.setState({ isVisible: true })
                    }}
                />
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

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({value: 'input text', isVisible: true});
var btn = new kintoneUIComponent.Button({ text: 'Hide', type: 'normal' })
btn.on('click', function () {
    text.hide();
})
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());
body.appendChild(btn.render());
```
**React**
```javascript
import { Text, Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component<{}, { value: string, isVisible: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = { value: 'Text is invisible', isVisible: true };
    };

    render() {
        return (
            <div>
                <Text value={this.state.value} isVisible={this.state.isVisible} />
                <Button
                    text='Hide'
                    type='normal'
                    onClick={() => {
                        this.setState({ isVisible: false })
                    }}
                />
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

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({ value: 'Text is disabled' });
var btn = new kintoneUIComponent.Button({ text: 'Disable', type: 'normal' })
btn.on('click', function () {
    text.disable();
})
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());
body.appendChild(btn.render());
```
**React**
```javascript
import { Text, Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component<{}, { value: string, isDisabled: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = { value: 'Text is disabled', isDisabled: false };
    };

    render() {
        return (
            <div>
                <Text value={this.state.value} isDisabled={this.state.isDisabled} />
                <Button
                    text='Disable'
                    type='normal'
                    onClick={() => {
                        this.setState({isDisabled: true })
                    }}
                />
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

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var text = new kintoneUIComponent.Text({ value: 'Text is enabled', isDisabled: true });
var btn = new kintoneUIComponent.Button({ text: 'Enabled', type: 'normal' })
btn.on('click', function () {
    text.enable();
})
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(text.render());
body.appendChild(btn.render());
```
**React**
```javascript
import { Text, Button } from '@kintone/kintone-ui-component';
import React from 'react';

export default class Plugin extends React.Component<{}, { value: string, isDisabled: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = { value: 'Text is enabled', isDisabled: true };
    };

    render() {
        return (
            <div>
                <Text value={this.state.value} isDisabled={this.state.isDisabled} />
                <Button
                    text='Enabled'
                    type='normal'
                    onClick={() => {
                        this.setState({isDisabled: false })
                    }}
                />
            </div>
        );
    };
};
```
</details>
