---
id: readonly-table
title: ReadOnlyTable
sidebar_label: ReadOnlyTable
---

## Overview

ReadOnlyTable displays a read table on the Kintone details screen.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=readonly-table--document" title="readonly-table image" width="420px" height="100px"></iframe>

---

## Specification

### Property

A list of available properties. You can update the value with the specified property.

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component Class name | |
| id | string | ""  | Component ID Name | |
| label | string | ""  | Component Description Labels | Label is not displayed for unspecified or empty characters |
| visible | boolean | true | Show/Hide Components | |
| columns | Array\<Columns\> | []  | Array of data to be displayed in the table header | Output an error if Columns is not an array |
| Columns.header | Object | Null | Table Header Object | |
| Columns.header.text | String | Null | Text to be displayed in the table header | |
| Columns.visible | Boolean | Null | Show/Hide settings for each column | |
| data | Array\<Array\<string\>\> | []  | Two-dimensional array of data to be displayed on table body | Output an error when the value in data, data is not an array |

### Constructor

ReadOnlyTable(options)<br>
A list of available constructors.

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | JSON object with Component Properties | Values in options are optional |

---
## Sample Code

Sample code when all parameters are specified.

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
