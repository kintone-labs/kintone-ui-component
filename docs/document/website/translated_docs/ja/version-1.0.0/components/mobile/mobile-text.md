---
id: version-1.0.0-mobile-text
title: MobileText
sidebar_label: MobileText
original_id: mobile-text
---

## Overview

MobileText は、単一行のテキストを表示します。

<div class="sample-container" id="mobile-text">
  <div id="sample-container__components" class="mobile"></div>
</div>
<script src="/js/samples/mobile/mobile-text.js"></script>

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
| placeholder | string | "" | 空欄時に入力例として表示されるテキスト ||
| prefix | string | "" | Text の前に表示されるテキスト ||
| suffix | string | "" | Text の後に表示されるテキスト ||
| textAlign | string | "left" | 表示するテキストの位置 | 以下を指定できる<br>"left" : 左寄せ<br>"right" : 右寄せ |
| value | string | "" | 表示するテキスト | |
| disabled | boolean | false | コンポーネントの編集可/不可設定 ||
| requiredIcon | boolean | false | コンポーネントの必須アイコン表示/非表示設定 ||
| visible | boolean | true | コンポーネントの表示/非表示設定 ||

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | 値が変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br><br>event.detail で以下の値を受け取ることができる<br>event.detail.oldValue : 変更前の value の値<br>event.detail.value : 変更後の value の値 |
| focus | function | フォーカスされた時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br><br>event.detail で以下の値を受け取ることができる<br>event.detail.value : フォーカス時の value の値 |

### Constructor

MobileText(options)<br>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options  | object | {} | コンポーネントのプロパティを含むオブジェクト | |

---
## Sample Code

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const space = kintone.mobile.app.record.getSpaceElement('space');
const mobileText = new Kuc.MobileText({
  label: 'Fruit',
  requiredIcon: true,
  value: 'Apple',
  placeholder: 'Apple',
  prefix: '$',
  suffix: 'yen',
  textAlign: 'left',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(mobileText);

mobileText.addEventListener('change', event => {
  console.log(event);
});

mobileText.addEventListener('focus', event => {
  console.log(event);
});
```
