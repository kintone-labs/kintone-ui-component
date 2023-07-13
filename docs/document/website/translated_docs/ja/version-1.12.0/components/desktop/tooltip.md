---
id: version-1.12.0-tooltip
title: Tooltip
sidebar_label: Tooltip
original_id: tooltip
---

## Overview

Tooltip は要素にホバーしたりフォーカスしたりする時に、対象となる要素の短い説明を表示します。

<div class="sample-container" id="tooltip">
  <div id="sample-container__components"></div>
</div>
<script src="/js/samples/desktop/tooltip.js"></script>

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
| describeChild *2 | boolean | false  | コンポーネントの内容を説明するための追加のアクセシビリティ情報の設定 | Tooltip が子要素とどのように相互作用するかを制御し、追加のアクセシビリティ情報を提供するために使用する |

> *1: できるだけフォーカス可能な要素を使用し、アクセシビリティのためにフォーカス不可能な要素の利用は控えてください。

> *2: 以下、describeChild プロパティの使い方を理解することで、アプリケーションのアクセシビリティとユーザビリティを効果的に向上することができます。
> - Tooltip が要素自体の目的を表す（要素の簡単な説明やラベルを提供する）場合は、describeChild を false に設定します。
>   - Tooltip コンポーネントの最初の子要素に、title プロパティの値が設定された aria-label 属性が追加されます。
>   - 例えば、Save と書かれた Tooltip を持つボタンがある場合、Tooltip はボタン自体の目的を表します。この場合、describeChild に false を設定することで、Tooltip がボタンの目的を説明していることを示します。
>     ```javascript
>       <kuc-tooltip>
>         <button aria-label='Save'>Save</button>
>         <div id='tooltip-ID'>Save</div>
>       </kuc-tooltip>
>     ```
>    - aria-label の詳細については[こちら](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)を参照してください。
> - Tooltip が要素の説明を表す（要素についての追加情報や説明を提供する）場合は、describeChild を true に設定します。
>   - Tooltip コンポーネントの最初の子要素に、Tooltip のラッパー要素の ID の値が設定された aria-describedby 属性が追加されます。
>   - 例えば、質問マークを表すアイコンがあり、Tooltip がそのアイコンの説明や解説を提供する場合です。この場合、describeChild を true に設定することで、Tooltip がアイコンの説明として機能することを示します。
>     ```javascript
>       <kuc-tooltip>
>         <button aria-describedby='tooltip-ID'>
>           <span class='icon-question-mark'></span>
>         </button>
>         <div id='tooltip-ID'>This is a help icon. Click for more information</div>
>       </kuc-tooltip>
>     ```
>   - aria-describedby については[こちら](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)を参照してください。

### Constructor

Tooltip(options)<br>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options  | object | {} | コンポーネントのプロパティを含むオブジェクト |  |

---

## Sample Code

>[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。

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
