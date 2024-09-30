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
| data *1 | Array\<object\> | []  | コンポーネントの行データ | data が配列以外の場合、エラーを出力する |

:::caution
*1: kintone UI Component はこのプロパティの値を内部的にサニタイズしていません。ユーザー入力を受け付けるような実装でこのプロパティを使用する場合は、開発者自身で XSS 対策をしてください。
:::

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

### Custom CSS
:::tip
[Custom CSS](../../getting-started/custom-css.md) をご確認ください。
:::

コンポーネントのスタイルを変更するために使用できるプロパティの一覧です。
#### Property
| Name | Description |
| :--- | :--- |
| --kuc-readonly-table-header-background-color | |
| --kuc-readonly-table-header-color | |
| --kuc-readonly-table-header-font-size | |
| --kuc-readonly-table-header-height | |
| --kuc-readonly-table-header-\{index\}-width | <li>このプロパティを使用すると、インデックス値に基づいて特定のテーブル列の幅を設定できる</li><li>例えば、`--kuc-readonly-table-header-0-width` を使用して、最初のカラムの幅を設定できる</li><li>インデックス値は `0` から始まることに注意</li> |
| --kuc-readonly-table-header-width | <li>このプロパティを使用すると、テーブル内のすべての列の幅を設定できる</li><li>単一のカラムに対して特定の幅を設定する必要がある場合は、`--kuc-readonly-table-header-{index}-width` プロパティを利用する</li><li>伸縮する要素を子コンポーネントとして追加したい場合は、`--kuc-readonly-table-header-width: auto` を設定することで、この動作を維持できる場合がある</li> |

---
## Sample Code

:::tip
[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。
:::

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');

const readOnlyTable = new Kuc.ReadOnlyTable({
  label: 'ReadOnlyTable',
  columns: [
    {
      title: 'Number',
      field: 'index'
    },
    {
      title: 'City',
      field: 'name'
    },
    {
      title: 'Country',
      field: 'country'
    },
    {
      title: 'Population',
      field: 'population'
    },
    {
      title: 'Coordinates',
      field: 'coordinates'
    },
    {
      title: 'Link',
      field: 'link'
    }
  ],
  data: [
    {
      index: '1',
      name: 'HoChiMinh',
      country: 'Vietnam',
      population: '8,371,000',
      coordinates: '10.762622, 106.660172',
      link: '<a href="https://en.wikipedia.org/wiki/Ho_Chi_Minh_City" target="_blank">Vietnam: Ho Chi Minh City</a>'
    },
    {
      index: '2',
      name: 'Tokyo',
      country: 'Japan',
      population: '14,000,000',
      coordinates: '35.689487, 139.691711',
      link: '<a href="https://en.wikipedia.org/wiki/Tokyo" target="_blank">Japan: Tokyo</a>'
    },
    {
      index: '3',
      name: 'New York',
      country: 'USA',
      population: '8,400,000',
      coordinates: '40.712776, -74.005974',
      link: '<a href="https://en.wikipedia.org/wiki/New_York_City" target="_blank">USA: New York City</a>'
    }
  ],
  className: 'sample-class',
  id: 'sample-id',
  visible: true,
  pagination: true,
  rowsPerPage: 3
});
space.appendChild(readOnlyTable);
```

---

## Related Articles

- [Table and ReadOnlyTable customization](../../guides/table-readonly-table-customization.md)
- [Tabs customization](../../guides/tabs-customization.md)
