---
id: release-notes-v1.0.0
title: v1.0.0 Release Notes
sidebar_label: v1.0.0 Release Notes
---

## 概要

[kintone UI Component v1.0.0](https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.0.0) のリリースノートです。<br/>
v0 から v1 にアップデートした背景や今後の計画についてご紹介します。

## 背景

v0 では様々ご要望をいただき、対応コンポーネントや機能の追加を行いました。<br/>
この度 kintone カスタマイズを行うエンジニアの皆さんが kintone ライクなパーツをより "簡単に" 作ることができるように、以下の検討を行い v1 としてリニューアルすることになりました。

- v0 ユーザーからいただいた機能要望への対応
- 具体的なユースケースに紐づいた仕様/機能検討
- 設計/機能的に複雑な部分の見直し
- 内部実装のスリム化

## アップデート内容

主なアップデートは次になります。

- kintone パーツの再現度の向上
  -  より kintone のパーツの UI や挙動に近づけました。
- アクセシビリティ対応
  - キーボード操作や音声読み上げソフトへの対応をしました。
- モバイル対応
  - 要望の多かったモバイルコンポーネントを提供しました。
- リファレンスの改善
  - 各パーツのリファレンスページを見やすくしました。（UI 表示, サンプルコード）
  - 日本語対応しました。

## 開発時に考慮したこと

開発時に考慮したことやアップデートのポイントをご紹介します。

- インターフェースは基本引き継ぎ、学習コストを低減。
  - ​v0 から大幅な使用感の変更にならないように考慮しました。

1. v1.0.0
```js
    const button = new Kuc.Button({
      type: 'submit',
      text: 'Search',
      id: 'kuc_button' // Add id property
    });
    header.appendChild(button);　// Show button
```
2. v0.7.4
```js
    const button = new kintoneUIComponent.Button({
      type: 'submit',
      text: 'Search',
    });
    header.appendChild(button.render());　// Show button
```

- メソッドの呼び出しではなく、プロパティの利用で設定するように使用性の向上。
  - 独自のメソッドをやめて、プロパティで設定できるように、シンプルな使い方を実現しました。

1. v1.0.0
```js
    const button = new Kuc.Button({
      type: 'submit',
      text: 'Search',
      id: 'kuc_button'
    });
    header.appendChild(button);
    button.text = 'Register'; // Update text property
```
2. v0.7.4
```js
    const button = new kintoneUIComponent.Button({
      type: 'submit',
      text: 'Search',
    });
    header.appendChild(button.render());
    button.setText('Register'); // Update text property
```
​
- kintone カスタマイズで実際に使う機能に絞って実装。​
  - 具体的なユースケースがあるコンポーネントや機能を実装しました。（kintone 標準機能にないものも含む）
  - 一方ユースケースが乏しいと判断したコンポーネントの開発を見送りました。（もしユースケースがあれば対応検討します。[GitHub issue](https://github.com/kintone-labs/kintone-ui-component/issues) でのフィードバックもお待ちしております。）
    - Attachment, ColorPicker, FieldGroup, IconButton, Tab, React ver.

- Web Components フレームワークの LitElement で実装し、内部コードの可読性向上。​
  - JavaScript のみで実装するのではなく、フレームワークを導入することで内部コードの品質向上を目指しました。
  - WebComponents でのインターフェースの提供は、今後検討します。

以上により、v0 に比べてより使いやすい、実際の kintone カスタマイズのユースケースに沿ったコンポーネント提供を目指しました。<br/>
v0 と v1 の書き方の違いについては[こちら](../guides/comparison-v0-v1.md)の記事で解説しておりますので、詳細ご確認ください。

## 今後の計画

今後の v1 の計画は次の通りです。

- 提供パーツの追加
  - Table, ReadOnlyTable, Dialog, Date, DateTime などのコンポーネントを追加で提供予定です。
- モバイル対応コンポーネントの追加
- より実践的な使い方のサンプルやチュートリアルの整備
  - ユースケースに沿ったサンプルコードやチュートリアル記事を増やしていきます。

:::info
v0 については、主に不具合改修とライブラリアップデートを継続します。新規の機能開発は現在予定しておりません。
:::

## おわりに

最後まで読んでいただきありがとうございます。<br/>
kintone UI Component v1 は、kintone カスタマイズやプラグイン開発に関わるエンジニアにとって使いやすい、便利なライブラリを目指して改良していきます。<br/>
今後ともご期待ください。

フィードバックや改善リクエストにつきましては [GitHub issue](https://github.com/kintone-labs/kintone-ui-component/issues) へコメントいただけると幸いです。<br/>
よろしくお願いいたします。