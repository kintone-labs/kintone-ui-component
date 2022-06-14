export const MOBILE_BUTTON_CSS = `
  kuc-mobile-button,
  kuc-mobile-button * {
    font-size: 14px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  :lang(zh) kuc-mobile-button,
  :lang(zh) kuc-mobile-button * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-button {
    display: inline-block;
    vertical-align: top;
  }
  kuc-mobile-button[hidden] {
    display: none;
  }
  .kuc-mobile-button__button {
    min-width: 100px;
    height: 42px;
    padding: 12px 12px;
    user-select: none;
    font-weight: 700;
    line-height: 1;
  }
  .kuc-mobile-button__button:focus {
    outline: none;
  }
  .kuc-mobile-button__button--submit {
    border: 2px solid #206694;
    background-color: #206694;
    color: #ffffff;
    border-radius: 6px;
  }
  .kuc-mobile-button__button--submit:disabled {
    border-color: #a5a5a5;
    background: #a5a5a5;
  }
  .kuc-mobile-button__button--normal {
    border: 2px solid #206694;
    background-color: #ffffff;
    color: #206694;
    border-radius: 6px;
  }
  .kuc-mobile-button__button--normal:disabled {
    color: #a5a5a5;
    border-color: #a5a5a5;
    cursor: default;
  }
`;
