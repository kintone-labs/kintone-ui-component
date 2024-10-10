---
id: spinner
title: Spinner
sidebar_label: Spinner
---

## Overview

Spinner は、ローディングスピナーを表示します。

import { SpinnerComponent } from "@site/static/js/samples/desktop/spinner.jsx"

<SpinnerComponent />

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| text | string | "" | ローダーアイコン下部に表示するテキスト | text が未指定、あるいは空文字の場合*は、初期値を表示する |
| container | HTMLElement | document.body | コンポーネントを追加する対象の要素 | デフォルトではトップレベルのドキュメントオブジェクトのボディを使うので、ほとんどの場合は document.body となる<br/>container が HTMLElement 以外の場合、エラーを出力する |

:::info
text が未指定、あるいは空文字の場合は、アクセシビリティを考慮して visually-hidden class を付与し、"now loading…" の文言を視覚的に見えない状態で表示する。
:::

### Constructor

Spinner(options)<br/>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | コンポーネントのプロパティを含むオブジェクト | |

### Method
使用できるメソッドの一覧です。

#### open()
コンポーネントを表示する

##### Parameter
none

##### Return
none

#### close()
コンポーネントを非表示にする

##### Parameter
none

##### Return
none

### Custom CSS
:::tip
[Custom CSS](../../getting-started/custom-css.md) をご確認ください。
:::

コンポーネントのスタイルを変更するために使用できるプロパティの一覧です。
#### Property
| Name |
| :--- |
| --kuc-spinner-loader-width |
| --kuc-spinner-loader-height |
| --kuc-spinner-loader-color |
| --kuc-spinner-text-font-size |
| --kuc-spinner-text-color |

---
## Sample Code

:::tip
[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。
:::

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const Kuc = Kucs['1.x.x'];

const spinner = new Kuc.Spinner({
  text: 'now loading...',
  container: document.body
});

spinner.open();
spinner.close();
```

---

## Related Articles

- [Bulk update customization](../../guides/bulk-update-customization.md)
- [Attachment customization](../../guides/attachment-customization.md)
