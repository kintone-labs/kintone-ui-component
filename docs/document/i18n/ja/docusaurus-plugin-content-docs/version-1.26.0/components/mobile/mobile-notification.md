---
id: mobile-notification
title: MobileNotification
sidebar_label: MobileNotification
---

## Overview

MobileNotification は、ポップアップの通知を表示します。

import { MobileNotificationComponent } from "@site/static/js/samples/mobile/notification.jsx"

<MobileNotificationComponent />

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | "" | コンポーネントの class 名 | |
| id | string | "" | コンポーネントの id 名 | |
| text | string | "" | 表示するテキスト | content が未指定の場合、text が表示される<br/>その他の場合、text は無視される |
| content *1 | string/HTMLElement | ""  | 表示する DOM | HTML が記載された string を指定した場合、自動的に HTML に変換してそのまま表示される |
| duration | number | -1 | コンポーネントを閉じるまでのミリ秒 | 単位はミリ秒<br/>0以上の数値を指定できる<br/>もし不正な値を指定した場合（0未満もしくは数値以外）、コンポーネントは開かれたまま自動的には閉じない |
| container | HTMLElement | document.body | コンポーネントを追加する対象の要素 | デフォルトではトップレベルのドキュメントオブジェクトのボディを使うので、ほとんどの場合は document.body となる<br/>container が HTMLElement 以外の場合、エラーを出力する |

:::caution
*1: kintone UI Component はこのプロパティの値を内部的にサニタイズしていません。ユーザー入力を受け付けるような実装でこのプロパティを使用する場合は、開発者自身で XSS 対策をしてください。
:::

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| close | function | コンポーネントが閉じられた時のイベントハンドラ | 引数には Event の event オブジェクトをとる |

### Constructor

MobileNotification(options)<br/>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | コンポーネントのプロパティを含むオブジェクト | |

### Method

使用できるメソッドの一覧です。

#### open()
MobileNotification を表示する

##### Parameter
none

##### Return
none

#### close()
MobileNotification を非表示にする

##### Parameter
none

##### Return
none

---
## Sample Code

:::tip
[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。
:::

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const Kuc = Kucs['1.x.x'];

const mobileNotification = new Kuc.MobileNotification({
  text: 'Error occurred!',
  content:
    'Error occurred!<br>Please click the <a href="#">Link</a> for details.',
  className: 'options-class',
  id: 'options-id',
  duration: 2000,
  container: document.body
});

mobileNotification.addEventListener('close', event => {
  console.log(event);
});

mobileNotification.open();
mobileNotification.close();
```

---

## Related Articles

- [Mobile timecard customization](../../guides/mobile-timecard-customization.md)
