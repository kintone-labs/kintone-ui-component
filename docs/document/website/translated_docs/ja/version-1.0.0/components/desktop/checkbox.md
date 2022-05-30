---
id: version-1.0.0-checkbox
title: Checkbox
sidebar_label: Checkbox
original_id: checkbox
---

## Overview

Checkbox は、複数選択のチェックボックスを表示します。

<div class="sample-container" id="checkbox">
  <div id="sample-container__components"></div>
</div>
<script src="/js/samples/desktop/checkbox.js"></script>

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | "" | コンポーネントの class 名 ||
| error | string | "" | エラーに表示するテキスト | 未指定、あるいは空文字の場合、error は表示されない |
| id | string | "" | コンポーネントの id 名 ||
| itemLayout | string | "horizontal" | 選択肢の並べ方 | 以下を指定できる<br>"horizontal" : 横並び<br>"vertical" : 縦並び |
| label | string | "" | コンポーネントの説明ラベル | 未指定、あるいは空文字の場合、label は表示されない |
| borderVisible | boolean | true | 選択肢を囲う枠線の表示/非表示設定 ||
| disabled | boolean | false | コンポーネントの選択可/不可設定 ||
| requiredIcon | boolean | false | コンポーネントの必須アイコン表示/非表示設定 ||
| visible | boolean | true | コンポーネントの表示/非表示設定 ||
| items | Array\<Item\> | [] | 表示する選択肢一覧 | items が配列以外の場合、エラーを出力する |
| Item.label | string | null | 各選択肢のテキスト | Item.label が未指定の場合、UI 上は Item.value の値が表示される |
| Item.value | string | null | 各選択肢の値 | Item.value の値が重複した場合、エラーを出力する |
| value | Array\<string\> | [] | 選択されている値 | value が配列以外の場合、エラーを出力する<br>配列内の値が重複した場合、エラーを出力する<br>value が未指定の場合、何も選択されない |

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | 値が変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br><br>event.detail で以下の値を受け取ることができる<br>event.detail.oldValue : 変更前の value の値<br>event.detail.value : 変更後の value の値 |

### Constructor

Checkbox(options)<br>
使用できるコンストラクタの一覧です。

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | コンポーネントのプロパティを含むオブジェクト | |

---

## Sample Code

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const space = kintone.app.record.getSpaceElement('space');
const checkbox = new Kuc.Checkbox({
  label: 'Fruit',
  requiredIcon: true,
  items: [
    {
      label: 'orange',
      value: 'Orange'
    },
    {
      label: 'apple',
      value: 'Apple'
    }
  ],
  value: ['Orange'],
  itemLayout: 'horizontal',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false,
  borderVisible: true
});
space.appendChild(checkbox);

checkbox.addEventListener('change', event => {
  console.log(event);
});
```
