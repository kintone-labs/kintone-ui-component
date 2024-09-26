---
id: readonly-table
title: ReadOnlyTable
sidebar_label: ReadOnlyTable
---

## Overview

ReadOnlyTable は読み取り専用のテーブルを表示します。

import { ReadOnlyTableComponent } from "@site/static/js/samples/desktop/readonly-table.jsx"

<ReadOnlyTableComponent />

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | コンポーネントの class 名 | |
| id | string | ""  | コンポーネントの id 名 | |
| label | string | ""  | コンポーネントの説明ラベル | 未指定、あるいは空文字の場合、label は表示されない |
| rowsPerPage | number | 5 | ページごとの行数 | 小数点以下を指定した場合は、最も近い整数に丸められる<br/>rowsPerPage が正の整数以外の場合、エラーを出力する|
| pagination | boolean | true | ページネーションの表示/非表示設定 | false を指定した場合、ページネーションは非表示になり全ての行が表示される<br/>true を指定した場合、ページネーションは表示され rowsPerPage に指定された行数のみがページごとに表示される |
| visible | boolean | true | コンポーネントの表示/非表示設定 | |
| columns | Array\<[Column](#column)\> | []  | コンポーネントの列データ | columns が配列以外の場合、エラーを出力する |
| data | Array\<object\> | []  | コンポーネントの行データ | data が配列以外の場合、エラーを出力する |

#### Column
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| field | string | ""  | 列のキー項目 | data オブジェクトのキー項目になる<br/>そのキーに関連づけられた値が列に表示される |
| title | string | ""  | 列のヘッダー名 | |
| visible | boolean |  true  | 列の表示/非表示設定 | |

### Constructor

ReadOnlyTable(options)<br/>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | コンポーネントのプロパティを含むオブジェクト |  |

---
## Sample Code

:::tip
[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。
:::

全てのパラメータを指定した場合のサンプルコードです。

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

---

## Related Articles

- [Table and ReadOnlyTable customization](../../guides/table-readonly-table-customization.md)
