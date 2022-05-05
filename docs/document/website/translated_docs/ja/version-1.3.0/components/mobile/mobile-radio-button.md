---
id: version-1.0.0-mobile-radio-button
title: MobileRadioButton
sidebar_label: MobileRadioButton
original_id: mobile-radio-button
---

## Overview

MobileRadioButton は、複数選択肢の中から一つの値を選択することができます。

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=mobile-radio-button--document" title="mobile radiobutton image" height="140px"></iframe>

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | "" | コンポーネントの class 名 ||
| error | string | "" | エラーに表示するテキスト | 未指定、あるいは空文字の場合、error は表示されない |
| id | string | "" | コンポーネントの id 名 ||
| label | string | "" | コンポーネントの説明ラベル | 未指定、あるいは空文字の場合、label は表示されない |
| value *1 | string | "" | 選択されている値 | value と selectedIndex が未指定の場合、何も選択されない<br>重複する value を指定し、selectedIndex を指定しない場合、Item.value で最初にマッピングされた value の項目が選択され、selectedIndex にはその選択肢のインデックス番号が入る |
| selectedIndex *1 | number | -1 | 選択されている値のインデックス番号 | items 内に重複する Item.value がある場合、どの Item.value が選択されるか指定するためのプロパティ<br>value が未指定で、selectedIndex に有効な値が指定されている場合、 そのインデックス番号の選択肢が選択される<br>value に重複した Item.value が指定され、selectedIndex の値が value 内の重複した Item.value とマッピングした場合、そのインデックス番号の選択肢が選択される<br>selectedIndex が数値以外の場合、エラーを出力する |
| borderVisible | boolean | true | 選択肢を囲う枠線の表示/非表示設定 ||
| disabled | boolean | false | コンポーネントの編集可/不可設定 ||
| requiredIcon | boolean | false | コンポーネントの必須アイコン表示/非表示設定 ||
| visible | boolean | true | コンポーネントの表示/非表示設定 ||
| items | Array\<Item\> | [] | 表示する選択肢一覧 | items が配列以外の場合、エラーを出力する |
| Item.label | string | null | 各選択肢のテキスト | Item.label が未指定の場合、UI 上は Item.value の値が表示される |
| Item.value | string | null | 各選択肢の値 | Item.value に重複の値を指定できる |

> *1: Item.value に重複した値を指定できる。重複した値を指定する場合、value と selectedIndex プロパティを使って制御することができる。<br>
> 例: `items = [{label: 'Orange', value: 'fruit'}, {label: 'Apple', value: 'fruit'}, {label: 'Carrot', value: 'vegetable'}]` を指定する
>
> - 以下のように value を指定、selectedIndex を未指定の場合:
>   - value = 'fruit': 最初の値が選択される。
>   - value = 'other': 何も選択されない。
>
> - 以下のように value を未指定、selectedIndex を指定する場合:
>   - selectedIndex = 1: 2番目の値が選択される。
>   - selectedIndex = 99: 何も選択されない。

### Event
指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | 値が変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br><br>event.detail で以下の値を受け取ることができる<br>event.detail.oldValue : 変更前の value の値<br>event.detail.value : 変更後の value の値 |

### Constructor

MobileRadioButton(options)<br>
使用できるコンストラクタの一覧です。

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | コンポーネントのプロパティを含むオブジェクト | |

---
## Sample Code

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const space = kintone.mobile.app.record.getSpaceElement('space');
const mobileRadioButton = new Kuc.MobileRadioButton({
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
  value: 'Orange',
  selectedIndex: 0,
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false,
  borderVisible: true
});
space.appendChild(mobileRadioButton);

mobileRadioButton.addEventListener('change', event => {
  console.log(event);
});
```
