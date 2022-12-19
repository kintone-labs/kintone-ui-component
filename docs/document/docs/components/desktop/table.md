---
id: table
title: Table
sidebar_label: Table
original_id: table
---

## Overview
The Table component allows the user to display an editable table.

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
| className | string | ""  | Component class name | |
| id | string | "" | Component id name | |
| label | string | ""  | Label for the component | Label is not displayed if unspecified or empty |
| actionButton | boolean | true | Show/Hide the add/remove row button | |
| visible | boolean | true | Show/Hide the component | |
| columns | Array\<[Column](#column)\> |  []  | Column data of the component | Will result an error if the value of `columns` is not an array|
| data | Array\<object\> | []  | Row data of the component | Will result an error if the value of `data` is not an array |

#### Column
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| field | string <br> `Required` and `Unique` | null  | Key of the column | It represents the key of the data object<br>The value associated with that key will be rendered in the column<br>Will result an error if the `field` is duplicated in `columns` or not specified |
| title | string | ""  | 	Header name of the column | |
| requiredIcon | boolean | false  | Show/Hide the required icon | |
| visible | boolean |  true  | Show/Hide the column | |
| render | function <br> `function(cellData, rowData, rowIndex) {}` | - | Renderer of the cell | <ul><li>The return value should be a DOM</li><li>`cellData` is the data of the current cell rendered</li><li>`rowData` is the data of the current row rendered</li><li>`rowIndex` is the index of the current row rendered</li></ul> 3 params above provide more information for the function.</br>If `render` function is not specified, the cell will display with the default text.|


### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | The function fire when the table change. | `function(event: Event => void)` <br><br> - It will pass the event object as the argument<br> - You can receive the following values in event.detail <ul><li>`change-cell` (Triggered if the data in cell is changed)</li><ul><li>event.detail.`type` : change-cell</li><li>event.detail.`rowIndex`: the row's index has changed</li><li>event.detail.`data`: all data of table</li><li>event.detail.`oldData`: old data of table</li><li>event.detail.`field`: The columns has changed</li></ul><li>`add-row` (Triggered if button add row is clicked)</li><ul><li>event.detail.`type` : add-row</li><li>event.detail.`rowIndex`: The row’s index added.</li><li>event.detail.`data`: all data of table</li><li>event.detail.`oldData`: old data of table</li></ul><li>`remove-row` (Triggered if button remove row is clicked</li><ul><li>event.detail.`type` : remove-row</li><li>event.detail.`rowIndex`: The row’s index removed.</li><li>event.detail.`data`: all data of table</li><li>event.detail.`oldData`: old data of table</li></ul></ul>|

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

Here is a sample code when all parameters are specified.

```javascript
const Kuc = Kucs['1.x.x'];

const header = kintone.app.getHeaderMenuSpaceElement();

const renderAge = (dataCell) => {
  const spanElement = document.createElement("span");
  spanElement.innerText = `The age is ${dataCell}`;
  return spanElement;
};

const renderName = (cellData) => {
  const dropdown = new Dropdown({
    items: [
      { label: 'John Brown', value: 'john' },
      { label: 'Steven Gerrard', value: 'steven' },
    ],
    value: cellData,
    selectedIndex: 0
  });
  return dropdown;
};


const table = new Kuc.Table({
  className: 'options-class',
  id: 'options-id',
  label: 'Editable Table',
  actionButton: true,
  visible: true,
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
  ]
});

header.appendChild(table);

table.addEventListener('change', event => {
  console.log(event);
});
```