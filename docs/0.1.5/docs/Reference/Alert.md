# Alert

## Overview
![Favicon](../img/alert.PNG)

|Number|	Description|
| --- | --- |
|1|Success alert|	
|2|Error alert|
|3|Display text|



## Constructor
**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.text|String|Yes|The content of alert.|
|options.type|String|No|The type of alert: <ul><li> 'error' </li><li> 'success' </li></ul> Default value is 'error'. |
|options.isDisabled|Boolean|No|The alert will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The alert will be visible. <br> Default value: 'true'|

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**React**
```javascript
import { Alert } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error'/>
        );
    }
}
```
**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
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

**React**
```javascript
import { Alert} from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error'/>
        );
    }
}

```
**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
```
</details>

### setText(text)
Set the content of alert.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|text|	String|	Yes|The content of alert. <br> If text is undefined, null or true, The alert will be displayed blank.|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**React**
```javascript
import { Alert } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error'/>
        );
    }
}

```
**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.setText('Network error');
```
</details>

### setType(type)
Set the type of alert.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|type|	String|	No| The type of alert. <ul><li>"success": success alert.</li><li>"error": error alert </li></ul> Default value is "error".|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**React**
```javascript
import { Alert } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error'/>
        );
    }
}

```
**Javascript**
```javascript

var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.setType('success');
```
</details>

### on(eventName, callBack)
The callBack function will be execute after user click the alert.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|eventName|	String|	Yes|Name of event: <ul><li>'click'</li></ul>|
|callback|function |Yes|callback|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**React**
```javascript
import { Alert } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error' onClick={this.handleClick}/>
        );
    }
   handleClick(){
        console.log('click');
   }
}

```
**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.on('click', function(event) {
    console.log('on click');
});
```
</details>

### show()
Display the Alert.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**React**
```javascript
import { Alert } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error' isVisible={true}/>
        );
    }
}

```
**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.show();
```
</details>

### hide()
Hide the Alert.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**React**
```javascript
import { Alert } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error' isVisible={false}/>
        );
    }
}

```
**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.hide();
```
</details>

### disable()
Disable the Alert.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**React**
```javascript
import { Alert } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error' isDisabled={true}/>
        );
    }
}

```
**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.disable();
```
</details>

### enable()
Enable the Alert.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**React**
```javascript
import { Alert } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error' isDisabled={false}/>
        );
    }
}

```
**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.enable();
```
</details>