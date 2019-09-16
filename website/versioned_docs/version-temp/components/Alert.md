---
id: version-0.1.5-alert
title: Alert
sidebar_label: Alert
original_id: alert
---

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
<Summary>View source</Summary>

**Javascript**
```javascript
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
```

**React**
```jsx
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

<details class="tab-container">
<Summary>View source</Summary>

**Javascript**
```javascript sandbox_kuc-alert-js-render-2ffrj
var alert = new kintoneUIComponent.Alert({
    text: 'Network error', 
    type: 'error'
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
```

**React**
```jsx sandbox_kuc-alert-react-render-7kbd2
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

```KUCComponentRenderer {"id":"alert_render"}
var component = new kintoneUIComponent.Alert({
    text: 'Network error', 
    type: 'error'
});
```

### setText()
Set the content of alert.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|text|	String|	Yes|The content of alert. <br> If text is undefined, null or true, The alert will be displayed blank.|

**Returns**

None

<details class="tab-container">
<Summary>View source</Summary>

**Javascript**
```javascript sandbox_kuc-alert-js-settext-mm9cr
var alert = new kintoneUIComponent.Alert({
    text: 'Network error', 
    type: 'error'
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.setText('New Text');
```

**React**
```jsx sandbox_kuc-alert-react-settext-7dtzn
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

```KUCComponentRenderer {"id":"alert_set_text"}
var component = new kintoneUIComponent.Alert({
    text: 'Click me to set new text', 
    type: 'error'
});
component.on('click', function(event) {
    component.setText('New text');
});
```

### setType(type)
Set the type of alert.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|type|	String|	No| The type of alert. <ul><li>"success": success alert.</li><li>"error": error alert </li></ul> Default value is "error".|

**Returns**

None

<details class="tab-container">
<Summary>View source</Summary>

**Javascript**
```javascript sandbox_kuc-alert-js-settype-47ojq
var alert = new kintoneUIComponent.Alert({
    text: 'Network error', 
    type: 'error'
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.setType('success');
```

**React**
```jsx sandbox_kuc-alert-react-settype-kdh2n
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='success'/>
        );
    }
}
```
</details>

```KUCComponentRenderer {"id":"alert_set_type"}
var component = new kintoneUIComponent.Alert({
    text: 'Click me to set new type', 
    type: 'error'
});
component.on('click', function(event) {
    component.setText('New type');
    component.setType('success');
});
```

### on(eventName, callBack)
The callBack function will be execute after user click the alert.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|eventName|	String|	Yes|Name of event: <ul><li>'click'</li></ul>|
|callback|function |Yes|callback|

**Returns**

None

<details class="tab-container">
<Summary>View source</Summary>

**Javascript**
```javascript sandbox_kuc-alert-js-on-bshv2
var myAlert = new kintoneUIComponent.Alert({
    text: "Click me to set type to success",
    type: "error"
});

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(myAlert.render());
myAlert.on("click", function(event) {
    myAlert.setType("success");
});
```

**React**
```jsx sandbox_kuc-alert-react-on-iogmn
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    state = {
        type: 'error'
    }
    render() {
        return (
            <Alert text='Network error' type={this.state.type} onClick={this.handleClick}/>
        );
    }
    handleClick = () => {
        this.setState({
            type: "success"
        });
    }
}
```
</details>

```KUCComponentRenderer {"id":"alert_on"}
var component = new kintoneUIComponent.Alert({
    text: 'Click me', 
    type: 'error'
});
component.on('click', function(event) {
    alert('Hello from KUC')
});
```

### show()
Display the Alert.

**Parameter**

None

**Returns**

None

<details class="tab-container">
<Summary>View source</Summary>

**Javascript**
```javascript sandbox_kuc-alert-js-show-ujbzf
var alert = new kintoneUIComponent.Alert({
    text: 'Network error', 
    type: 'error',
    isVisible: false
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.show();
```

**React**
```jsx sandbox_kuc-alert-react-show-vgngm
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

```KUCComponentRenderer {"id":"alert_show"}
var component = new kintoneUIComponent.Alert({
    text: 'I was shown manually.', 
    type: 'error',
    isVisible: false
}); 
var myBtn = new kintoneUIComponent.Button({
    text: 'Click me to show alert',
    onClick: function() {
        component.show();
    },
    type: 'submit'
}); 
var kucContainer = document.createElement('div');
kucContainer.appendChild(component.render());
kucContainer.appendChild(myBtn.render());
```

### hide()
Hide the Alert.

**Parameter**

None

**Returns**

None

<details class="tab-container">
<Summary>View source</Summary>

**Javascript**
```javascript sandbox_kuc-alert-js-hide-spt1w
var alert = new kintoneUIComponent.Alert({
    text: 'Network error', 
    type: 'error'
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.hide();
```

**React**
```jsx sandbox_kuc-alert-react-hide-b44zi
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

```KUCComponentRenderer {"id":"alert_hide"}
var component = new kintoneUIComponent.Alert({
    text: 'I will be hidden.', 
    type: 'error'
}); 
var myBtn = new kintoneUIComponent.Button({
    text: 'Click me to hide alert',
    onClick: function() {
        component.hide();
    },
    type: 'submit'
}); 
var kucContainer = document.createElement('div');
kucContainer.appendChild(component.render());
kucContainer.appendChild(myBtn.render());
```

### disable()
Disable the Alert.

**Parameter**

None

**Returns**

None

<details class="tab-container">
<Summary>View source</Summary>

**Javascript**
```javascript sandbox_kuc-alert-js-disable-ity6e
var alert = new kintoneUIComponent.Alert({
    text: 'Network error', 
    type: 'error'
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.disable();
```

**React**
```jsx sandbox_kuc-alert-react-disable-9okdz
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

```KUCComponentRenderer {"id":"alert_disable"}
var component = new kintoneUIComponent.Alert({
    text: 'I was disabled manually.', 
    type: 'error'
});
component.disable();
```

### enable()
Enable the Alert.

**Parameter**

None

**Returns**

None

<details class="tab-container">
<Summary>View source</Summary>

**Javascript**
```javascript sandbox_kuc-alert-js-enable-fmx23
var alert = new kintoneUIComponent.Alert({
    text: 'Network error', 
    type: 'error'
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.enable();
```

**React**
```jsx sandbox_kuc-alert-react-enable-gy30h
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

```KUCComponentRenderer {"id":"alert_enable"}
var component = new kintoneUIComponent.Alert({
    text: 'I was enabled manually.', 
    type: 'error'
});
component.enable();
```