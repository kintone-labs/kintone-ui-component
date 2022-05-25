---
id: version-1.4.0-mobile-date-picker
title: MobileDatePicker
sidebar_label: MobileDatePicker
original_id: mobile-date-picker
---

## Overview

MobileDatePicker は入力エリアと日付選択用のカレンダーを表示します。

<div class="sample-container" id="mobile-date-picker">
  <div id="sample-container__components"></div>
</div>
<script src="/js/samples/mobile-date-picker.js"></script>

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | コンポーネントの class 名 | |
| error | string | ""  | エラーに表示するテキスト | 未指定、あるいは空文字の場合、error は表示されない |
| id | string | ""  | コンポーネントの id 名 | |
| label | string | ""  | コンポーネントの説明ラベル | 未指定、あるいは空文字の場合、label は表示されない |
| language *1 | string | "auto"  | 言語設定 | 指定できるオプション: "auto", "en", "ja", "zh"<br>"auto" を指定した場合、HTML の lang 設定に従う（lang 設定が "en"/"zh"/"ja" 以外の場合は、言語設定が "en" になる） |
| value | string | ""  | 表示するテキスト | フォーマットは YYYY-MM-DD<br>以下の日付も指定できる（内部的に YYYY-MM-DD に変換される）:<li>2021</li><li>2021-1</li><li>2021-01</li><li>2021-1-9</li><li>21-01-01</li>年が 4文字以下の場合、0 が先頭に補完される<br>日や月の記載がない場合、01 で補完される<br>日や月が 1文字の場合、0 が先頭に補完される<br>不正なフォーマットや値を指定した場合、エラーを出力する |
| disabled | boolean | false | コンポーネントの選択可/不可設定 | |
| requiredIcon | boolean | false | コンポーネントの必須アイコン表示/非表示設定 | |
| visible | boolean | true | コンポーネントの表示/非表示設定 | |

> *1: 表示される日付のフォーマットは、language プロパティの設定に応じて以下のように自動的に切り替わる。
>
> - "en": MM/DD/YYYY
> - "ja", "zh": YYYY-MM-DD

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | 値が変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br><br>event.detail で以下の値を受け取ることができる<br>event.detail.oldValue : 変更前の value の値<br>event.detail.value : 変更後の value の値 |

### Constructor

MobileDatePicker(options)<br>
使用できるコンストラクタの一覧です。

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options  | object | {} | コンポーネントのプロパティを含むオブジェクト |  |

---

## Sample Code

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const space = kintone.mobile.app.record.getSpaceElement('space');
const mobileDatePicker = new Kuc.MobileDatePicker({
  label: 'Date',
  requiredIcon: true,
  language: 'auto',
  value: '2021-11-11',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(mobileDatePicker);

mobileDatePicker.addEventListener('change', (event) => {
  console.log(event);
});
```
