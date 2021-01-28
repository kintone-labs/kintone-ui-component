# Table

## Overview
![Table](../img/table.PNG)

|Number|	Description|
| --- | --- |
|1|Header of column|	
|2|Icon button for insert row|
|3|Icon button for remove row|	
|4|Child control component|
|5|Sample row|

!!! note
    The Table are supporting child control components (Item-4) as below:
    <ul>
      <li>
        Built-in supported components:
          <a href="../Text">Text</a>
          <a href="../Dropdown">Dropdown</a>
          <a href="../CheckBox">CheckBox</a>
          <a href="../MultipleChoice">MultipleChoice</a>
          <a href="../RadioButton">RadioButton</a>
          <a href="../Label">Label</a>
          <a href="../IconButton">Alert</a>      
      </li>
      <li>
        Custom components (DOM Elements)
      </li>
    </ul>
    <div style="color: red;">※ Child control components must be an instance of <a href="#tablecell">TableCell</a>.</div>

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | - | --- | ----- |
|options|Object|No|The object contains the parameters of constructor.|
|options.columns|Array&lt;Object&gt;|No|The row template.|
|options.columns[x].header|String|No|Header of column.|
|options.columns[x].cell|Function|No|Returns cell template object. <br> Refer <a href="#tablecell">TableCell</a> for more information.|
|options.data|Array&lt;Object&gt;|No|The value of table. <br> Refer to the [getValue()](#getvalue) and [setValue(value)](#setvaluevalue) for more information. |
|options.defaultRowData|Object|No|The default value of new row.|
|options.actionButtonsShown|Boolean|No|Show the action buttons when this parameter is **True**. <br>Default: **True**|
|options.onRowAdd|Callback|No|Handler for row add event. <br>Return row data object to overwrite default row data object.|
|options.onRowRemove|Callback|No|Handler for row remove event.|
|options.onCellChange|Callback|No|Handler for cell change event.|

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**JS Simple**
```javascript
(function() {
  // create built-in cell component
  var textBuiltInCell = function () {
    return kintoneUIComponent.createTableCell('text', 'textBuiltIn');
  };

  // create custom cell component
  var textCustomCell = function() {
    return {
      init: function({rowData, updateRowData}) {
        var text = document.createElement('input');
        text.onchange = function(event) {
          updateRowData({textCustom: {value: event.target.value}}, false);
        };
      
        this.textCustom = text;
        return text;
      },
      update: function({ rowData }) {
        this.textCustom.value = rowData.textCustom.value;
      }
    }
  };

  var columns = [
    { header: 'Built-in cell', cell: function() { return textBuiltInCell() }},
    { header: 'Custom cell', cell: function() { return textCustomCell() }}
  ];

  var initialData = [
    {
      textBuiltIn: { value: 'built-in' },
      textCustom: { value: 'custom' }
    }
  ];

  var defaultRowData = {
    textBuiltIn: { value: '' },
    textCustom: { value: '' }
  };

  var table = new kintoneUIComponent.Table({
    columns: columns,
    data: initialData,
    defaultRowData: defaultRowData
  });
  document.body.appendChild(table.render());
})();
```

**JS Advanced**
```javascript
(function () {
  // custom cell containing 2 text fields
  var customCell = function () {
    return {
      init: function ({ rowData, updateRowData }) {
        var wrapper = document.createElement('span');

        this.textfield1 = new kintoneUIComponent.Text({ value: rowData.text1.value });
        this.textfield1.on('change', function (event) {
          updateRowData({ text1: { value: event.target.value } }, false);
        });
        wrapper.appendChild(this.textfield1.render());

        this.textfield2 = new kintoneUIComponent.Text({ value: rowData.text2.value });
        this.textfield2.on('change', function (event) {
          updateRowData({ text2: { value: event.target.value } }, false);
        });
        wrapper.appendChild(this.textfield2.render());

        return wrapper;
      },
      update: function ({ rowData }) {
        if (rowData.text1) this.textfield1.setValue(rowData.text1.value);
        if (rowData.text2) this.textfield2.setValue(rowData.text2.value);
      }
    }
  };

  // initial data of a table
  var initialData = [
    {
      // initial data of text
      text: { value: 'text field' },

      // initial data of radio buttons
      fruit: {
        name: 'fruit',
        value: 'Banana',
        items: [
          { label: 'Orange', value: 'Orange', isDisabled: false },
          { label: 'Banana', value: 'Banana', isDisabled: true },
          { label: 'Lemon', value: 'Lemon', isDisabled: true },
        ]
      },

      // initial data of multiple choices
      colors: {
        value: ['red'],
        items: [
          { label: 'Red', value: 'red', isDisabled: false },
          { label: 'Green', value: 'green', isDisabled: true },
          { label: 'Blue', value: 'blue', isDisabled: true },
        ]
      },

      // initial data of checkbox
      vegetables: {
        value: ['potato', 'celery'],
        items: [
          { label: 'Potato', value: 'potato', isDisabled: false },
          { label: 'Celery', value: 'celery', isDisabled: false },
          { label: 'Carrot', value: 'carrot', isDisabled: true },
        ]
      },

      // initial data of dropdown
      toys: {
        value: 'cars',
        items: [
          { label: 'Cars', value: 'cars', isDisabled: false },
          { label: 'Robots', value: 'robots', isDisabled: false },
          { label: 'Animals', value: 'animals', isDisabled: true },
        ]
      },

      // initial data of label
      label: { text: 'Name', textColor: '#e74c3c', backgroundColor: 'yellow', isRequired: true },

      // initial data of icon button
      iconBtn: { type: 'insert', color: 'blue', size: 'small' },

      // initial data of alert
      alert: { text: 'Network error', type: 'error' },

      // initial data of custom cell containing 2 text fields
      text1: { value: 'text field 1' },
      text2: { value: 'text field 2' },
    },
  ];

  // default row data of a table, this data will be used to create new row
  var defaultRowData = {
    // default data of text
    text: { value: 'text field' },

    // default data of radio buttons
    fruit: {
      name: 'fruit',
      value: 'Banana',
      items: [
        { label: 'Orange', value: 'Orange', isDisabled: false },
        { label: 'Banana', value: 'Banana', isDisabled: true },
        { label: 'Lemon', value: 'Lemon', isDisabled: true },
      ]
    },

    // default data of multiple choices
    colors: {
      value: ['red'],
      items: [
        { label: 'Red', value: 'red', isDisabled: false },
        { label: 'Green', value: 'green', isDisabled: true },
        { label: 'Blue', value: 'blue', isDisabled: true },
      ]
    },

    // default data of checkbox
    vegetables: {
      value: ['potato', 'celery'],
      items: [
        { label: 'Potato', value: 'potato', isDisabled: false },
        { label: 'Celery', value: 'celery', isDisabled: true },
        { label: 'Carrot', value: 'carrot', isDisabled: true },
      ]
    },

    // default data of dropdown
    toys: {
      value: 'cars',
      items: [
        { label: 'Cars', value: 'cars', isDisabled: false },
        { label: 'Robots', value: 'robots', isDisabled: false },
        { label: 'Animals', value: 'animals', isDisabled: true },
      ]
    },

    // default data of label
    label: { text: 'Name', textColor: '#e74c3c', backgroundColor: 'yellow', isRequired: true },

    // default data of icon button
    iconBtn: { type: 'insert', color: 'blue', size: 'small' },

    // default data of alert
    alert: { text: 'Network error', type: 'error' },

    // default data of custom cell containing 2 text fields
    text1: { value: 'text field 1' },
    text2: { value: 'text field 2' },
  };

  // return this data to override default row data onRowAdd
  var overriddenRowData = {
    // overriden data of text
    text: { value: 'overwritten field value' },

    // overriden data of radio buttons
    fruit: {
      name: 'fruit',
      value: 'Banana',
      items: [
        { label: 'Orange', value: 'Orange', isDisabled: true },
        { label: 'Banana', value: 'Banana', isDisabled: false },
        { label: 'Lemon', value: 'Lemon', isDisabled: false },
      ]
    },

    // overriden data of multiple choices
    colors: {
      value: ['red'],
      items: [
        { label: 'Red', value: 'red', isDisabled: false },
        { label: 'Green', value: 'green', isDisabled: true },
        { label: 'Blue', value: 'blue', isDisabled: true },
      ]
    },

    // overriden data of checkbox
    vegetables: {
      value: ['potato', 'celery'],
      items: [
        { label: 'Potato', value: 'potato', isDisabled: false },
        { label: 'Celery', value: 'celery', isDisabled: true },
        { label: 'Carrot', value: 'carrot', isDisabled: false },
      ]
    },

    // overriden data of dropdown
    toys: {
      value: 'cars',
      items: [
        { label: 'Cars', value: 'cars', isDisabled: false },
        { label: 'Robots', value: 'robots', isDisabled: false },
        { label: 'Animals', value: 'animals', isDisabled: true },
      ]
    },

    // overriden data of label
    label: { text: 'Name', textColor: '#e74c3c', backgroundColor: 'yellow', isRequired: true },

    // overriden data of icon button
    iconBtn: { type: 'insert', color: 'blue', size: 'small' },

    // overriden data of alert
    alert: { text: 'Network error', type: 'error' },

    // overriden data of custom cell containing 2 text fields
    text1: { value: 'overwritten field1 value' },
    text2: { value: 'overwritten field2 value' },
  };

  var table = new kintoneUIComponent.Table({
    // initial table data
    data: initialData,

    // default row data on row add
    defaultRowData: defaultRowData,

    onRowAdd: function (e) {
      console.log('table.onAdd', e);
      /**
       * if onRowAdd does not return anything, defaultRowData will be used to create new table row
       * if below row data is returned, it will override defaultRowData to be used to create new table row
       */
      return JSON.parse(JSON.stringify(overriddenRowData));
    },

    columns: [
      { header: 'Text', cell: function () { return kintoneUIComponent.createTableCell('text', 'text') } },
      { header: 'Radio', cell: function () { return kintoneUIComponent.createTableCell('radio', 'fruit') } },
      { header: 'Multichoice', cell: function () { return kintoneUIComponent.createTableCell('multichoice', 'colors') } },
      { header: 'Checkbox', cell: function () { return kintoneUIComponent.createTableCell('checkbox', 'vegetables') } },
      { header: 'Dropdown', cell: function () { return kintoneUIComponent.createTableCell('dropdown', 'toys') } },
      { header: 'Label', cell: function () { return kintoneUIComponent.createTableCell('label', 'label') } },
      {
        header: 'Icon Button', cell: function () {
          return kintoneUIComponent.createTableCell('icon', 'iconBtn', {
            onClick: function (event) { alert('icon button clicked') }
          });
        }
      },
      { header: 'Alert', cell: function () { return kintoneUIComponent.createTableCell('alert', 'alert') } },
      { header: 'Custom cell contains 2 textfields', cell: function () { return customCell() } },
    ]
  });

  document.body.appendChild(table.render());
})();
```
**React**
```javascript
import React from 'react';
import {render} from 'react-dom';
import { Table, Text} from '@kintone/kintone-ui-component';

export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {text: 'this is a text field'}
      ],
      // default row data on row add
      defaultRowData: {text: 'default text field value'}
    }
  }

  handleRowAdd = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleRowRemove = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleCellChange = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  render() {
    const {tableData, defaultRowData} = this.state;
    const columns = [
      {
        header: 'Text',
        cell: ({ rowIndex, onCellChange }) => {
          return (
            <Text
              value={tableData[rowIndex].text}
              onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'text')}
            />
          )
        }
      },
    ];
    return (
      <Table
        columns={columns}
        data={this.state.tableData}
        defaultRowData={defaultRowData}
        onRowAdd={this.handleRowAdd}
        onRowRemove={this.handleRowRemove}
        onCellChange={this.handleCellChange}
      />
    );
  }
}
render(<Plugin />, kintone.app.getHeaderSpaceElement());
```
</details>

## Methods
### render()
Get dom element of component.

**Parameter**

None

**Returns**

Dom element

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var table = new kintoneUIComponent.Table({
  // inital table data
  data: [
    {text: { value: 'this is a text field' }}
  ],
  // default row data on row add
  defaultRowData: {text: { value: 'default text field value' }},
  columns: [
    {
      header: 'Text',
      cell: function() { return kintoneUIComponent.createTableCell('text', 'text') }
    },
  ]
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(table.render());
```
**React**
```javascript
import React from 'react';
import {render} from 'react-dom';
import { Table, Text} from '@kintone/kintone-ui-component';

export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {text: 'this is a text field'}
      ],
      // default row data on row add
      defaultRowData: {text: 'default text field value'}
    }
  }

  handleRowAdd = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleRowRemove = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleCellChange = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  render() {
    const {tableData, defaultRowData} = this.state;
    const columns = [
      {
        header: 'Text',
        cell: ({ rowIndex, onCellChange }) => {
          return (
            <Text
              value={tableData[rowIndex].text}
              onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'text')}
            />
          )
        }
      },
    ];
    return (
      <Table
        columns={columns}
        data={this.state.tableData}
        defaultRowData={defaultRowData}
        onRowAdd={this.handleRowAdd}
        onRowRemove={this.handleRowRemove}
        onCellChange={this.handleCellChange}
      />
    );
  }
}
render(<Plugin />, kintone.app.getHeaderSpaceElement());
```
</details>

### getValue()
Get value of all rows in the table.

**Parameter**

None

**Returns**

|Name|Type|Description|
| --- | --- | --- |
|value|	Array&lt;Object&gt;|Value of all rows in the table |

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var table = new kintoneUIComponent.Table({
  // inital table data
  data: [
    {text: { value: 'this is a text field' }}
  ],
  // default row data on row add
  defaultRowData: {text: { value: 'default text field value' }},
  columns: [
    {
      header: 'Text',
      cell: function() { return kintoneUIComponent.createTableCell('text', 'text') }
    },
  ]
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(table.render());

var button = document.createElement('button');
button.innerText = 'Get value';
button.onclick = function () {
  var value = table.getValue();
  value.forEach(rowData => {
    console.log(rowData);
  });
};
body.appendChild(button);
```
**React**
```javascript
import React from 'react';
import {render} from 'react-dom';
import { Table, Text, Button} from '@kintone/kintone-ui-component';

export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {text: 'this is a text field'}
      ],
      // default row data on row add
      defaultRowData: {text: 'default text field value'}
    }
  }

  handleRowAdd = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }
  
  handleRowRemove = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleCellChange = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleClick = () => {
    console.log(this.state.tableData)
  }

  render() {
    const {tableData, defaultRowData} = this.state;
    const columns = [
      {
        header: 'Text',
        cell: ({ rowIndex, onCellChange }) => {
          return (
            <Text
              value={tableData[rowIndex].text}
              onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'text')}
            />
          )
        }
      },
    ];
    return (
      <div>
        <Table 
          columns={columns}
          data={this.state.tableData} 
          defaultRowData={defaultRowData}
          onRowAdd={this.handleRowAdd}
          onRowRemove={this.handleRowRemove}
          onCellChange={this.handleCellChange}
          actionButtonsShown={true}
          isVisible={true}
        />
        <button onClick={this.handleClick}>Get table value</button>
      </div>
    );
  }
}
render(<Plugin />, kintone.app.getHeaderSpaceElement());
```
</details>

### setValue(value)
Set data for every row in table. The number of rows in table's dependent on the length on this parameters. 

**Parameter**

|Name|Type|Required|Description|
| --- | --- | --- |--- |
|value	|Array&lt;Object&gt;	|Yes|	Value for every row in table|

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var table = new kintoneUIComponent.Table({
  // inital table data
  data: [
    {text: { value: 'this is a text field' }}
  ],
  // default row data on row add
  defaultRowData: {text: { value: 'default text field value' }},
  columns: [
    {
      header: 'Text',
      cell: function() { return kintoneUIComponent.createTableCell('text', 'text') }
    },
  ]
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(table.render());

var button = document.createElement('button');
button.innerText = 'Set Values';
button.onclick = function () {
  table.setValue([
    {text: { value: 'first row' }},
    {text: { value: 'second row' }},
    {text: { value: 'third row' }}
  ]);
};
body.appendChild(button);
```
**React**
```javascript
import React from 'react';
import {render} from 'react-dom';
import { Table, Text, Button} from '@kintone/kintone-ui-component';

export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {text: 'this is a text field'}
      ],
      // default row data on row add
      defaultRowData: {text: 'default text field value'}
    }
  }

  handleRowAdd = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }
  
  handleRowRemove = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleCellChange = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleClick = () => {
    const tableData = [
      {text: 'first row'},
      {text: 'second row'},
      {text: 'third row'}
    ]
    this.setState({tableData})
  }

  render() {
    const {tableData, defaultRowData} = this.state;
    const columns = [
      {
        header: 'Text',
        cell: ({ rowIndex, onCellChange }) => {
          return (
            <Text
              value={tableData[rowIndex].text}
              onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'text')}
            />
          )
        }
      },
    ];
    return (
      <div>
        <Table 
          columns={columns}
          data={this.state.tableData} 
          defaultRowData={defaultRowData}
          onRowAdd={this.handleRowAdd}
          onRowRemove={this.handleRowRemove}
          onCellChange={this.handleCellChange}
          actionButtonsShown={true}
          isVisible={true}
        />
        <button onClick={this.handleClick}>Set table value</button>
      </div>
    );
  }
}
render(<Plugin />, kintone.app.getHeaderSpaceElement());
```
</details>

### on(eventName, callBack)
Register callback for an event

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|eventName|	String|	Yes|Name of events: <ul><li>'rowAdd' <ul><li>The 'rowAdd' event occurs when adding a new row in the table.</li></ul> </li><li>'rowRemove'<ul><li>The 'rowRemove' event occurs when removing a row in the table.</li></ul> </li> <li>'cellChange'<ul><li>The 'cellChange' event occurs when the value of an element bellow has been changed:<ul><li>Text</li><li>Drodown</li><li>RadioButton</li><li>MultipleChoice</li><li>CheckBox</li></ul><li>For custom cells templates, you must call updateRowData provided to **init** callback to trigger cellChange event.</li></li> </ul></li></ul>|
|callback|function |Yes|callback|

**Returns**
<br>None
<br><br><b>Callback data</b>

|Event| Name| Type| Description |
| --- | --- | --- | --- |
|rowAdd|	event |	Object |Callback data.|
||event.data |Array&lt;Object&gt;|Current values of the table.|
||event.rowIndex|	Interger|	Position of the new row in the table.|
|rowRemove |event|	object|	Callback data.|
||event.data |Array&lt;Object&gt;|Current values of the table.|
||event.rowIndex|	Interger|	Position of the removed row in the table.|
| cellChange| event|	object|	Callback data.|
||event.data |Array&lt;Object&gt;|Values of the table.|
||event.rowIndex|	Interger|	Position of the changed row in the table.|
||event.fieldName|	String|	name of the data property which changed.|

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var table = new kintoneUIComponent.Table({
  // inital table data
  data: [
    {text: { value: 'this is a text field' }}
  ],
  // default row data on row add
  defaultRowData: {text: { value: 'default text field value' }},
  columns: [
    {
      header: 'Text',
      cell: function() { return kintoneUIComponent.createTableCell('text', 'text') }
    },
  ]
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(table.render());

table.on('rowAdd', function(event) {
  console.log(event);
});
table.on('rowRemove', function(event) {
  console.log(event);
});
table.on('cellChange', function(event) {
  console.log(event);
});
```
**React**
```javascript
import React from 'react';
import {render} from 'react-dom';
import { Table, Text, Button} from '@kintone/kintone-ui-component';

export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {text: 'this is a text field'}
      ],
      // default row data on row add
      defaultRowData: {text: 'default text field value'}
    }
  }

  handleRowAdd = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }
  
  handleRowRemove = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleCellChange = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  render() {
    const {tableData, defaultRowData} = this.state;
    const columns = [
      {
        header: 'Text',
        cell: ({ rowIndex, onCellChange }) => {
          return (
            <Text
              value={tableData[rowIndex].text}
              onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'text')}
            />
          )
        }
      },
    ];
    return (
      <Table
        columns={columns}
        data={this.state.tableData}
        defaultRowData={defaultRowData}
        onRowAdd={this.handleRowAdd}
        onRowRemove={this.handleRowRemove}
        onCellChange={this.handleCellChange}
        actionButtonsShown={true}
        isVisible={true}
      />
    );
  }
}
render(<Plugin />, kintone.app.getHeaderSpaceElement());
```
</details>

### showActionButtons()
Display table action buttons.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var table = new kintoneUIComponent.Table({
  // inital table data
  data: [
    {text: { value: 'this is a text field' }}
  ],
  // default row data on row add
  defaultRowData: {text: { value: 'default text field value' }},
  columns: [
    {
      header: 'Text',
      cell: function() { return kintoneUIComponent.createTableCell('text', 'text') }
    },
  ],
  actionButtonsShown: false
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(table.render());

var button = document.createElement('button');
button.innerText = 'Show action buttons';
button.onclick = function () {
  table.showActionButtons();
};
body.appendChild(button);
```
**React**
```javascript
import React from 'react';
import {render} from 'react-dom';
import { Table, Text, Button} from '@kintone/kintone-ui-component';

export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {text: 'this is a text field'}
      ],
      // default row data on row add
      defaultRowData: {text: 'default text field value'},
      actionButtonsShown: false
    };
    }

  handleRowAdd = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }
  
  handleRowRemove = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleCellChange = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleClick = () => {
    this.setState({actionButtonsShown: true})
  }

  render() {
    const {tableData, actionButtonsShown, defaultRowData} = this.state;
    const columns = [
      {
        header: 'Text',
        cell: ({ rowIndex, onCellChange }) => {
          return (
            <Text
              value={tableData[rowIndex].text}
              onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'text')}
            />
          )
        }
      },
    ];
    return (
      <div>
        <Table
          columns={columns}
          data={this.state.tableData}
          defaultRowData={defaultRowData}
          onRowAdd={this.handleRowAdd}
          onRowRemove={this.handleRowRemove}
          onCellChange={this.handleCellChange}
          actionButtonsShown={actionButtonsShown}
          isVisible={true}
        />
        <button onClick={this.handleClick}>Show action buttons</button>
      </div>
    );
  }
}
render(<Plugin />, kintone.app.getHeaderSpaceElement());
```
</details>

### hideActionButtons()
Hide table action buttons.

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var table = new kintoneUIComponent.Table({
  // inital table data
  data: [
    {text: { value: 'this is a text field' }}
  ],
  // default row data on row add
  defaultRowData: {text: { value: 'default text field value' }},
  columns: [
    {
      header: 'Text',
      cell: function() { return kintoneUIComponent.createTableCell('text', 'text') }
    },
  ],
  actionButtonsShown: true,
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(table.render());

var button = document.createElement('button');
button.innerText = 'Hide action buttons';
button.onclick = function () {
  table.hideActionButtons();
};
body.appendChild(button);
```
**React**
```javascript
import React from 'react';
import {render} from 'react-dom';
import { Table, Text, Button} from '@kintone/kintone-ui-component';

export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {text: 'this is a text field'}
      ],
      // default row data on row add
      defaultRowData: {text: 'default text field value'},
      actionButtonsShown: true
    };
  }

  handleRowAdd = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }
  
  handleRowRemove = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleCellChange = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleClick = () => {
    this.setState({actionButtonsShown: false});
  }

  render() {
    const {tableData, actionButtonsShown, defaultRowData} = this.state;
    const columns = [
      {
        header: 'Text',
        cell: ({ rowIndex, onCellChange }) => {
          return (
            <Text
              value={tableData[rowIndex].text}
              onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'text')}
            />
          )
        }
      },
    ];
    return (
      <div>
        <Table
          columns={columns}
          data={this.state.tableData}
          defaultRowData={defaultRowData}
          onRowAdd={this.handleRowAdd}
          onRowRemove={this.handleRowRemove}
          onCellChange={this.handleCellChange}
          actionButtonsShown={actionButtonsShown}
          isVisible={true}
        />
        <button onClick={this.handleClick}>Hide action buttons</button>
      </div>
    );
  }
}
render(<Plugin />, kintone.app.getHeaderSpaceElement());
```
</details>

### updateRowData(rowIndex, data, rerender, trigger)
Update data of row at rowIndex with new data

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|rowIndex|	Integer|	Yes|  Position of the row which will be updated in the table.|
|data|	Object|	Yes|  Data object for the row.|
|rerender|	Boolean|	No|  If <b>true</b>, will re-render table cells according to new data. <br> Default: <b>true</b>|
|trigger|	Boolean|	No|  If <b>true</b>, will trigger <b>onCellChange</b> event. <br> Default: <b>true</b>|

**Returns**
<br>None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var table = new kintoneUIComponent.Table({
  // inital table data
  data: [
      {
        text: { value: 'this is a text field1' },
        checkbox: {
          items: [
            { label: 'Orange', value: 'Orange', isDisabled: false },
            { label: 'Banana', value: 'Banana', isDisabled: true },
            { label: 'Lemon', value: 'Lemon', isDisabled: true },
  ],
          value: ['Orange', 'Banana']
        },
      }
    ],
  // default row data on row add
    defaultRowData: {
      text: { value: 'default text field value' },
      checkbox: {
        items: [
          { label: 'Orange', value: 'Orange', isDisabled: false },
          { label: 'Banana', value: 'Banana', isDisabled: true },
          { label: 'Lemon', value: 'Lemon', isDisabled: true },
        ],
        value: ['Orange', 'Banana']
      },
    },
  columns: [
    {
      header: 'Text',
        cell: function () {
          return kintoneUIComponent.createTableCell('text', 'text', {
            onChange: function ({ data, rowIndex }) {
              data[rowIndex].checkbox.value = ['Lemon'];
              table.updateRowData(rowIndex, data[rowIndex]);
            }
          })
        }
    },
      {
        header: 'Checkbox',
        cell: function () { return kintoneUIComponent.createTableCell('checkbox', 'checkbox') }
      }
    ]
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(table.render());
```
**React**
```javascript
import React from 'react';
import {render} from 'react-dom';
import { Table, Text, Button} from '@kintone/kintone-ui-component';

export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {text: 'this is a text field'}
      ],
      // default row data on row add
      defaultRowData: {text: 'default text field value'}
    };
  }

  handleRowAdd = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }
  
  handleRowRemove = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleCellChange = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleClick = () => {
    const {tableData} = this.state;
    tableData[0].text = 'Updated text field value';
    this.setState({tableData});
  }

  render() {
    const {tableData, defaultRowData} = this.state;
    const columns = [
      {
        header: 'Text',
        cell: ({ rowIndex, onCellChange }) => {
          return (
            <Text
              value={tableData[rowIndex].text}
              onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'text')}
            />
          )
        }
      },
    ];
    return (
      <div>
        <Table
          columns={columns}
          data={this.state.tableData}
          defaultRowData={defaultRowData}
          onRowAdd={this.handleRowAdd}
          onRowRemove={this.handleRowRemove}
          onCellChange={this.handleCellChange}
          actionButtonsShown={true}
          isVisible={true}
        />
        <button onClick={this.handleClick}>Update row data</button>
      </div>
    );
  }
}
render(<Plugin />, kintone.app.getHeaderSpaceElement());
```
</details>

### createTableCell(type, dataFieldName, props)

!!! note
    <ul>
      <li>This function support to create built-in components for **options.columns[x].cell** on <a href="#constructor">Constructor</a>.</li>
      <li>
        Components:
        <a href="../Text">Text</a>
        <a href="../Dropdown">Dropdown</a>
        <a href="../CheckBox">CheckBox</a>
        <a href="../MultipleChoice">MultipleChoice</a>
        <a href="../RadioButton">RadioButton</a>
        <a href="../Label">Label</a>
        <a href="../IconButton">Alert</a>
      </li>
    </ul>

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|type|	String|	Yes|  Type of built-in cell. <br>Can be one of the following types: <br><ul><li>'text'</li><li>'dropdown'</li><li>'checkbox'</li><li>'multichoice'</li><li>'radio'</li><li>'label'</li><li>'icon'</li><li>'alert'</li></ul>|
|dataFieldName|	String|	Yes|  Name of the data field associated with the table cell.|
|props|	Object|	No|  Additional props to pass to component. <br>It can be used to define custom event handler for component.<br>You should specify this arg like following object.<br><li>\{'on+eventName': callback \}</li>|

**Returns**
<br>[TableCell](#tablecell)

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var table = new kintoneUIComponent.Table({
  // inital table data
  data: [
    {text: { value: 'this is a text field' }}
  ],
  // default row data on row add
  defaultRowData: {text: { value: 'default text field value' }},
  columns: [
    {
      header: 'Text',
      cell: function() { return kintoneUIComponent.createTableCell(
        'text',
        'text',
        {onClick: function(event) {
          alert('text box was clicked');
          console.log(event);
        }}
      )}
    },
  ]
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(table.render());
```
**React**
```javascript
import React from 'react';
import {render} from 'react-dom';
import { Table, Text, Button} from '@kintone/kintone-ui-component';

export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {text: 'this is a text field'}
      ],
      // default row data on row add
      defaultRowData: {text: 'default text field value'}
    };
  }

  handleRowAdd = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }
  
  handleRowRemove = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleCellChange = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  render() {
    const {tableData, defaultRowData} = this.state;
    const columns = [
      {
        header: 'Text',
        cell: ({ rowIndex, onCellChange }) => {
          return (
            <Text
              value={tableData[rowIndex].text}
              onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'text')}
            />
          )
        }
      },
    ];
    return (
        <Table
          columns={columns}
          data={this.state.tableData}
          defaultRowData={defaultRowData}
          onRowAdd={this.handleRowAdd}
          onRowRemove={this.handleRowRemove}
          onCellChange={this.handleCellChange}
          actionButtonsShown={true}
          isVisible={true}
        />
    );
  }
}
render(<Plugin />, kintone.app.getHeaderSpaceElement());
```
</details>

### show()
Display the table

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var table = new kintoneUIComponent.Table({
  // inital table data
  data: [
    {text: { value: 'this is a text field' }}
  ],
  // default row data on row add
  defaultRowData: {text: { value: 'default text field value' }},
  columns: [
    {
      header: 'Text',
      cell: function() { return kintoneUIComponent.createTableCell('text', 'text') }
    },
  ],
  isVisible: false
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(table.render());

var button = document.createElement('button');
button.innerText = 'Show table';
button.onclick = function () {
  table.show();
};
body.appendChild(button);
```
**React**
```javascript
import React from 'react';
import {render} from 'react-dom';
import { Table, Text, Button} from '@kintone/kintone-ui-component';

export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {text: 'this is a text field'}
      ],
      // default row data on row add
      defaultRowData: {text: 'default text field value'},
      isVisible: false
    }
  }

  handleRowAdd = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }
  
  handleRowRemove = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleCellChange = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleClick = () => {
    this.setState({isVisible: true});
  }

  render() {
    const {tableData, isVisible, defaultRowData} = this.state;
    const columns = [
      {
        header: 'Text',
        cell: ({ rowIndex, onCellChange }) => {
          return (
            <Text
              value={tableData[rowIndex].text}
              onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'text')}
            />
          )
        }
      },
    ];
    return (
      <div>
        <Table
          columns={columns}
          data={this.state.tableData}
          defaultRowData={defaultRowData}
          onRowAdd={this.handleRowAdd}
          onRowRemove={this.handleRowRemove}
          onCellChange={this.handleCellChange}
          actionButtonsShown={true}
          isVisible={isVisible}
        />
        <button onClick={this.handleClick}>Show table</button>
      </div>
    );
  }
}
render(<Plugin />, kintone.app.getHeaderSpaceElement());
```
</details>

### hide()
Hide the table

**Parameter**

None

**Returns**

None

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var table = new kintoneUIComponent.Table({
  // inital table data
  data: [
    {text: { value: 'this is a text field' }}
  ],
  // default row data on row add
  defaultRowData: {text: { value: 'default text field value' }},
  columns: [
    {
      header: 'Text',
      cell: function() { return kintoneUIComponent.createTableCell('text', 'text') }
    },
  ],
  isVisible: true
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(table.render());

var button = document.createElement('button');
button.innerText = 'Hide table';
button.onclick = function () {
  table.hide();
};
body.appendChild(button);
```
**React**
```javascript
import React from 'react';
import {render} from 'react-dom';
import { Table, Text, Button} from '@kintone/kintone-ui-component';

export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {text: 'this is a text field'}
      ],
      // default row data on row add
      defaultRowData: {text: 'default text field value'},
      isVisible: true
    };
  }

  handleRowAdd = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }
  
  handleRowRemove = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleCellChange = ({data}) => {
    this.setState({ tableData: data })
    console.log('data: ', data);
  }

  handleClick = () => {
    this.setState({isVisible: false})
  }

  render() {
    const {tableData, isVisible, defaultRowData} = this.state;
    const columns = [
      {
        header: 'Text',
        cell: ({ rowIndex, onCellChange }) => {
          return (
            <Text
              value={tableData[rowIndex].text}
              onChange={newValue => onCellChange(newValue, tableData, rowIndex, 'text')}
            />
          )
        }
      },
    ];
    return (
      <div>
      <Table
        columns={columns}
        data={this.state.tableData}
        defaultRowData={defaultRowData}
        onRowAdd={this.handleRowAdd}
        onRowRemove={this.handleRowRemove}
        onCellChange={this.handleCellChange}
        actionButtonsShown={true}
        isVisible={isVisible}
        />
      <button onClick={this.handleClick}>Hide table</button>
      </div>
    );
  }
}
render(<Plugin />, kintone.app.getHeaderSpaceElement());
```
</details>

## Model

### TableCell

!!! note
    <ul>
      <li>TableCell is the template object for **options.columns[x].cell** on <a href="#constructor">Constructor</a>.</li>
      <li>
        Cell template can be creating by <a href="#createtablecelltype-datafieldname-props">createTableCell(type, dataFieldName, props)</a> or custom funcions. <br>
        If using custom function, Cell template object must implement **init** and **update** functions.
      </li>
    </ul>

| Name| Type| Required| Description |
| --- | - | --- | ----- |
|init|Function|Yes|Cell initialization callback.<br>Used to initialize DOM of a cell|
|update|Function|Yes|Cell update callback.<br>Used to update DOM of a cell.|

<details class="tab-container" markdown="1" open>
<Summary>Sample</Summary>
**Javascript**
```javascript
// create built-in cell component
var textBuiltInCell = function () {
  return kintoneUIComponent.createTableCell('text', 'textBuiltIn');
};

// create custom cell component
var textCustomCell = function() {
  return {
    init: function({rowData, updateRowData}) {
    	var text = document.createElement('input');
      text.onchange = function(event) {
        updateRowData({textCustom: {value: event.target.value}}, false);
      };
    
      this.textCustom = text;
      return text;
    },
    update: function({ rowData }) {
      this.textCustom.value = rowData.textCustom.value;
    }
  }
};

var columns = [
  { header: 'Built-in cell', cell: function() { return textBuiltInCell() }},
  { header: 'Custom cell', cell: function() { return textCustomCell() }}
];

var initialData = [
	{
    textBuiltIn: { value: 'built-in' },
    textCustom: { value: 'custom' }
	}
];

var defaultRowData = {
  textBuiltIn: { value: '' },
  textCustom: { value: '' }
};

var table = new kintoneUIComponent.Table({
  columns: columns,
  data: initialData,
  defaultRowData: defaultRowData
});
document.body.appendChild(table.render());
```