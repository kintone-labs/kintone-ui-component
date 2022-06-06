---
id: version-1.0.0-mobile-notification
title: MobileNotification
sidebar_label: MobileNotification
original_id: mobile-notification
---

## Overview

MobileNotification は、ポップアップの通知を表示します。

<div class="sample-container" id="mobile-notification">
  <div id="sample-container__components" class="mobile">
    <iframe id="iframe" title="mobile notification image" width="300px" height="70px"></iframe>
  </div>
</div>
<script src="/js/samples/mobile/mobile-notification.js"></script>

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | "" | コンポーネントの class 名 ||
| text | string | "" | 表示するテキスト ||

### Constructor

MobileNotification(options)<br>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | コンポーネントのプロパティを含むオブジェクト | |

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
  text:  'Error occurred!',
  className: 'options-class'
});
mobileNotification.open();
mobileNotification.close();
```
