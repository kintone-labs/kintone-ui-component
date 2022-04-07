---
id: version-1.3.2-release-notes
title: v1.3.2 Release Notes
sidebar_label: v1.3.2 Release Notes
original_id: release-notes
---

## 概要

[kintone UI Component v1.3.2](https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.3.2) のリリースノートです。<br>
不具合修正を行いました。

## アップデート内容
### 不具合修正
- DateTimePicker, DatePicker, TimePicker コンポーネントで、変更された値を `value` プロパティで取得できるように修正
- DateTimePicker と DatePickerUI コンポーネントで、UI上で入力をクリアするときに、値が空の文字列になるように修正
- Mobile コンポーネントのラベルのフォントサイズを修正
- Dropdown コンポーネントで、エスケープキーを押した時にリストを閉じることができるように修正
- 選択肢系コンポーネントと date/time シリーズコンポーネントで、無効な値から有効な値に変更した後にエラーが表示されないように修正
- 選択肢系コンポーネントで、セッターで空の文字列または空の配列を `value` プロパティに設定するときに、UI に反映できるように修正
