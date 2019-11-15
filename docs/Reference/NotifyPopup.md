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
|options.type|String|No|Type of notify popup:<ul><li> 'error' </li><li> 'success'</li><li> 'info' </li></ul> Default value: **error**|
|options.isVisible|Boolean|No|The notify popup will be visible. <br> Default value: 'true'|

<details class="tab-container" markdown="1" open>
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

<details class="tab-container" markdown="1" open>
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

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Here is NotifyPopup',
    type: 'success'
});
var btn = document.createElement('button'); 
btn.textContent = 'Set text of NotifyPopup';
btn.onclick = function() {
    notifyPopup.setText('Set text');
};
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());
body.appendChild(btn);
```
**React**
```javascript
import {NotifyPopup} from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Here is NotifyPopup' };
    };

    setText = () => {
        this.setState({ text: 'Set text' });
    };

    render() {
        return (
            <div>
                <NotifyPopup text={this.state.text} type='success' />
                <button onClick={this.setText}>Set text</button>
            </div>
        );
    };
};
ReactDOM.render(<Plugin />, document.getElementById('root'));
```
</details>

### setType(type)
Setting type of NotifyPopup component.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|type|String|Yes|Type of NotifyPopup:<ul><li> 'error' </li><li> 'success' </li><li> 'info' </li></ul> Default value: 'error'|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Here is NotifyPopup',
    type: 'success',
});
var btn = document.createElement('button'); 
btn.textContent = 'Set type of NotifyPopup';
btn.onclick = function() {
    notifyPopup.setType('info');
};
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());
body.appendChild(btn);
```
**React**
```javascript
import {NotifyPopup} from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { type: 'success' };
    };

    setType = () => {
        this.setState({ type: 'info' });
    };

    render() {
        return (
            <div>
                <NotifyPopup text='Here is NotifyPopup' type={this.state.type}/>
                <button onClick={this.setType}>Set type</button>
            </div>
        );
    };
};
ReactDOM.render(<Plugin />, document.getElementById('root'));
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

<details class="tab-container" markdown="1" open>
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
import ReactDOM from 'react-dom';

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: true };
    };

    onClose = () => {
        console.log('NotifyPopup onClose');
        this.setState({isVisible: false});
    };

    onClick = () => {
        console.log('NotifyPopup onClick');
    }
    render() {
        return (
            <NotifyPopup
                text='Here is NotifyPopup'
                type='success'
                isVisible={this.state.isVisible}
                onClose={this.onClose}
                onClick={this.onClick}
            />
        );
    };
};
ReactDOM.render(<Plugin />, document.getElementById('root'));
```
</details>

### show()
Display NotifyPopup component.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Here is NotifyPopup',
    type: 'success',
    isVisible: false
});
var btn = document.createElement('button'); 
btn.textContent = 'Show NotifyPopup';
btn.onclick = function() {
    notifyPopup.show();
};
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());
body.appendChild(btn);
```
**React**
```javascript
import {NotifyPopup} from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: false };
    };

    show = () => {
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
                <button onClick={this.show}>Show NotifyPopup</button>
            </div>
        );
    };
};
ReactDOM.render(<Plugin />, document.getElementById('root'));
```
</details>

### hide()
Hide NotifyPopup component.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Here is NotifyPopup',
    type: 'success',
});
var btn = document.createElement('button'); 
btn.textContent = 'Hide NotifyPopup';
btn.onclick = function() {
    notifyPopup.hide();
};
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());
body.appendChild(btn);
```
**React**
```javascript
import {NotifyPopup} from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: true };
    };

    hide = () => {
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
                <button onClick={this.hide}>Hide NotifyPopup</button>
            </div>
        );
    };
};
ReactDOM.render(<Plugin />, document.getElementById('root'));
```
</details>
