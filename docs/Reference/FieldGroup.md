# FieldGroup

## Overview
![FieldGroup](../img/fieldgroup-expand.png)
![FieldGroup](../img/fieldgroup-collapse.png)

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|Yes|The object contains params of constructor.|
|options.content|DOM Element|No|Content of Field Group.|
|options.name|String|No|Field group name.|
|options.toggle|String|No|Set the toggle state. <br> Default value: 'collapse'|
|options.onToggle|Function|No|Set the toggle function. ※This prop is for react. When you use pure JavaScript interface, there is no need to use this prop.|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
const text = new kintoneUIComponent.Text({ value: "12345" });
 
const fieldGroup = new kintoneUIComponent.FieldGroup({
      content: text.render(),
      name: 'Group',
      toggle: 'expand'
    })
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(fieldGroup.render());
```

**React**
```
import { FieldGroup, RadioButton } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
 
class Sample extends React.Component {
    constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            },
            {
                label: 'Banana',
                value: 'Banana',
                isDisabled: false
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: false
            },
        ];
        this.state = {
            items: items,
            radioValue: 'Orange',
            name: 'Group',
            toggle: 'expand'
        };
    }
 
    render() {
        return (
            <div>
                <FieldGroup
                    name={this.state.name}
                    toggle={this.state.toggle}
                    onToggle={this._handleToggleClick}
                >
                    <RadioButton name='radio' items={this.state.items} value={this.state.radioValue} onChange={(radioValue) => {this.setState({radioValue})}} />
                </FieldGroup>
            </div>
        );
    }
 
    _handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
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
const text = new kintoneUIComponent.Text({ value: "12345" });
 
const fieldGroup = new kintoneUIComponent.FieldGroup({
      content: text.render(),
      name: 'Group',
      toggle: 'expand'
    })
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(fieldGroup.render());
```

**React**
```
import { FieldGroup, RadioButton } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
 
class Sample extends React.Component {
  constructor(opts) {
        super(opts);
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            },
            {
                label: 'Banana',
                value: 'Banana',
                isDisabled: false
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: false
            },
        ];
        this.state = {
            items: items,
            radioValue: 'Orange',
            name: 'Group',
            toggle: 'expand'
        };
    }
 
    render() {
        return (
            <div>
                <FieldGroup
                    name={this.state.name}
                    toggle={this.state.toggle}
                    onToggle={this._handleToggleClick}
                >
                    <RadioButton name='radio' items={this.state.items} value={this.state.radioValue} onChange={(radioValue) => {this.setState({radioValue})}} />
                </FieldGroup>
            </div>
        );
    }
 
    _handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }
}
```
</details>

### setContent(content)
Add an item to end of the field group.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|content|	DOM|	Yes|The content of Field Group.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
const radioBtn = new kintoneUIComponent.RadioButton({
      items: [{ label: 'Orange', value: 'orange' }, { label: 'Banana', value: 'banana' }],
      value: 'orange',
      name: 'Fruit'
});
 
const fieldGroup = new kintoneUIComponent.FieldGroup({
      content: radioBtn.render(),
      name: 'Group',
      toggle: 'expand'
    })
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(fieldGroup.render());
 
const text = new kintoneUIComponent.Text({ value: "12345" });
fieldGroup.setContent(text.render());
```

**React**
```
import { FieldGroup, Label } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
 
class Sample extends React.Component {
  constructor(opts) {
        super(opts);
        this.state = {
            content: <Label text='Field Group Content Label' textColor='#e74c3c' backgroundColor='yellow' isRequired={true} />,
            radioValue: 'Orange',
            name: 'Group',
            toggle: 'expand'
        };
    }
    render() {
        return (
            <div>
                <FieldGroup
                    name={this.state.name}
                    toggle={this.state.toggle}
                    onToggle={this._handleToggleClick}
                >
                    <Label text='Field Group Content Label' textColor='#e74c3c' backgroundColor='yellow' isRequired={true} />
                </FieldGroup>
                <button onClick={this.handleClick}>Add Item</button>
            </div>
        );
    }
 
    _handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }
}
```

</details>

### getContent()
Get content of field group

**Parameter**

None

**Returns**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|content|	DOM|	Yes|The content of Field Group.|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
const radioBtn = new kintoneUIComponent.RadioButton({
      items: [{ label: 'Orange', value: 'orange' }, { label: 'Banana', value: 'banana' }],
      value: 'orange',
      name: 'Fruit'
});
 
const fieldGroup = new kintoneUIComponent.FieldGroup({
      content: radioBtn.render(),
      name: 'Group',
      toggle: 'expand'
    })
 
fieldGroup.getContent();
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(fieldGroup.render());
```

</details>

### setName(name)
Set the name for the field group.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|name|	String|	No|The field group name.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
const text = new kintoneUIComponent.Text({ value: "12345" });
 
const fieldGroup = new kintoneUIComponent.FieldGroup({
      content: text.render(),
      name: 'Group',
      toggle: 'expand'
    })

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(fieldGroup.render());
 
fieldGroup.setName('New Group Name');
```

**React**
```
import { FieldGroup, Label } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
 
class Sample extends React.Component {
  constructor(opts) {
        super(opts);
        this.state = { name: 'Group', toggle: 'expand' };
    }
    render() {
        return (
            <div>
                <FieldGroup items={this.state.items} name={this.state.name} toggle={this.state.toggle} onToggle={this._handleToggleClick} >
                    <Label text='Field Group Content Label' textColor='#e74c3c' backgroundColor='yellow' isRequired={true} />
                </FieldGroup>
                <button onClick={this.handleClick}>Set Name</button>
            </div>
        );
    }
 
    _handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }
 
    handleClick = () => {
        this.setState({ name: 'NEW FIELD GROUP' });
    }
}
```

</details>

### getName()
Get name of field group

**Parameter**

None

**Returns**

| Name| Type| Description |
| --- | --- | --- |
|name|	String|	The content of Field Group.|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
const text = new kintoneUIComponent.Text({ value: "12345" });
 
const fieldGroup = new kintoneUIComponent.FieldGroup({
      content: text.render(),
      name: 'Group',
      toggle: 'expand'
    })

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(fieldGroup.render());
 
fieldGroup.getName();
```

**React**
```
import { FieldGroup, Label } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
 
class Sample extends React.Component {
  constructor(opts) {
        super(opts);
        this.state = { name: 'Group', toggle: 'expand' };
    }
    render() {
        return (
            <div>
                <FieldGroup name={this.state.name} toggle={this.state.toggle} onToggle={this._handleToggleClick} >
                    <Label text='Field Group Content Label' textColor='#e74c3c' backgroundColor='yellow' isRequired={true} />
                </FieldGroup>
                <button onClick={this.handleClick}>Get Name</button>
            </div>
        );
    }
 
    _handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }
 
    handleClick = () => {
        console.log(this.state.name);
    }
}
```

</details>

### setToggle(toggle)
Set the toggle state for the field group.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|toggle|	String|	No|The field group toggle state.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
const text = new kintoneUIComponent.Text({ value: "12345" });
 
const fieldGroup = new kintoneUIComponent.FieldGroup({
      items: text.render(),
      name: 'Group',
      toggle: 'expand'
    })
    
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(fieldGroup.render());

fieldGroup.setToggle('collapse');
```

**React**
```
import { FieldGroup, Label } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
 
class Sample extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = { name: 'Group', toggle: 'expand' };
    }
    render() {
        return (
            <div>
                <FieldGroup name={this.state.name} toggle={this.state.toggle} onToggle={this._handleToggleClick} >
                    <Label text='Field Group Content Label' textColor='#e74c3c' backgroundColor='yellow' isRequired={true} />
                </FieldGroup>
                <button onClick={this.handleClick}>Set Toggle</button>
            </div>
        );
    }
 
    _handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }
 
    handleClick = () => {
        this.setState({ toggle: 'collapse' });
    }
}
```
</details>

### getToggle()
Get toggle state of the field group.

**Parameter**

None

**Returns**

| Name| Type| Description |
| --- | --- | --- |
|toggle|	String|	The field group toggle state.|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```
const text = new kintoneUIComponent.Text({ value: "12345" });
 
const fieldGroup = new kintoneUIComponent.FieldGroup({
      content: text.render(),
      name: 'Group',
      toggle: 'expand'
    })
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(fieldGroup.render());
 
fieldGroup.getToggle();
```

**React**
```
import { FieldGroup, Label } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
 
class Sample extends React.Component {
  constructor(opts) {
        super(opts);
        this.state = { name: 'Group', toggle: 'expand' };
    }
    render() {
        return (
            <div>
                <FieldGroup name={this.state.name} toggle={this.state.toggle} onToggle={this._handleToggleClick} >
                    <Label text='Field Group Content Label' textColor='#e74c3c' backgroundColor='yellow' isRequired={true} />
                </FieldGroup>
                <button onClick={this.handleClick}>Get Toggle</button>
            </div>
        );
    }
 
    _handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }
 
    handleClick = () => {
        console.log(this.state.toggle);
    }
}
```

</details>