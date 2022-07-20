export const MOBILE_TEXT_CSS = `
kuc-mobile-text {
  display: block;
  font-size: 13px;
  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
:lang(zh) kuc-mobile-text,
:lang(zh) kuc-mobile-text * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-mobile-text[hidden] {
  display: none;
}
.kuc-mobile-text__label {
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  padding: 0;
  margin: 0 0 4px 0;
  white-space: nowrap;
}
.kuc-mobile-text__label[hidden] {
  display: none;
}
.kuc-mobile-text__input-form {
  padding-left: 0.5em;
  padding-right: 0.5em;
  display: flex;
  align-items: center;
}
.kuc-mobile-text__input-form__prefix {
  margin-right: 4px;
  color: #888888;
}
.kuc-mobile-text__input-form__prefix[hidden] {
  display: none;
}
.kuc-mobile-text__input-form__input {
  width: 100%;
  min-width: 20px;
  padding: 0.4em;
  border: 1px solid #b3b3b3;
  outline: 0;
  box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;
  border-radius: 0.4em;
  box-sizing: border-box;
  text-align: left;
}
.kuc-mobile-text__input-form__input[aria-required="true"] {
  border: 1px solid #cf4a38;
}
.kuc-mobile-text__input-form__input[textAlign="right"] {
  text-align: right;
}
.kuc-mobile-text__input-form__input:disabled {
  color: #999999;
  background-color: #d5d7d9;
  -webkit-text-fill-color: #999999;
  opacity: 1;
  -webkit-opacity: 1;
}
.kuc-mobile-text__input-form__suffix {
  margin-left: 4px;
  color: #888888;
}
.kuc-mobile-text__input-form__suffix[hidden] {
  display: none;
}
`;
