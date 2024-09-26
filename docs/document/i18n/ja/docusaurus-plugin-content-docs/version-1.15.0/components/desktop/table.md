---
id: table
title: Table
sidebar_label: Table
---

## Overview
Table は編集可能なテーブルを表示します。

import { TableComponent } from "@site/static/js/samples/desktop/table.jsx"

<TableComponent />

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | コンポーネントの class 名 | |
| id | string | ""  | コンポーネントの id 名 | |
| label | string | ""  | コンポーネントの説明ラベル | 未指定、あるいは空文字の場合、label は表示されない |
| actionButton | boolean | true | 行追加/削除ボタンの表示/非表示設定 | |
| headerVisible | boolean | true | ヘッダーの表示/非表示設定 | |
| visible | boolean | true | コンポーネントの表示/非表示設定 | |
| columns | Array\<[Column](#column)\> | []  | コンポーネントの列データ | columns が配列以外の場合、エラーを出力する |
| data | Array\<object\> | []  | コンポーネントの行データ | data が配列以外の場合、エラーを出力する |

#### Column
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| field | string | null | 列のキー項目<br/>※必須かつ一意の値 | data オブジェクトのキー項目になる<br/>そのキーに関連づけられた値が列に表示される<br/>field が columns 内で重複もしくは未指定の場合、エラーを出力する |
| title | string | ""  | 列のヘッダー名 | |
| requiredIcon | boolean | false  | コンポーネントの必須アイコン表示/非表示設定 | |
| visible | boolean |  true  | 列の表示/非表示設定 | |
| render *1 | function<br/>`function(cellData, rowData, rowIndex) {}` | null | セルの描画関数 | DOM を戻り値にする<br/>以下の3つのパラメーターを使って関数に情報を加えることができる<br/><ul><li>cellData は現在表示されているセルの値</li><li>rowData は現在表示されている行の値</li><li>rowIndex は現在表示されている行番号</li></ul><br/>render 関数が未指定の場合、セルはデフォルトのテキストで表示される |

:::caution
*1: kintone UI Component はこのプロパティの値を内部的にサニタイズしていません。ユーザー入力を受け付けるような実装でこのプロパティを使用する場合は、開発者自身で XSS 対策をしてください。
:::

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | テーブルの値が変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br/>event.detail で以下の値を受け取ることができる<ul><li>change-cell（セルの値が変更された時にトリガーされる）</li><ul><li>event.detail.type: "change-cell"</li><li>event.detail.rowIndex: 変更された行番号</li><li>event.detail.data: 変更後の data の値</li><li>event.detail.oldData: 変更前の data の値</li><li>event.detail.field: 変更された列の field の値</li></ul><li>add-row（行追加ボタンがクリックされた時にトリガーされる）</li><ul><li>event.detail.type: "add-row"</li><li>event.detail.rowIndex: 追加された行番号</li><li>event.detail.data: 変更後の data の値</li><li>event.detail.oldData: 変更前の data の値</li></ul><li>remove-row（行削除ボタンがクリックされた時にトリガーされる）</li><ul><li>event.detail.type: "remove-row"</li><li>event.detail.rowIndex: 削除された行番号</li><li>event.detail.data: 変更後の data の値</li><li>event.detail.oldData: 変更前の data の値</li></ul></ul>|

### Constructor

Table(options)<br/>
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
| --kuc-table-header-background-color | |
| --kuc-table-header-color | |
| --kuc-table-header-font-size | |
| --kuc-table-header-height | |
| --kuc-table-header-\{index\}-width | <li>このプロパティを使用すると、インデックス値に基づいて特定のテーブル列の幅を設定できる</li><li>例えば、`--kuc-table-header-0-width` を使用して、最初のカラムの幅を設定できる</li><li>インデックス値は `0` から始まることに注意</li> |
| --kuc-table-header-width | <li>このプロパティを使用すると、テーブル内のすべての列の幅を設定できる</li><li>単一のカラムに対して特定の幅を設定する必要がある場合は、`--kuc-table-header-{index}-width` プロパティを利用する</li><li>伸縮する要素を子コンポーネントとして追加したい場合は、`--kuc-table-header-width: auto` を設定することで、この動作を維持できる場合がある</li> |

---

## Sample Code

:::tip
[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。
:::

全てのパラメータを指定した場合のサンプルコードです。

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
