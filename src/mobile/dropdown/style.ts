export const MOBILE_DROPDOWN_CSS = `
  kuc-mobile-dropdown,
  kuc-mobile-dropdown * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }

  :lang(zh) kuc-mobile-dropdown,
  :lang(zh) kuc-mobile-dropdown * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }

  kuc-mobile-dropdown {
    display: inline-block;
    width: 100%;
  }

  kuc-mobile-dropdown[hidden] {
    display: none;
  }

  .kuc-mobile-dropdown__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }

  .kuc-mobile-dropdown__label[hidden] {
    display: none;
  }

  .kuc-mobile-dropdown__input-form {
    word-wrap: break-word;
    min-height: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  .kuc-mobile-dropdown__input-form__select {
    display: inline-block;
    border-radius: 0.4em;
    max-width: 100%;
  }

  .kuc-mobile-dropdown__input-form__select.kuc--required {
    border: 1px solid #cf4a38;
  }

  .kuc-mobile-dropdown__input-form__select__input {
    min-width: 100px;
    max-width: 100%;
  }

  .kuc-mobile-dropdown__input-form__select__input:disabled {
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
`;
