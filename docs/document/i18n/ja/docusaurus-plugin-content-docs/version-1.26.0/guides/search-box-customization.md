---
id: search-box-customization
title: Search box customization
sidebar_label: Search box customization
---

## 概要
検索ボックスの作り方を kintone UI Component の Text コンポーネントと Button コンポーネント、Notification コンポーネントを使って説明します。

## 完成イメージ
検索ボックスの完成イメージは、次の通りです。

#### デスクトップ版
![検索ボックス(デスクトップ)](/img/desktop_search_box.png)

#### モバイル版
![検索ボックス(モバイル)](/img/mobile_search_box.png)

## JavaScript/CSS カスタマイズ

kintone UI Component の UMD ファイルをアプリに読み込んだ上で、以下のような実装をした JavaScript ファイルをアップロードします。<br/>
ファイルのアップロード方法などは、 [Quick Start](../getting-started/quick-start.md) をご覧ください。

### 検索ボックスの表示

検索ボックスを表示するために、Text コンポーネントと Button コンポーネントを使います。<br/>
Text コンポーネントの placeholder プロパティを使うと、入力内容を説明することができます。<br/>
モバイル対応をしたい場合は、モバイル用のコンポーネント MobileButton を呼び出すと同じように実装できます。

```javascript
const header = kintone.app.getHeaderMenuSpaceElement();

// Show entry field and button in the search box
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

### 検索文字のチェック

Button コンポーネントは、click イベントを指定することができます。<br/>
ここでは以下のような処理を入れています。

- ボタンをクリックした時に、入力値があるか判定
- 入力値がない場合、error プロパティにエラーメッセージを代入して表示
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
// Prevent duplication bug with ID granted by property
if (document.getElementById('kuc_text') !== null) {
  return event;
}

const header = kintone.app.getHeaderMenuSpaceElement();
const text = new Kuc.Text({
  placeholder: 'Enter keywords',
  id: 'kuc_text' // Add ID
});
```

### 実行結果を Notification で表示

REST API 実行時の成功や失敗のメッセージを Notification コンポーネントを使って表示します。<br/>
Notification の呼び出しには open メソッド、背景色の設定には type プロパティを使っています。<br/>
今回は、以下のケースで表示するように実装しています。

- レコードの結果がない場合
- REST API の実行が失敗した場合

```javascript
const app = kintone.app.getId();
const params = {
  app: app,
  query: 'text like "' + keyword + '"'
};

kintone
  .api(kintone.api.url('/k/v1/records', true), 'GET', params)
  .then(resp => {
    if (resp.records.length !== 0) {
      // Process of displaying record retrieval result
      const url = '?view=' + id + '&q=f6054049%20like%20"' + keyword + '"';
      window.location.replace(url);
    } else if (resp.records.length === 0) {
      // Process when no record is found
      const info = new Kuc.Notification({
        text: 'No records',
        type: 'info' // Blue background color is set
      });
      info.open(); // Show info
    }
  })
  .catch(error => {
    // Process when REST API error occurs
    let errmsg = 'An error occurred while retrieving the record.';
    if (error.message !== undefined) {
      errmsg += ' ' + error.message;
    }
    const alert = new Kuc.Notification({
      text: errmsg
      // If the type property is not specified, red background color is set
    });
    alert.open(); // Show alert
  });
```

## おわりに

いかがでしたでしょうか。kintone UI Component を使って、検索ボックスの作り方を紹介しました。<br/>
kintone UI Component を使って、便利に kintone カスタマイズを開発していただければ幸いです。

:::info
本記事は、 2021 年 2 月時点の kintone と Google Chrome で確認したものになります。<br/>
また、カスタマイズに使用した kintone UI Component のバージョンは、v1.0.0 です。
:::
