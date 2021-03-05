<p align="center">
  <img src="./images/logo.png" alt="kuc-logo" align="center" height="100" style="margin: 30px; 0;">
</p>
<br />

---

<p align="center">
kintone UI Component は、kintone カスタマイズ、プラグインのUI 開発を支援するための UI Component ライブラリです。<br />
<strong>ドキュメントページは<a href="https://kintone-ui-component.netlify.app" rel="noopener" target="_blank">こちら</a>をご確認ください。</strong>
</p>

<p align="center">
  <a href="./README.md">English</a> | 日本語
</p>


## 目次
- [目次](#目次)
- [インストール](#インストール)
  - [UMD](#umd)
  - [CDN](#cdn)
  - [npm](#npm)
- [使い方](#使い方)
- [ブラウザサポート](#ブラウザサポート)
- [v0の使い方](#v0の使い方)
- [移行ガイド](#移行ガイド)
- [ご要望](#ご要望)
- [ライセンス](#ライセンス)

## インストール
kintone UI Component は UMD, CDN, npm パッケージから使用可能です。

### UMD
[各バージョン Release 欄](https://github.com/kintone-labs/kintone-ui-component/releases)の添付のアーカイブフォルダを解凍し、`kuc.min.js`を使用してください。
```
./umd/kuc.min.js
```

### CDN
こちらの CDN をご利用ください。

- 最新版の kintone UI Component を読み込みたい場合
  ```
  https://unpkg.com/kintone-ui-component/umd/kuc.min.js
  ```

- バージョン指定して読み込みたい場合（プロジェクト名の後ろにバージョン番号を指定）
  ```
  https://unpkg.com/kintone-ui-component@1.0.0/umd/kuc.min.js
  ```

> unpkg はサイボウズが提供している CDN サービスではありません。検証用として利用することをお勧めします。  
> 本番環境では、unpkg の障害や不具合による影響を避けるため、UMD の kuc.min.js をご利用ください。

### npm
npm で `kintone-ui-component` をインストールしてご利用ください。
```bash
npm install kintone-ui-component
```

## 使い方

```javascript
// UMD
const text = new Kuc.Text({
  value: "this is text!"
});
```

```javascript
// ES modules
import { Text } from "kintone-ui-component/lib/text";

const text = new Text({
  value: "this is text!"
});
text.addEventListener("change", event => {
  console.log(`text value is changed to ${event.detail.value}`);
});


```

## ブラウザサポート

<table>
  <tr>
    <th>Chrome</th>
    <th>Safari</th>
    <th>Firefox</th>
    <th>Edge</th>
    <th>IE11</th>
  </tr>
  <tr>
    <td>○</td>
    <td>○</td>
    <td>○</td>
    <td>○</td>
    <td>△</td>
  </tr>
</table>

> 各対応ブラウザ最新版での動作を確認しております。
> kintone UI Component v1 は現在 kintone で使用されているライブラリとの兼ね合いで、IE11 では正常に動作しません。

## v0の使い方
kintone UI Component v0 を使用する場合は、こちらのリンクをご確認ください。
- [GitHub リポジトリ](https://github.com/kintone-labs/kintone-ui-component/tree/v0_dev)
- [ドキュメントサイト](https://kintone-labs.github.io/kintone-ui-component/latest)

> kintone UI Component v1 リリースに伴い、v0 については主に不具合改修とライブラリアップデートを継続します。
> 新規の機能開発は現在予定しておりません。

## 移行ガイド
v0 と v1 の仕様とインターフェースには違いがあるので、更新時には十分な確認をしてください。
詳細は下記の記事をご参照ください。
- [v0 と v1 の書き方の違い解説](https://kintone-ui-component.netlify.app/docs/guides/comparison-v0-v1)
- [v1.0.0 Release Notes](https://kintone-ui-component.netlify.app/blog/2021/03/04/v1.0.0-release-notes)

## ご要望
kintone UI Component に関する質問や要望などありましたら、[GitHub issue](https://github.com/kintone-labs/kintone-ui-component/issues/new/choose) に登録ください。

## ライセンス
[MIT LICENSE](./LICENSE)
