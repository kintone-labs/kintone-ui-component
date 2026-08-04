---
id: release-notes-v1.3.0
title: v1.3.0 Release Notes
sidebar_label: v1.3.0 Release Notes
---

## 概要

[kintone UI Component v1.3.0](https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.3.0) のリリースノートです。<br/>
新コンポーネントや機能開発, メンテナンス対応, ドキュメントのアップデート, セキュリティアップデートを行いました。

## アップデート内容
### 新コンポーネント
- Date/Time シリーズコンポーネントの追加（DatePicker, TimePicker, DateTimePicker）
- Dialog コンポーネントの追加

### 新機能
- 選択肢系コンポーネントの `value` と `Item.value` プロパティにて重複する値を許容、`selectedIndex` プロパティを追加（MultiChoice, Checkbox, Dropdown, RadioButton, MobileMultiChoice, MobileCheckbox, MobileDropdown, MobileRadioButton）<br/>
  ※ 詳細は各コンポーネントのページをご確認ください。

### メンテナンス
- Spinner コンポーネントを開いている時、コンポーネント外の操作を無効化するように改善
- LitElement と lit-html の利用を Lit 2.0 利用に変更
- 開発中バージョンの情報を取得できる機能の追加
- 脆弱性チェックのため Yamory の導入
- コーディングルールチェックのため ESLint Custom Rule の開発と Sider の仕組みの削除
- Storybook controls と actions 機能の導入
- LICENSE ファイルの更新
- ESM のビルド設定を修正

### セキュリティアップデート
- 依存ライブラリの更新：libraries: webpack, json-schema, karma, nanoid, node-fetch, log4js, core-js

### ドキュメント
- DatePicker, TimePicker, DateTimePicker, Dialog コンポーネントページの追加
- 選択肢系コンポーネントページにて `value` と `selectedIndex` プロパティの仕様を更新（上記のロジック変更に従う）
- Bulk update customization 記事の追加

## トピック

### 新コンポーネントリリース
今回複数の新しいコンポーネントをリリースしました！<br/>
Date/Time シリーズコンポーネントについては、プロパティ設定のしやすさと学習コストを考えて 3つのコンポーネントに分けて提供しています。<br/>

Dialog については、デフォルトのサイズを小さくしたので、Desktop と Mobile 画面のどちらでもご活用いただけるかと思います。

### 重複する値の許容
選択肢系コンポーネントにおいて、`value` と `Item.value` プロパティに重複した値を設定できるように仕様を変更しました。（元々は重複した値がある場合、エラーを発生させる実装になっていました。）<br/>
この対応のために、どの項目を選択するか指定できるように新規に `selectedIndex` というプロパティを追加しました。<br/>
例えば `value` ごとにカテゴライズして表示を切り替えたい時などにご活用いただけます。

またフィードバックや新しいアイデアがありましたら、GitHub issue にてご連絡ください！
