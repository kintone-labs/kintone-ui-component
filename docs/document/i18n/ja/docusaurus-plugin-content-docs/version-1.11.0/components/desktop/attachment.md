---
id: attachment
title: Attachment
sidebar_label: Attachment
---

## Overview

Attachment は選択もしくはドラッグ&ドロップでファイルをアップロードすることができます。

import { AttachmentComponent } from "@site/static/js/samples/desktop/attachment.jsx"

<AttachmentComponent />

---

## Specification

### Property
使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | コンポーネントの class 名 | |
| error | string | ""  | エラーに表示するテキスト | 未指定、あるいは空文字の場合、error は表示されない |
| id | string | ""  | コンポーネントの id 名 | |
| label | string | ""  | コンポーネントの説明ラベル | 未指定、あるいは空文字の場合、label は表示されない |
| language *1 | string | "auto"  | 	言語設定 | 指定できるオプション: "auto", "en", "ja", "zh", "zh-TW"<br/>"auto" を指定した場合、HTML の lang 設定に従う（lang 設定が "en"/"zh"/"zh-TW"/"ja" 以外の場合は、言語設定が "en" になる） |
| message | string | ""  | コンポーネントに表示するメッセージ（file type/size の制限事項など） | |
| disabled | boolean | false | コンポーネントの選択可/不可設定 | |
| requiredIcon | boolean | false | コンポーネントの必須アイコン表示/非表示設定 | |
| visible | boolean | true | コンポーネントの表示/非表示設定 | |
| files | Array\<File\> | [] | ファイルリスト | [File object](https://developer.mozilla.org/ja/docs/Web/API/File)もしくは name と size を含むオブジェクトを指定できる<br/>files が配列以外の場合、エラーを出力する |
| File.name | string | "" | ファイル名 | |
| File.size | string | "" | ファイルサイズ | ファイルサイズに応じて以下のように記載される<li>size >= 1073741824: xxx GB</li><li>1073741824 > size >= 1048576: xxx MB</li><li>1048576 > size >= 1024: xxx KB</li><li>1024 > size: xxx bytes</li> |

:::info
*1: "参照" ボタンと "ここにファイルをドロップします" のテキストは language プロパティの値に応じて切り替わる.
:::

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | ファイルが変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br/>event.detail で以下の値を受け取ることができる<li>add-file（ファイル追加された時にトリガーされる）<ul><li>event.detail.type: "add-file"</li><li>event.detail.oldFiles: 追加前のファイルリスト</li><li>event.detail.files: 追加後のファイルリスト</li><li>event.detail.fileIndex: 追加されたファイルの配列番号（Type: Array\<number\>）<ul><li>"event.detail.files[event.detail.fileIndex[x]]" で追加されたファイルを取得できる</li></ul></li></ul></li><li>remove-file（ファイル削除された時にトリガーされる）<ul><li>event.detail.type: "remove-file"</li><li>event.detail.oldFiles: 削除前のファイルリスト</li><li>event.detail.files: 削除後のファイルリスト</li><li>event.detail.fileIndex: 削除されたファイルの配列番号（Type: Array\<number\>）<ul><li>"event.detail.oldFiles[event.detail.fileIndex[x]]" で削除されたファイルを取得できる</li></ul></li></ul></li> |

### Constructor

Attachment(options)<br/>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options  | object | \{\} | コンポーネントのプロパティを含むオブジェクト |  |

---
## Sample Code

:::tip
[導入と実装方法](../../getting-started/quick-start.md#導入と実装方法) をご確認ください。
:::

全てのパラメータを指定した場合のサンプルコードです。

``` javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');

const attachment = new Kuc.Attachment({
  label: 'Attachment',
  files: [
    { name: 'file.txt', size: '150' },
    new File(['foo'], 'foo.txt', { type: 'text/plain' })
  ],
  language: 'auto',
  message: 'Max size: 50MB',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false,
  requiredIcon: false
});
space.appendChild(attachment);

attachment.addEventListener('change', event => {
  console.log(event);
});
```

---

## Related Articles

- [Attachment customization](../../guides/attachment-customization.md)
