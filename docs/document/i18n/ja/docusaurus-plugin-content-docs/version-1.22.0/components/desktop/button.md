---
id: button
title: Button
sidebar_label: Button
---

## Overview

Button は、ボタンを表示します。

import { ButtonComponent } from "@site/static/js/samples/desktop/button.jsx"

<ButtonComponent />

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | "" | コンポーネントの class 名 |  |
| id | string | "" | コンポーネントの id 名 |  |
| text | string | "" | ボタンに表示するテキスト | content が未指定の場合、text が表示される<br/>その他の場合、text は無視される |
| type | string | "normal" | ボタンのデザインタイプ | 以下を指定できる<br/>"normal" : Gray(#f7f9fA)<br/>"submit" : Blue(#3498db)<br/>"alert" : Red(#e74c3c) |
| content *1 | string/HTMLElement | ""  | ボタン内の DOM | HTML が記載された string を指定した場合、自動的に HTML に変換してそのまま表示される |
| disabled | boolean | false | コンポーネントの編集可/不可設定 ||
| visible | boolean | true | コンポーネントの表示/非表示設定 ||

:::caution
*1: kintone UI Component はこのプロパティの値を内部的にサニタイズしていません。ユーザー入力を受け付けるような実装でこのプロパティを使用する場合は、開発者自身で XSS 対策をしてください。
:::

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| click | function | クリックされた時のイベントハンドラ | 引数には Event の event オブジェクトをとる |

### Constructor

Button(options)<br/>
使用できるコンストラクタの一覧です。

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | コンポーネントのプロパティを含むオブジェクト | |

### Custom CSS
:::tip
[Custom CSS](../../getting-started/custom-css.md) をご確認ください。
:::

コンポーネントのスタイルを変更するために使用できるプロパティの一覧です。
#### Property
| Name |
| :--- |
| --kuc-button-width |
| --kuc-button-height |
| --kuc-button-background-color |
| --kuc-button-background-color-hover |
| --kuc-button-background-color-active |
| --kuc-button-background-color-focus |
| --kuc-button-font-size |
| --kuc-button-text-color |

---

## Sample Code

:::tip
[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。
:::

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const Kuc = Kucs['1.x.x'];

const header = kintone.app.getHeaderMenuSpaceElement();

const button = new Kuc.Button({
  text: 'Submit',
  type: 'submit',
  content: `<div>
              <svg>...</svg>
              <span>Search</span>
            </div>;`,
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

---

## Related Articles

- [Search box customization](../../guides/search-box-customization.md)
- [Search box customization with TypeScript](../../guides/search-box-customization-with-typescript.md)
- [Cleaning check list customization](../../guides/cleaning-check-list-customization.md)
- [Bulk update customization](../../guides/bulk-update-customization.md)
- [Format setting plug-in](../../guides/format-setting-plugin.md)
- [Attachment customization](../../guides/attachment-customization.md)
