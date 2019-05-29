# ColorPicker

## Overview
![ColorPicker](../img/colorPicker.PNG)

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
|options.color|HEX String|No|The ColorPicker's input value. If setted color is not valid ,it's value will be changed to #000000.<br>Default value is '#ff0000'.|
|options.isDisabled|Boolean|No|The ColorPicker will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The ColorPicker will be visible.|
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
var el = kintone.app.getHeaderMenuSpaceElement()
el.appendChild(colorPicker.render());
```

**React**
```
import { ColorPicker } from 'kintone-ui-component';
import React from 'react';
  
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
        <Sample />,
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
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(colorPicker.render());
 
colorPicker.on('accept', function(color) {
    console.log(color.hex);
});  
colorPicker.on('cancel', function(color) {
    console.log(color.hex);
}); 
colorPicker.on('changeComplete', function(color) {
    console.log(color.hex);
});
```

**React**
```
import { ColorPicker } from '@kintone/kintone-ui-component';
import React from 'react';
  
export default class Plugin extends React.Component {
    state = {color: '#FF0000'}
    render() {
        return (
            <ColorPicker color={this.state.color} onAccept={this.handleAccept}
                onCancel={this.handleCancel} onChangeComplete={this.handleChangeComplete} />
        );
    }
    handleAccept = (color) => {
        console.log(color.hex);
    };
    handleCancel = (color) => {
        console.log(color.hex);
    };
    handleChangeComplete = (color) => {
        console.log(color.hex);
    };
}
```

</details>