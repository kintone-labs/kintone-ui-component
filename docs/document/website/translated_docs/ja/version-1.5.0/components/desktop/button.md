---
id: version-1.5.0-button
title: Button
sidebar_label: Button
original_id: button
---

## Overview

Button は、ボタンを表示します。

<div class="sample-container" id="button">
  <div id="sample-container__components"></div>
</div>
<script src="/js/samples/desktop/button.js"></script>

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | "" | コンポーネントの class 名 |  |
| id | string | "" | コンポーネントの id 名 |  |
| text | string | "" | ボタンに表示するテキスト ||
| type | string | "normal" | ボタンのデザインタイプ | 以下を指定できる<br>"normal" : Gray(#f7f9fA)<br>"submit" : Blue(#3498db)<br>"alert" : Red(#e74c3c) |
| disabled | boolean | false | コンポーネントの編集可/不可設定 ||
| visible | boolean | true | コンポーネントの表示/非表示設定 ||

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| click | function | クリックされた時のイベントハンドラ | 引数には Event の event オブジェクトをとる |

### Constructor

Button(options)<br>
使用できるコンストラクタの一覧です。

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | コンポーネントのプロパティを含むオブジェクト | |

### Custom CSS
> [Custom CSS](../../getting-started/custom-css.md) をご確認ください。

コンポーネントのスタイルを変更するために使用できるプロパティの一覧です。
#### Property
| Name |
| :--- |
| --kuc-button-width |
| --kuc-button-background-color |
| --kuc-button-background-hover |
| --kuc-button-background-active |
| --kuc-button-background-focus |
| --kuc-button-font-size |

---

## Sample Code

>[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const Kuc = Kucs['1.x.x'];

const header = kintone.app.getHeaderMenuSpaceElement();

const button = new Kuc.Button({
    text: 'Submit',
    type: 'submit',
    className: 'options-class',
    id: 'options-id',
    visible: true,
    disabled: false
});
header.appendChild(button);

button.addEventListener('click', event => {
  console.log(event);
});
```
