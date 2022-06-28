[![npm version][npm-image]][npm-url]

<p align="center">
  <img src="./images/logo.png" alt="kuc-logo" align="center" height="100" style="margin: 30px; 0;">
</p>
<br />

---

<p align="center">
kintone UI Component は、kintone カスタマイズ、プラグインのUI 開発を支援するための UI Component ライブラリです。<br />
<strong>ドキュメントページは<a href="https://kintone-ui-component.netlify.app/ja/" rel="noopener" target="_blank">こちら</a>をご確認ください。</strong>
</p>

<p align="center">
  <a href="./README.md">English</a> | 日本語
</p>

> コントリビューターの方向けのお知らせです。<br>
> npm v8.5.5 以降で package-lock.json のチェックが厳格化されたため、現時点では Node v16.15.1 以前を利用して "npm ci" で依存ライブラリのインストールをしてください。

## 目次
- [インストール](#インストール)
  - [UMD](#umd)
  - [CDN](#cdn)
  - [npm](#npm)
- [使い方](#使い方)
- [ブラウザサポート](#ブラウザサポート)
- [v0の使い方](#v0の使い方)
- [移行ガイド](#移行ガイド)
- [コントリビューションガイドライン](#コントリビューションガイドライン)
- [ロードマップ](#ロードマップ)
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

> unpkg はサイボウズが提供している CDN サービスではありません。検証用として利用することをお勧めします。<br />
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
  </tr>
  <tr>
    <td>○</td>
    <td>○</td>
    <td>○</td>
    <td>○</td>
  </tr>
</table>

> 各対応ブラウザ最新版での動作を確認しております。

## v0の使い方
kintone UI Component v0 を使用する場合は、こちらのリンクをご確認ください。
- [GitHub リポジトリ](https://github.com/kintone-labs/kintone-ui-component/tree/v0_dev)
- [ドキュメントサイト](https://kintone-labs.github.io/kintone-ui-component/latest)

> kintone UI Component v1 リリースに伴い、v0 については主に不具合改修とライブラリアップデートを継続します。<br>
> 新規の機能開発は現在予定しておりません。

## 移行ガイド
v0 と v1 の仕様とインターフェースには違いがあるので、更新時には十分な確認をしてください。<br />
詳細は下記の記事をご参照ください。
- [A commentary on the difference between v0 and v1](https://kintone-ui-component.netlify.app/docs/ja/guides/comparison-v0-v1)
- [v1.0.0 Release Notes](https://kintone-ui-component.netlify.app/docs/ja/releases/release-notes-v1.0.0)

> v0 で提供していた React 版については、現在 v1 では対応を見送っています。

## コントリビューションガイドライン
kintone UI Component へのコントリビュートについて、詳しくは [Contributing Guideline](https://github.com/kintone-labs/kintone-ui-component/blob/master/CONTRIBUTING.md) をご確認ください。<br>
ご質問やご要望などございましたら、[GitHub issue](https://github.com/kintone-labs/kintone-ui-component/issues/new/choose) に登録してください。<br>
またコミュニティとして [GitHub の Discussions 機能](https://github.com/kintone-labs/kintone-ui-component/discussions)を利用しています。

## ロードマップ
開発ロードマップを公開しています。<br>
詳細は[こちら](https://github.com/kintone-labs/kintone-ui-component/discussions/987)をご確認ください。

## ライセンス
[MIT LICENSE](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/kintone-ui-component.svg
[npm-url]: https://npmjs.org/package/kintone-ui-component
