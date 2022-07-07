---
id: version-1.3.0-datetime-picker
title: DateTimePicker
sidebar_label: DateTimePicker
original_id: datetime-picker
---

## Overview

DateTimePicker は日付と時間それぞれの入力エリアと選択肢を表示します。

<div class="sample-container" id="datetime-picker">
  <div id="sample-container__components"></div>
</div>
<script src="/js/samples/desktop/datetime-picker.js"></script>

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
| value | string | ""  | 表示するテキスト | フォーマットは YYYY-MM-DDTHH:MM:SS<br>以下の日時も指定できる（内部的に YYYY-MM-DDTHH:MM:SS に変換される）:<li>2021</li><li>2021T01</li><li>2021-06</li><li>2021-12-12</li><li>2021-12-12T01</li><li>2021-12-12T01:01</li>日や月の記載がない場合、01 で補完される<br>時間や分や秒の記載がない場合、00 で補完される<br>不正なフォーマットや値を指定した場合、エラーを出力する |
| disabled | boolean | false | コンポーネントの選択可/不可設定 | |
| hour12 | boolean | false | 時刻表記の設定 (12時間表記/24時間表記) デフォルトは 24時間表記 | 指定できるオプション:<br>true: 12時間表記<br>false: 24時間表記 |
| requiredIcon | boolean | false | コンポーネントの必須アイコン表示/非表示設定 | |
| visible | boolean | true | コンポーネントの表示/非表示設定 | |

> *1: 表示される日付のフォーマットは、language プロパティの設定に応じて以下のように自動的に切り替わる。
> - "en" の場合: MM/DD/YYYY
> - "ja", "zh" の場合: YYYY-MM-DD

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | 値が変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br><br>event.detail で以下の値を受け取ることができる<br>event.detail.oldValue : 変更前の value の値<br>event.detail.value : 変更後の value の値<br>event.detail.changedPart : 変更されたパーツ "date" もしくは "time" |

### Constructor

DateTimePicker(options)<br>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options  | object | {} | コンポーネントのプロパティを含むオブジェクト |  |

---
## Sample Code

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const space = kintone.app.record.getSpaceElement('space');
const dateTimePicker = new Kuc.DateTimePicker({
  label: 'DateTime',
  requiredIcon: true,
  language: 'auto',
  hour12: false,
  value: '2021-11-11T11:30:00',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(dateTimePicker);

dateTimePicker.addEventListener('change', event => {
  console.log(event);
});
```
