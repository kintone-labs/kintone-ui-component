---
id: readonly-table
title: ReadOnlyTable
sidebar_label: ReadOnlyTable
---

## Overview

The ReadOnlyTable component allows the user to display a read table on the Kintone details screen.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=desktop-readonly-table--document" title="readonly-table image" width="420px" height="100px"></iframe>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| id | string | ""  | Component id name | |
| label | string | ""  | Label for the component | Label will not be displayed if unspecified or left empty |
| visible | boolean | true | Show/Hide the component | |
| columns | Array\<Columns\> | []  | Array of data to be displayed in the table header | Will result an error if the value for columns is not an array |
| Columns.header | Object | Null | Table header object | |
| Columns.header.text | String | Null | Text to be displayed in the table header | |
| Columns.visible | Boolean | Null | Show/Hide the column | |
| data | Array\<Array\<string\>\> | []  | Two-dimensional array of data to be displayed on table body | Will result an error if the data is not an array |

### Constructor

ReadOnlyTable(options)<br/>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | Object that includes component properties |  |

---
## Sample Code

Here is a sample code when all parameters are specified:

```javascript
const space = kintone.app.record.getSpaceElement('space');
const readOnlyTable = new Kuc.ReadOnlyTable({
  label: 'Table',
  columns: [
    {
      header: {
        text: 'fruit',
      },
      visible: true
    },
    {
      header: {
        text: 'Producing area',
      },
      visible: true,
    },
    {
      header: {
        text: 'Price',
      },
      visible: true
    }
  ],
  data: [
    ['Orange', 'Ehime', '400'],
    ['Apple', 'Aomori', '200'],
    ['Banana', 'Tokyo', '100']
  ],
  className: 'options-class',
  id: 'options-id',
  visible: true
});
space.appendChild(readOnlyTable);
```
