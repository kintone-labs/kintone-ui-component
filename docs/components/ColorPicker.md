---
id: colorpicker
title: ColorPicker
sidebar_label: ColorPicker
---

## Overview
![ColorPicker](assets/colorPicker.PNG)

|Number|	Description|
| --- | --- |
|1|HEX input|	
|2|ColorPicker popup window|
|3|Saturation|	
|4|Hue|
|5|RGB input|
|6|HSV input|
|7|OK button|
|8|Cancel button|

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | - | --- | ----- |
|options|Object|No|An object contains params of constructor.|
|options.color|HEX String|No|The ColorPicker's input value. If setted color is not valid, an error will be displayed.<br>Default value is '#FF0000'.|
|options.isDisabled|Boolean|No|The ColorPicker will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The ColorPicker will be visible. <br> Default value: 'true'|
|options.onChange|Callback|No|Handler for color change event.|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var colorPicker = new kintoneUIComponent.ColorPicker({color: '#FF0000'});
```

**React**
```
import { ColorPicker } from '@kintone/kintone-ui-component';
import React from 'react';
  
export default class Plugin extends React.Component {
    state = {color: ''}
    render() {
        return (
            <ColorPicker color={this.state.color} />
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
var colorPicker = new kintoneUIComponent.ColorPicker({color: '#FF0000'});
kintone.events.on('app.record.index.show', function(event) {
    var el = kintone.app.getHeaderSpaceElement();
    el.appendChild(colorPicker.render());
});
```

**React**
```
import { ColorPicker } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
  
export default class Plugin extends React.Component {
    state = {color: ''}
    render() {
        return (
            <ColorPicker color={this.state.color} />
        );
    }
}
kintone.events.on('app.record.index.show', function (event) {
    ReactDOM.render(
        <Plugin />,
        kintone.app.getHeaderSpaceElement()
    );
});
```

</details>

### setColor(color)
Set the color of colorpicker .

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|color|	String|	Yes|The color of colorpicker.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var colorPicker = new kintoneUIComponent.ColorPicker({color: '#FF0000'});
var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(colorPicker.render());
colorPicker.setColor('#666666');
```

**React**
```
import { ColorPicker } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
  
export default class Plugin extends React.Component {
    state = {color: '#FF0000'}
  
    render() {
        return (
        <div>
          <ColorPicker color={this.state.color} />
          <button onClick={this.handleClick}>Click</button>
        </div>
      );
    }
    handleClick= () => {
        this.setState({
            color: '#666666'
        });
    };
}
kintone.events.on('app.record.index.show', function(event) {
    ReactDOM.render(
        <Plugin />,
        kintone.app.getHeaderSpaceElement()
    );
});
```

</details>

### getColor()
Get the color of colorpicker.

**Parameter**

None

**Returns**

| Name| Type| Description |
| --- | --- | --- |
|color|	String|The color of colorpicker.|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var colorPicker = new kintoneUIComponent.ColorPicker({color: '#FF0000'});
var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(colorPicker.render());
colorPicker.getColor();
```

**React**
```
import { ColorPicker } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
  
export default class Plugin extends React.Component {
    state = {color: '#FF0000'}
  
    render() {
        return (
            <div>
                <ColorPicker  color={this.state.color}  />
                <button onClick={this.handleClick}>Get Color</button>
            </div>
        );
    }
    handleClick= () => {
        console.log(this.state.color);
    };
}
kintone.events.on('app.record.index.show', function(event) {
    ReactDOM.render(
        <Plugin />,
        kintone.app.getHeaderSpaceElement()
    );
});
```

</details>

### on(eventName, callback)
Register callback for click event

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|eventName|	String|	Yes|Name of event: <ul><li>'change'</li></ul>|
|callback|function |Yes|callback|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var colorPicker = new kintoneUIComponent.ColorPicker({color: '#FF0000'});
colorPicker.on('change', function(color) {
    console.log(color);
});

kintone.events.on('app.record.index.show', function(event) {
    var el = kintone.app.getHeaderSpaceElement();
    el.appendChild(colorPicker.render());
});
```

**React**
```
import { ColorPicker } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
  
export default class Plugin extends React.Component {
    state = {color: '#FF0000'}
    render() {
        return (
            <ColorPicker color={this.state.color} onChange={this.handleChange} />
        );
    }
    handleChange = (color) => {
        console.log(color);
    };
}
kintone.events.on('app.record.index.show', function(event) {
    ReactDOM.render(
        <Plugin />,
        kintone.app.getHeaderSpaceElement()
    );
});
```

</details>

### show()
Display ColorPicker.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var myColorPicker = new kintoneUIComponent.ColorPicker({color: '#FF0000'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(myColorPicker.render());
myColorPicker.show();
```

**React**
```
import { ColorPicker } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <ColorPicker color='#FF0000' isVisible={true} />
        );
    }
}

kintone.events.on('app.record.index.show', function(event) {
    ReactDOM.render(
        <Plugin />,
        kintone.app.getHeaderSpaceElement()
    );
});
```
</details>

### hide()
Hide ColorPicker.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var myColorPicker = new kintoneUIComponent.ColorPicker({color: '#FF0000'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(myColorPicker.render());
myColorPicker.hide();
```

**React**
```
import { Button } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <ColorPicker color='#FF0000' isVisible={false} />
        );
    }
}
kintone.events.on('app.record.index.show', function(event) {
    ReactDOM.render(
        <Plugin />,
        kintone.app.getHeaderSpaceElement()
    );
});
```
</details>

### disable()
Disable ColorPicker.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var myColorPicker = new kintoneUIComponent.ColorPicker({color: '#FF0000'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(myColorPicker.render());
myColorPicker.disable();
```

**React**
```
import { ColorPicker } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <ColorPicker color='#FF0000' isDisabled={true} />
        );
    }
}
kintone.events.on('app.record.index.show', function(event) {
    ReactDOM.render(
        <Plugin />,
        kintone.app.getHeaderSpaceElement()
    );
});
```
</details>

### enable()
Enable ColorPicker.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
var myColorPicker = new kintoneUIComponent.ColorPicker({color: '#FF0000'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(myColorPicker.render());
myColorPicker.enable();
```

**React**
```
import { ColorPicker } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <ColorPicker color="#FF0000" isDisabled={false} />
        );
    }
}
kintone.events.on('app.record.index.show', function(event) {
    ReactDOM.render(
        <Plugin />,
        kintone.app.getHeaderSpaceElement()
    );
});
```
</details>