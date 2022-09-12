export const MULTICHOICE_CSS = `
  kuc-multi-choice,
  kuc-multi-choice *,
  :lang(en) kuc-multi-choice,
  :lang(en) kuc-multi-choice * {
    font-family: "HelveticaNeueW02-45Ligh", Arial,
      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  :lang(ja) kuc-multi-choice,
  :lang(ja) kuc-multi-choice * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  :lang(zh) kuc-multi-choice,
  :lang(zh) kuc-multi-choice * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-multi-choice {
    display: inline-table;
    font-size: 14px;
    color: #333333;
    width: 180px;
    min-width: 180px;
    line-height: 1.5;
  }
  kuc-multi-choice[hidden] {
    display: none;
  }
  .kuc-multi-choice__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    margin: 0px;
  }
  .kuc-multi-choice__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-multi-choice__group__label[hidden] {
    display: none;
  }
  .kuc-multi-choice__group__menu {
    position: relative;
    background: #ffffff;
    border: 1px solid #e3e7e8;
    box-sizing: border-box;
    box-shadow: 1px 1px 12px #f5f5f5 inset, -1px -1px 12px #f5f5f5 inset;
    padding: 6px 0;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 134px;
    width: 100%;
  }
  .kuc-multi-choice__group__menu:not([disabled]):focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-multi-choice__group__menu[disabled] {
    background-color: #dbdcdd;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
    outline: none;
  }
  .kuc-multi-choice__group__menu__item {
    padding: 4px 16px;
    margin-bottom: 2px;
    line-height: 1;
    position: relative;
    white-space: nowrap;
  }
  .kuc-multi-choice__group__menu__item__icon {
    position: absolute;
    top: 50%;
    left: 16px;
    margin-top: -6px;
    pointer-events: none;
  }
  .kuc-multi-choice__group__menu__item[aria-selected="true"] {
    color: #3498db;
    padding-left: 32px;
  }
  .kuc-multi-choice__group__menu[disabled]
    .kuc-multi-choice__group__menu__item[aria-selected="true"] {
    color: #888888;
  }
  .kuc-multi-choice__group__menu__highlight[role="option"] {
    background-color: #e2f2fe;
    cursor: pointer;
  }
`;
