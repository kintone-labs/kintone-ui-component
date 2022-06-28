export const DROPDOWN_CSS = `
  kuc-dropdown,
  kuc-dropdown *,
  :lang(en) kuc-dropdown,
  :lang(en) kuc-dropdown * {
    font-family: "HelveticaNeueW02-45Ligh", Arial,
      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  :lang(ja) kuc-dropdown,
  :lang(ja) kuc-dropdown * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  :lang(zh) kuc-dropdown,
  :lang(zh) kuc-dropdown * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-dropdown {
    display: inline-table;
    font-size: 14px;
    color: #333333;
    vertical-align: top;
    width: 180px;
    min-width: 180px;
    line-height: 1.5;
  }
  kuc-dropdown[hidden] {
    display: none;
  }
  .kuc-dropdown__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
    position: relative;
  }
  .kuc-dropdown__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-dropdown__group__label[hidden] {
    display: none;
  }
  .kuc-dropdown__group__toggle {
    height: 40px;
    box-sizing: border-box;
    box-shadow: 1px 1px 1px #ffffff inset;
    border: 1px solid #e3e7e8;
    color: #3498db;
    background-color: #f7f9fa;
    padding: 0 0 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
  }
  .kuc-dropdown__group__toggle:focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-dropdown__group__toggle:disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-dropdown__group__toggle__selected-item-label {
    font-size: 14px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .kuc-dropdown__group__toggle__icon {
    flex: none;
    width: 38px;
    height: 38px;
  }
  .kuc-dropdown__group__select-menu {
    position: absolute;
    min-width: 280px;
    margin: 0;
    padding: 8px 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    z-index: 2000;
    list-style: none;
    box-sizing: border-box;
  }
  .kuc-dropdown__group__select-menu[hidden] {
    display: none;
  }
  .kuc-dropdown__group__select-menu__item {
    padding: 8px 16px 8px 24px;
    line-height: 1;
    position: relative;
    cursor: pointer;
  }
  .kuc-dropdown__group__select-menu__item__icon {
    position: absolute;
    top: 50%;
    left: 6px;
    margin-top: -5px;
  }
  .kuc-dropdown__group__select-menu__item[aria-selected="true"] {
    color: #3498db;
  }
  .kuc-dropdown__group__select-menu__highlight[role="option"] {
    background-color: #e2f2fe;
  }
`;
