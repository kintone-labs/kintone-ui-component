---
id: version-1.3.0-bulk-update-customization
title: Bulk update customization
sidebar_label: Bulk update customization
original_id: bulk-update-customization
---

## 概要

プロセス管理利用時、ステータス承認が必要なレコードが溜まってきたケースを想定します。<br>
複数レコードの個別承認は手間がかかるので、レコード一覧画面から一括で承認ができるようにカスタマイズします。<br>
UI 周りに KUC を使用することで、kintone にマッチする画面をスピーディーに作成できます。

### 使用するコンポーネント
- [Button](../components/desktop/button.md)
- [Notification](../components/desktop/notification.md)
- [Spinner](../components/desktop/spinner.md)

## 完成イメージ

以下が、画面の完成イメージです。

![Bulk Update](assets/bulk_update.png)

## 事前準備

一括承認専用のレコード一覧を作成します。「（作業者が自分）」の一覧を使用することもできますが、今回はわかりやすい一覧を別途作成します。<br>
例として、ステータスが「In progress」、作業者がログインユーザーのレコードのみが表示される一覧を作成します。

## JavaScript/CSS カスタマイズ

kintone UI Component の UMD ファイルをアプリに読み込んだ上で、以下のような実装をした JavaScript ファイル（bulkUpdate.js）をアップロードします。<br>
ファイルのアップロード方法などは、[Quick Start](../getting-started/quick-start.md) をご覧ください。<br>

今回は、確認画面の作成に SweetAlert2 を使用するので、別途以下ファイルを読み込みます。
- https://js.cybozu.com/sweetalert2/v11.1.9/sweetalert2.min.js
- https://js.cybozu.com/sweetalert2/v11.1.9/sweetalert2.min.css

今後のバージョンアップデートで Dialog コンポーネントの提供を予定しているので、確認画面の実装は将来的にはそちらで置き換えることも可能です。

***bulkUpdate.js***

```javascript
(() => {
  'use strict';
  kintone.events.on('app.record.index.show', (event) => {
    if (event.viewId !== 6342505) {
      return event;
    }

    // Prevent duplication bug with ID granted by property
    if (document.getElementById('kuc_button') !== null) {
      return event;
    }

    const header = kintone.app.getHeaderMenuSpaceElement();
    const button = new Kuc.Button({
      type: 'submit',
      text: 'Bulk approval',
      id: 'kuc_button'
    });
    header.appendChild(button);

    const appId = kintone.app.getId();

    button.addEventListener('click', () => {

      // When there is no records being processed
      if (event.records.length === 0) {
        const updateAlert = new Kuc.Notification({
          text: 'There are no records being processed.'
        });
        updateAlert.open();
        return event;
      }

      Swal.fire({
        title: 'Are you sure to approve the displayed records in bulk?',
        icon: 'question',
        showCancelButton: true,
      }).then((resp) => {

        // When Cancel is pressed
        if (!resp.isConfirmed) {
          const cancelInfo = new Kuc.Notification({
            text: 'Canceled.',
            type: 'info'
          });
          cancelInfo.open();
          return event;
        }

        // Start bulk approval
        const spinner = new Kuc.Spinner({
          text: 'now loading...'
        });
        spinner.open();

        const records =  event.records.map(record => {
          let obj = {};
          obj.id = record.$id.value;
          obj.action = 'Approve';
          return obj;
        });
        const param = {
          'app': appId,
          'records': records
        };

        kintone.api(kintone.api.url('/k/v1/records/status', true), 'PUT', param).then(() => {

          const successInfo = new Kuc.Notification({
            text: 'Bulk approval was successful!  \nPlease reload the screen.',
            type: 'info'
          });
          successInfo.open();

          // Finish bulk approval
          spinner.close();

        }).catch(error => {
          // Process when REST API error occurs
          let errmsg = 'An error occurred while retrieving the record.';
          if (error.message) {
            errmsg += ' ' + error.message;
          }
          const updateError = new Kuc.Notification({
            text: errmsg
          });
          updateError.open();
          spinner.close();
        });
      });
    });
  });
})();
```
---
### 一覧画面にボタンを設置
---

KUC の Button コンポーネントを利用して、レコード一覧画面に Bulk approval ボタンを設置します。<br>
ここでは、各一覧が持つ view ID を利用して、一括承認専用の一覧にのみボタンを表示させています。<br>
※ view ID はレコード一覧画面の URL から取得できます。

```javascript
if (event.viewId !== 6342505) {
  return event;
}  
```

---
### Bulk approval ボタンクリック時の処理
---

Bulk approval ボタンをクリックした時の動作です。<br>
対象のレコードがない場合は、確認ダイアログを表示させる前に処理を中断します。<br>
確認ダイアログでキャンセルを押した時も、処理を中断します。<br>
メッセージの表示には Notification コンポーネントを使用しています。

```javascript
// When Cancel is pressed
if (!resp.isConfirmed) {
  const cancelInfo = new Kuc.Notification({
    text: 'Canceled.',
    type: 'info'
    });
  cancelInfo.open();
  return event;
}
```

今回は複数レコードの一括処理なので、更新に時間がかかる場合があります。<br>
そのため、更新中に表示するローディング画面を実装してみます。<br>
ローディング画面の実装には、 KUC の Spinner コンポーネントを使います。<br>

open() メソッドで、ローディングが始まります。

```javascript
// Start bulk approval
  const spinner = new Kuc.Spinner({
    text: 'now loading...'
  });
  spinner.open();
```

一括更新処理に使うパラメーターを作成します。

一覧画面で表示中のレコードをループさせて、レコード ID とプロセス管理で設定されたアクション名を持ったオブジェクトを含む配列データを作成します。<br>
obj.acton には、プロセス管理で設定されたアクション名を記述します。<br>
更新対象は、一覧画面で表示中のレコードのみであることにご注意ください。

```javascript
const records =  event.records.map(record => {
  let obj = {};
  obj.id = record.$id.value;
  obj.action = 'Approve';
  return obj;
});
const param = {
  'app': appId,
  'records': records
};
```

更新に成功したら、 Notification でメッセージを表示させます。<br>
メッセージ内容には、更新が成功したことと画面リロードが必要なことを記載します。<br>
Spinner の close() メソッドを使って、ローディング画面を終了させることを忘れないでください。

```javascript
const successInfo = new Kuc.Notification({
  text: 'Bulk approval was successful!  \nPlease reload the screen.',
  type: 'info'
});
successInfo.open();

// Finish bulk approval
spinner.close();
```

---
### エラーメッセージの表示
---

処理中にエラーが発生した場合、 Notification を使ってメッセージを表示しています。

```javascript
}).catch(error => {
  // Process when REST API error occurs
  let errmsg = 'An error occurred while retrieving the record.';
  if (error.message) {
    errmsg += ' ' + error.message;
  }
  const updateError = new Kuc.Notification({
    text: errmsg
  });
  updateError.open();
  spinner.close();
});
```

> 本記事は、 2021 年 10 月時点の kintone と Google Chrome で確認したものになります。<br>
> また、カスタマイズに使用した kintone UI Component のバージョンは、v1.1.0 です。