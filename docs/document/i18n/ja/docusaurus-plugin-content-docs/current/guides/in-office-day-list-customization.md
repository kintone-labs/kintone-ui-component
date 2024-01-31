---
id: in-office-day-list-customization
title: In-office day list customization
sidebar_label: In-office day list customization
---

## 概要

今回は FieldGroup と Tooltip コンポーネントの活用とカスタマイズ方法について、In-Office Day List（出社日リスト）を題材に説明します。<br/>
このカスタマイズでは、FieldGroup 内に配置した Table コンポーネントでチームメンバーの出社日を確認できるリストを作成します。<br/>

以下のシナリオを想定しています。

1. FieldGroup と Tooltip の基本的な使い方
2. FieldGroup content に Table コンポーネントを追加する
3. 2種類の Tooltip を利用する

### 使用するコンポーネント

- [Dropdown](../components/desktop/dropdown.md)
- [FieldGroup](../components/desktop/field-group.md)
- [MultiChoice](../components/desktop/multichoice.md)
- [Table](../components/desktop/table.md)
- [Text](../components/desktop/text.md)
- [Tooltip](../components/desktop/tooltip.md)

## 事前準備

以下のフィールドを含むアプリを作成します。

- スペースフィールド（要素 ID：space）

## JavaScript/CSS カスタマイズ

kintone UI Component の UMD ファイルをアプリに読み込んだ上で、以下のような実装をした JavaScript ファイルをアップロードします。<br/>
ファイルのアップロード方法などは、 [Quick Start](../getting-started/quick-start.md) をご覧ください。

### FieldGroup と Tooltip の基本的な使い方

#### FieldGroup 内で Tooltip を利用する

"KUC team" というラベルの FieldGroup を作成し、Text コンポーネントを追加します。

```javascript
const fieldGroup = new Kuc.FieldGroup({
  label: "KUC team",
  content: new Kuc.Text({ text: "This is a FieldGroup" }),
});
```

FieldGroup に "Office day info" と表示する Tooltip を追加します。

```javascript
const tooltip = new Kuc.Tooltip({
  title: "Office day info",
  content: fieldGroup,
});
```

#### UI 上の表示

![render](/img/tooltip_field-group.gif)

### FieldGroup に Table コンポーネントを追加する

kintone の標準機能では FieldGroup 内にテーブルを持つことはできませんが、kintone UI Component を使うことで FieldGroup を開いた際にテーブルを表示することができます。

#### HTML Button に Tooltip を追加

HTML ボタンに Tooltip コンポーネントを追加し、"Submit changes or additions for this entry." (この入力の変更または追加を送信してください) というメッセージを出します。

```javascript
const button = document.createElement("button");
button.textContent = "Submit";

const tooltipForButton = new Kuc.Tooltip({
  title: "Submit changes or additions for this entry.",
  container: button,
  describeChild: true,
  placement: "bottom",
});
```

#### Table に Dropdown, Text, MultiChoice のコンポーネントと Tooltip が追加されたボタンを配置

名前（"Name"）、出社日（"In office day"）、ロケーション（"Location"）、メモ（"Note"）などの情報が入ったテーブルを作成し、Tooltip を追加したボタンも配置します。

```javascript
const renderName = (cellData) => {
  const input = document.createElement("input");
  input.type = "text";
  input.value = cellData;
  input.style.cssText = `
        border: 1px solid #e3e7e8;
        color: #333333;
        font-size: 14px;
        white-space: nowrap;
        height: 40px;
        padding: 0 8px;
        width: 177px;
        box-sizing: border-box;
        box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
      `;
  input.addEventListener("focus", () => {
    input.style.border = "1px solid #3498db";
  });
  input.addEventListener("blur", () => {
    input.style.border = "1px solid #e3e7e8";
  });
  return input;
};

const renderDay = (cellData) => {
  return new Kuc.MultiChoice({
    items: [
      {
        label: "Monday",
        value: "1",
      },
      {
        label: "Tuesday",
        value: "2",
      },
      {
        label: "Wednesday",
        value: "3",
      },
      {
        label: "Thursday",
        value: "4",
      },
      {
        label: "Friday",
        value: "5",
      },
    ],
    value: cellData,
  });
};

const renderLocation = (cellData) => {
  return new Kuc.Dropdown({
    items: [
      {
        label: "-----",
        value: "-",
      },
      {
        label: "Tokyo",
        value: "Tokyo",
      },
      {
        label: "Vietnam",
        value: "Vietnam",
      },
      {
        label: "Shanghai",
        value: "Shanghai",
      },
    ],
    value: cellData,
  });
};

const renderNote = (cellData) => {
  return new Kuc.Text({
    value: cellData,
  });
};

const renderAction = (cellData) => {
  const button = document.createElement("button");
  const tooltipForButton = new Kuc.Tooltip({
    title: "Submit changes or additions for this entry.",
    container: button,
    describeChild: true,
    placement: "bottom",
  });
  return tooltipForButton;
};

const kucTeamTable = new Kuc.Table({
  label: "team info",
  columns: [
    {
      title: "Name",
      field: "name",
      render: renderName,
    },
    {
      title: "In office day",
      field: "day",
      render: renderDay,
    },
    {
      title: "Location",
      field: "location",
      render: renderLocation,
    },
    {
      title: "Note",
      field: "note",
      render: renderNote,
    },
    {
      title: "Action",
      field: "action",
      render: renderAction,
    },
  ],
  data: [
    {
      name: "",
      day: [],
      location: "-",
      note: "",
    },
  ],
});
```

#### FieldGroup に Table コンポーネントを追加

"KUC team" というラベルの FieldGroup を作成し、Table コンポーネントを追加します。

```javascript
const kucTeamFieldGroup = new Kuc.FieldGroup({
  label: "KUC team",
  content: kucTeamTable,
});
```

#### FieldGroup に Tooltip を追加

FieldGroup に Tooltip を追加します。

```javascript
const kucTeamTooltip = new Kuc.Tooltip({
  title: "Office day info",
  container: kucTeamFieldGroup,
});
```

#### FieldGroup にイベントリスナーを追加

FieldGroup の開閉で Tooltip のメッセージを変えるため、FieldGroup にイベントリスナーを追加します。

```javascript
kucTeamFieldGroup.addEventListener("change", (e) => {
  if (e.detail.expanded) {
    kucTeamFieldGroup.title = "";
  } else {
    kucTeamFieldGroup.title = "Office day info";
  }
});
```

#### UI 上の表示

![render](/img/tooltip_fieldgroup_customize.gif)

### Tooltip の２種類のユースケース

ここでは [describeChild](../components/desktop/tooltip.md#property) というプロパティを紹介します。
このプロパティはデフォルトでは false に設定されています。<br/>
describeChild プロパティの使い方を理解することで、アプリケーションのアクセシビリティとユーザビリティを効果的に向上させることができます。<br/>
[スクリーンリーダー](https://developer.mozilla.org/ja/docs/Glossary/Screen_reader) を有効にして、フォーカスを動かしてスクリーンリーダーの読み取りを確認してみましょう。<br/>

#### Tooltip が要素の説明を表す場合

Tooltip が要素の説明を表す（要素についての追加情報や補足説明を提供する）場合は、describeChild を true に設定します。

```javascript
const tooltipForButton = new Kuc.Tooltip({
  title: "Submit changes or additions for this entry.",
  container: button,
  describeChild: true,
  placement: "bottom",
});
```

![render](/img/tooltip_describeChild_true.gif)

この例では、describeChild が true の場合、ボタンがフォーカスを得たときにスクリーンリーダーはまずボタン自体のコンテンツ "Submit" を読み、続けて Tooltip のタイトル "Submit changes or additions for this entry." を読み取ります。
これは describeChild が true にされている場合、Tooltip は [aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) を子要素（ボタン）に追加し、スクリーンリーダーはまず元のコンテンツを読み、そして [aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) のコンテンツを読み取るからです。

#### Tooltip が要素自体の目的を表す場合

Tooltip が要素自体の目的を表す（要素のラベルを提供する）場合は、describeChild を false に設定します。<br/>
例を見てみましょう。<br/>
この例では、input タグをテーブルの Name フィールドに設定していますが、input タグはスクリーンリーダーで "Name" という単語を読み取ることができません。しかし Tooltip を使うことでこの問題を解決することができます。<br/>
input コンポーネントに Tooltip を追加、Tooltip のタイトルを "Name" に設定、describeChild を false に設定して、スクリーンリーダーが何を読み取るかを確認します。<br/>

```javascript
const renderName = cellData => {
  const input = document.createElement('input');
  ...
  const tooltipForInput = new Kuc.Tooltip({
    title: 'Name',
    container: input,
    describeChild: false,
    placement: 'bottom'
  });
  return tooltipForInput;
};
```

![render](/img/tooltip_describeChild_false.gif)

今回 describeChild を false に設定すると、input にフォーカスが当たったときにスクリーンリーダーは Tooltip のタイトル "Name" の内容を読み取ります。<br/>
これは describeChild が false の場合、Tooltip は [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) を子要素 (input, FieldGroup) に追加し、スクリーンリーダーは [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) の内容を読み取るからです。<br/>

:::info
本記事は、 2024 年 2 月時点の kintone と Google Chrome で確認したものになります。<br/>
また、カスタマイズに使用した kintone UI Component のバージョンは、v1.16.0 です。
:::
