---
id: comparison-v0-v1
title: A commentary on the difference between v0 and v1
sidebar_label: A commentary on the difference between v0 and v1
---

## 概要
**kintone UI Component** の v1 は、提供コンポーネントの精査やアクセシビリティ対応に加え、開発者がより使いやすいように内部設計の見直しを行っています。

ここでは、 kintone アプリのカスタマイズで使うにあたり、 v0 と v1 のコードの書き方の違いと、 v1 でより使いやすくなったポイントについて解説します。

## 完成イメージ
例として、 kintone UI Component を使ってレコードの一覧画面に検索ボタンを作るコードでご紹介します。<br/>
こちらが画面の完成イメージです。

![検索ボックス](/img/v1_search_box.png)

## JavaScript/CSS カスタマイズ

早速ですが、まずはコードを見てみましょう。<br/>
ここでは kintone UI Component の UMD ファイルを使用しています。<br/>
ファイルのアップロード方法などは、 [Quick Start](../getting-started/quick-start.md) をご覧ください。

### v0 を使った場合

```javascript
// Process to prevent component duplication bug
if (document.getElementById('my_index_text') !== null) {
  return event;
}

const header = kintone.app.getHeaderMenuSpaceElement();

// Show search box
const text = new kintoneUIComponent.Text({
  placeholder: 'Enter keywords'
});

const button = new kintoneUIComponent.Button({
  type: 'submit',
  text: 'Search'
});

// Use text and a button side by side
text.element.style.float = 'left';
button.element.style.float = 'right';

header.appendChild(text.render());
header.appendChild(button.render());

// Specified id for component duplication bug prevention
text.element.id = 'my_index_text';
```

### v1 を使った場合

```javascript
// Process to prevent component duplication bug
if (document.getElementById('kuc_text') !== null) {
  return event;
}

const header = kintone.app.getHeaderMenuSpaceElement();

// Show search box
const text = new Kuc.Text({
  placeholder: 'Enter keywords',
  id: 'kuc_text'
});

const button = new Kuc.Button({
  type: 'submit',
  text: 'Search',
  id: 'kuc_button'
});

header.appendChild(text);
header.appendChild(button);
```

## v0 と v1 の違いを解説

それでは、 v0 と v1 ではどのようにコードの書き方が変わってくるのでしょうか。

主な違いは以下です。
- ネームスペースの名前が簡素化
- render() メソッドが不要に
- プロパティを利用して値の更新が可能に
- パーツ並びの利便性向上
- プロパティの見直し
- Alert と Label コンポーネントのプロパティ化
- Item.label の自動補完

ひとつずつ解説していきます。

---
#### ネームスペースの名前が簡素化
---
v1 では、インスタンスの呼び出し方が new kintoneUIComponent から **new Kuc** となり、より簡潔なコードが書けるようになりました。

- v0 のコード
```javascript
const text = new kintoneUIComponent.Text({
  placeholder: 'Enter keywords'
});
```

- v1 のコード
```javascript
const text = new Kuc.Text({
  placeholder: 'Enter keywords'
});
```

また、これにより同一アプリに v0 と v1 の UMD が読み込まれた際に、どちらかが上書きされてしまうというリスクがなくなりました。

---
#### render() メソッドが不要に
---
v0 では、内部実装の都合上、appendChild する際に render() メソッドを用いてコンポーネントの Element を返す必要がありました。<br/>
v1 では、設計を見直したことで render() が不要となり、よりシンプルな書き方でコンポーネントを描画できるようになりました。

- v0 のコード
```javascript
header.appendChild(text.render());
```

- v1 のコード
```javascript
header.appendChild(text);
```

---
#### プロパティを利用して値の更新が可能に
---
v0 では、値を更新する場合、メソッドを別途呼び出す必要がありました。<br/>
v1 では、プロパティを利用して値を更新することができます。

- v0 のコード
```javascript
const button = new kintoneUIComponent.Button({
  type: 'submit',
  text: 'Search'
});

// Update the value by calling the method
button.setText('Register');
```

- v1 のコード
```javascript
const button = new Kuc.Button({
  type: 'submit',
  text: 'Search',
  id: 'kuc_button'
});

// Property can be used to update values
button.text = 'Register';
```

---
#### パーツ並びの利便性向上
---
v0 では、デフォルトではパーツが縦に並ぶ仕様になっており、横並びにするためには CSS などで調整する必要がありました。

![v0](/img/v0_search_box.png)

- style を調整する必要がある
```javascript
// Use text and button side by side
text.element.style.float = 'left';
button.element.style.float = 'right';
```

v1 では内部仕様を見直し、ほとんどのコンポーネントがデフォルトで横並びになったことで、調整が不要になりました。<br/>
（利便性を考え、一部のコンポーネントではデフォルトが縦並びに設定されています。）

![検索ボックス](/img/v1_search_box.png)

---
#### プロパティの見直し
---
v1 では各コンポーネントのプロパティについても精査し、必要に応じてプロパティの見直し・追加を行いました。

例えば、v1 で新規に追加された `id` プロパティを使うことで、コンポーネントに id を付与できます。<br/>
付与した id を使って、要素を取得するといったことが可能になります。

- v0 のコード
```javascript
// Process to prevent component duplication bug
if (document.getElementById('my_index_text') !== null) {
  return event;
}

const text = new kintoneUIComponent.Text({
  placeholder: 'Enter keywords'
});

// ID property is missing, ID must be granted separately
text.element.id = 'my_index_text';
```

- v1 のコード
```javascript
// Process to prevent component duplication bug (ID name granted by the property is available)
if (document.getElementById('kuc_text') !== null) {
  return event;
}

const header = kintone.app.getHeaderMenuSpaceElement();
const text = new Kuc.Text({
  placeholder: 'Enter keywords',
  id: 'kuc_text'
});
```
---
#### Alert と Label コンポーネントのプロパティ化
---
v0 ではコンポーネントにエラーメッセージを表示させたい時や、ラベルを表示させたい時は、 Alert や Label などの別コンポーネントで実装する必要がありました。

v1 ではプロパティとして  `error` や `label` が用意され、各コンポーネントで扱えるようになりました。<br/>
例として、Text コンポーネントの `error` プロパティを見てみましょう。

冒頭で、 KUC を使って検索ボックスを作成するコードをご紹介しましたが、ボタンをクリックしても今のままでは何も反応しません。

そこで、ボタンクリック時に、テキストの入力値をチェックして値がなかったらエラーメッセージを表示させるという処理を入れてみます。

以下がコードです。

```javascript
const button = new Kuc.Button({
  type: 'submit',
  text: 'Search',
  id: 'kuc_button'
});

/* Add the following code */

// Add the process of click event to the displayed button
button.addEventListener('click', event => {
  const keyword = text.value;
  const errorMessage = 'Please enter a value.';
  // Hide the error message
  text.error = '';

  // Check if there is a value
  if (!keyword) {
    // Show the error message
    text.error = errorMessage;
    return;
  }
});
```

このコードでは、クリックイベント内で、 text.value で値を取得し、正規表現を利用して値のチェックをしています。<br/>
チェックの結果、全角以外の値であればエラーメッセージを表示して、処理を中断するという流れです。

エラーメッセージの表示に利用しているのが、 Text の `error` プロパティです。

メッセージの初期化（エラーメッセージの非表示）も、今回であれば text.error に空文字列を代入するだけなので、簡潔に書くことができます。

![search_box_error](/img/v1_search_box_error.png)

---
#### Item.label の自動補完
---
選択肢系のコンポーネントにおいて、v0 では `Item.label` と `Item.value` どちらも指定する必要がありました。

v1 では `Item.value` のみが必須項目となります。もし `Item.label` の指定がない場合は、`Item.value` の値が設定されます。<br/>
UI で表示するラベルと内部的に持つ値が一緒の場合の書き方がコンパクトになりました。

以下のように省略して書くことができます。

```javascript
const checkbox = new Kuc.Checkbox({
  items: [
    {
      value: 'orange'
    }
  ]
});
```

## おわりに

いかがでしたでしょうか。<br/>
進化した kintone UI Component を使って、これまで以上にスマートな kintone 開発を体験していただければ幸いです。

:::info
本記事は、 2021 年 2 月時点の kintone と Google Chrome で確認したものになります。<br/>
また、カスタマイズに使用した kintone UI Component のバージョンは、v0.7.4 および v1.0.0 です。
:::

:::info
v0 のドキュメントは別サイトになりますので、[こちら](https://kintone-labs.github.io/kintone-ui-component/latest/)よりご確認ください。
:::
