---
id: cleaning-check-list-customization
title: Cleaning check list customization
sidebar_label: Cleaning check list customization
---

## 概要

レコード一覧画面にコンポーネントを表示させて、レコード追加画面を開くことなく、レコードを作成するカスタマイズを、清掃の点検項目を具体例として説明します。<br/>
また、ここでは、コンポーネントの値を kintone のフィールドに受け渡す方法を学ぶことができます。

### 使用するコンポーネント
- [RadioButton](../components/desktop/radio-button.md)
- [Checkbox](../components/desktop/checkbox.md)
- [Dropdown](../components/desktop/dropdown.md)
- [Button](../components/desktop/button.md)
- [Notification](../components/desktop/notification.md)

## 完成イメージ

以下が、画面の完成イメージです。

![Cleaning Check List](/img/cleaning_check_list.png)

## JavaScript/CSS カスタマイズ

kintone UI Component の UMD ファイルをアプリに読み込んだ上で、以下のような実装をした JavaScript ファイルをアップロードします。<br/>
ファイルのアップロード方法などは、[Quick Start](../getting-started/quick-start.md) をご覧ください。

### 点検項目の表示

アプリのレコード一覧画面に、Check Status, Replenishment Item, Cleaning Status という点検項目を表示します。<br/>

ワンポイント解説です。
- Checkbox や Dropdown コンポーネントでは、Item.label が未指定の場合 Item.value の値が表示されます。
- 各コンポーネントに必須項目のアイコンを表示する場合、requiredIcon プロパティの値を true にします。
- RadioButton コンポーネントや Dropdown コンポーネントで初期値を設定する場合は、value プロパティに値を指定します。
  - ここでは、RadioButton コンポーネントの value プロパティに 'Done', Dropdown コンポーネントの value プロパティに '-----' を指定します。

```javascript
kintone.events.on('app.record.index.show', (event) => {

  // Prevent components duplication bug
  if (document.getElementById('kuc_radiobutton') || document.getElementById('kuc_checkbox') || document.getElementById('kuc_dropdown')
    || document.getElementById('kuc_button')) {
    return event;
  }

  const app = kintone.app.getId();
  const header = kintone.app.getHeaderSpaceElement();

  // Display RadioButton
  const radiobutton = new Kuc.RadioButton({
    id: 'kuc_radiobutton',
    label: 'Check Status',
    items: [
      {
        value: 'Done'
      },
      {
        value: 'Not Yet'
      }
    ],
    value: 'Done',
    requiredIcon: true
  });

  // Display Checkbox
  const checkbox = new Kuc.Checkbox({
    id: 'kuc_checkbox',
    label: 'Replenishment Item',
    items: [
      {
        value: 'Toilet Paper'
      },
      {
        value: 'Hand Soap'
      },
      {
        value: 'Hand Paper'
      }
    ],
    requiredIcon: true
  });

  // Display Dropdown
  const dropdown = new Kuc.Dropdown({
    id: 'kuc_dropdown',
    label: 'Cleaning Status',
    items: [
      {
        value: '-----'
      },
      {
        value: 'Done'
      },
      {
        value: 'Not Yet'
      },
      {
        value: 'Asking Cleaner'
      }
    ],
    value: '-----',
    requiredIcon: true
  });

  // Display Button
  const button = new Kuc.Button({
    id: 'kuc_button',
    text: 'Save',
    type: 'submit'
  });
  header.appendChild(radiobutton);
  header.appendChild(checkbox);
  header.appendChild(dropdown);
  header.appendChild(button);
```
### CSS を使ったボタンの間隔の調整

Button コンポーネントの id プロパティに値を付与して、CSS でボタンの間隔を調整します。

```css
@charset "UTF-8";
#kuc_button {
  margin: 25px 0px 0px 5px;
}
```

### Save ボタンクリック時の処理

Button コンポーネントは、click イベントを指定することができます。<br/>
Save ボタンをクリックしたときに、必須項目の値の有無をチェックしています。

チェックの結果、値がない場合は、各コンポーネントにエラーメッセージを表示します。<br/>
※ 最初に空文字を入れてエラーメッセージを初期化しています。


```javascript
button.addEventListener('click', () => {
  // Reset error messages
  checkbox.error = '';
  dropdown.error = '';

  // Check required itmes
  let erorrFlag = false;

  if (!checkbox.value.length) {
    checkbox.error = 'Please check';
    erorrFlag = true;
  }
  if (dropdown.value === '-----') {
    dropdown.error = 'Please select';
    erorrFlag = true;
  }

  if (erorrFlag) {
    return;
  }
```
必須項目の値の有無をチェックしたあと、レコードを登録します。<br/>

画面上で入力された必須項目の値は、\<コンポーネントの変数名.value\> で取得できます。<br/>
今回のカスタマイズでは、radiobutton.value、checkbox.value、dropdown.value で各コンポーネントに入力された値を取得しています。

登録に成功したら、Notification コンポーネントでメッセージを表示しています。


```javascript
// Create request paramerter
const postParam = {
  app,
  record: {
    'status': {
      value: radiobutton.value
      },
    'item': {
      value: checkbox.value
    },
    'cleaning': {
      value: dropdown.value
    }
  }
};

// Register record
kintone.api(kintone.api.url('/k/v1/record', true), 'POST', postParam).then((resp) => {
  // Display success message
  const success = new Kuc.Notification({
    text: 'Registered check items',
    type: 'success'
  });
  success.open();
})
```

### エラーメッセージの表示

処理中にエラーが発生した場合、Notification コンポーネントを使ってメッセージを表示しています。

```javascript
}).catch((error) => {
  console.log(error);

  // Display error message
  let errmsg = 'An error occurred.';
  if (error.message) {
    errmsg += ' ' + error.message;
  }
  const alert = new Kuc.Notification({
    text: errmsg
  });
  alert.open();
});
```

:::info
本記事は、 2021 年 ９ 月時点の kintone と Google Chrome で確認したものになります。<br/>
また、カスタマイズに使用した kintone UI Component のバージョンは、v1.1.0 です。
:::