---
id: tooltip
title: Tooltip
description: Tooltip は要素にホバーしたりフォーカスしたりする時に、対象となる要素のラベルや短い説明を表示します。
sidebar_label: Tooltip
---

## Overview

Tooltip は要素にホバーしたりフォーカスしたりする時に、対象となる要素のラベルや短い説明を表示します。

import { TooltipComponent } from "@site/static/js/samples/desktop/tooltip.jsx"

<TooltipComponent />

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | コンポーネントの class 名 | |
| id | string | ""  | コンポーネントの id 名 | |
| placement | string | "top"  | 対象の要素に対するコンポーネントの表示位置 | 指定できるオプション: `top`, `left`, `right`, `bottom` |
| title | string | ""  | コンポーネントに表示するテキスト | |
| container *1 | string/HTMLElement | "" | コンポーネントを表示する対象の要素 | 以下の時に title の値が表示される<ul><li>container 要素がホバーされた時</li><li>container 要素がフォーカスされた時</li></ul> |
| describeChild *2 | boolean | false  | 要素に対して Tooltip が表す内容の設定 | Tooltip がラベルを表す場合は false、追加情報や補足説明を表す場合は true を設定する |

:::info
*1: できるだけフォーカス可能な要素を使用し、アクセシビリティのためにフォーカス不可能な要素の利用は控えてください。

*2: 以下、describeChild プロパティの使い方を理解することで、アプリケーションのアクセシビリティとユーザビリティを効果的に向上させることができます。
- Tooltip が要素自体の目的を表す（要素のラベルを提供する）場合は、describeChild を false に設定します。
  - Tooltip コンポーネントの最初の子要素に、title プロパティの値が設定された aria-label 属性が追加されます。
  - 例えば、保存アイコンがあり、Tooltip がそのアイコンのラベルを提供するケースです。
    ```javascript
      <kuc-tooltip>
        <button aria-label='Save'>
          <span class='icon-save'></span>
        </button>
        <div id='tooltip-ID'>Save</div>
      </kuc-tooltip>
    ```
  - 詳細については [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) を参照してください。
- Tooltip が要素の説明を表す（要素についての追加情報や補足説明を提供する）場合は、describeChild を true に設定します。
  - Tooltip コンポーネントの最初の子要素に、Tooltip のラッパー要素の ID の値が設定された aria-describedby 属性が追加されます。
  - 例えば、質問アイコンがあり、Tooltip がそのアイコンの説明や解説を提供するケースです。
    ```javascript
      <kuc-tooltip>
        <button aria-describedby='tooltip-ID'>
          <span class='icon-question-mark'></span>
        </button>
        <div id='tooltip-ID'>This is a help icon. Click for more information</div>
      </kuc-tooltip>
    ```
  - 詳細については [aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) を参照してください。
:::

### Constructor

Tooltip(options)<br/>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options  | object | \{\} | コンポーネントのプロパティを含むオブジェクト |  |

### Custom CSS
:::tip
[Custom CSS](../../getting-started/custom-css.md) をご確認ください。
:::

コンポーネントのスタイルを変更するために使用できるプロパティの一覧です。
#### Property
| Name |
| :--- |
| --kuc-tooltip-background-color |
| --kuc-tooltip-color |
| --kuc-tooltip-font-size |
| --kuc-tooltip-height |
| --kuc-tooltip-width |

---

## Sample Code
:::tip
[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。
:::

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');
const buttonEl = document.createElement('button');
buttonEl.innerText ='Add';

const tooltip = new Kuc.Tooltip({
  title: 'Do not add if it exists.',
  container: buttonEl,
  placement: 'bottom',
  describeChild: true,
  className: 'tooltip-class',
  id: 'tooltip-id',
});
space.appendChild(tooltip);
```

---

## Related Articles

- [In-office day list customization](../../guides/in-office-day-list-customization.md)