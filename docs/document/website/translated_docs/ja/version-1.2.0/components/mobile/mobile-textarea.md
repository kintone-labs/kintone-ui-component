---
id: version-1.0.0-mobile-textarea
title: MobileTextArea
sidebar_label: MobileTextArea
original_id: mobile-textarea
---

## Overview

MobileTextArea は、複数行のテキストを表示します。

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=mobile-textarea--document" title="mobile textarea image" height="160px" width="100%"></iframe>

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
| value | string | "" | 表示されるテキスト ||
| disabled | boolean | false | コンポーネントの編集可/不可設定 ||
| requiredIcon | boolean | false | コンポーネントの必須アイコン表示/非表示設定 ||
| visible | boolean | true | コンポーネントの表示/非表示設定 ||

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | 値が変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br><br>event.detail で以下の値を受け取ることができる<br>event.detail.oldValue : 変更前の value の値<br>event.detail.value : 変更後の value の値 |
| focus | function | フォーカスされた時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br><br>event.detail で以下の値を受け取ることができる<br>event.detail.value : フォーカス時の value の値 |
| input | function | 値が入力されている時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br><br>event.detail で以下の値を受け取ることができる<br>event.detail.data : 入力された文字列<br>event.detail.value : ターゲット要素の value の値<br><br>※ event.detail.data の値についての補足<br>入力された文字列を指す<br>ペーストやドラッグ&ドロップによって入力した場合は、null になる<br>Enter, Delete, Backspace をクリックした場合は、null になる |

### Constructor

MobileTextArea(options)<br>
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
const mobileTextArea = new Kuc.MobileTextArea({
  label: 'Fruit',
  requiredIcon: true,
  placeholder: 'Apple',
  value: 'Apple',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(mobileTextArea);

mobileTextArea.addEventListener('change', event => {
  console.log(event);
});

mobileTextArea.addEventListener('focus', event => {
  console.log(event);
});

mobileTextArea.addEventListener('input', event => {
  console.log(event);
});
```
