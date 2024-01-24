---
id: version-conflicts-issue-solution
title: Version conflicts issue and solution
sidebar_label: Version conflicts issue and solution
---

## 概要

v1.3.2 以前のリリースバージョンにおいて kintone UI Component（KUC）にはバージョンコンフリクトの問題がありました。<br/>
この記事ではその問題点と解決策、またどのように KUC のパッケージを v1.4.0 以降の最新版にアップグレードして解決策を適用するのかを解説します。

## バージョンコンフリクト問題

アプリに対して複数の同一バージョンもしくは別バージョンの KUC パッケージを読み込んだ際に、エラーが出力されコンポーネントが正しく表示されないという問題です。この事象は、UMD と ESM どちらの利用方法でも発生していました。<br/>
KUC では [Web Components](https://developer.mozilla.org/ja/docs/Web/Web_Components) を利用しており、[custom HTML タグ](https://developer.mozilla.org/ja/docs/Web/Web_Components/Using_custom_elements)を定義することでコンポーネントを生成しています。その際に使っている [CustomElementRegistry](https://developer.mozilla.org/ja/docs/Web/API/CustomElementRegistry) がグローバルな window オブジェクトであり、Web Components では既に登録されている custom HTML タグ を再定義することができません。<br/>
KUC パッケージが custom HTML タグ を登録する際、後から読み込まれたパッケージも同じタグを定義しようとするので、正常に動作しなくなるという問題が起きていました。

![複数のパッケージが同じ custom HTML タグを定義](/img/version-conflict-diagram.jpeg)

## 解決策

既に登録されている custom HTML タグを再定義することはできないので、v1.4.0 からは custom HTML タグにバージョン番号を含める対応を入れました。この変更は、CSS スタイルのコンフリクトを解消するためにクラス名にも適用しています。

![Custom HTML tag の例](/img/version-conflict-html-tag.png)

<center>タグとクラス名にバージョン番号を含める</center>

![CSS の例](/img/version-conflict-css.png)

<center>コンポーネントの CSS にもバージョン番号が含まれる</center>

加えて、custom HTML タグを定義する前に既に同じものが登録されているかどうかも判定するようにしました。

## 最新バージョンへのアップデート

各プロジェクト用の KUC を最新バージョンにアップデートして利用することを推奨しています。

### UMD を利用する

v1.4.0 以降のバージョンを利用する場合は、コンポーネントを呼び出す際に Kuc オブジェクトの代わりに Kucs["1.x.x"] を使ってバージョンを指定してください。（ex. `new Kucs["1.4.0"].Button()`）<br/>
また、レンダリングされたコンポーネントのタグとクラス名にはバージョン番号が含まれます。詳しくは[解決策](#解決策)セクションをご確認ください。

:::tip
グローバルオブジェクトとして Kuc を使うこともできますが、2つ以上の kuc.min.js を kintone カスタマイズやプラグインに読み込む場合はバージョンコンフリクトが起きる可能性があるのでご注意ください。この際、Kuc オブジェクトは最後に読み込まれた kuc.min.js を参照します。<br/>
システム上に kuc.min.js が 1つしかない、もしくは最後に読み込まれた kuc.min.js の利用で問題ない場合は、Kuc オブジェクトを利用いただいて問題ありません。`const Kuc = Kucs['1.x.x'];` の行を削除してください。
:::


v1.3.2 以前のバージョンを利用する場合は、Kuc をグローバルオブジェクトとして使ってください。2つ以上の kuc.min.js を kintone カスタマイズやプラグインに追加すると、バージョンコンフリクト問題が起きるのでご注意ください。

```javascript
const Kuc = Kucs['1.x.x'];

const button = new Kuc.Button({text: 'Button', type: 'submit'});
document.body.appendChild(button);
```

### CDN を利用する

[UMD を利用する](#umd-を利用する)セクションの説明とサンプルコードをご確認ください。CDN の挙動は kuc.min.js を利用する場合と同じです。

### npm パッケージを利用する

npm パッケージを利用する場合は利用方法に変更はありませんが、レンダリングされたコンポーネントのタグとクラス名にはバージョン番号が含まれます。詳しくは[解決策](#解決策)セクションをご確認ください。

## ケーススタディ

### v1.3.2 以前のバージョンの利用者向け

v1.3.2 以前のバージョンを利用する場合、以下のようなコンフリクトエラーを起こす可能性があります。

#### 複数の KUC パッケージを読み込む場合（UMD, ESM）

例えば、v1.2.0 の kuc.min.js を kintone に読み込んだ後に v1.3.0 の kuc.min.js をアプリに読み込みます。
KUC の Button コンポーネントを呼び出そうとすると、Illegal constructor エラーが発生します。

![複数の kuc.min.js ファイルを読み込むと Illegal constructor エラーが発生](/img/UMD_multi_files.jpeg)

### v1.4.0 以降のバージョンの利用者向け

v1.4.0 以降を利用する場合、複数の KUC パッケージ（ESM）を読み込んでもバージョンコンフリクトのエラーは起きません。

しかし、複数の kuc.min.js ファイル（UMD）を読み込んだ上で推奨する Kucs オブジェクトの代わりに Kuc を利用する場合、バージョンコンフリクトのエラーは起きないですが、最後に読み込まれたバージョンのパッケージが利用される点にご注意ください。

また、v1.4.0 前後のバージョンを同時に使う際は読み込み順によってエラーが起きるため注意が必要です。

1. 最後に v1.4.0 以降のバージョンを読み込むケース
- v1.4.0 > v1.3.2 > v1.4.x：window.Kuc.version は 1.4.x となりエラーは起きない
- v1.4.0 > v1.4.x > v1.4.0：window.Kuc.version は 1.4.0 となりエラーは起きない

2. 最後に v1.3.2 以前のバージョンを読み込むケース
- v1.4.0 > v1.3.2 > v1.3.0：window.Kuc.version は 1.3.0 となり Illegal constructor エラーが起きる
- v1.3.2 > v1.4.0 > v1.3.2：window.Kuc.version は 1.3.2 となり Illegal constructor エラーが起きる

つまり、Kuc オブジェクトを利用する場合、最後に読み込まれた kuc.min.js が v1.3.2 以前のバージョンの場合はエラーが起きます。

## 最後に
ご不明点などございましたら、[GitHub issue](https://github.com/kintone-labs/kintone-ui-component/issues) にてご連絡ください。
