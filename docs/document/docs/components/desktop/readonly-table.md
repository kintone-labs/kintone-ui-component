---
id: readonly-table
title: ReadOnlyTable
sidebar_label: ReadOnlyTable
original_id: readonly-table
---

## Overview

The ReadOnlyTable component allows the user to display data in a table.

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
| rowsPerPage | number | 5 | Set the number of table rows per page. | Round off to the nearest whole number: <br/> - `{rowsPerPage: 20.5}` Display up to 21 rows per page. <br/> - `{rowsPerPage: 20.4}` Display up to 20 rows per page. |
| pagination | boolean | true | A boolean to determine whether to enable pagination. | pagination is false, all rows are displayed. |
| visible | boolean | true | Show/Hide the component. | |
| columns | Array\<[Columns](#column)\> | []  | Array of data to be displayed in the table header. | Throw an error if columns is not an array. |
| data | Array\<object\> | []  | An array of objects to be displayed in the body of the ReadOnlyTable. | Throw an error if columns is not an array. |

#### Column
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| field | string | ""  | The key of the data object. | |
| title | string | ""  | The header name of each column. | |
| visible | boolean |  true  | Determine the visibility of the column. | |

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
  label: 'ReadOnlyTable',
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
