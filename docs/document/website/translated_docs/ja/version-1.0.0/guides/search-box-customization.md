---
id: version-1.0.0-search-box-customization
title: Search box customization
sidebar_label: Search box customization
original_id: search-box-customization
---

## 概要
検索ボックスの作り方を kintone UI Component の Text コンポーネントと Button コンポーネント、Notification コンポーネントを使って説明します。

## 完成イメージ
検索ボックスの完成イメージは、次の通りです。

#### デスクトップ版
![検索ボックス(デスクトップ)](assets/desktop_search_box.png) 

#### モバイル版
![検索ボックス(モバイル)](assets/mobile_search_box.png) 

## JavaScript/CSS カスタマイズ

kintone UI Component の UMD ファイルをアプリに読み込んだ上で、以下のような実装をした JavaScript ファイルをアップロードします。  
ファイルのアップロード方法などは、 [Quick Start](../getting-started/quick-start.md) をご覧ください。

### 検索ボックスの表示

検索ボックスを表示するために、Text コンポーネントと Button コンポーネントを使います。  
Text コンポーネントの placeholder プロパティを使うと、入力内容を説明することができます。  
モバイル対応をしたい場合は、モバイル用のコンポーネント MobileButton を呼び出すと同じように実装できます。  

```javascript
const header = kintone.app.getHeaderMenuSpaceElement();

// 検索ボックスの入力欄とボタンの表示
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

### 検索文字のチェック

Button コンポーネントは、click イベントを指定することができます。  
ここでは以下のような処理を入れています。

- ボタンをクリックした時に、入力された文字が全角文字か判定
- 入力値が全角以外の場合、error プロパティにエラーメッセージを代入して表示
- error プロパティに空文字を代入して、表示メッセージを初期化

```javascript
const button = new Kuc.Button({
  type: 'submit',
  text: 'Search',
  id: 'kuc_button'
});

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

### コンポーネントの増殖バグ対策

id プロパティを付与して、既にコンポーネントが表示されているかどうかを判定し、増殖バグを防ぐ対応をしています。

```javascript
// プロパティで付与した id を利用して増殖バグを防ぐ
if (document.getElementById('kuc_text') !== null) {
  return event;
}

const header = kintone.app.getHeaderMenuSpaceElement();
const text = new Kuc.Text({
  placeholder: 'キーワードを入力してください',
  id: 'kuc_text' // id を付与
});
```

### 実行結果を Notification で表示

REST API 実行時の成功や失敗のメッセージを Notification コンポーネントを使って表示します。  
Notification の呼び出しには open メソッド、背景色の設定には type プロパティを使っています。  
今回は、以下のケースで表示するように実装しています。  

- レコードの結果がない場合
- REST API の実行が失敗した場合

```javascript
const app = kintone.app.getId();
const params = {
  app: app,
  query: 'text like "' + keyword + '"'
};

kintone.api(kintone.api.url('/k/v1/records', true), 'GET', params).then(resp => {
  if (resp.records.length !== 0) {
    // レコード取得結果を表示する処理
    const url = '?view=' + id + '&q=f6054049%20like%20' + '"' + keyword + '"';
    window.location.replace(url);
  } else if (resp.records.length === 0) {
    // レコード結果がない場合の処理
    const info = new Kuc.Notification({
      text: 'レコードがありません',
      type: 'info' // blue の背景色が設定される
    });
    info.open();　// info の表示
  }
}).catch(error => {
  // REST API のエラー発生時の処理
  const errmsg = 'レコード取得時にエラーが発生しました。';
  if (error.message !== undefined) {
    errmsg += '\n' + error.message;
  }
  const alert = new Kuc.Notification({
    text: errmsg
    // type プロパティを指定しない場合、red の背景色が設定される
  });
  alert.open();　// alert の表示
});
```

## おわりに

いかがでしたでしょうか。kintone UI Component を使って、検索ボックスの作り方を紹介しました。  
kintone UI Component を使って、便利に kintone カスタマイズを開発していただければ幸いです。

> 本記事は、 2021 年 2 月時点の kintone と Google Chrome で確認したものになります。  
> また、カスタマイズに使用した kintone UI Component のバージョンは、v1.0.0 です。
