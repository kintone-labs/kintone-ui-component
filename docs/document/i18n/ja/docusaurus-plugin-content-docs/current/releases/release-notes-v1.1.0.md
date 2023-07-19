---
id: release-notes-v1.1.0
title: v1.1.0 Release Notes
sidebar_label: v1.1.0 Release Notes
---

## 概要

[kintone UI Component v1.1.0](https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.1.0) のリリースノートです。<br/>
新コンポーネント開発, 不具合修正, メンテナンス対応, カスタマイズ記事の追加を行いました。

## アップデート内容

詳細は以下になります。

### 新コンポーネント
- MobileDropdown コンポーネントの追加
- MobileMultiChoice コンポーネントの追加

### 不具合修正
- MobileCheckbox, MobileRadioButton, MobileText, MobileTextArea コンポーネントの label 要素に改行の設定を追加

### メンテナンス
- Notification と MobileNotification コンポーネントの `text` プロパティにて、改行コードを入力できるように改善
- Checkbox, MultiChoice, MobileCheckbox コンポーネントの `value` 配列のインデックス処理を、`items` プロパティの値の順番で並べるように変更

### ドキュメント
- Cleaning check list customization 記事の追加

## トピック
### MobileDropdown, MobileMultiChoice
今回は kintone の UI や挙動に従って、HTML 標準をベースにこれらのコンポーネントを開発しました。<br/>
Desktop 版のみでしたが、Mobile 版も併せてカスタマイズできるようになったので、ご活用いただけると嬉しいです。<br/>
将来的には kintone UI Component の他コンポーネントと同様の UI に改善予定です。

### 改行コード対応
Notification と MobileNotification コンポーネントの `text` プロパティにて改行コードを追加できるようになりました。<br/>
複数の文章を記述したいときにご活用ください。

またフィードバックや新しいアイデアがありましたら、GitHub issue にてご連絡ください！
