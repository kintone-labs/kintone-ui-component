---
id: notifypopup
title: NotifyPopup
sidebar_label: NotifyPopup
---

## Overview
![NotifyPopup](assets/notifyPopup.PNG)

|Number|	Description|
| --- | --- |
|1|	Success popup|	
|2|	Error popup|
|3|Icon button for closing popup|	
|4|Title of popup|
|5|Information popup|

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.text|String|No|Displayed text on notify popup.|
|options.type|String|No|Type of notify popup:<ul><li> 'error' </li><li> 'success'</li><li> 'infor' </li></ul> Default value: 'error'|
|options.isDisabled|Boolean|No|The notify popup will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The notify popup will be visible. <br> Default value: 'true'|

<details class="tab-container" open>
<Summary>Sample</Summary>

**React**
```
import { NotifyPopup } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <NotifyPopup text='Submit successfully' type='success' />
        );
    }
}

```
**Javascript**
```
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Submit sucessffully',
    type: 'success'
});
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

**React**
```
import { NotifyPopup } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <NotifyPopup text='Submit successfully' type='success' />
        );
    }
}

```
**Javascript**
```
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Submit sucessffully',
    type: 'success'
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());

```
</details>

### setText(text)
Setting the displayed text on popup.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|text|	String|	Yes|Displayed text on notify popup. <br> If text is undefined, null or true, The popup will be displayed blank.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**React**
```
import { NotifyPopup } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <NotifyPopup text='Submit successfully' type='success' />
        );
    }
}

```
**Javascript**
```
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Submit sucessffully',
    type: 'success'
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());

notifyPopup.setText('Submit failed');
```
</details>

### setType(type)
Setting type for popup.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|type|String|No|Type of notify popup:<ul><li> 'error' </li><li> 'success' </li><li> 'infor' </li></ul> Default value: 'error'|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**React**
```
import { NotifyPopup } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <NotifyPopup text='Submit successfully' type='success' />
        );
    }
}

```
**Javascript**
```
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Submit sucessffully',
    type: 'success'
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());

notifyPopup.setType('success');
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

<details class="tab-container" open>
<Summary>Sample</Summary>

**React**
```
import { NotifyPopup } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <NotifyPopup text='Submit successfully' type='success' onClick={this.handleClick} />
        );
    }
 
    handleClick(event) {
        console.log('on click');
    }
}

```
**Javascript**
```
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Submit sucessffully',
    type: 'success'
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());

notifyPopup.on('click', function(event) {
    console.log('on click');
});
```
</details>

### show()
Display the notify popup.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**React**
```
import { NotifyPopup } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <NotifyPopup text='Submit successfully' type='success' isVisible={true} />
        );
    }
}

```
**Javascript**
```
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Submit sucessffully',
    type: 'success'
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());

notifyPopup.show();
```
</details>

### hide()
Hide the notify popup.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**React**
```
import { NotifyPopup } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <NotifyPopup text='Submit successfully' type='success' isVisible={false} />
        );
    }
}

```
**Javascript**
```
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Submit sucessffully',
    type: 'success'
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());

notifyPopup.hide();
```
</details>

### disable()
Disabled the notify popup.

**Parameter**

None


**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**React**
```
import { NotifyPopup } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <NotifyPopup text='Submit successfully' type='success' isDisabled={true} />
        );
    }
}

```
**Javascript**
```
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Submit sucessffully',
    type: 'success'
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());

notifyPopup.disable();
```
</details>

### enable()
Enabled the notify popup.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**React**
```
import { NotifyPopup } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <NotifyPopup text='Submit successfully' type='success' isDisabled={false} />
        );
    }
}

```
**Javascript**
```
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Submit sucessffully',
    type: 'success'
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(notifyPopup.render());

notifyPopup.enable();
```
</details>