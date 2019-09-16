# NotifyPopup

## Overview
![NotifyPopup](../img/notifyPopup.PNG)

|Number|	Description|
| --- | --- |
|1|	Success popup|	
|2|	Error popup|
|3| Icon button for closing popup|	
|4|Title of popup|
|5|Information popup|

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains parameters of constructor.|
|options.text|String|No|Content of notify popup.|
|options.type|String|No|Type of notify popup:<ul><li> 'error' </li><li> 'success'</li><li> 'infor' </li></ul> Default value: **error**|
|options.isDisabled|Boolean|No|The notify popup will be disabled. <br> Default value: **false**|
|options.isVisible|Boolean|No|The notify popup will be visible. <br> Default value: **true**|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Here is NotifyPopup',
    type: 'success'
});
```
**React**
```javascript
import { NotifyPopup } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        return (
            <NotifyPopup text='Here is NotifyPopup' type='success' />
        );
    };
};

```
</details>

## Methods
### render()
Get DOM element of NotifyPopup component.

**Parameter**

None

**Returns**

DOM element

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Here is NotifyPopup',
    type: 'success'
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());

```
**React**
```javascript
import { NotifyPopup } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
   
export default class Plugin extends React.Component {
    constructor(props){
        super(props);
        this.state = {isVisible: true};
    };  

    handleClickToCloseNotifyPopup = () => {
        this.setState({isVisible: false});
    };

    render() {
        return (
            <NotifyPopup 
                text='Here is NotifyPopup' 
                type='success' 
                isVisible={this.state.isVisible} 
                onClose={this.handleClickToCloseNotifyPopup} 
            />
        );
    };
};

ReactDOM.render(<Plugin />, document.getElementById('root'));

```
</details>

### setText(text)
Setting the text content of NotifyPopup component.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|text|	String|	Yes|Text content of notify popup. <br> If text is undefined, null or true, The popup will be displayed blank.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Here is NotifyPopup',
    type: 'success'
});
var btn = new kintoneUIComponent.Button({ text: 'Set text of NotifyPopup', type: 'normal' })
btn.on('click', function () {
    notifyPopup.setText('Set text');
});

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());
body.appendChild(btn.render());
```
**React**
```javascript
import { NotifyPopup, Button } from '@kintone/kintone-ui-component';
import React from 'react';
   

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Here is NotifyPopup' };
    };

    handleClickToSetTextNotifyPopup = () => {
        this.setState({ text: 'Set text' });
    };

    render() {
        return (
            <div>
                <NotifyPopup
                    text={this.state.text}
                    type='success'
                />
                <Button text='Set text' onClick={this.handleClickToSetTextNotifyPopup} />
            </div>
        );
    };
};

```
</details>

### setType(type)
Setting type of NotifyPopup component.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|type|String|Yes|Type of NotifyPopup:<ul><li> 'error' </li><li> 'success' </li><li> 'infor' </li></ul> Default value: 'error'|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Here is NotifyPopup',
    type: 'success',
});
var btn = new kintoneUIComponent.Button({ text: 'Set type of NotifyPopup', type: 'normal' })
btn.on('click', function () {
    notifyPopup.setType('infor');
});

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());
body.appendChild(btn.render());
```
**React**
```javascript
import { NotifyPopup, Button } from '@kintone/kintone-ui-component';
import React from 'react';

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { type: 'success' };
    };

    handleClickToSetTypeNotifyPopup = () => {
        this.setState({ type: 'infor' });
    };

    render() {
        return (
            <div>
                <NotifyPopup
                    text='Here is NotifyPopup'
                    type={this.state.type}
                />
                <Button text='Set type' onClick={this.handleClickToSetTypeNotifyPopup} />
            </div>
        );
    };
};

```
</details>

### on(eventName, callback)
Register callback for an event of NotifyPopup component.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|eventName|	String|	Yes|Name of event: <ul><li>'click'</li><li>'close'</li></ul>|
|callback|function |Yes|The callback function call when the event occurs|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Here is NotifyPopup',
    type: 'success',
});

notifyPopup.on('click', function(event) {
    console.log('NotifyPopup onClick');
});

notifyPopup.on('close', () => {
    console.log('NotifyPopup onClose');
})

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());
```
**React**
```javascript
import { NotifyPopup } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: true };
    };

    handleClickToCloseNotifyPopup = () => {
        console.log('NotifyPopup onClose');
        this.setState({isVisible: false});
    };

    handleClick = () => {
        console.log('NotifyPopup onClick');
    }
    render() {
        return (
            <NotifyPopup
                text='Here is NotifyPopup'
                type='success'
                isVisible={this.state.isVisible}
                onClose={this.handleClickToCloseNotifyPopup}
                onClick={this.handleClick}
            />
        );
    };
};

```
</details>

### show()
Display NotifyPopup component.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Here is NotifyPopup',
    type: 'success',
    isVisible: false
});
var btn = new kintoneUIComponent.Button({ text: 'Show NotifyPopup', type: 'normal' });
btn.on('click', function () {
    notifyPopup.show();
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());
body.appendChild(btn.render());
```
**React**
```javascript
import { NotifyPopup, Button } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: false };
    };

    handleClick = () => {
        this.setState({isVisible: true});
    };

    render() {
        return (
            <div>
                <NotifyPopup
                    text='Here is NotifyPopup'
                    type='success'
                    isVisible={this.state.isVisible}
                />
                <Button text='Show NotifyPopup' onClick={this.handleClick} />
            </div>
        );
    };
};
```
</details>

### hide()
Hide NotifyPopup component.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Here is NotifyPopup',
    type: 'success',
});
var btn = new kintoneUIComponent.Button({ text: 'Hide NotifyPopup', type: 'normal' });
btn.on('click', function () {
    notifyPopup.hide();
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());
body.appendChild(btn.render());
```
**React**
```javascript
import { NotifyPopup, Button } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: true };
    };

    handleClick = () => {
        this.setState({isVisible: false});
    };

    render() {
        return (
            <div>
                <NotifyPopup
                    text='Here is NotifyPopup'
                    type='success'
                    isVisible={this.state.isVisible}
                />
                <Button text='Hide NotifyPopup' onClick={this.handleClick} />
            </div>
        );
    };
};
```
</details>

### disable()
Disabled NotifyPopup component.

**Parameter**

None


**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Here is NotifyPopup',
    type: 'success',
});
var btn = new kintoneUIComponent.Button({ text: 'Disable NotifyPopup', type: 'normal' });
btn.on('click', function () {
    notifyPopup.disable();
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());
body.appendChild(btn.render());
```
**React**
```javascript
import { NotifyPopup, Button } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isDisabled: false, isVisible: true };
    };

    handleClick = () => {
        this.setState({isDisabled: true});
    };

    render() {
        return (
            <div>
                <NotifyPopup
                    text='Here is NotifyPopup'
                    type='success'
                    isDisabled={this.state.isDisabled}
                    isVisible={this.state.isVisible}
                    onClose={()=> {
                        this.setState({isVisible: false})
                    }}
                />
                <Button text='Disable NotifyPopup' onClick={this.handleClick} />
            </div>
        );
    };
};

```
</details>

### enable()
Enabled NotifyPopup component.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Here is NotifyPopup',
    type: 'success',
    isDisabled: true
});
var btn = new kintoneUIComponent.Button({ text: 'Enable NotifyPopup', type: 'normal' });
btn.on('click', function () {
    notifyPopup.enable();
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());
body.appendChild(btn.render());
```
**React**
```javascript
import { NotifyPopup, Button } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isDisabled: true, isVisible: true };
    };

    handleClick = () => {
        this.setState({isDisabled: false});
    };

    render() {
        return (
            <div>
                <NotifyPopup
                    text='Here is NotifyPopup'
                    type='success'
                    isDisabled={this.state.isDisabled}
                    isVisible={this.state.isVisible}
                    onClose={()=> {
                        this.setState({isVisible: false})
                    }}
                />
                <Button text='Enable NotifyPopup' onClick={this.handleClick} />
            </div>
        );
    };
};

```
</details>