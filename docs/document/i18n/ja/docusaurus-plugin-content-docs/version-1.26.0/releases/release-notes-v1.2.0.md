---
id: release-notes-v1.2.0
title: v1.2.0 Release Notes
sidebar_label: v1.2.0 Release Notes
---

## 概要

[kintone UI Component v1.2.0](https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.2.0) のリリースノートです。<br/>
新機能開発, メンテナンス対応, ドキュメントのアップデート, セキュリティアップデートを行いました。

## アップデート内容

詳細は以下になります。

### 新機能
- Notification と MobileNotification コンポーネントに `duration` プロパティを追加
- Notification と MobileNotification コンポーネントに `close` イベントを追加
- Text, TextArea, MobileText, MobileTextArea コンポーネントに `input` イベントを追加
- バージョン情報を取得する機能を追加

### メンテナンス
- プロジェクト内のサードパーティライブラリのライセンスを確認するために License Finder を導入
- Dropdown と MultiChoice コンポーネントのアクセシビリティの属性値を修正
- いくつかの内部処理を改善

### セキュリティアップデート
- 依存ライブラリを更新: webpack

### ドキュメント
- Notification と MobileNotification コンポーネント: `duration` プロパティと `close` イベントの記載を追加
- Text, TextArea, MobileText, MobileTextArea コンポーネント: `input` イベントの記載を追加
- version 取得機能のページを追加

## トピック

### duration プロパティと close イベント
Notification と MobileNotification コンポーネントに、新しいプロパティとイベントを追加しました！<br/>
`duration` プロパティを使用して、コンポーネントが閉じるまでの時間を指定できます。<br/>
`close` イベントを使用して、閉じるボタンをクリックしたときのタイミングを取得することもできます。


### input イベント
Text、TextArea、MobileText、および MobileTextArea コンポーネントに、文字列を挿入した時の値を取得するために、`input` イベントを追加しました。<br/>
インクリメント検索を実装したい場合などに活用できます。

### バージョン取得機能
Kuc の version プロパティを使用して、パッケージのバージョン情報を取得できます。<br/>

UMD では、Kuc の version プロパティを使用できます。<br/>
例:

```javascript
console.log(Kuc.version);
```
<br/>

ESM では、kintone-ui-componentから "version" をインポートできます。<br/>
例:

```javascript
import { version } from "kintone-ui-component/lib/version";
console.log(version);
```

またフィードバックや新しいアイデアがありましたら、GitHub issue にてご連絡ください！
