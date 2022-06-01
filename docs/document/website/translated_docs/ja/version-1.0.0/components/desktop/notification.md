---
id: version-1.0.0-notification
title: Notification
sidebar_label: Notification
original_id: notification
---

## Overview

Notification は、ポップアップの通知を表示します。

<div class="sample-container" id="notification">
  <div id="sample-container__components">
    <iframe id="iframe" title="notification" width="300px" height="250px"></iframe>
  </div>
</div>
<script src="/js/samples/desktop/notification.js"></script>

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | "" | コンポーネントの class 名 ||
| text | string | "" | 表示するテキスト ||
| type | string | "danger" | 背景色 | 以下を指定できる<br>"danger" : Red(#e74c3c)<br>"info" : Blue(#3498db)<br>"success" : Green(#91c36c) |

### Constructor

Notification(options)<br>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | コンポーネントのプロパティを含むオブジェクト | |

### Method

使用できるメソッドの一覧です。

#### open()
Notification を表示する

##### Parameter
none

##### Return
none

#### close()
Notification を非表示にする

##### Parameter
none

##### Return
none

---
## Sample Code

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const notification = new Kuc.Notification({
  text:  'Error occurred!',
  type: 'danger',
  className: 'options-class'
});
notification.open();
notification.close();
```
