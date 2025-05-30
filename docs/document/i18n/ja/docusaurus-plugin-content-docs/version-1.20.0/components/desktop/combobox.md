---
id: combobox
title: Combobox
sidebar_label: Combobox
---

## Overview

Combobox は複数選択肢の中から一つの値を検索して選択することができます。

import { ComboboxComponent } from "@site/static/js/samples/desktop/combobox.jsx"

<ComboboxComponent />

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
| placeholder | string | "" | 入力フィールドに表示されるプレースホルダーテキスト | |
| value | string | "" | 選択されている値 | value が未指定の場合、何も選択されない<br/>value が文字列以外の場合、エラーを出力する |
| disabled | boolean | false | コンポーネントの編集可/不可設定 ||
| requiredIcon | boolean | false | コンポーネントの必須アイコン表示/非表示設定 ||
| visible | boolean | true | コンポーネントの表示/非表示設定 ||
| items | Array\<[Item](#item)\> | [] | 表示する選択肢一覧 | items が配列以外の場合、エラーを出力する |

#### Item

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| label | string | null | 各選択肢のテキスト | Item.label が未指定の場合、UI 上は Item.value の値が表示される |
| value | string | null | 各選択肢の値 | Item.value に重複した値を指定した場合、エラーを出力する |
| disabled | boolean | false | 各オプションの選択可/不可設定 | |

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | 値が変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br/><br/>event.detail で以下の値を受け取ることができる<br/>event.detail.oldValue : 変更前の value の値<br/>event.detail.value : 変更後の value の値 |

### Constructor

Combobox(options)<br/>
使用できるコンストラクタの一覧です。

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | コンポーネントのプロパティを含むオブジェクト | |

### Custom CSS
:::tip
[Custom CSS](../../getting-started/custom-css.md) をご確認ください。
:::

コンポーネントのスタイルを変更するために使用できるプロパティの一覧です。<br/>
toggle は、Combobox の入力欄とボタンの領域を示します。
#### Property
| Name |
| :--- |
| --kuc-combobox-font-size |
| --kuc-combobox-toggle-width |
| --kuc-combobox-toggle-height |
| --kuc-combobox-toggle-color |
| --kuc-combobox-menu-color |
| --kuc-combobox-menu-color-selected |
| --kuc-combobox-menu-max-height |

---

## Sample Code

:::tip
[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。
:::

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');

const combobox = new Kuc.Combobox({
  label: 'Fruit',
  items: [
    { label: 'Banana', value: 'banana', disabled: true },
    { label: 'Orange', value: 'orange' },
    { label: 'Apple', value: 'apple' }
  ],
  value: 'orange',
  requiredIcon: true,
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false,
  placeholder: 'Please select a fruit'
});
space.appendChild(combobox);

combobox.addEventListener('change', event => {
  console.log(event);
});
```
