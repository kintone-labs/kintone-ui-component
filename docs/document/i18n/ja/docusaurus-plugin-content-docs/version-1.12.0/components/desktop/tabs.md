---
id: tabs
title: Tabs
sidebar_label: Tabs
---

## Overview

Tabs は、複数のタブを表示し、表示内容を切り替えることができます。

import { TabsComponent } from "@site/static/js/samples/desktop/tabs.jsx"

<TabsComponent />

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | "" | コンポーネントの class 名 ||
| id | string | "" | コンポーネントの id 名 ||
| value | string | ""  | 選択されているタブ | <li>items 内に一致する value がある場合、disabled でもそのタブが表示される</li><li>以下の場合は最初の visible タブが表示される<ul><li>items 内に一致する value がない場合</li><li>items 内に一致する value があるが、そのタブが visible ではない場合</li></ul></li><li>value が文字列以外の場合、エラーを出力する</li> |
| borderVisible | boolean | true  | 表示内容を囲う枠線の表示/非表示設定 | |
| visible | boolean | true | コンポーネントの表示/非表示設定 | |
| items | Array\<[Item](#item)\> | [] | 表示するタブのリスト | items が配列以外の場合、エラーを出力する |

#### Item
| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| content | string/HTMLElement | "" | タブの内容 | |
| label | string | "" | タブ名 | |
| value | string | "" | タブのキー項目<br/>※必須かつ一意の値 | value が items 内で重複もしくは未指定の場合、エラーを出力する |
| disabled | boolean | false | タブの切替可/不可設定 | |
| visible | boolean | true | タブの表示/非表示設定 | |

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | 選択されているタブが変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br/><br/>event.detail で以下の値を受け取ることができる<br/>event.detail.oldValue : 変更前の value の値<br/>event.detail.value : 変更後の value の値 |

### Constructor

Tabs(options)<br/>
使用できるコンストラクタの一覧です。

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | コンポーネントのプロパティを含むオブジェクト |  |

---
## Sample Code

:::tip
[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。
:::

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');

// Create each Tab content
const textArea = new Kuc.TextArea({
  label: 'TextArea',
  value: 'This is sample.'
});

const timePicker = new Kuc.TimePicker({
  label: 'Time',
  value: '11:30'
});

const text = 'This is sample.';

const tabs = new Kuc.Tabs({
  items: [
    {
      label: 'A',
      content: textArea,
      value: 'a',
      disabled: false
    },
    {
      label: 'B',
      content: timePicker,
      value: 'b',
      disabled: false
    },
    {
      label: 'C',
      content: text,
      value: 'c',
      disabled: false
    }
  ],
  value: 'a',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  borderVisible: true
});
space.appendChild(tabs);

tabs.addEventListener('change', event => {
  console.log(event);
});
```

---

## Related Articles
- [Tabs customization](../../guides/tabs-customization.md)
