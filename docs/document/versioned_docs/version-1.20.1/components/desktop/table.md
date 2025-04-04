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
| actionButtonPosition | string | "right" | Position of the fixed add/remove row button column | Available options:<br/>"right" : Right edge of window<br/>"left" : Left edge of window |
| className | string | ""  | Component class name | |
| id | string | "" | Component id name | |
| label | string | ""  | Label for the component | Label is not displayed if unspecified or empty |
| actionButton | boolean/[ActionButton](#actionbutton) | true | Show/Hide the add/remove row button | If set to `true`/`false`, the add/remove buttons are shown/hidden together<br/>If set to the `ActionButton` object, the add/remove buttons can be shown/hidden separately |
| headerVisible | boolean | true | Show/Hide the header | |
| visible | boolean | true | Show/Hide the component | |
| columns | Array\<[Column](#column)\> |  []  | Column data of the component | Will result an error if the value of `columns` is not an array|
| data | Array\<object\> | []  | Row data of the component | Will result an error if the value of `data` is not an array |

#### ActionButton
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| add | boolean | true | Show/Hide the add row button | |
| remove | boolean | true | Show/Hide the remove row button | |

#### Column
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| field | string | null  | Key of the column<br/>*`Required` and `Unique` | It represents the key of the `data` object<br/>The value associated with that key will be rendered in the column<br/>Will result an error if the `field` is duplicated in `columns` or not specified |
| title *1 | string/HTMLElement | ""  | Header name of the column | If a string with HTML is set, it will be automatically converted to HTML and displayed as it is |
| requiredIcon | boolean | false  | Show/Hide the required icon | |
| visible | boolean |  true  | Show/Hide the column | |
| render *1 | function <br/>`function(cellData, rowData, rowIndex) {}` | null | Renderer of the cell | The return value should be a DOM<br/>Following 3 params provide more information for the function<br/><ul><li>`cellData` is the data of the current cell rendered</li><li>`rowData` is the data of the current row rendered</li><li>`rowIndex` is the index number of the current row rendered</li></ul><br/>If `render` function is not specified, the cell will display with the default text |

:::caution
*1: [Security] Kintone UI Component does NOT sanitize this property value. It is the developer's responsibility to escape any user input when using this option so that XSS attacks would be prevented.
:::

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

### Custom CSS
:::tip
Please check [Custom CSS feature guide](../../getting-started/custom-css.md) at first.
:::

Here is a list of properties that can be used for modifying component style:
#### Property
| Name | Description |
| :--- | :--- |
| --kuc-table-header-background-color | |
| --kuc-table-header-color | |
| --kuc-table-header-font-size | |
| --kuc-table-header-height | |
| --kuc-table-header-\{index\}-width | <li>This property allows you to set the width of certain table columns based on their index values</li><li>For example, you can use `--kuc-table-header-0-width` to set the width of the first column</li><li>Note that the index values start from `0`, where `0` corresponds to the first column</li> |
| --kuc-table-header-width | <li>This property is used to set the width for all columns in a table, it defines a uniform width for every column</li><li>If you need to set a specific width for a single column, you can use `--kuc-table-header-{index}-width` property</li><li>If you want to add the element that will expand/contract as a child component, you may be able to preserve this behavior by setting `--kuc-table-header-width: auto`</li> |
| --kuc-table-action-button-background-color | |
| --kuc-table-action-button-left | <ul><li>This property is used to set the offset of the left edge of the add/remove row button column from the left edge of Table's nearest ancestor element that has scrolling mechanism</li><li>It works when `actionButtonPosition` is left</li><li>For example, when a child table is set up in a table and `actionButtonPosition` is left for both the child table and the parent table</li><ul><li>You can set the width of the add/remove row button column of the parent table to `--kuc-table-action-button-left` in the child table to avoid the problem that the add/remove row button columns may overwrite each other</li><li>In general, it is set to 77px if both the add/remove row buttons of the parent table are shown, or 41px if only one of the add/remove row buttons of the parent table is shown</li></ul></ul> |
| --kuc-table-action-button-right | <ul><li>This property is used to set the offset of the right edge of the add/remove row button column from the right edge of Table's nearest ancestor element that has scrolling mechanism</li><li>It works when `actionButtonPosition` is right</li><li>For example, when a child table is set up in a table and `actionButtonPosition` is right for both the child table and the parent table</li><ul><li>You can set the width of the add/remove row button column of the parent table to `--kuc-table-action-button-right` in the child table to avoid the problem that the add/remove row button columns may overwrite each other</li><li>In general, it is set to 77px if both the add/remove row buttons of the parent table are shown, or 41px if only one of the add/remove row buttons of the parent table is shown</li></ul></ul> |

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
      title: new Kuc.Tooltip({
        title: 'Please select a user',
        container: 'Name'
      }),
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
  visible: true,
  actionButtonPosition: 'right'
});

space.appendChild(table);

table.addEventListener('change', event => {
  console.log(event);
});
```

---

## Related Articles

- [In-office day list customization](../../guides/in-office-day-list-customization.md)
- [Table and ReadOnlyTable customization](../../guides/table-readonly-table-customization.md)
