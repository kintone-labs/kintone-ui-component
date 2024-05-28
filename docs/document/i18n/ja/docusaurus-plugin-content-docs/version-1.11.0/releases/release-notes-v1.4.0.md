---
id: release-notes-v1.4.0
title: v1.4.0 Release Notes
sidebar_label: v1.4.0 Release Notes
---

## 概要

[kintone UI Component v1.4.0](https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.4.0) のリリースノートです。<br/>
新コンポーネントや機能開発, メンテナンス対応, ドキュメントのアップデート, セキュリティアップデートを行いました。

:::info
このバージョンでは、バージョンコンフリクトの問題を解決するためにコーディング方法・コンポーネントタグとクラス名において後方互換のある大きな変更があるのでご注意ください。
詳しくは [Version conflicts issue and solution](../guides/version-conflicts-issue-solution.md) と新しい [Quick Start](../getting-started/quick-start.md) 記事をご確認ください。
:::

## アップデート内容
### 新コンポーネント
- Mobile Date/Time シリーズコンポーネントの追加（MobileDatePicker, MobileTimePicker, and MobileDateTimePicker）
### 新機能
- TimePicker, DateTimePicker コンポーネントにて timeStep, min, max プロパティを追加
- Dialog コンポーネントにて icon プロパティを追加
### メンテナンス
- バージョンコンフリクトの問題を解消
- 型定義のエクスポート
- Mobile Date/Time シリーズのスタイル修正
### セキュリティアップデート
- 依存ライブラリのアップデート：nth-check, core-js, webpack, webpack-cli, @storybook/builder-webpack5, @storybook/manager-webpack5, @storybook/web-components, @storybook/addon-actions, @storybook/addon-controls, @storybook/addon-viewport, @storybook/addon-a11y, karma-coverage, @babel/preset-env, @babel/core, babel-loader, ts-loader, @open-wc/testing, karma, prettier, @cybozu/eslint-config, lit, @types/uuid, typescript

### ドキュメント
- バージョンコンフリクト問題と解決策の説明記事の追加, Quick Start 記事の更新, コンポーネントのサンプルコードと README の更新
- Mobile Date/Time シリーズのコンポーネントドキュメントの追加
- TimePicker, DateTimePicker コンポーネントにて timeStep, min, max プロパティの追記、value プロパティの更新
- Dialog コンポーネントにて icon プロパティの追記
- Format setting plug-in 記事の追加
- RadioButton コンポーネントの borderVisible プロパティのデフォルト値を修正