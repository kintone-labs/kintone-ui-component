---
id: release-notes-v1.3.2
title: v1.3.2 Release Notes
sidebar_label: v1.3.2 Release Notes
---

## 概要

[kintone UI Component v1.3.2](https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.3.2) のリリースノートです。<br/>
不具合修正を行いました。

## アップデート内容
### 不具合修正
- DateTimePicker, DatePicker, TimePicker コンポーネントで、変更された値を `value` プロパティと change イベントオブジェクトで取得できるように修正
- DatePicker と DateTimePicker コンポーネントで、UI 上で入力をクリアするときに `value` が空文字となるように修正
- Mobile コンポーネントのラベルのフォントサイズを修正
- Dropdown コンポーネントで、Escape キーを押した時にリストを閉じることができるように修正
- 選択肢系コンポーネントと date/time シリーズコンポーネントで、無効な値から有効な値に変更した後にエラーが表示されないように修正
- 選択肢系コンポーネントで、セッターによって空文字または空配列を `value` プロパティに設定するときに UI に反映できるように修正
