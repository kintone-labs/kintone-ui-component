# Button

## Overview
![Button](../img/button.PNG)

|Number|	Description|
| --- | --- |
|1|	Normal button|	
|2|Submit button|

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
<Summary>Sample</Summary>

**Javascript**
```javascript
var button = new kintoneUIComponent.Button({
    text: 'Submit',
    type: 'submit'
});
```
**React**
```javascript
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

Dom element

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var button = new kintoneUIComponent.Button({text: 'button'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
```

**React**
```javascript
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

### setText(text)
Set displayed text in button.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|text|	String|	Yes|Display text in button|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var button = new kintoneUIComponent.Button({text: 'button'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
button.setText('submit');
```

**React**
```javascript
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Button text='Submit' type='normal' />
        );
    }
}
```
</details>

### setType(type)
Set the displayed type for button.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|type|String|No|Style of the button:<ul><li> 'normal' </li><li> 'submit' </li></ul> Default value: 'normal'|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var button = new kintoneUIComponent.Button({text: 'button'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
button.setType('normal');
```

**React**
```javascript
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Button text='Submit' type='normal' />
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
var button = new kintoneUIComponent.Button({text: 'button'});
button.setStyles({background:"blue", fontSize:'20px'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
```
**React**
```javascript
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Button text='Submit' type='normal' setStyles={{background:"blue", fontSize:'20px'}} />
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
var button = new kintoneUIComponent.Button({text: 'button'});
button.setClassName("class1 class2");
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
```

**React**
```javascript
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Button text='Submit' type='normal' setClassName="class1 class2" />
        );
    }
}
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

**Javascript**
```javascript
var button = new kintoneUIComponent.Button({text: 'button'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
button.on('click', function(event) {
    console.log('on click');
});
```

**React**
```javascript
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Button onClick={this.handleButtonClick} />
        );
    }
 
    handleButtonClick = (event) => {
        console.log('on click');
    }
}
```
</details>

### show()
Display button.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var button = new kintoneUIComponent.Button({text: 'button'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
button.show();
```

**React**
```javascript
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Button text="button" isVisible={true} />
        );
    }
}
```
</details>

### hide()
Hide button.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var button = new kintoneUIComponent.Button({text: 'button'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
button.hide();
```

**React**
```javascript
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Button text="button" isVisible={false} />
        );
    }
}
```
</details>

### disable()
Disable button.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var button = new kintoneUIComponent.Button({text: 'button'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
button.disable();
```

**React**
```javascript
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Button text="button" isDisabled={true} />
        );
    }
}
```
</details>

### enable()
Enable button.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var button = new kintoneUIComponent.Button({text: 'button'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
button.enable();
```

**React**
```javascript
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Button text="button" isDisabled={false} />
        );
    }
}
```
</details>