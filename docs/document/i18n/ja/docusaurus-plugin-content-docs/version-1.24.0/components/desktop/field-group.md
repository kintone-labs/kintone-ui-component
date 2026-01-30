---
id: field-group
title: FieldGroup
sidebar_label: FieldGroup
---

## Overview
FieldGroup は、コンテンツの開閉を切り替えることができます。

import { FieldGroupComponent } from "@site/static/js/samples/desktop/field-group.jsx"

<FieldGroupComponent />

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | "" | コンポーネントの class 名 | |
| id | string | "" | コンポーネントの id 名 | |
| label | string | "" | コンポーネントの説明ラベル | |
| content *1 | string/HTMLElement | "" | Content の DOM | HTML が記載された string を指定した場合、自動的に HTML に変換してそのまま表示される |
| disabled | boolean | false | コンポーネントの編集可/不可設定 | |
| expanded | boolean | false | コンポーネントの開閉設定 | |
| visible | boolean | true | コンポーネントの表示/非表示設定 | |

:::caution
*1: kintone UI Component はこのプロパティの値を内部的にサニタイズしていません。ユーザー入力を受け付けるような実装でこのプロパティを使用する場合は、開発者自身で XSS 対策をしてください。
:::

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | 開閉のステータスが変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br/><br/>event.detail で以下の値を受け取ることができる<br/>event.detail.expanded : 変更後の expanded の値（boolean） |

### Constructor

FieldGroup(options)<br/>
使用できるコンストラクタの一覧です。

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | コンポーネントのプロパティを含むオブジェクト |  |

## Sample Code

:::tip
[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。
:::

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');

const text = new Kuc.Text({
  label: 'Text',
  value: 'orange'
});
const fieldGroup = new Kuc.FieldGroup({
  className: 'options-class',
  id: 'options-id',
  label: 'FieldGroup',
  disabled: false,
  expanded: false,
  visible: true,
  content: text
});

space.appendChild(fieldGroup);

fieldGroup.addEventListener('change', event => {
  console.log(event);
});
```

---

## Related Articles

- [In-office day list customization](../../guides/in-office-day-list-customization.md)