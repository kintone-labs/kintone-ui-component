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
| className | string | "" | コンポーネントの class 名 ||
| text | string | "" | 表示するテキスト ||

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

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const mobileNotification = new Kuc.MobileNotification({
  text: 'Error occurred!',
  className: 'options-class'
});
mobileNotification.open();
mobileNotification.close();
```
