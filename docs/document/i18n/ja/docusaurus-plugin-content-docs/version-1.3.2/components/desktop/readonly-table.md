---
id: readonly-table
title: ReadOnlyTable
sidebar_label: ReadOnlyTable
---

## Overview

ReadOnlyTable は、kintone 詳細画面の読み取りテーブルを表示します。

import { ReadOnlyTableComponent } from "@site/static/js/samples/desktop/readonly-table.jsx"

<ReadOnlyTableComponent />

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | "" | コンポーネントの class 名 ||
| id | string | "" | コンポーネントの id 名 ||
| label | string | "" | コンポーネントの説明ラベル | 未指定、あるいは空文字の場合、label は表示されない |
| visible | boolean | true | コンポーネントの表示/非表示設定 ||
| columns | Array\<Columns\> | [] | テーブルヘッダーに表示するデータの配列 | Columns が配列以外の場合、エラーを出力する |
| columns.header | object | null | テーブルヘッダーのオブジェクト ||
| columns.header.text | string | null | テーブルヘッダーに表示する文字列 ||
| columns.visible | boolean | null | 列ごとの表示/非表示設定 ||
| data | Array\<Array\<string\>\> | [] | テーブルボディに表示するデータの二次元配列 | data, data 内の値が配列以外の場合、エラーを出力する |

### Constructor

ReadOnlyTable(options)<br/>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | コンポーネントのプロパティを含むオブジェクト | |

---
## Sample Code

全てのパラメータを指定した場合のサンプルコードです。

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
