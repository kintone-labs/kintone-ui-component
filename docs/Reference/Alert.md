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

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
```

**React**
```javascript
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error'/>
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
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
```

**React**
```javascript
import { Alert} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error'/>
        );
    }
}
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

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.setText('Network error');
```

**React**
```javascript
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error'/>
        );
    }
}
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

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.setType('success');
```

**React**
```javascript
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error'/>
        );
    }
}
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

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.on('click', function(event) {
    console.log('on click');
});
```

**React**
```javascript
import { Alert } from '@kintone/kintone-ui-component';
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
</details>

### show()
Display the Alert.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.show();
```

**React**
```javascript
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error' isVisible={true}/>
        );
    }
}
```
</details>

### hide()
Hide the Alert.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.hide();
```

**React**
```javascript
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error' isVisible={false}/>
        );
    }
}
```
</details>

### disable()
Disable the Alert.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.disable();
```

**React**
```javascript
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error' isDisabled={true}/>
        );
    }
}
```
</details>

### enable()
Enable the Alert.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.enable();
```

**React**
```javascript
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error' isDisabled={false}/>
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
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
alert.setStyles({background:"blue", fontSize:'20px'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
```

**React**
```javascript
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error' setStyles={{background:"blue", fontSize:'20px'}} />
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
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
alert.setClassName("class1 class2");
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
```
**React**
```javascript
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error' setClassName="class1 class2" />
        );
    }
}
```
</details>