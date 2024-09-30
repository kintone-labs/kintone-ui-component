---
id: table
title: Table
sidebar_label: Table
---

## Overview
The Table component allows the user to display an editable table.

import { TableComponent } from "@site/static/js/samples/desktop/table.jsx"

<TableComponent />

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| id | string | "" | Component id name | |
| label | string | ""  | Label for the component | Label is not displayed if unspecified or empty |
| actionButton | boolean | true | Show/Hide the add/remove row button | |
| headerVisible | boolean | true | Show/Hide the header | |
| visible | boolean | true | Show/Hide the component | |
| columns | Array\<[Column](#column)\> |  []  | Column data of the component | Will result an error if the value of `columns` is not an array|
| data | Array\<object\> | []  | Row data of the component | Will result an error if the value of `data` is not an array |

#### Column
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| field | string | null  | Key of the column<br/>*`Required` and `Unique` | It represents the key of the `data` object<br/>The value associated with that key will be rendered in the column<br/>Will result an error if the `field` is duplicated in `columns` or not specified |
| title | string | ""  | 	Header name of the column | |
| requiredIcon | boolean | false  | Show/Hide the required icon | |
| visible | boolean |  true  | Show/Hide the column | |
| render | function <br/>`function(cellData, rowData, rowIndex) {}` | null | Renderer of the cell | The return value should be a DOM<br/>Following 3 params provide more information for the function<br/><ul><li>`cellData` is the data of the current cell rendered</li><li>`rowData` is the data of the current row rendered</li><li>`rowIndex` is the index number of the current row rendered</li></ul><br/>If `render` function is not specified, the cell will display with the default text |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the table data has been changed | It will pass the event object as the argument<br/>You can receive the following values in event.detail<ul><li>change-cell (Triggered if the data in cell is changed)</li><ul><li>event.detail.type: "change-cell"</li><li>event.detail.rowIndex: Index number of the changed row</li><li>event.detail.data: All data of table after change</li><li>event.detail.oldData: All data of table before change</li><li>event.detail.field: Changed column's field</li></ul><li>add-row (Triggered if add row button is clicked)</li><ul><li>event.detail.type: "add-row"</li><li>event.detail.rowIndex: Index number of the added row</li><li>event.detail.data: All data of table after change</li><li>event.detail.oldData: All data of table before change</li></ul><li>remove-row (Triggered if remove row button is clicked)</li><ul><li>event.detail.type: "remove-row"</li><li>event.detail.rowIndex: Index number of the removed row</li><li>event.detail.data: All data of table after change</li><li>event.detail.oldData: All data of table before change</li></ul></ul>|

### Constructor

Table(options)<br/>
Here is a list of available constructors:

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | Object that includes component properties | |

---

## Sample Code

:::tip
Please check the [package installation](../../getting-started/quick-start.md#installation) method first.
:::

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');

const renderAge = dataCell => {
  const spanElement = document.createElement('span');
  spanElement.innerText = `The age is ${dataCell}`;
  return spanElement;
};

const renderName = cellData => {
  const dropdown = new Kuc.Dropdown({
    items: [
      { label: 'John Brown', value: 'john' },
      { label: 'Steven Gerrard', value: 'steven' }
    ],
    value: cellData
  });
  return dropdown;
};

const table = new Kuc.Table({
  label: 'Table',
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
      name: 'john',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'steven',
      age: 22,
      address: 'New York No. 2 Lake Park'
    }
  ],
  className: 'options-class',
  id: 'options-id',
  actionButton: true,
  headerVisible: true,
  visible: true
});

space.appendChild(table);

table.addEventListener('change', event => {
  console.log(event);
});
```

---

## Related Articles

- [Table and ReadOnlyTable customization](../../guides/table-readonly-table-customization.md)
