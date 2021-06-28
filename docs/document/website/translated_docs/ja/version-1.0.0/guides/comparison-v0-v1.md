---
id: version-1.0.0-comparison-v0-v1
title: A commentary on the difference between v0 and v1
sidebar_label: A commentary on the difference between v0 and v1
original_id: comparison-v0-v1
---

## 概要
**kintone UI Component** の v1 は、提供コンポーネントの精査やアクセシビリティ対応に加え、開発者がより使いやすいように内部設計の見直しを行っています。

ここでは、 kintone アプリのカスタマイズで使うにあたり、 v0 と v1 のコードの書き方の違いと、 v1 でより使いやすくなったポイントについて解説します。

## 完成イメージ
例として、 kintone UI Component を使ってレコードの一覧画面に検索ボタンを作るコードでご紹介します。
こちらが画面の完成イメージです。

![検索ボックス](assets/v1_search_box.png) 

## JavaScript/CSS カスタマイズ

早速ですが、まずはコードを見てみましょう。
ここでは kintone UI Component の UMD ファイルを使用しています。
ファイルのアップロード方法などは、 [Quick Start](../getting-started/quick-start.md) をご覧ください。

### v0 を使った場合

```javascript
// 増殖バグを防ぐ処理
if (document.getElementById('my_index_text') !== null) {
  return event;
}

const header = kintone.app.getHeaderMenuSpaceElement();

// 検索ボックスの表示
const text = new kintoneUIComponent.Text({
  placeholder: 'キーワードを入力してください'
});

const button = new kintoneUIComponent.Button({
  type: 'submit',
  text: '検索'
});

// textとbuttonを横並びにする。
text.element.style.float = 'left';
button.element.style.float = 'right';

header.appendChild(text.render());
header.appendChild(button.render());

// 増殖バグ対応のために、id 付与
text.element.id = 'my_index_text';
```

### v1 を使った場合

```javascript
// 増殖バグを防ぐ処理
if (document.getElementById('kuc_text') !== null) {
  return event;
}

const header = kintone.app.getHeaderMenuSpaceElement();

// 検索ボックスの表示
const text = new Kuc.Text({
  placeholder: 'キーワードを入力してください',
  id: 'kuc_text'
});
  
const button = new Kuc.Button({
  type: 'submit',
  text: '検索',
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

ひとつずつ解説していきます。

---
#### ネームスペースの名前が簡素化
---
v1 では、インスタンスの呼び出し方が new kintoneUIComponent から **new Kuc** となり、より簡潔なコードが書けるようになりました。

- v0 のコード
```
const text = new kintoneUIComponent.Text({
  placeholder: 'キーワードを入力してください'
});
```

- v1 のコード
```
const text = new Kuc.Text({
  placeholder: 'キーワードを入力してください'
});
```

また、これにより同一アプリに v0 と v1 の UMD が読み込まれた際に、どちらかが上書きされてしまうというリスクがなくなりました。

---
#### render() メソッドが不要に
---
v0 では、内部実装の都合上、appendChild する際に render() メソッドを用いてコンポーネントの Element を返す必要がありました。

v1 では、設計を見直したことで render() が不要となり、よりシンプルな書き方でコンポーネントを描画できるようになりました。

- v0 のコード
```
header.appendChild(text.render());
```

- v1 のコード
```
header.appendChild(text);
```

---
#### プロパティを利用して値の更新が可能に
---
v0 では、値を更新する場合、メソッドを別途呼び出す必要がありました。
v1 では、プロパティを利用して値を更新することができます。

- v0 のコード
```
const button = new kintoneUIComponent.Button({
  type: 'submit',
  text: '検索'
});

// メソッドを呼び出して値を更新
button.setText('登録');
```

- v1 のコード
```
const button = new Kuc.Button({
  type: 'submit',
  text: '検索',
  id: 'kuc_button'
});

// プロパティを利用して値の更新が可能
button.text = '登録';
```

---
#### パーツ並びの利便性向上
---
v0 では、デフォルトではパーツが縦に並ぶ仕様になっており、横並びにするためには CSS などで調整する必要がありました。

![v0](assets/v0_search_box.png) 

- style を調整する必要がある
```
// textとbuttonを横並びにする。
text.element.style.float = 'left';
button.element.style.float = 'right';
```

v1 では内部仕様を見直し、ほとんどのコンポーネントがデフォルトで横並びになったことで、調整が不要になりました。  
（利便性を考え、一部のコンポーネントではデフォルトが縦並びに設定されています。）

![検索ボックス](assets/v1_search_box.png)

---
#### プロパティの見直し
---
v1 では各コンポーネントのプロパティについても精査し、必要に応じてプロパティの見直し・追加を行いました。

例えば、v1 で新規に追加された `id` プロパティを使うことで、コンポーネントに id を付与できます。
付与した id を使って、要素を取得するといったことが可能になります。

- v0 のコード
```
// 増殖バグを防ぐ処理
if (document.getElementById('my_index_text') !== null) {
  return event;
}

const text = new kintoneUIComponent.Text({
  placeholder: 'キーワードを入力してください'
});

// idプロパティがないため、別途idを付与する必要あり
text.element.id = 'my_index_text';
```

- v1 のコード
```
// 増殖バグを防ぐ処理（プロパティで付与したid名を利用可能）
if (document.getElementById('kuc_text') !== null) {
  return event;
}

const header = kintone.app.getHeaderMenuSpaceElement();
const text = new Kuc.Text({
  placeholder: 'キーワードを入力してください',
  id: 'kuc_text'
});
```
---
#### Alert と Label コンポーネントのプロパティ化
---
v0 ではコンポーネントにエラーメッセージを表示させたい時や、ラベルを表示させたい時は、 Alert や Label などの別コンポーネントで実装する必要がありました。

v1 ではプロパティとして  `error` や `label` が用意され、各コンポーネントで扱えるようになりました。        
例として、Text コンポーネントの `error` プロパティを見てみましょう。

冒頭で、 KUC を使って検索ボックスを作成するコードをご紹介しましたが、ボタンをクリックしても今のままでは何も反応しません。

そこで、ボタンクリック時に、テキストの入力値をチェックして値がなかったらエラーメッセージを表示させるという処理を入れてみます。

以下がコードです。

```
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

このコードでは、クリックイベント内で、 text.value で値を取得し、正規表現を利用して値のチェックをしています。
チェックの結果、全角以外の値であればエラーメッセージを表示して、処理を中断するという流れです。

エラーメッセージの表示に利用しているのが、 Text の `error` プロパティです。

メッセージの初期化（エラーメッセージの非表示）も、今回であれば text.error に空文字列を代入するだけなので、簡潔に書くことができます。

![search_box_error](assets/v1_search_box_error.png)


## おわりに

いかがでしたでしょうか。
進化した kintone UI Component を使って、これまで以上にスマートな kintone 開発を体験していただければ幸いです。

> 本記事は、 2021 年 2 月時点の kintone と Google Chrome で確認したものになります。  
> また、カスタマイズに使用した kintone UI Component のバージョンは、v0.7.4 および v1.0.0 です。

> v0 のドキュメントは別サイトになりますので、[こちら](https://kintone-labs.github.io/kintone-ui-component/latest/)よりご確認ください。
