---
id: search-box-customization
Title: Search Box Customization
sidebar_Label: Custom Search box
---

## Overview
This section describes how to create the search box by using the kintone UI component Text and the Button component, the Notification component.

## Completed image
The complete image of the search box is as follows:

#### Desktop version
![Search box (Desktop)](assets/desktop_search_box.png) 

#### Mobile version
![Search box (MOBILE)](assets/mobile_search_box.png) 

## JavaScript and CSS Customization

When you import the UMD file of kintone UI Component to the app, you can upload the JavaScript files that are implemented as follows:  
How to upload a file [Quick Start](../getting-started/quick-start.md)  For details.

### Show Search Box

Use the Text component and the Button component to display the search box.  
You can use the placeholder property of the Text component to describe the contents of the entry.  
If you want to support mobile, you can implement the same way as when you call the MobileButton component for mobile.  

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

### Search character Check

The Button component can specify a click event.  
In this case, the following process is added.

- When you click a button, the characters entered are full-width characters.
- When the input value is not full-width, the error message is assigned to display
- Initialize the display message by substituting an empty character in the error property

```javascript
const button = new Kuc.Button({
  type: 'submit',
  text: '検索',
  id: 'kuc_button'
});

// 表示したボタンに click イベントの処理を追加
button.addEventListener('click', event => {      
  const keyword = text.value;
  const errorMessage = '全角のみ入力できます';
  // 表示したメッセージの初期化
  text.error = ''; 
  
  // 全角文字の判定
  if (!keyword.match(/^[^\x01-\x7E\xA1-\xDF]+$/)) {
    // 全角以外ならエラーメッセージを表示して処理を中断する
    text.error = errorMessage;
    return;
  }
});
```

### Component Proliferation bug countermeasures

The ID property is used to determine whether the component is already displayed and to prevent the proliferation bug.

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

### Show results in notifications

Displays the message of success or failure in the REST API runtime using the Notification component.  
The Notification is invoked using the Open method and the Type property to set the background color.  
This time, it is implemented to be displayed in the following cases.  

- If no record is found
- When the REST API fails to execute

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

## Conclusion

How did it work? This section explains how to create a search box using the kintone UI Component.  
We hope you can develop kintone customization with Kintone UI Component for convenience.

> This article will be reviewed by kintone and Google Chrome as of February, 2021.  
> In addition, the version of kintone UI Component that is used for customization is v1.0.0.
