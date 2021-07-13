---
id: version-1.0.0-dialog
title: Dialog
sidebar_label: Dialog
original_id: dialog
---

## Overview

Dialog は、ダイアログボックスを表示します。

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=dialog--document" title="dialog image" width="700px" height="300px"></iframe>

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| title | string | "" | Header のタイトル ||
| content | string \| HTMLElement | "" | Content 内部の DOM | HTML が記載された string が代入された場合、自動で HTML に変換して出力されます<br>content プロパティの値は、XSS 攻撃を防ぐために内部で自動的に sanitize されます。 |
| footer | string \| HTMLElement | "" | Footer 内部の DOM | HTML が記載された string が代入された場合、自動で HTML に変換して出力されます<br>footer プロパティの値は、XSS 攻撃を防ぐために内部で自動的に sanitize されます |

### Constructor

Dialog(options)<br>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | コンポーネントのプロパティを含むオブジェクト | |

### Method

使用できるメソッドの一覧です。

#### open()
Dialog を表示する

##### Parameter
none

##### Return
none

#### close()
Dialog を非表示にする

##### Parameter
none

##### Return
none

---
## Sample Code

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const dialog = new Kuc.Dialog({
  title:  'Title',
  content: '<div>This is Content</div>',
  footer: 'Footer'
});
dialog.open();
dialog.close();
```
