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
| duration | number | -1 | コンポーネントを閉じるまでのミリ秒 | 単位はミリ秒<br>0以上の数値を指定できる<br>もし不正な値を指定した場合（0未満もしくは数値以外）、コンポーネントは開かれたまま自動的には閉じない |

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| close | function | コンポーネントが閉じられた時のイベントハンドラ | 引数には Event の event オブジェクトをとる |

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
  className: 'options-class',
  duration: 2000
});

mobileNotification.addEventListener('close', event => {
  console.log(event);
});

mobileNotification.open();
mobileNotification.close();
```
