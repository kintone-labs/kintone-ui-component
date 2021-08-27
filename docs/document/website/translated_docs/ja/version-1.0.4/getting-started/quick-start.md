---
id: version-1.0.4-quick-start
title: Quick Start
sidebar_label: Quick Start
original_id: quick-start
---

## kintone UI Component とは？

kintone UI Component は、kintone カスタマイズやプラグインの UI 開発を支援するための UI Component ライブラリです。<br>
以下のような kintone ライクな UI を簡単に作成できるので、フォーム部品を自作したい場合に便利にお使いいただけます。

### Desktop 用コンポーネント例

![desktop components](assets/desktop_components.png)

### Mobile 用コンポーネント例

![mobile components](assets/mobile_components.png)

## 下準備：アプリ作成

ここでは既定の kintone 一覧画面のヘッダーメニュースペースに Button コンポーネントを配置します。<br>
まず kintone UI Component を設置するアプリを用意します。

1. 空のアプリを作成します。（[アプリをはじめから作成する](https://jp.cybozu.help/k/ja/user/create_app/tutorial.html)）<br>
特にフィールドの設置は必要ありません。

## 導入と実装方法

kintone UI Component では UMD と CDN と npm パッケージを用意しています。<br>
ブラウザ環境や Node.js 環境など開発環境に合わせていずれかを選択して読み込み、実装してください。<br>
本記事では、それぞれの導入・実装方法を紹介します。

> 各コンポーネントのリファレンスについてはサイドバーの Components カテゴリよりご確認ください。<br>
> （順次対応コンポーネントも追加予定です。）

### UMD を利用する

1. kintone UI Component リポジトリ内の[各バージョン Release 欄](https://github.com/kintone-labs/kintone-ui-component/releases)に添付のアーカイブフォルダ（kintone-ui-component-{version}.tgz）を解凍し、以下のファイルを kintone アプリ設定の `JavaScript / CSS でカスタマイズ`にて指定します。

```text
./umd/kuc.min.js
```

2. `index.js` ファイルを作成します。

```js
(() => {
  'use strict';

  kintone.events.on('app.record.index.show', event => {
    const header = kintone.app.getHeaderMenuSpaceElement();

    const button = new Kuc.Button({
      text: 'Submit',
      type: 'submit'
    });
    button.addEventListener('click', event => {
      console.log(event);
    });

    header.appendChild(button);
    return event;
  });
})();
```

3. `index.js` を kintone アプリ設定の `JavaScript /CSS でカスタマイズ`にアップロードしてカスタマイズを適用します。（[JavaSriptやCSSでアプリをカスタマイズする](https://jp.cybozu.help/k/ja/user/app_settings/js_customize.html)）

![button customize](assets/button_customize.png)

### CDN を利用する

1. 以下の CDN URL を、作成した kintone アプリ設定の `JavaScript /CSS でカスタマイズ`にて指定します。（[JavaSriptやCSSでアプリをカスタマイズする](https://get.kintone.help/k/ja/user/app_settings/js_customize.html)）<br>
CDN を読み込むと、グローバルオブジェクトとして `Kuc` が追加されます。

   - 最新版の kintone UI Component を読み込みたい場合
    ```text
    https://unpkg.com/kintone-ui-component/umd/kuc.min.js
    ```

   - バージョン指定して読み込みたい場合（プロジェクト名の後ろにバージョン番号を指定）
    ```text
    https://unpkg.com/kintone-ui-component@1.0.0/umd/kuc.min.js
    ```

2. 以降は上記 UMD と同様。

> unpkg はサイボウズが提供している CDN サービスではありません。検証用としてお使いいただくことをお勧めします。<br>
> 本番環境では、unpkg の障害や不具合による影響を避けるため、UMD の `kuc.min.js` をご利用ください。

### npm パッケージを利用する

1. `customization` というフォルダを作成し、その配下で以下のコマンドを実行します。

```sh
mkdir customization && cd customization
npm init -y
npm install kintone-ui-component
npm install webpack webpack-cli --save-dev
```

> 必要に応じて、`babel-loader` や `css-loader` もインストールしてお使いください。

2. 利用したいコンポーネントをインポートし、`index.js` ファイルを `src` フォルダ配下に作成します。

```js
import { Button } from 'kintone-ui-component/lib/button';

(() => {
  'use strict';

  kintone.events.on('app.record.index.show', event => {
    const header = kintone.app.getHeaderMenuSpaceElement();

    const button = new Button({
      text: 'Submit',
      type: 'submit'
    });
    button.addEventListener('click', event => {
      console.log(event);
    });

    header.appendChild(button);
    return event;
  });
})();
```
3. プロジェクトのルート配下に以下の `webpack.config.js` ファイルを作成します。

```js
const path = require('path');
module.exports = {
  entry: {
    "customization": './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
  }
}
```

4. `package.json` に webpack でビルドするためのスクリプトを追加します。

```json
"scripts": {
  "build:webpack": "webpack --mode production",
  ...
}
```

5. 以下のコマンドを実行し、カスタマイズ用のファイルを生成します。

```text
npm run build:webpack
```

```text
出力結果：
./dist/customization.min.js
```

6. 上記でバンドルしたファイルを、作成した kintone アプリ設定の `JavaScript /CSS でカスタマイズ`にアップロードしてカスタマイズを適用します。（[JavaSriptやCSSでアプリをカスタマイズする](https://jp.cybozu.help/k/ja/user/app_settings/js_customize.html)）

![button customize](assets/button_customize.png)

## ブラウザ対応状況

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

> 各コンポーネントのリファレンスページでは、Overview にてコンポーネントのプレビュー表示をしています。<br>
