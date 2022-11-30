---
id: version-1.8.0-readonly-table
title: ReadOnlyTable
sidebar_label: ReadOnlyTable
original_id: readonly-table
---

## Overview

The ReadOnlyTable component allows the user to display a read-only mode table.

<div class="sample-container" id="readonly-table">
  <div id="sample-container__components"></div>
</div>
<script src="/js/samples/desktop/readonly-table.js"></script>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name. | |
| id | string | ""  | Component id name. | |
| label | string | ""  | Text description for the component. | Label will not be displayed if unspecified or left empty. |
| rowsPerPage | number | 5 | Number of table rows per page. | <ul><li>Round off to the nearest whole number. </li><ul> <li> `{rowsPerPage: 10}` Display up to 10 rows per page. </li><li> `{rowsPerPage: 20.5}` Display up to 21 rows per page. </li> <li> `{rowsPerPage: 20.4}` Display up to 20 rows per page. </li></ul><li>Throw an error if `rowsPerPage` is not a positive number in constructor and setter.</li><ul>|
| pagination | boolean | true | Show/Hide the pagination. | <ul><li>`{pagination: false}` Pagination is hidden, all rows are displayed.</li><li>`{pagination: true}` Only the number of rows set in rowsPerPage are displayed.</li></ul> |
| visible | boolean | true | Show/Hide the component. | |
| columns | Array\<[Columns](#column)\> | []  | Column data of the component. | Throw an error if the `columns` is not an array. |
| data | Array\<object\> | []  | Row data of the component. | Throw an error if the `data` is not an array. |

#### Column
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| field | string | ""  | Key of the data object. | |
| title | string | ""  | Header name of the column. | |
| visible | boolean |  true  | Show/Hide the column. | |

### Constructor

ReadOnlyTable(options)<br>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | Object that includes component properties |  |

---
## Sample Code

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');

const readOnlyTable = new Kuc.ReadOnlyTable({
  rowsPerPage: 3,
  pagination: true,
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
    },
  ],
});
space.appendChild(readOnlyTable);
```
