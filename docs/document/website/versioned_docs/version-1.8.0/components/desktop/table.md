---
id: version-1.8.0-table
title: Table
sidebar_label: Table
original_id: table
---

## Overview
The Table component allows the user to display an input table on the kintone’s edit screen.

<div class="sample-container" id="table">
  <div id="sample-container__components"></div>
</div>
<script src="/js/samples/desktop/table.js"></script>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

#### Table

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| data | Array<object> | []  | Row data of table | Throw an error if the data is not an array object `'data' property is not array.` |
| columns | Array<[Columns](#column)> |  [ ]  | Array of data to be displayed in the table header | Throw an error if columns is not an array object `'columns' property is not array.` |
| label | string | ""  | Text description for the component | Label will not be displayed if unspecified or left empty |
| className | string | ""  | Component class name | |
| id | string | "" | Component id name | |
| visible | boolean | true | Show/Hide the component | |
| actionButton | boolean | true | Flag to show the add/remove row button | |

#### Column
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| title | string | ""  | Text to be displayed in table header | |
| visible | boolean |  true  | Visible/invisible each column | |
| field | string <br> `Required` and `Unique` | -  | Display field of the data record | <li>`columns.field` is unique and required.</li><li>If the `field` is duplicated, the error message `'field' property is not unique in columns.` will throw in window console.</li><li>If the `field` is NOT specified, the error message `'field' property is not specified in columns.` will throw in window console.</li> |
| requiredIcon | boolean | false  | Show/Hide the required icon | |
| render | function <br> `function(cellData, rowData, rowIndex) {}` | - | Renderer of the table cell. The return value should be a DOM. | <ul><li>3 params below provide more information for render function:</li> <ul><li>`cellData` is data of current cell rendered.</li><li>`rowData` is data of current row rendered.</li><li>`rowIndex` is index of current row rendered.</li></ul><li>If render function is not specified, the cell will display with default text.</li></ul>|


### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | The function fire when the table change. | `function(event: Event => void)` <br><br> - Take the event object of Event as the argument<br> - Can receive the following values when used `event.detail` <ul><li>`change-cell` (Triggered if the data in cell is changed)</li><ul><li>event.detail.`type` : change-cell</li><li>event.detail.`rowIndex`: the row's index has changed</li><li>event.detail.`data`: all data of table</li><li>event.detail.`oldData`: old data of table</li><li>event.detail.`field`: The columns has changed</li></ul><li>`add-row` (Triggered if button add row is clicked)</li><ul><li>event.detail.`type` : add-row</li><li>event.detail.`rowIndex`: The row’s index added.</li><li>event.detail.`data`: all data of table</li><li>event.detail.`oldData`: old data of table</li></ul><li>`remove-row` (Triggered if button remove row is clicked</li><ul><li>event.detail.`type` : remove-row</li><li>event.detail.`rowIndex`: The row’s index removed.</li><li>event.detail.`data`: all data of table</li><li>event.detail.`oldData`: old data of table</li></ul></ul>|

### Constructor

Table(options)<br>
Here is a list of available constructors:

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | Object that includes component properties | |

---

## Sample Code

> Please check the [package installation](../../getting-started/quick-start.md#installation) method first.

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const header = kintone.app.getHeaderMenuSpaceElement();

const renderAge = (dataCell, dataRow) => {
  const element = document.createElement("h3");
  element.innerText = `The age is ${dataCell}`;
  return element;
};

const renderName = (cellData) => {
  const dropdown = new Dropdown({
    items: [...],
    value: cellData,
    selectedIndex: 0
  });
  return dropdown;
};


const table = new Kuc.Table({
  columns: [
      {
        title: 'Name',
        field: 'name',
        render: renderName
      },
      {
        title: 'Address',
        field: 'address'
      },
      {
        title: 'Age',
        field: 'age',
        render: renderAge
      }
    ],
  data: [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Steven Gerrard',
      age: 22,
      address: 'New York No. 2 Lake Park'
    }
  ],
  label: 'Editable Table'
});

header.appendChild(table);

table.addEventListener('change', event => {
  console.log(event);
});
```