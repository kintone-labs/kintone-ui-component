---
id: version-0.1.5-button
title: Button
sidebar_label: Button
original_id: button
---

## Constructor
**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.text|String|No|Text will be displayed in button.|
|options.type|String|No|Style of the button: <ul><li> 'normal' </li><li> 'submit' </li></ul> Default value: 'normal'|
|options.isDisabled|Boolean|No|The button will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The button will be visible. <br>  Default value: 'true'|

<details class="tab-container" open>
<Summary>View source</Summary>

**Javascript**
```javascript
var button = new kintoneUIComponent.Button({
    text: 'Submit',
    type: 'submit'
});
```
**React**
```jsx
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Button text='Submit' type='submit' isDisabled={false} isVisible={true} />
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

DOM element

<details class="tab-container">
<Summary>View source</Summary>

**Javascript**
```javascript sandbox_kuc-button-js-m4ox583098
var button = new kintoneUIComponent.Button({
    text: 'Submit', 
    type: "submit"
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
```

**React**
```jsx sandbox_kuc-button-react-77gu7
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Button text='Submit' type='submit' isDisabled={false} isVisible={true} />
        );
    }
}
```
</details>

```KUCComponentRenderer {"id":"btn_render"}
var component = new kintoneUIComponent.Button({
    text: 'Submit',
    type: 'submit'
});
```

### setText(text)
Set displayed text in button.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|text|	String|	Yes|Display text in button|

**Returns**

None

<details class="tab-container">
<Summary>View source</Summary>

**Javascript**
```javascript sandbox_kuc-button-js-set-text-6yrm9
var button = new kintoneUIComponent.Button({
    text: 'Click me to set text',
    onClick: function() {
        button.setText('New text');
    }
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
```

**React**
```jsx sandbox_kuc-button-react-set-text-4211qopplw
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    state = {text: 'Click me to set text'}
    render() {
        return (
            <Button 
                text={this.state.text}
                type='submit' 
                onClick={()=>{
                    this.setState({text: 'New text'})
                }}
            />
        );
    }
}
```
</details>

```KUCComponentRenderer {"id":"btn_set_text"}
var component = new kintoneUIComponent.Button({
    text: 'Click me to set text',
    type: 'submit',
    onClick: function(){
        component.setText('New Text')
    }
});
```

### setType(type)
Set the displayed type for button.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|type|String|No|Style of the button:<ul><li> 'normal' </li><li> 'submit' </li></ul> Default value: 'normal'|

**Returns**

None

<details class="tab-container">
<Summary>View source</Summary>

**Javascript**
```javascript sandbox_kuc-button-js-set-type-1sye5
var button = new kintoneUIComponent.Button({
    text: 'Click me to set to normal type',
    type: 'submit',
    onClick: function() {
        component.setType('normal')
    }
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
```

**React**
```jsx sandbox_kuc-button-react-set-type-nwvxw
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    state = {type: 'submit'}
    render() {
        return (
            <Button 
                text='Click me to set to normal type' 
                type={this.state.type} 
                onClick={()=>{
                    this.setState({type: 'normal'})
                }}
            />
        );
    }
}
```
</details>

```KUCComponentRenderer {"id":"btn_set_type"}
var component = new kintoneUIComponent.Button({
    text: 'Click me to set to normal type',
    type: 'submit',
    onClick: function() {
        component.setType('normal')
    }
});
```

### on(eventName, callback)
Register callback for click event

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
```javascript sandbox_kuc-button-js-on-j9bdh
var button = new window.kintoneUIComponent.Button({
  text: "Click me",
  type: "submit"
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
button.on('click', function(event) {
    alert('Hello from KUC')
});
```

**React**
```jsx sandbox_kuc-button-react-on-muvoe
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Button
                text='Click me'
                onClick={this.handleButtonClick} 
            />
        );
    }
 
    handleButtonClick(event) {
        alert('Hello from KUC')
    }
}
```
</details>

```KUCComponentRenderer {"id":"btn_on"}
var component = new kintoneUIComponent.Button({
    text: 'Click me',
    type: 'submit'
});
component.on('click', function(event) {
    alert('Hello from KUC')
});
```

### show()
Display button.

**Parameter**

None

**Returns**

None

<details class="tab-container">
<Summary>View source</Summary>

**Javascript**
```javascript sandbox_kuc-button-js-show-5p0zl
var button = new kintoneUIComponent.Button({
    text: 'I was showed programmatically',
    type: 'submit',
    isVisible: false
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
button.show();
```

**React**
```jsx sandbox_kuc-button-react-show-fgtcg
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Button 
                text='I was showed programmatically' 
                isVisible={true} 
                type='submit'
            />
        );
    }
}
```
</details>

```KUCComponentRenderer {"id":"btn_show"}
var component = new kintoneUIComponent.Button({
    text: 'I was showed programmatically',
    type: 'submit',
    isVisible: false
});
component.show();
```

### hide()
Hide button.

**Parameter**

None

**Returns**

None

<details class="tab-container">
<Summary>View source</Summary>

**Javascript**
```javascript sandbox_kuc-button-js-hide-gro40
var button = new new kintoneUIComponent.Button({
    text: 'Click me to hide',
    type: 'submit',
    isVisible: true,
    onClick: function() {
        button.hide()
    }
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
```

**React**
```jsx sandbox_kuc-button-react-hide-i4uwg
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    state = {show: true}
    render() {
        return (
            <Button 
                text="Click me to hide" 
                type="submit"
                isVisible={this.state.show} 
                onClick={()=>{
                    this.setState({show: false})
                }}
            />
        );
    }
}
```
</details>

```KUCComponentRenderer {"id":"btn_hide"}
var component = new kintoneUIComponent.Button({
    text: 'Click me to hide',
    type: 'submit',
    isVisible: true,
    onClick: function() {
        component.hide()
    }
});
```

### disable()
Disable button.

**Parameter**

None

**Returns**

None

<details class="tab-container">
<Summary>View source</Summary>

**Javascript**
```javascript sandbox_kuc-button-js-disable-r8i31
var button = new kintoneUIComponent.Button({
    text: 'Click me to disable',
    type: 'submit',
    onClick: function() {
        button.disable()
    }
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
```

**React**
```jsx sandbox_kuc-button-react-disable-e0vqu
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    state = {disabled: false}
    render() {
        return (
            <Button 
                text="Click me to disable" 
                type="submit"
                isDisabled={this.state.disabled} 
                onClick={()=>{
                    this.setState({disabled: true})
                }}
            />
        );
    }
}
```
</details>

```KUCComponentRenderer {"id":"btn_disable"}
var component = new kintoneUIComponent.Button({
    text: 'Click me to disable',
    type: 'submit',
    onClick: function() {
        component.disable()
    }
});
```

### enable()
Enable button.

**Parameter**

None

**Returns**

None

<details class="tab-container">
<Summary>View source</Summary>

**Javascript**
```javascript sandbox_kuc-button-js-enable-fppz9
var button = new kintoneUIComponent.Button({
    text: 'I was enabled programmatically',
    type: 'submit',
    isDisable: true
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
button.enable();
```

**React**
```jsx sandbox_kuc-button-react-enable-306n3
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Button 
                text="I was enabled programmatically" 
                isDisabled={false} 
                type="submit"
            />
        );
    }
}
```
</details>

```KUCComponentRenderer {"id":"btn_enable"}
var component = new kintoneUIComponent.Button({
    text: 'I was enabled programmatically',
    type: 'submit',
    isDisable: true
});
component.enable();
```