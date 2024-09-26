---
id: readonly-table
title: ReadOnlyTable
sidebar_label: ReadOnlyTable
---

## Overview

The ReadOnlyTable component allows the user to display a read-only mode table.

import { ReadOnlyTableComponent } from "@site/static/js/samples/desktop/readonly-table.jsx"

<ReadOnlyTableComponent />

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| id | string | ""  | Component id name | |
| label | string | ""  | Label for the component | Label is not displayed if unspecified or empty |
| rowsPerPage | number | 5 | Number of table rows per page | Round off to the nearest whole number when the decimal point is set<br/>Will result an error if the value of `rowsPerPage` is not a positive integer |
| pagination | boolean | true | Show/Hide the pagination | If setting `false`, pagination is hidden and all rows are displayed<br/>If setting `true`, pagination is displayed and only the number of rows set in `rowsPerPage` are displayed |
| visible | boolean | true | Show/Hide the component | |
| columns | Array\<[Column](#column)\> | []  | Column data of the component | Will result an error if the value of `columns` is not an array |
| data | Array\<object\> | []  | Row data of the component | Will result an error if the value of `data` is not an array |

#### Column
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| field | string | ""  | Key of the column | It represents the key of the `data` object<br/>The value associated with that key will be rendered in the column |
| title | string | ""  | Header name of the column | |
| visible | boolean |  true  | Show/Hide the column | |

### Constructor

ReadOnlyTable(options)<br/>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | Object that includes component properties |  |

---
## Sample Code

:::tip
Please check the [package installation](../../getting-started/quick-start.md#installation) method first.
:::

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');

const readOnlyTable = new ReadOnlyTable({
  label: 'ReadOnlyTable',
  columns: [
    {
      title: 'Number',
      field: 'index',
    },
    {
      title: 'City',
      field: 'name',
    },
    {
      title: 'Country',
      field: 'country',
    },
    {
      title: 'Population',
      field: 'population',
    },
    {
      title: 'Coordinates',
      field: 'coordinates',
    }
  ],
  data: [
    {
      index: '1',
      name: 'HoChiMinh',
      country: 'Vietnam',
      population: '8,371,000',
      coordinates: '10.762622, 106.660172',
    },
    {
      index: '2',
      name: 'Tokyo',
      country: 'Japan',
      population: '14,000,000',
      coordinates: '35.689487, 139.691711',
    },
    {
      index: '3',
      name: 'New York',
      country: 'USA',
      population: '8,400,000',
      coordinates: '40.712776, -74.005974',
    }
  ],
  className: 'sample-class',
  id: 'sample-id',
  visible: true,
  pagination: true,
  rowsPerPage: 3,
});
space.appendChild(readOnlyTable);
```
