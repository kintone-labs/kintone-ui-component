export const TEXT_CSS = `
kuc-text,
kuc-text *,
:lang(en) kuc-text,
:lang(en) kuc-text * {
  font-family: "HelveticaNeueW02-45Ligh", Arial,
    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
}
:lang(ja) kuc-text,
:lang(ja) kuc-text * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
:lang(zh) kuc-text,
:lang(zh) kuc-text * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-text {
  font-size: 14px;
  color: #333333;
  display: inline-table;
  vertical-align: top;
  min-width: 177px;
  width: 177px;
  line-height: 1.5;
}
kuc-text[hidden] {
  display: none;
}
.kuc-text__group {
  border: none;
  padding: 0px;
  height: auto;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  margin: 0px;
}
.kuc-text__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-text__group__label[hidden] {
  display: none;
}
.kuc-text__group__input-form {
  display: table;
  width: 100%;
}
.kuc-text__group__input-form__prefix-outer,
.kuc-text__group__input-form__input-outer,
.kuc-text__group__input-form__suffix-outer {
  display: table-cell;
}
.kuc-text__group__input-form__prefix-outer__prefix {
  padding-right: 4px;
  white-space: nowrap;
}
.kuc-text__group__input-form__input-outer {
  min-width: 26px;
  width: 100%;
}
input[type="text"].kuc-text__group__input-form__input-outer__input {
  width: var(--kuc-text-input-width, 100%);
  height: var(--kuc-text-input-height, 40px);
  font-size: var(--kuc-text-input-font-size, 14px);
  color: var(--kuc-text-input-color, #000000);
  min-width: 100%;
  padding: 0 8px;
  border: 1px solid #e3e7e8;
  box-sizing: border-box;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}
.kuc-text__group__input-form__input-outer__input[textAlign="left"] {
  text-align: left;
}
.kuc-text__group__input-form__input-outer__input[textAlign="right"] {
  text-align: right;
}
.kuc-text__group__input-form__input-outer__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
.kuc-text__group__input-form__input-outer__input:disabled {
  color: #888888;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
.kuc-text__group__input-form__suffix-outer__suffix {
  padding-left: 4px;
  white-space: nowrap;
}
`;
