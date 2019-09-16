---
id: textarea
title: TextArea
sidebar_label: TextArea
---

## Overview
![TextArea](assets/textarea.PNG)

|Number|	Description|
| --- | --- |
|1|Drag and drop this icon to resize textarea|	

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.value|String|No|The value of textarea field.|
|options.isDisabled|Boolean|No|The textarea field will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The textarea field will be visible. <br> Default value: 'true'|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var textArea = new kintoneUIComponent.TextArea({value: 'textarea'});
```
**React**
```
import {TextArea} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    state = { value: ''}
    render() {
        return (
            <TextArea value={this.state.value} onChange={(value) => {this.setState({value})}} />
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
```
var textArea = new kintoneUIComponent.TextArea({value: 'textarea'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(textArea.render());
```
**React**
```
import {TextArea} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    state = { value: ''}
    render() {
        return (
            <TextArea value={this.state.value} onChange={(value) => {this.setState({value})}} />
        );
    }
}

```
</details>

### setValue(value)
Set the value of textarea field.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|value|	String|	Yes|	The value of textarea field.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var textArea = new kintoneUIComponent.TextArea({value: 'textarea'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(textArea.render());

textArea.setValue('set value into textarea');
```
**React**
```
import {TextArea} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    state = { value: 'textarea'}
 
    render() {
        return (
        <div>
          <TextArea value={this.state.value} onChange={(value) => {this.setState({value})}} />
          <button onClick={this.handleClick}>Click</button>
        </div>
      );
    }
    handleClick= () => {
        this.setState({
            value: 'set value into textarea'
        });
    };
}

```
</details>

### getValue()
Get the value of textarea field.

**Parameter**

None

**Returns**

|Name|Type|Description|
|---|---|---|
|value|	String|	The value of textarea field.|


<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var textArea = new kintoneUIComponent.TextArea({value: 'textarea'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(textArea.render());

textArea.getValue();
```
**React**
```
import {TextArea} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    state = { value: 'textarea'}
 
    render() {
        return (
        <div>
          <TextArea value={this.state.value} onChange={(value) => {this.setState({value})}} />
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
```
var textArea = new kintoneUIComponent.TextArea({value: 'textarea'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(textArea.render());

textArea.on('click', function(event) {
    console.log('on click');
});
```
**React**
```
import {TextArea} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    state = { value: 'textarea'}
    render() {
        return (
            <TextArea value={this.state.value} onChange={this.handleChange.bind(this)} onClick={() => {console.log('click')}} />
        );
    }
    handleChange(value) {
            this.setState({value});
            console.log('value: ' + value);
    }
}

```
</details>

### show()
Display the TextArea field.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var textArea = new kintoneUIComponent.TextArea({value: 'textarea'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(textArea.render());

textArea.show();
```
**React**
```
import {TextArea} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    state = { value: 'textarea'}
    render() {
        return (
            <TextArea value={this.state.value} onChange={this.handleChange.bind(this)} isVisible={true} />
        );
    }
    handleChange(value) {
        this.setState({value});
        console.log('value: ' + value);
    }
}

```
</details>

### hide()
Hide the TextArea field.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var textArea = new kintoneUIComponent.TextArea({value: 'textarea'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(textArea.render());

textArea.hide();
```
**React**
```
import {TextArea} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    state = { value: 'textarea'}
    render() {
        return (
            <TextArea value={this.state.value} onChange={this.handleChange.bind(this)} isVisible={false} />
        );
    }
    handleChange(value) {
        this.setState({value});
        console.log('value: ' + value);
    }
}

```
</details>

### disable()
Disabled the TextArea field.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var textArea = new kintoneUIComponent.TextArea({value: 'textarea'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(textArea.render());

textArea.disable();
```
**React**
```
import {TextArea} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    state = { value: 'textarea'}
    render() {
        return (
            <TextArea value={this.state.value} onChange={this.handleChange.bind(this)} isDisabled={true} />
        );
    }
    handleChange(value) {
        this.setState({value});
        console.log('value: ' + value);
    }
}

```
</details>

### enable()
Enabled the TextArea field.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var textArea = new kintoneUIComponent.TextArea({value: 'textarea'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(textArea.render());

textArea.enable();
```
**React**
```
import {TextArea} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    state = { value: 'textarea'}
    render() {
        return (
            <TextArea value={this.state.value} onChange={this.handleChange.bind(this)} isDisabled={false} />
        );
    }
    handleChange(value) {
        this.setState({value});
        console.log('value: ' + value);
    }
}

```
</details>
