export const DATE_TIME_PICKER_CSS = `
kuc-datetime-picker,
kuc-datetime-picker *,
:lang(en) kuc-datetime-picker,
:lang(en) kuc-datetime-picker * {
  font-family: "HelveticaNeueW02-45Ligh", Arial,
    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
}
:lang(ja) kuc-datetime-picker,
:lang(ja) kuc-datetime-picker * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
:lang(zh) kuc-datetime-picker,
:lang(zh) kuc-datetime-picker * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-datetime-picker {
  font-size: 14px;
  display: inline-table;
  vertical-align: top;
  line-height: 1.5;
}
kuc-datetime-picker[hidden] {
  display: none;
}
.kuc-datetime-picker__group {
  border: none;
  padding: 0px;
  height: auto;
  display: inline-block;
  margin: 0px;
}
.kuc-datetime-picker__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-datetime-picker__group__label[hidden] {
  display: none;
}
.kuc-datetime-picker__group__inputs {
  display: flex;
  max-width: 185px;
}
`;
