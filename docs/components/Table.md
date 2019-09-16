---
id: table
title: Table
sidebar_label: Table
---

## Overview
![Table](assets/table.PNG)

|Number|	Description|
| --- | --- |
|1|Header of column|	
|2|Icon button for insert row|
|3|Icon button for remove row|	
|4|Child control component|
|5|Sample row|

!!! note
    Below is the list components that table supports:
    <ul><li>Text</li>
    <li>Dropdown</li>
    <li>CheckBox</li>
    <li>MultipleChoice</li>
    <li>RadioButton</li>
    <li>Label</li>
    <li>IconButton</li>
    <li>Alert</li></ul>

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|Yes|The object contains params of constructor.|
|options.template|TableRow|Yes|The row template.|
|options.header|Array<String>|Yes|Header content for the table.|
|options.value|Array<Array>|No|Value for table. <br> Refer to the [getValue()](#getvalue) and [setValue(value)](#setvaluevalue) for more information |

<details class="tab-container" open>
<Summary>Sample</Summary>

**React**
```
import React, { Component } from 'react';
import { Table, RadioButton, Dropdown, Button, IconButton} from 'kintone-ui-component';
 
class App extends Component {
  constructor(props) {
    super(props);
    const fruit = [
          {
            label: 'Orange',
            value: 'orange'
          },
          {
            label: 'Banana',
            value: 'banana'
          }
        ];
 
    const color = [
      {
        label: 'Red',
        value: 'red'
      },
      {
        label: 'Green',
        value: 'green'
      }
    ];
    this.state = {
      fruit: fruit,
      table: {
        header: ['Radio', 'Dropdown', 'MultipleChoice', 'Check', 'Alert', 'Label', 'text', 'button', 'icon button'],
        rowTemplate: [
          <RadioButton name="fruit" items={fruit} value={fruit.value} isVisible={true} isDisabled={false} />,
          <Dropdown items={color} isVisible={true} isDisabled={false} />,
          <Button text="button" isVisible={true} isDisabled={false} />,
          <IconButton />
        ]
      }
    }
  }

  handleRowAdd = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }
  handleRowRemove = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }

  handleCellChange = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }

  handleCellClick = (data) => {
    console.log('data: ', data);
  }

  render() {
    return (
      <div>
        <Table header={this.state.table.header} rowTemplate={this.state.table.rowTemplate}
          value={this.state.table.value} isVisible={true}
          onCellChange={this.handleCellChange}
          onRowAdd={this.handleRowAdd}
          onRowRemove={this.handleRowRemove}
          onCellClick={this.handleCellClick}
        />
      </div>
    );
  }
}
```
**Javascript**
```
const radioBtn = new kintoneUIComponent.RadioButton({
    items: [{label: 'Orange', value: 'orange'}, {label: 'Banana', value: 'banana'}],
    value: 'orange',
    name: 'Fruit'
});
 
const dropdown = new kintoneUIComponent.Dropdown({
    items: [{label: 'Red', value: 'red'}, {label: 'Green', value: 'green'}],
    value: 'green'
})
 
var table = new kintoneUIComponent.Table({
    rowTemplate: [radioBtn, dropdown],
    header: ['Fruit', 'Color']
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
import React, { Component } from 'react';
import { Table, RadioButton, Dropdown, Button, IconButton} from 'kintone-ui-component';
 
class App extends Component {
  constructor(props) {
    super(props);
    const fruit = [
          {
            label: 'Orange',
            value: 'orange'
          },
          {
            label: 'Banana',
            value: 'banana'
          }
        ];
 
    const color = [
      {
        label: 'Red',
        value: 'red'
      },
      {
        label: 'Green',
        value: 'green'
      }
    ];
    this.state = {
      fruit: fruit,
      table: {
        header: ['Radio', 'Dropdown', 'MultipleChoice', 'Check', 'Alert', 'Label', 'text', 'button', 'icon button'],
        rowTemplate: [
          <RadioButton name="fruit" items={fruit} value={fruit.value} isVisible={true} isDisabled={false} />,
          <Dropdown items={color} isVisible={true} isDisabled={false} />,
          <Button text="button" isVisible={true} isDisabled={false} />,
          <IconButton />
        ]
      }
    }
  }

  handleRowAdd = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }
  handleRowRemove = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }

  handleCellChange = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }

  handleCellClick = (data) => {
    console.log('data: ', data);
  }

  render() {
    return (
      <div>
        <Table header={this.state.table.header} rowTemplate={this.state.table.rowTemplate}
          value={this.state.table.value} isVisible={true}
          onCellChange={this.handleCellChange}
          onRowAdd={this.handleRowAdd}
          onRowRemove={this.handleRowRemove}
          onCellClick={this.handleCellClick}
        />
      </div>
    );
  }
}
```
**Javascript**
```
const radioBtn = new kintoneUIComponent.RadioButton({
    items: [{label: 'Orange', value: 'orange'}, {label: 'Banana', value: 'banana'}],
    value: 'orange',
    name: 'Fruit'
});
 
const dropdown = new kintoneUIComponent.Dropdown({
    items: [{label: 'Red', value: 'red'}, {label: 'Green', value: 'green'}],
    value: 'green'
})
 
var table = new kintoneUIComponent.Table({
    rowTemplate: [radioBtn, dropdown],
    header: ['Fruit', 'Color']
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(table.render());
```
</details>

### getValue()
Get value of all rows in the table.

**Parameter**

None

**Returns**

|Name|Type|Description|
| --- | --- | --- |
|value|	Array|Value of all rows in the table |

<details class="tab-container" open>
<Summary>Sample</Summary>

**React**
```
import React, { Component } from 'react';
import { Table, RadioButton, Dropdown, Button, IconButton} from 'kintone-ui-component';
 
class App extends Component {
  constructor(props) {
    super(props);
    const fruit = [
          {
            label: 'Orange',
            value: 'orange'
          },
          {
            label: 'Banana',
            value: 'banana'
          }
        ];
 
    const color = [
      {
        label: 'Red',
        value: 'red'
      },
      {
        label: 'Green',
        value: 'green'
      }
    ];
    this.state = {
      fruit: fruit,
      table: {
        header: ['Radio', 'Dropdown', 'MultipleChoice', 'Check', 'Alert', 'Label', 'text', 'button', 'icon button'],
        rowTemplate: [
          <RadioButton name="fruit" items={fruit} value={fruit.value} isVisible={true} isDisabled={false} />,
          <Dropdown items={color} isVisible={true} isDisabled={false} />,
          <Button text="button" isVisible={true} isDisabled={false} />,
          <IconButton />
        ]
      }
    }
  }

  handleRowAdd = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }
  handleRowRemove = (data) => {
    const table = this.state.table;
    table.value = data;
    this.setState({ table: table });
    console.log('data: ', data);
  }

  handleCellChange = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }

  handleCellClick = (data) => {
    console.log('data: ', data);
  }

  render() {
    return (
      <div>
        <Table header={this.state.table.header} rowTemplate={this.state.table.rowTemplate}
          value={this.state.table.value} isVisible={true}
          onCellChange={this.handleCellChange}
          onRowAdd={this.handleRowAdd}
          onRowRemove={this.handleRowRemove}
          onCellClick={this.handleCellClick}
        />
       <Button text="get value" onClick={() => {console.log('value: ', this.state.table.value)}} />
      </div>
    );
  }
}
```
**Javascript**
```
const radioBtn = new kintoneUIComponent.RadioButton({
    items: [{label: 'Orange', value: 'orange'}, {label: 'Banana', value: 'banana'}],
    value: 'orange',
    name: 'Fruit'
});
 
const dropdown = new kintoneUIComponent.Dropdown({
    items: [{label: 'Red', value: 'red'}, {label: 'Green', value: 'green'}],
    value: 'green'
})
 
var table = new kintoneUIComponent.Table({
    rowTemplate: [radioBtn, dropdown],
    header: ['Fruit', 'Color']
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(table.render());

var value = table.getValue();
value.forEach(rowData => {
    rowData.forEach(cellData => {
        console.log(cellData)
    });
});
```
</details>

### setValue(value)
Set value for every row in table. The number of rows in table's dependent on the length on this parameters. 

!!! note
    Below is the list components that this function supports:
    <ul><li>Text</li>
    <li>Dropdown</li>
    <li>CheckBox</li>
    <li>MultipleChoice</li>
    <li>RadioButton</li></ul>

**Parameter**

|Name|Type|Required|Description|
| --- | --- | --- |--- |
|value	|Array<Array>	|Yes|	Value for every row in table|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**React**
```
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
 
import { Alert, NotifyPopup, RadioButton, Text, CheckBox, Button, Dropdown, MultipleChoice, Label, Table, IconButton } from 'kintone-ui-component';
class App extends Component {
  constructor(props) {
    super(props);
    const fruit = [
          {
            label: 'Orange',
            value: 'orange'
          },
          {
            label: 'Banana',
            value: 'banana'
          }
        ];
 
    const color = [
      {
        label: 'Red',
        value: 'red'
      },
      {
        label: 'Green',
        value: 'green'
      }
    ];
    this.state = {
      fruit: fruit,
      table: {
        header: ['Radio', 'Dropdown', 'MultipleChoice', 'Check', 'Alert', 'Label', 'text', 'button', 'icon button'],
        rowTemplate: [
          <RadioButton name="fruit" items={fruit} value={fruit.value} isVisible={true} isDisabled={false} />,
          <Dropdown items={color} isVisible={true} isDisabled={false} />,
          <Button text="button" isVisible={true} isDisabled={false} />,
          <IconButton />
        ]
      }
    }
  }
 
  render() {
    return (
      <div>
        <Table header={this.state.table.header} rowTemplate={this.state.table.rowTemplate}
          value={this.state.table.value} isVisible={true}
        />
        <Button text="Set value" onClick={() => {const table = this.state.table; table.value = [['orange','red']]; this.setState({table: table})}}/>
      </div>
    );
  }
}
```
**Javascript**
```
const radioBtn = new kintoneUIComponent.RadioButton({
    items: [{label: 'Orange', value: 'orange'}, {label: 'Banana', value: 'banana'}],
    value: 'orange',
    name: 'Fruit'
});
 
const dropdown = new kintoneUIComponent.Dropdown({
    items: [{label: 'Red', value: 'red'}, {label: 'Green', value: 'green'}],
    value: 'green'
})
 
var table = new kintoneUIComponent.Table({
    rowTemplate: [radioBtn, dropdown],
    header: ['Fruit', 'Color']
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(table.render());
 
table.setValue([
    ['orange', 'green'],
    ['orange', 'red'],
    ['banana', 'green'],
    ['banana', 'red']
]);
```
</details>

### on(eventName, callBack)
Register callback for a event

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|eventName|	String|	Yes|Name of events: <ul><li>'rowAdd' <ul><li>The 'rowAdd' event occurs when adding a new row in the table </li></ul> </li><li>'rowRemove'<ul><li>The 'rowRemove' event occurs when removing a row in the table</li></ul> </li> <li>'cellChange'<ul><li>The 'cellChange' event occurs when the value of an element bellow has been changed:<ul><li>Text</li><li>Drodown</li><li>RadioButton</li><li>MultipleChoice</li><li>CheckBox</li></ul> </li> </ul></li><li>'cellClick<ul><li>The 'cellClick' event occurs when the value of an element bellow has been clicked:<ul><li>Button</li><li>IconButton</li><li>Label</li><li>Alert</li></ul> </li></ul></li></ul>|
|callback|function |Yes|callback|

**Returns**

Callback data

|Event| Name| Type| Description |
| --- | --- | --- | --- |
|rowAdd|	data |	Object |Callback data|
||data.tableValue |Array|Values of the table|
||data.row|	Interger|	Position of the new row in the table|
|rowRemove |data|	object|	Callback data|
||data.tableValue |Array|Values of the table|
| cellChange| data|	object|	Callback data|
||data.tableValue |Array|Values of the table|
||data.cell|	object|	Cell of the component which has been changed the values in the table|
||data.cell.row|	Interger|	Row specification of the object cell |
||data.cell.column|	Interger|	Column specification of the object cell |
|cellClick|data|	object|	Callback data|
||data.tableValue |Array|Values of the table|
||data.cell|	object|	Cell of the component which has been clicked in the table|
||data.cell.row	|Interger|	Row specification of the object cell |
||data.cell.column|	Interger|	Column specification of the object cell |

<details class="tab-container" open>
<Summary>Sample</Summary>

**React**
```
import React, { Component } from 'react';
import { Table, RadioButton, Dropdown, Button, IconButton} from 'kintone-ui-component';

class App extends Component {
  constructor(props) {
    super(props);
    const fruit = [
          {
            label: 'Orange',
            value: 'orange'
          },
          {
            label: 'Banana',
            value: 'banana'
          }
        ];

    const color = [
      {
        label: 'Red',
        value: 'red'
      },
      {
        label: 'Green',
        value: 'green'
      }
    ];
    this.state = {
      fruit: fruit,
      table: {
        header: ['Radio', 'Dropdown', 'MultipleChoice', 'Check', 'Alert', 'Label', 'text', 'button', 'icon button'],
        rowTemplate: [
          <RadioButton name="fruit" items={fruit} value={fruit.value} isVisible={true} isDisabled={false} />,
          <Dropdown items={color} isVisible={true} isDisabled={false} />,
          <Button text="button" isVisible={true} isDisabled={false} />,
          <IconButton />
        ]
      }
    }
  }

  handleRowAdd = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }
  handleRowRemove = (data) => {
    const table = this.state.table;
    table.value = data;
    this.setState({ table: table });
    console.log('data: ', data);
  }

  handleCellChange = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }

  handleCellClick = (data) => {
    console.log('data: ', data);
  }

  render() {
    return (
      <div>
        <Table header={this.state.table.header} rowTemplate={this.state.table.rowTemplate}
          value={this.state.table.value} isVisible={true}
          onCellChange={this.handleCellChange}
          onRowAdd={this.handleRowAdd}
          onRowRemove={this.handleRowRemove}
          onCellClick={this.handleCellClick}
        />
      </div>
    );
  }
}
```
**Javascript**
```
var radioBtn = new kintoneUIComponent.RadioButton({
    items: [{label: 'Orange', value: 'orange'}, {label: 'Banana', value: 'banana'}],
    value: 'orange',
    name: 'Fruit'
});
 
var dropdown = new kintoneUIComponent.Dropdown({
    items: [{label: 'Red', value: 'red'}, {label: 'Green', value: 'green'}],
    value: 'green'
})
 
var table = new kintoneUIComponent.Table({
    rowTemplate: [radioBtn, dropdown],
    header: ['Fruit', 'Color']
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(table.render());
 
table.on('rowRemove', function(data) {
    console.log(data);
})
table.on('rowAdd', function(data) {
    console.log(data);
})
table.on('cellChange', function(data) {
    console.log(data);
})
table.on('cellClick', function(data) {
    console.log(data);
})
```
</details>

### show()
Displayed the table

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**React**
```
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import { Alert, NotifyPopup, RadioButton, Text, CheckBox, Button, Dropdown, MultipleChoice, Label, Table, IconButton } from 'kintone-ui-component';
class App extends Component {
  constructor(props) {
    super(props);
    const fruit = [
          {
            label: 'Orange',
            value: 'orange'
          },
          {
            label: 'Banana',
            value: 'banana'
          }
        ];
 
    const color = [
      {
        label: 'Red',
        value: 'red'
      },
      {
        label: 'Green',
        value: 'green'
      }
    ];
    this.state = {
      fruit: fruit,
      table: {
        header: ['Radio', 'Dropdown', 'MultipleChoice', 'Check', 'Alert', 'Label', 'text', 'button', 'icon button'],
        rowTemplate: [
          <RadioButton name="fruit" items={fruit} value={fruit.value} isVisible={true} isDisabled={false} />,
          <Dropdown items={color} isVisible={true} isDisabled={false} />,
          <Button text="button" isVisible={true} isDisabled={false} />,
          <IconButton />
        ],
        isVisible: false
      }
    }
  }
 
  handleRowAdd = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }
  handleRowRemove = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }
 
  handlCellChange = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }
 
  handleCellClick = (data) => {
    console.log('data: ', data);
  }
 
  render() {
    return (
      <div>
        <Table header={this.state.table.header} rowTemplate={this.state.table.rowTemplate}
          value={this.state.table.value} isVisible={this.state.table.isVisible}
          onCellChange={this.handlCellChange}
          onRowAdd={this.handleRowAdd}
          onRowRemove={this.handleRowRemove}
          onCellClick={this.handleCellClick}
        />
        <Button text="show" onClick={() => {
          const table = this.state.table; 
          table.isVisible = true; 
          this.setState({table: table});
          }} />
      </div>
    );
  }
}
```
**Javascript**
```
var radioBtn = new kintoneUIComponent.RadioButton({
    items: [{label: 'Orange', value: 'orange'}, {label: 'Banana', value: 'banana'}],
    value: 'orange',
    name: 'Fruit'
});
 
var dropdown = new kintoneUIComponent.Dropdown({
    items: [{label: 'Red', value: 'red'}, {label: 'Green', value: 'green'}],
    value: 'green'
})
 
var table = new kintoneUIComponent.Table({
    rowTemplate: [radioBtn, dropdown],
    header: ['Fruit', 'Color'],
    isVisible: false
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(table.render());

table.show();
```
</details>

### hide()
Hide the table

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**React**
```
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import { Alert, NotifyPopup, RadioButton, Text, CheckBox, Button, Dropdown, MultipleChoice, Label, Table, IconButton } from 'kintone-ui-component';
class App extends Component {
  constructor(props) {
    super(props);
    const fruit = [
          {
            label: 'Orange',
            value: 'orange'
          },
          {
            label: 'Banana',
            value: 'banana'
          }
        ];
 
    const color = [
      {
        label: 'Red',
        value: 'red'
      },
      {
        label: 'Green',
        value: 'green'
      }
    ];
    this.state = {
      fruit: fruit,
      table: {
        header: ['Radio', 'Dropdown', 'MultipleChoice', 'Check', 'Alert', 'Label', 'text', 'button', 'icon button'],
        rowTemplate: [
          <RadioButton name="fruit" items={fruit} value={fruit.value} isVisible={true} isDisabled={false} />,
          <Dropdown items={color} isVisible={true} isDisabled={false} />,
          <Button text="button" isVisible={true} isDisabled={false} />,
          <IconButton />
        ],
        isVisible: true
      }
    }
  }
 
  handleRowAdd = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }
  handleRowRemove = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }
 
  handlCellChange = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }
 
  handleCellClick = (data) => {
    console.log('data: ', data);
  }
 
  render() {
    return (
      <div>
        <Table header={this.state.table.header} rowTemplate={this.state.table.rowTemplate}
          value={this.state.table.value} isVisible={this.state.table.isVisible}
          onCellChange={this.handlCellChange}
          onRowAdd={this.handleRowAdd}
          onRowRemove={this.handleRowRemove}
          onCellClick={this.handleCellClick}
        />
        <Button text="hide" onClick={() => {
          const table = this.state.table; 
          table.isVisible = false; 
          this.setState({table: table});
          }} />
      </div>
    );
  }
}
```
**Javascript**
```
var radioBtn = new kintoneUIComponent.RadioButton({
    items: [{label: 'Orange', value: 'orange'}, {label: 'Banana', value: 'banana'}],
    value: 'orange',
    name: 'Fruit'
});
 
var dropdown = new kintoneUIComponent.Dropdown({
    items: [{label: 'Red', value: 'red'}, {label: 'Green', value: 'green'}],
    value: 'green'
})
 
var table = new kintoneUIComponent.Table({
    rowTemplate: [radioBtn, dropdown],
    header: ['Fruit', 'Color']
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(table.render());

table.hide();
```
</details>

