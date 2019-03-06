# IconButton

## Overview
![IconButton](../img/iconButton.PNG)

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.type|String|No|The type of of button. The value is one of: <ul><li> 'insert'</li><li> 'remove'</li><li> 'close'</li><li> 'file'</li><li> 'right'</li><li> 'left'</li></ul> Default value is 'insert'.|
|options.size|String|No|Size of icon button:<ul><li> 'large'</li><li> 'small'</li></ul> Default value is 'large'.|
|options.color|String|No |Color of icon button:<ul><li>  'gray'</li><li>'blue'</li><li>'red'</li><li>'green'</li><li>'transparent'</li></ul>Default value is 'gray'.|
|options.isDisabled|Boolean|No|The icon button will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The icon button will be visible. <br> Default value: 'true'|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var insertBtn = new kintoneUIComponent.IconButton({type: 'insert',color:'blue', size: 'small'});
```

**React**
```
import { IconButton } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <IconButton type='insert' size='small' color='blue' />
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
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());
```

**React**
```
import { IconButton } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <IconButton type='insert' size='small' color='blue' />
        );
    }
}
```
</details>

### setType(type)
Set the type of the button.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|type|String|No|The type of of button. The value is one of: <ul><li> 'insert'</li><li> 'remove'</li><li>'close'</li><li> 'file'</li><li> 'right'</li><li> 'left'</li></ul> Default value is 'insert'.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());

iconBtn.setType('remove');
```

**React**
```
import { IconButton } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <IconButton type='insert' size='small' type='remove'/>
        );
    }
}

```
</details>

### setSize(size)
Change size of icon button.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|size|String|No|The size of of button. The value is one of: <ul><li>  'normal'</li><li> 'small'</li></ul> Default value is 'normal'.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());

iconBtn.setSize('small');
```

**React**
```
import { IconButton } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <IconButton type='insert' size='small' />
        );
    }
}
```
</details>

### setColor(color)
Change color of icon button.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|color|String|No|The size of of button. The value is one of: <ul><li>  'gray'</li><li> 'blue'</li><li> 'red'</li><li> 'green'</li><li>'transparent'</li></ul> Default value is 'gray'.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());
iconBtn.setSize('small');
iconBtn.setShape('normal');
iconBtn.setColor('green');
```

**React**
```
import { IconButton } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <IconButton text='insert' size='small' shape='normal' color='green' />
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
```
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());

iconBtn.on('click', function(event) {
    console.log('on click');
});
```

**React**
```
import { IconButton } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <IconButton type='insert' size='small' color='blue' onClick={this.handleClick} />
        );
    }
    handleClick() {
        console.log('on click');
    }
}

```
</details>

### show()

Display the icon button.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());

iconBtn.show();
```

**React**
```
import { IconButton } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <IconButton type='insert' size='small' color='blue' isVisible={true} />
        );
    }
}

```
</details>

### hide()
Hide the icon button.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());

iconBtn.hide();
```

**React**
```
import { IconButton } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <IconButton type='insert' size='small' color='blue' isVisible={false} />
        );
    }
}

```
</details>

### disable()
Disabled the icon button.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());

iconBtn.disable();
```

**React**
```
import { IconButton } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <IconButton type='insert' size='small' color='blue' isDisabled={true} />
        );
    }
}

```
</details>

### enable()
Enabled the icon button.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var iconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(iconBtn.render());

iconBtn.enable();
```

**React**
```
import { IconButton } from 'kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <IconButton type='insert' size='small' color='blue' isDisabled={false} />
        );
    }
}

```
</details>
