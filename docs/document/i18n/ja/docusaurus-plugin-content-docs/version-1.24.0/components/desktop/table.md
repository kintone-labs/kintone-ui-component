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
| actionButtonPosition | string | "right" | 行追加/削除ボタン列の固定位置 | 利用できるオプション<br/>"right" : ウィンドウの右端<br/>"left" : ウィンドウの左端 |
| className | string | ""  | コンポーネントの class 名 | |
| id | string | ""  | コンポーネントの id 名 | |
| label | string | ""  | コンポーネントの説明ラベル | 未指定、あるいは空文字の場合、label は表示されない |
| actionButton | boolean/[ActionButton](#actionbutton) | true | 行追加/削除ボタンの表示/非表示設定 | true/false を設定した場合、行追加/削除ボタンは同時に表示/非表示される<br/>ActionButton Object を設定した場合、行追加/削除ボタンはそれぞれ個別に表示/非表示される |
| headerVisible | boolean | true | ヘッダーの表示/非表示設定 | |
| visible | boolean | true | コンポーネントの表示/非表示設定 | |
| columns | Array\<[Column](#column)\> | []  | コンポーネントの列データ | columns が配列以外の場合、エラーを出力する |
| data | Array\<object\> | []  | コンポーネントの行データ | data が配列以外の場合、エラーを出力する |

#### ActionButton
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| add | boolean | true | 行追加ボタンの表示/非表示設定 | |
| remove | boolean | true | 行削除ボタンの表示/非表示設定 | |

#### Column
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| field | string | null | 列のキー項目<br/>※必須かつ一意の値 | data オブジェクトのキー項目になる<br/>そのキーに関連づけられた値が列に表示される<br/>field が columns 内で重複もしくは未指定の場合、エラーを出力する |
| title *1 | string/HTMLElement | ""  | 列のヘッダー名 | HTML が記載された string を指定した場合、自動的に HTML に変換してそのまま表示される |
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
| --kuc-table-header-\{index\}-width | <ul><li>このプロパティを使用すると、インデックス値に基づいて特定のテーブル列の幅を設定できる</li><li>例えば、`--kuc-table-header-0-width` を使用して、最初のカラムの幅を設定できる</li><li>インデックス値は `0` から始まることに注意</li></ul> |
| --kuc-table-header-width | <ul><li>このプロパティを使用すると、テーブル内のすべての列の幅を設定できる</li><li>単一のカラムに対して特定の幅を設定する必要がある場合は、`--kuc-table-header-{index}-width` プロパティを利用する</li><li>伸縮する要素を子コンポーネントとして追加したい場合は、`--kuc-table-header-width: auto` を設定することで、この動作を維持できる場合がある</li></ul> |
| --kuc-table-action-button-background-color | |
| --kuc-table-action-button-left | <ul><li>このプロパティは、テーブルの直近のスクロールの仕組みを持つ祖先要素の左端から行追加/削除ボタンの列の左端のオフセットを設定するために使用される</li><li>`actionButtonPosition` が left の場合に動作する</li><li>例えば、テーブルの中に子テーブルを設定し、子テーブルと親テーブルの両方で `actionButtonPosition` を left に設定した場合</li><ul><li>親テーブルのアクションボタン列の幅を子テーブルの `--kuc-table-action-button-left` に設定すると、行追加/削除ボタン列がお互いに重なる問題を回避できる</li><li>一般的に、親テーブルの行追加/削除の両方のボタンを表示する場合は77px、親テーブルの行追加/削除ボタンの片方だけを表示する場合は41pxに設定する</li></ul></ul> |
| --kuc-table-action-button-right | <ul><li>このプロパティは、テーブルの直近のスクロールの仕組みを持つ祖先要素の右端から行追加/削除ボタンの列の右端のオフセットを設定するために使用される</li><li>`actionButtonPosition` が right の場合に動作する</li><li>例えば、テーブルの中に子テーブルを設定し、子テーブルと親テーブルの両方で `actionButtonPosition` を right に設定した場合</li><ul><li>親テーブルのアクションボタン列の幅を子テーブルの `--kuc-table-action-button-right` に設定すると、行追加/削除ボタン列がお互いに重なる問題を回避できる</li><li>一般的に、親テーブルの行追加/削除の両方のボタンを表示する場合は77px、親テーブルの行追加/削除ボタンの片方だけを表示する場合は41pxに設定する</li></ul></ul> |

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
