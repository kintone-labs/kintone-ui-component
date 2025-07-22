---
id: user-org-group-select
title: UserOrgGroupSelect
sidebar_label: UserOrgGroupSelect
---

## Overview
The UserOrgGroup component allows the user to select user/org/group.

import { UserOrgGroupSelectComponent } from "@site/static/js/samples/desktop/user-org-group-select.jsx"

<UserOrgGroupSelectComponent />

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | コンポーネントの class 名 | |
| error | string | "" | エラーに表示するテキスト | 未指定、あるいは空文字の場合、error は表示されない |
| icon | string | "user" | Picker icon type | The icon property is used to set the main icon displayed on the right side of the toggle part.<br/>Displays different icons based on different values of the icon property.<br/>Available options:<li>"user" : ![user](/img/icon-user.png)</li><li>"org" : ![org](/img/icon-org.png)</li><li>"group" : ![group](/img/icon-group.png)</li><br/>If the value is not specified, the default icon is "user". |
| id | string | "" | コンポーネントの id 名 ||
| label | string | "" | コンポーネントの説明ラベル | 未指定、あるいは空文字の場合、label は表示されない |
| placeholder | string | "" | 入力フィールドに表示されるプレースホルダーテキスト | |
| disabled | boolean | false | コンポーネントの編集可/不可設定 | |
| requiredIcon | boolean | false | コンポーネントの必須アイコン表示/非表示設定 | |
| visible | boolean | true | コンポーネントの表示/非表示設定 | |
| items | Array\<[Item](#item)\> | []  | List of options to display | Will result an error if the value of items is not an array |
| value |  Array\<string\> | [] | Value of the selected item | No option will be selected if the `value` are unspecified<br/>Will result an error if the value is not an array |

### Item

Here is a list of properties that can be used for modifying the item:

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| label | string | null  | Text label for each option | If `Item.label` is unspecified, the value of `Item.value` is displayed on the UI |
| type | string | null | Icon type of each item | The Item.type property determines the small icon type displayed for each option in both the dropdown menu and the selected items list.<br/>Displays different icons based on different values of the icon property.<br/>Available options:<li>"user" : ![user](/img/selected-user.png)</li><li>"org" : ![user](/img/selected-org.png)</li><li>"group" : ![group](/img/selected-group.png)</li><li>"" : No icon</li> |
| value | string | null  | Value of each option | Will result an error if setting duplicated value in `Item.value` |
| disabled | boolean | false | 各オプションの選択可/不可設定 | |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | 値が変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br/><br/>event.detail で以下の値を受け取ることができる<br/>event.detail.oldValue : 変更前の value の値<br/>event.detail.value : 変更後の value の値 |
| click-picker-icon | function | Event handler when the picker icon is clicked | It will pass the event object as the argument |

### Constructor

UserOrgGroupSelect(options)<br/>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | コンポーネントのプロパティを含むオブジェクト | |

## Sample Code

:::tip
[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。
:::

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const Kuc = Kucs['1.x.x'];
const space = kintone.app.record.getSpaceElement('space');
const userSelect = new Kuc.UserOrgGroupSelect({
  label: 'User Select',
  items: [
    { label: 'UserA', value: 'a', type: 'user', disabled: true },
    { label: 'UserB', value: 'b', type: 'user' },
    { label: 'UserC', value: 'c', type: 'user' },
    { label: 'GroupA', value: 'd', type: 'group' },
    { label: 'OrgA', value: 'e', type: 'org' }
  ],
  value: ['a'],
  requiredIcon: true,
  error: 'Error occurred!',
  className: 'options-class',
  icon: 'user',
  id: 'options-id',
  placeholder: 'Please select a user',
  visible: true,
  disabled: false
});
space.appendChild(userSelect);
userSelect.addEventListener('change', event => {
  console.log(event);
});
userSelect.addEventListener('click-picker-icon', event => {
  console.log(event);
});
```
