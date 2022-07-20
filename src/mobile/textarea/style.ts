export const MOBILE_TEXTAREA_CSS = `
  kuc-mobile-textarea {
    display: block;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  :lang(zh) kuc-mobile-textarea,
  :lang(zh) kuc-mobile-textarea * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-textarea[hidden] {
    display: none;
  }
  .kuc-mobile-textarea__label {
    padding: 0;
    margin: 0 0 4px 0;
    display: inline-block;
    font-weight: bold;
    line-height: 1.5;
    white-space: nowrap;
  }
  .kuc-mobile-textarea__label[hidden] {
    display: none;
  }
  .kuc-mobile-textarea__form {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  .kuc-mobile-textarea__form__textarea {
    width: 100%;
    height: 120px;
    padding: 0.4em;
    border: 1px solid #b3b3b3;
    outline: 0;
    box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;
    border-radius: 0.4em;
    box-sizing: border-box;
  }
  .kuc-mobile-textarea__form__textarea[aria-required="true"] {
    border: 1px solid #cf4a38;
  }
  .kuc-mobile-textarea__form__textarea:disabled {
    color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
`;
