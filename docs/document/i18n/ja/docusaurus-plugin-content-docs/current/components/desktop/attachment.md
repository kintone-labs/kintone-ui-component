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
| language *1 | string | "auto"  | 	言語設定 | 指定できるオプション: "auto", "en", "ja", "zh", "zh-TW", "es"<br/>"auto" を指定した場合、HTML の lang 設定に従う（lang 設定が "en"/"ja"/"zh"/"zh-TW"/"es" 以外の場合は、言語設定が "en" になる） |
| message | string | ""  | コンポーネントに表示するメッセージ（file type/size の制限事項など） | |
| disabled | boolean | false | コンポーネントの選択可/不可設定 | |
| requiredIcon | boolean | false | コンポーネントの必須アイコン表示/非表示設定 | |
| visible | boolean | true | コンポーネントの表示/非表示設定 | |
| files | Array\<[File](#file)\> | [] | ファイルリスト | [File object](https://developer.mozilla.org/ja/docs/Web/API/File)もしくは name と size を含むオブジェクトを指定できる<br/>files が配列以外の場合、エラーを出力する |
| accept | string | "" | File type restriction for the file picker and drag-and-drop | Specify the same format as the HTML [accept attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) (e.g. ".pdf,.txt", "image/\*", "application/pdf").<br/><b>File Types Configuration</b><ul><li>Multiple file types may be specified by separating them with commas (,).</li><li>If not specified or left empty, all file types are accepted.</li><li>This setting applies only to newly added files and does not affect existing files.</li><li>Invalid tokens (those not starting with "." or containing "/") are automatically ignored (refer to [this](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file)).</li></ul> |
| maxFiles | number | | Maximum number of files allowed | <b>File Count Limit</b><ul><li>If not specified, there is no limit on the number of files.</li><li>This setting applies only to newly added files; existing files in files are not removed even if they exceed the limit.<ul><li>If the user selects more files than the remaining slots, only the first N files (up to the limit) will be added and the rest will be silently ignored (For example, if maxFiles is 2 and 1 file is already attached, selecting 2 more files will only add the first one).</li><li>If `maxFiles` is a decimal number (e.g., `2.7`), the fractional part is automatically truncated, and the effective limit becomes the integer part (e.g., `2`).</li></ul></li><li>When the limit is reached:<ul><li>The browse button is hidden.</li><li>Drag-and-drop functionality is disabled.</li></ul></li><li>Invalid values (e.g., negative numbers, 0, or decimal values less than 1) are automatically ignored and treated as <b>unlimited</b>.</li></ul> |

:::info
*1: "参照" ボタンと "ここにファイルをドロップします" のテキストは language プロパティの値に応じて切り替わる.
:::

#### File

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| name | string | "" | ファイル名 | |
| size | string | "" | ファイルサイズ | ファイルサイズに応じて以下のように記載される<ul><li>size >= 1073741824: xxx GB</li><li>1073741824 > size >= 1048576: xxx MB</li><li>1048576 > size >= 1024: xxx KB</li><li>1024 > size: xxx bytes</li></ul> |

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | ファイルが変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br/>event.detail で以下の値を受け取ることができる<ul><li>add-file（ファイル追加された時にトリガーされる）<ul><li>event.detail.type: "add-file"</li><li>event.detail.oldFiles: 追加前のファイルリスト</li><li>event.detail.files: 追加後のファイルリスト</li><li>event.detail.fileIndex: 追加されたファイルの配列番号（Type: Array\<number\>）<ul><li>"event.detail.files[event.detail.fileIndex[x]]" で追加されたファイルを取得できる</li></ul></li></ul></li><li>remove-file（ファイル削除された時にトリガーされる）<ul><li>event.detail.type: "remove-file"</li><li>event.detail.oldFiles: 削除前のファイルリスト</li><li>event.detail.files: 削除後のファイルリスト</li><li>event.detail.fileIndex: 削除されたファイルの配列番号（Type: Array\<number\>）<ul><li>"event.detail.oldFiles[event.detail.fileIndex[x]]" で削除されたファイルを取得できる</li></ul></li></ul></li></ul> |

### Constructor

Attachment(options)<br/>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options  | object | \{\} | コンポーネントのプロパティを含むオブジェクト |  |

### Custom CSS
:::tip
[Custom CSS](../../getting-started/custom-css.md) をご確認ください。
:::

コンポーネントのスタイルを変更するために使用できるプロパティの一覧です。
#### Property
| Name |
| :--- |
| --kuc-attachment-width |
| --kuc-attachment-height |
| --kuc-attachment-item-font-size |
| --kuc-attachment-message-font-size |
| --kuc-attachment-message-color |

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
  accept: '.pdf,.txt',
  maxFiles: 5,
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
