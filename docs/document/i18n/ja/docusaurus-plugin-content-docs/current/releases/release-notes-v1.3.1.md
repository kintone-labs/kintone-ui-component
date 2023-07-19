---
id: release-notes-v1.3.1
title: v1.3.1 Release Notes
sidebar_label: v1.3.1 Release Notes
---

## 概要

[kintone UI Component v1.3.1](https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.3.1) のリリースノートです。<br/>
メンテナンス対応, ドキュメントのアップデート, セキュリティアップデートを行いました。

## アップデート内容
### メンテナンス
- Dialog コンポーネントの content と footer パーツに padding 設定を追加
  - デフォルト設定で見た目のデザインをよくするために改善を実施
- MultiChoice コンポーネントにて disabled 時の選択された項目のチェックマークカラーを変更
  - 選択されていることが分かるように色味を追加
- Dropdown メニューパーツの表示位置の挙動修正とスクロール操作の追加
- Desktop コンポーネントをアプリの HeaderMenuSpaceElement に設置した時の line-height 問題を修正

### セキュリティアップデート
- 依存ライブラリの更新：karma, engine.io, follow-redirects

### ドキュメント
- Contributing Guideline と Pull Request テンプレートの公開、issue テンプレートの更新
- 2022年のロードマップの公開と README への追記
- DatePicker と DateTimePicker コンポーネントにて language プロパティ設定によって日付の表示フォーマットが変更される仕様を追記