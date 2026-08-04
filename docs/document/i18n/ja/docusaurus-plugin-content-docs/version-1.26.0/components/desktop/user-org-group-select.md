---
id: user-org-group-select
title: UserOrgGroupSelect
sidebar_label: UserOrgGroupSelect
---

## Overview
UserOrgGroupSelect は ユーザー、組織、グループの選択をすることができます。

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
| icon | string | "" | 選択アイコン | `icon` を使用して入力欄部分の右側に表示されるメインアイコンを設定する<br/>icon の値に応じてアイコンが表示される<br/>指定できるオプション:<ul><li>"user" : ![user](/img/icon-user.png)</li><li>"org" : ![org](/img/icon-org.png)</li><li>"group" : ![group](/img/icon-group.png)</li><li>"" : アイコンなし</li></ul> |
| id | string | "" | コンポーネントの id 名 ||
| label | string | "" | コンポーネントの説明ラベル | 未指定、あるいは空文字の場合、label は表示されない |
| placeholder | string | "" | 入力フィールドに表示されるプレースホルダーテキスト | |
| disabled | boolean | false | コンポーネントの編集可/不可設定 | |
| requiredIcon | boolean | false | コンポーネントの必須アイコン表示/非表示設定 | |
| visible | boolean | true | コンポーネントの表示/非表示設定 | |
| items | Array\<[Item](#item)\> | []  | 表示する選択肢一覧 | items が配列以外の場合、エラーを出力する |
| value |  Array\<string\> | [] | 選択されている値 | value が未指定の場合、何も選択されない<br/>value が配列以外の場合、エラーを出力する |

### Item

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| label | string | null  | 各選択肢のテキスト | Item.label が未指定の場合、UI 上は Item.value の値が表示される |
| type | string | "" | 各選択肢のアイコン | Item.type は、選択肢一覧と選択された項目の一覧の各オプションにそれぞれ表示される小さなアイコンの種類を指す<br/>Item.type の値に応じてアイコンが表示される<br/>指定できるオプション:<ul><li>"user" : ![user](/img/selected-user.png)</li><li>"org" : ![org](/img/selected-org.png)</li><li>"group" : ![group](/img/selected-group.png)</li><li>"" : アイコンなし</li></ul> |
| value | string | null  | 各選択肢の値 | Item.value に重複した値を指定した場合、エラーを出力する |
| disabled | boolean | false | 各オプションの選択可/不可設定 | |

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | 値が変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br/><br/>event.detail で以下の値を受け取ることができる<br/>event.detail.oldValue : 変更前の value の値<br/>event.detail.value : 変更後の value の値 |
| click-picker-icon | function | 選択アイコンがクリックされた時のイベントハンドラ | 引数には Event の event オブジェクトをとる |

### Constructor

UserOrgGroupSelect(options)<br/>
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
| --kuc-user-org-group-select-font-size |
| --kuc-user-org-group-select-toggle-width |
| --kuc-user-org-group-select-toggle-height |
| --kuc-user-org-group-select-menu-max-height |

---
## Sample Code

:::tip
[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。
:::

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');

const userSelect = new Kuc.UserOrgGroupSelect({
  label: 'Assignees',
  items: [
    { label: 'Alice Johnson', value: 'alice', type: 'user', disabled: false },
    { label: 'Bob Smith', value: 'bob', type: 'user', disabled: false },
    { label: 'Charlie Lee', value: 'charlie', type: 'user', disabled: true },
    { label: 'Marketing Group', value: 'marketing-group', type: 'group', disabled: false },
    { label: 'Sales Team', value: 'sales-team', type: 'group', disabled: false },
    { label: 'Engineering Team', value: 'engineering-team', type: 'group', disabled: false },
    { label: 'Acme Corporation', value: 'acme-corp', type: 'org', disabled: false },
    { label: 'New York Office', value: 'ny-office', type: 'org', disabled: false },
  ],
  value: ['alice', 'marketing-group', 'acme-corp'],
  requiredIcon: true,
  error: 'Error occurred!',
  className: 'options-class',
  icon: 'user',
  id: 'options-id',
  placeholder: 'Please select assignees',
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
