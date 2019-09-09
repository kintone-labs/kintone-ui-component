# Label

## Overview
![Label](../img/label.PNG)

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.text|String|No|Caption of label.|
|options.isRequired|Boolean|No|Display the '*' character at the end of the caption. <br> Default value is false.|
|options.textColor|String|No|Color of caption. <br> Can set like 'red' or '#e74c3c' or 'rgba(0, 0, 0, 1)'|
|options.backgroundColor|String|No|Color of background. <br> Can set like 'red' or '#e74c3c' or 'rgba(0, 0, 0, 1)'|
|options.isDisabled|Boolean|No|The label will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The label will be visible. <br> Default value: 'true'|
|options.style|Object|No|The css style of component|
|options.className|String|No|The css class name of component|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var label = new kintoneUIComponent.Label({
    text: 'Name',
    textColor: '#e74c3c',
    backgroundColor: 'yellow',
    isRequired: true
});
```

**React**
```javascript
import { Label } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Label text='Name' textColor='#e74c3c' backgroundColor='yellow' isRequired={true} />
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
var label = new kintoneUIComponent.Label({text: 'label'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(label.render());
```

**React**
```javascript
import { Label } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Label text='Name' isRequired={true} />
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
var label = new kintoneUIComponent.Label({text: 'label'});
label.setStyles({background:"blue",fontSize:'20px'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(label.render());
```
**React**
```javascript
import { Label } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Label text='Name' style={{background:"blue", fontSize:'20px'}} isRequired={true} />
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
var label = new kintoneUIComponent.Label({text: 'label'});
label.setClassName("class1 class2");
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(label.render());
```
**React**
```javascript
import { Label } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Label text='Name' className="class1 class2" isRequired={true} />
        );
    }
}
```
</details>


### setText(text)
Set the value of text field.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|text|	String|	Yes|Caption of label. <br> If text is undefined, null or true, The label will be displayed blank|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**	
```javascript
var label = new kintoneUIComponent.Label({text: 'label'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(label.render());
label.setText('Name');
```

**React**
```javascript
import { Label } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Label text='Name' isRequired={true} />
        );
    }
}
```
</details>

### setTextColor(color)
Set color of caption.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|color|String|Yes|Color of caption.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var label = new kintoneUIComponent.Label({text: 'label'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(label.render());
label.setTextColor('#e74c3c');
```

**React**
```javascript
import { Label } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Label text='Name' textColor='red' />
        );
    }
}
```
</details>

### setBackgroundColor(color)
Set color of background.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|color|String|Yes|Color of background.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var label = new kintoneUIComponent.Label({text: 'label'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(label.render());
label.setBackgroundColor('#e74c3c');
```

**React**
```javascript
import { Label } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Label text='Name' backgroundColor='yellow' />
        );
    }
}
```
</details>

### setRequired(required)
Set the required for the label.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|required|Boolean|Yes|Required option.<ul><li>This parameter is 'true':  The *  character will be displayed at the end of the caption. </li><li>This parameter is 'false': The *  character will be hidden</ul></li>|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript	
var label = new kintoneUIComponent.Label({text: 'label'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(label.render());
label.setRequired(true);
```

**React**
```javascript
import { Label } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Label text='Name' isRequired={true} />
        );
    }
}
```
</details>

### on(eventName, callBack)
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

**Javascript**
```javascript
var label = new kintoneUIComponent.Label({text: 'label'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(label.render());
label.on('click', function(event) {
    console.log('on click');
});
```

**React**
```javascript
import { Label } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Label text='Name' isRequired={true} onClick={this.handleClick} />
        );
    }
   handleClick = () => {
        console.log('click');
   }
    }

```
</details>

### show()
Display the Label.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var label = new kintoneUIComponent.Label({text: 'label'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(label.render());
label.show();
```

**React**
```javascript
import { Label } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Label text='Name' isRequired={true}  isVisible={true} />
        );
    }
}

```
</details>

### hide()
Hide the Label.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var label = new kintoneUIComponent.Label({text: 'label'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(label.render());
label.hide();
```

**React**
```javascript
import { Label } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Label text='Name' isRequired={true}  isVisible={false} />
        );
    }
}
```
</details>

### disable()
Disabled the Label.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var label = new kintoneUIComponent.Label({text: 'label'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(label.render());
label.disable();
```

**React**
```javascript
import { Label } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Label text='Name' isRequired={true}  isDisabled={true} />
        );
    }
}
```
</details>

### enable()
Enabled the Label.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var label = new kintoneUIComponent.Label({text: 'label'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(label.render());
label.enable();
```

**React**
```javascript
import { Label } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Label text='Name' isRequired={true}  isDisabled={false} />
        );
    }
}
```
</details>
