# FieldGroup

## Overview
![FieldGroup](../img/fieldgroup-expand.png)
![FieldGroup](../img/fieldgroup-collapse.png)

|Number|	Description|
| --- | --- |
|1| Expanding icon.|
|2| Field roup name.|
|3| Display item zone.<br>When the width of display items is over 517px, the width of Field Group component changes according to display items.<br>If the width of Field Group component is over the width of its parent DOM, scroll bar is shown.|
|4| Collapse icon.|

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.content|DOM Element|No|Content of Field Group.|
|options.name|String|No|Field group name.|
|options.toggle|String|No|Set the toggle state. <br> Default value: 'collapse'<br> Following value can be set:<ul><li>collapse</li><li>expand</li>|
|options.onToggle|Function|No|Set the toggle function. <br>※This prop is for react. When you use pure JavaScript interface, there is no need to use this prop.|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const text = new kintoneUIComponent.Text({ value: "12345" });
const button = new kintoneUIComponent.Button({
    text: 'Submit',
    type: 'submit'
});
const attachment = new kintoneUIComponent.Attachment({files: [{name: 'test_1', size: 12345}]});
const checkbox = new kintoneUIComponent.CheckBox ({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Banana',
            value: 'Banana',
            isDisabled: true
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        }
    ],
    value: ['Orange', 'Banana']
});
const dropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: true
        },
        {
            label: 'Banana',
            value: 'Banana',
            isDisabled: false
        }
    ],
    value: 'Banana'
});
const insertBtn = new kintoneUIComponent.IconButton({type: 'insert',color:'blue', size: 'small'});
const label = new kintoneUIComponent.Label({text: 'My label', isRequired: true});
const mulChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Banana',
            value: 'Banana',
            isDisabled: true
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        }
    ],
    value: ['Orange', 'Banana']
});
const alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
const radioBtn = new kintoneUIComponent.RadioButton({
    name: "fruit",
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Banana',
            value: 'Banana',
            isDisabled: true
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        }
    ],
    value: 'Banana'
});
const textArea = new kintoneUIComponent.TextArea({value: 'textarea'});
const customCell = function() {
    return {
        init: function({rowData, updateRowData}) {
            const span = document.createElement('span');
            const textfield1 = new kintoneUIComponent.Text({value: rowData.text1.value});
            const textfield2 = new kintoneUIComponent.Text({value: rowData.text2.value});
            span.appendChild(textfield1.render());
            span.appendChild(textfield2.render());
            textfield1.on('change', function(newValue){
                updateRowData({text1: {value: newValue}}, false);
            });
            textfield2.on('change', function(newValue){
                updateRowData({text2: {value: newValue}}, false);
            });
            this.textfield1 = textfield1;
            this.textfield2 = textfield2;
            return span;
        },
        update: function({ rowData }) {
            const text1val = rowData.text1;
            const text2val = rowData.text2;
            if (text1val && this.textfield1._reactObject) {
                this.textfield1.setValue(text1val.value);
            }
            if (text2val && this.textfield2._reactObject) {
                this.textfield2.setValue(text2val.value);
            }
        }
    }
};
const table = new kintoneUIComponent.Table({
    // inital table data
    data: [
        {
            text: { value: 'text field' },
            text1: { value: 'text field 1' },
            text2: { value: 'text field 2' }
        }
    ],
    // default row data on row add
    defaultRowData: {
        text: { value: 'text field' },
        text1: { value: 'text field 1' },
        text2: { value: 'text field 2' }
    },
    onRowAdd: function(e) {
        console.log('table.onAdd', e);
        return {
            text: {value: 'overwritten field value'},
            text1: { value: 'overwritten field1 value' },
            text2: { value: 'overwritten field2 value' }
        }
    },
    columns: [
        {
            header: 'Text',
            cell: function() { return kintoneUIComponent.createTableCell('text', 'text') }
        },
        {
            header: 'Custom cell contains 2 textfields',
            cell: function() { return customCell() }
        }
    ]
});

const fieldGroupContent = document.createElement('div')

fieldGroupContent.appendChild(alert.render())
fieldGroupContent.appendChild(attachment.render())
fieldGroupContent.appendChild(button.render())
fieldGroupContent.appendChild(checkbox.render())
fieldGroupContent.appendChild(dropdown.render())
fieldGroupContent.appendChild(insertBtn.render())
fieldGroupContent.appendChild(label.render())
fieldGroupContent.appendChild(mulChoice.render())
fieldGroupContent.appendChild(radioBtn.render())
fieldGroupContent.appendChild(table.render())
fieldGroupContent.appendChild(text.render())
fieldGroupContent.appendChild(textArea.render())

const fieldGroup = new kintoneUIComponent.FieldGroup({
    content: fieldGroupContent,
    name: 'Group',
    toggle: 'expand'
})
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(fieldGroup.render());
```

**React**
```javascript
import { FieldGroup, RadioButton } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Sample extends React.Component {
    constructor(props) {
        super(props);
        const items = [
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
Get DOM element of component.

**Parameter**

None

**Returns**

DOM element

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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
```javascript
import { FieldGroup, RadioButton } from '@kintone/kintone-ui-component';
import React from 'react';
import { render } from 'react-dom';
 
export default class Sample extends React.Component {
    constructor(props) {
        super(props);
        const items = [
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
render(<Sample />, kintone.app.getHeaderSpaceElement());
```
</details>

### setContent(content)
Add an item to end of Field Group.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|content|	DOM|	Yes|The content of Field Group.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
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

const button = new kintoneUIComponent.Button({ text: 'Set content', type: 'normal' });
button.on('click', function () {
    const text = new kintoneUIComponent.Text({ value: "12345" });
    fieldGroup.setContent(text.render());
});
body.appendChild(button.render());
```

**React**
```javascript
import { FieldGroup, Label } from '@kintone/kintone-ui-component';
import React from 'react';

export default class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: <Label text='Field Group Content Label' textColor='#e74c3c'
            backgroundColor='yellow' isRequired={true} />,
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
                    content={this.state.content}
                >
                </FieldGroup>
                <button onClick={this.handleClick}>Set Item</button>
            </div>
        );
    }

    _handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }
    handleClick = () => {
      this.setState({
        content: <Label text='updated Content Label' textColor='#e74c3c' backgroundColor='yellow' isRequired={true} />
      });
    }
}
```

</details>

### getContent()
Get content of Field Group.

**Parameter**

None

**Returns**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|content|	DOM|	Yes|The content of Field Group.|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const radioBtn = new kintoneUIComponent.RadioButton({
    items: [{ label: 'Orange', value: 'orange' }, { label: 'Banana', value: 'banana' }],
    value: 'orange',
    name: 'Fruit'
});

const fieldGroup = new kintoneUIComponent.FieldGroup({
    content: radioBtn.render(),
    name: 'Group',
    toggle: 'expand'
});

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(fieldGroup.render());

console.log(fieldGroup.getContent());
```
**React**
```javascript
import { FieldGroup, Label } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: <Label text='Field Group Content Label' textColor='#e74c3c'
            backgroundColor='yellow' isRequired={true} />,
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
                    content={this.state.content}
                >
                </FieldGroup>
                <button onClick={this.handleClick}>Get Item</button>
            </div>
        );
    }

    _handleToggleClick = () => {
        this.setState({
            toggle: this.state.toggle === 'expand' ? 'collapse' : 'expand'
        });
    }
    handleClick = () => {
      console.log(this.state.content)
    }
}
```

</details>
</details>

### setName(name)
Set the name for Field Group.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|name|	String|	Yes|The Field Group name.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const text = new kintoneUIComponent.Text({ value: "12345" });

const fieldGroup = new kintoneUIComponent.FieldGroup({
    content: text.render(),
    name: 'Group',
    toggle: 'expand'
})

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(fieldGroup.render());

const button = new kintoneUIComponent.Button({ text: 'Set name', type: 'normal' });
button.on('click', function () {
    fieldGroup.setName('New Group Name');
});

body.appendChild(button.render());
```

**React**
```javascript
import { FieldGroup, Label } from '@kintone/kintone-ui-component';
import React from 'react';

export default class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Group', toggle: 'expand' };
    }
    render() {
        return (
            <div>
                <FieldGroup name={this.state.name} toggle={this.state.toggle} onToggle={this._handleToggleClick} >
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
Get name of Field Group.

**Parameter**

None

**Returns**

| Name| Type| Description |
| --- | --- | --- |
|name|	String|	The content of Field Group.|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const text = new kintoneUIComponent.Text({ value: "12345" });
 
const fieldGroup = new kintoneUIComponent.FieldGroup({
    content: text.render(),
    name: 'Group',
    toggle: 'expand'
});

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(fieldGroup.render());
 
console.log(fieldGroup.getName());
```

**React**
```javascript
import { FieldGroup, Label } from '@kintone/kintone-ui-component';
import React from 'react';

export default class Sample extends React.Component {
    constructor(props) {
        super(props);
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
Set the toggle state for Field Group.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|toggle|	String|	Yes|The toggle state of Field Group.<u><li>collapse</li><li>expand</li></ul>|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const text = new kintoneUIComponent.Text({ value: "12345" });

const fieldGroup = new kintoneUIComponent.FieldGroup({
    content: text.render(),
    name: 'Group',
    toggle: 'expand'
});

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(fieldGroup.render());

const button = new kintoneUIComponent.Button({ text: 'Set toggle is collapse', type: 'normal' });
button.on('click', function () {
    fieldGroup.setToggle('collapse');
});

body.appendChild(button.render());
```

**React**
```javascript
import { FieldGroup, Label } from '@kintone/kintone-ui-component';
import React from 'react';

export default class Sample extends React.Component {
    constructor(props) {
        super(props);
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
Get toggle state of Field Group.

**Parameter**

None

**Returns**

| Name| Type| Description |
| --- | --- | --- |
|toggle|	String|	The toggle state of Field Group.<u><li>collapse</li><li>expand</li></ul>|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const text = new kintoneUIComponent.Text({ value: "12345" });
 
const fieldGroup = new kintoneUIComponent.FieldGroup({
      content: text.render(),
      name: 'Group',
      toggle: 'expand'
    })
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(fieldGroup.render());
 
console.log(fieldGroup.getToggle());
```

**React**
```javascript
import { FieldGroup, Label } from '@kintone/kintone-ui-component';
import React from 'react';

export default class Sample extends React.Component {
    constructor(props) {
        super(props);
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