export const DATE_PICKER_CSS = `
kuc-date-picker,
kuc-date-picker *,
:lang(en) kuc-date-picker,
:lang(en) kuc-date-picker * {
  font-family: "HelveticaNeueW02-45Ligh", Arial,
    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
}
:lang(ja) kuc-date-picker,
:lang(ja) kuc-date-picker * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
:lang(zh) kuc-date-picker,
:lang(zh) kuc-date-picker * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-date-picker {
  font-size: 14px;
  color: #333333;
  display: inline-table;
  vertical-align: top;
  max-width: 100px;
  width: 100px;
  line-height: 1.5;
}
kuc-date-picker[hidden] {
  display: none;
}
.kuc-date-picker__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}
.kuc-date-picker__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-date-picker__group__label[hidden] {
  display: none;
}
.kuc-date-picker__group input.kuc-base-date__input {
  width: 100px;
  height: 40px;
  padding: 0px;
  text-align: center;
  border: 1px solid #e3e7e8;
  box-sizing: border-box;
  font-size: 14px;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}

.kuc-date-picker__group input.kuc-base-date__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
.kuc-date-picker__group input.kuc-base-date__input--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: #333333;
}
.kuc-date-picker__group input.kuc-base-date__input:disabled {
  color: #888888;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
`;
