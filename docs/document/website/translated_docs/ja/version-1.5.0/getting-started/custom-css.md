---
id: version-1.5.0-custom-css
title: Custom CSS
sidebar_label: Custom CSS
original_id: custom-css
---

## 概要

**kintone UI Component（KUC）** では、[CSS 継承](#css-継承)と [CSS カスタムプロパティ](#css-カスタムプロパティ)の概念を利用して、カスタマイズ可能な要素を作成するための CSS カスタムプロパティを用意しています。CSS セレクターを適用して CSS カスタムプロパティを設定することによって、ツリーベースおよびインスタンスごとのスタイルを簡単に適用することができます。

### CSS 継承

[CSS 継承](https://developer.mozilla.org/ja/docs/Web/CSS/inheritance)により、親要素は特定の CSS プロパティを子要素に継承することができます。

### CSS カスタムプロパティ

全ての [CSS カスタムプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/Using_CSS_custom_properties)（`--custom-property-name`）は、親から値を継承します。これを利用して、コンポーネントのスタイルを外部から変更することができます。

KUC は要素ごとにいくつかのプロパティを公開しているので、それに基づいて要素の CSS プロパティを簡単にカスタマイズすることができます。

## 使い方

CSS セレクターを使って `--my-background` に値を指定することができます。

```javascript
<style>
  my-element {
    --my-background: #d9092f;
  }
  .sample-class {
    --my-background: #a8a632;
  }
  #sample-id {
    --my-background: #1ac9b8;
  }
</style>
<my-element></my-element>
<my-element class="sample-class"></my-element>
<my-element id="sample-id"></my-element>
```

> 各コンポーネントの **Custom CSS** 欄にて CSS カスタムプロパティの一覧をご確認ください。

## サンプルコード

Text コンポーネントの CSS プロパティをカスタマイズする場合のサンプルコードです。

```javascript
<style>
  kuc-text {
    --kuc-text-input-width: 200px;
    --kuc-text-input-height: 200px;
  }
  .sample-class {
    --kuc-text-input-font-size: 16px;
  }
  #sample-id {
    --kuc-text-input-color: #f25b0a;
  }
</style>
<kuc-text></kuc-text>
<kuc-text class="sample-class"></kuc-text>
<kuc-text id="sample-id"></kuc-text>
```
