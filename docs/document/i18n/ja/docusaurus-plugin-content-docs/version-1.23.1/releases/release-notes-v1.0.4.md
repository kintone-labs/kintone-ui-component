---
id: release-notes-v1.0.4
title: v1.0.4 Release Notes
sidebar_label: v1.0.4 Release Notes
---

## 概要

[kintone UI Component v1.0.4](https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.0.4) のリリースノートです。<br/>
英語のドキュメントサポート, 不具合修正, メンテナンス, セキュリティアップデート対応を行いました。

## アップデート内容

詳細は以下になります。

### 不具合修正
- Issue "Dropdown display collapses on group field" [#512](https://github.com/kintone-labs/kintone-ui-component/issues/512) @juridon<br/>
  グループフィールド内でも Desktop コンポーネントが正しく表示されるように修正
- TextArea コンポーネントに "background-color: #ffffff;" の設定を追加

### メンテナンス
- ソースコードの coverage とユニットテストの品質を改善

### セキュリティアップデート
- 依存ライブラリを更新：webpack, ws, browserslist, postcss, hosted-git-info, xmlhttprequest-ssl, y18n

### ドキュメント
- ドキュメントの英語対応
- Quick Start の webpack ガイドを更新
- v0 で提供していた React 版のステータスを記載：v1 では現在対応予定なし
- Internet Explorer 11 の非サポート（Internet Explorer 11 は 2022年6月15日にサポート終了予定）<br/>
  https://blogs.windows.com/windowsexperience/2021/05/19/the-future-of-internet-explorer-on-windows-10-is-in-microsoft-edge/
