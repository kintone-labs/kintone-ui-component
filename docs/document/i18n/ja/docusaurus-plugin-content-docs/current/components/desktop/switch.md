---
id: switch
title: Switch
sidebar_label: Switch
---

## Overview

The Switch component allows the user to toggle between two states.

import { SwitchComponent } from "@site/static/js/samples/desktop/switch.jsx"

<SwitchComponent />

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| checkedText | string | "" | Text to be displayed when the component state is "checked" | |
| className | string | "" | コンポーネントの class 名 ||
| id | string | "" | コンポーネントの id 名 ||
| label | string | "" | コンポーネントの説明ラベル | 未指定、あるいは空文字の場合、label は表示されない |
| labelPlacement | string | "left" | The position where the label is displayed | 指定できるオプション: `top`, `left`, `right`, `bottom` |
| unCheckedText | string | "" | Text to be displayed when the component state is "unchecked" | |
| checked | boolean | false | Check/Uncheck the component | |
| disabled | boolean | false | コンポーネントの編集可/不可設定 ||
| visible | boolean | true | コンポーネントの表示/非表示設定 ||

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | チェック状態が変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br/><br/>event.detail で以下の値を受け取ることができる<br/>event.detail.checked : 変更後の checked の値 |

### Constructor

Switch(options)<br/>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | コンポーネントのプロパティを含むオブジェクト | |

---

## Sample Code

:::tip
[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。
:::

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');

const kucSwitch = new Kuc.Switch({
  label: 'Switch',
  labelPlacement: 'left',
  checkedText: 'ON',
  unCheckedText: 'OFF',
  checked: false,
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(kucSwitch);

kucSwitch.addEventListener('change', event => {
  console.log(event);
});
```
