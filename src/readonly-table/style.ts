export const READ_ONLY_TABLE_CSS = `
  kuc-readonly-table,
  kuc-readonly-table *,
  :lang(en) kuc-readonly-table,
  :lang(en) kuc-readonly-table * {
    font-family: "HelveticaNeueW02-45Ligh", Arial,
      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  :lang(ja) kuc-readonly-table,
  :lang(ja) kuc-readonly-table * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  :lang(zh) kuc-readonly-table,
  :lang(zh) kuc-readonly-table * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-readonly-table {
    font-size: 14px;
    color: #333333;
    display: block;
  }
  kuc-readonly-table[hidden] {
    display: none;
  }
  .kuc-readonly-table__table {
    border-collapse: collapse;
  }
  .kuc-readonly-table__table__header {
    border-width: 0px 1px;
    border-color: #3498db;
    border-style: solid;
  }
  .kuc-readonly-table__label {
    display: inline-block;
    white-space: nowrap;
    padding: 4px 0px 8px 0px;
  }
  .kuc-readonly-table__label[hidden] {
    display: none;
  }
  .kuc-readonly-table__table__header__cell {
    background-color: #3498db;
    color: #ffffff;
    height: 40px;
    box-sizing: border-box;
    text-align: left;
    min-width: 193px;
  }
  .kuc-readonly-table__table__header__cell[hidden] {
    display: none;
  }
  .kuc-readonly-table__table__header__cell__label {
    padding: 4px 8px;
    font-weight: 400;
    font-size: 12px;
  }
  .kuc-readonly-table__table__body__row-0
    > .kuc-readonly-table__table__body__row__cell-data {
    border-width: 0 1px 1px 1px;
  }
  .kuc-readonly-table__table__body__row__cell-data {
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 1px;
    padding: 4px 8px;
  }
  .kuc-readonly-table__table__body__row__cell-data[hidden] {
    display: none;
  }
  .kuc-readonly-table__pager__pagenation-prev {
    border: none;
    background-color: transparent;
    visibility: visible;
  }
  .kuc-readonly-table__pager__pagenation-next {
    border: none;
    background-color: transparent;
    visibility: visible;
  }
  .pager-disable {
    visibility: hidden;
  }
`;
