export const RADIOBUTTON_CSS = `
  kuc-radio-button,
  kuc-radio-button *,
  :lang(en) kuc-radio-button,
  :lang(en) kuc-radio-button * {
    font-family: "HelveticaNeueW02-45Ligh", Arial,
      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  :lang(ja) kuc-radio-button,
  :lang(ja) kuc-radio-button * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  :lang(zh) kuc-radio-button,
  :lang(zh) kuc-radio-button * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-radio-button {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    min-width: 239px;
    vertical-align: top;
    line-height: 1.5;
  }

  kuc-radio-button[hidden] {
    display: none;
  }

  .kuc-radio-button__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    margin: 0px;
    width: 100%;
  }

  .kuc-radio-button__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    white-space: nowrap;
  }

  .kuc-radio-button__group__label[hidden] {
    display: none;
  }

  .kuc-radio-button__group__select-menu {
    display: block;
    min-width: 239px;
    width: 100%;
  }

  .kuc-radio-button__group__select-menu[bordervisible] {
    border-color: #e3e7e8;
    border-width: 1px;
    border-style: solid;
    padding-top: 4px;
    box-sizing: border-box;
  }

  .kuc-radio-button__group__select-menu__item {
    margin-left: 4px;
    margin-bottom: 4px;
    margin-right: 16px;
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    display: inline-block;
    height: 24px;
    line-height: 24px;
  }

  .kuc-radio-button__group__select-menu__item[itemlayout="vertical"] {
    display: block;
  }

  .kuc-radio-button__group__select-menu__item[focused] {
    border: 1px solid #3498db;
  }

  .kuc-radio-button__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .kuc-radio-button__group__select-menu__item__input:hover
    + .kuc-radio-button__group__select-menu__item__label {
    color: #666666;
  }

  .kuc-radio-button__group__select-menu__item__label__icon {
    position: absolute;
    top: 50%;
    left: -30px;
    box-sizing: border-box;
    margin-top: -11px;
    width: 21px;
    height: 21px;
    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
    content: "";
    border-radius: 9px;
  }

  .kuc-radio-button__group__select-menu__item__input[disabled]
    + .kuc-radio-button__group__select-menu__item__label {
    color: #888888;
    cursor: not-allowed;
  }

  .kuc-radio-button__group__select-menu__item__label {
    cursor: pointer;
    position: relative;
    margin-left: 32px;
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
  }
`;
