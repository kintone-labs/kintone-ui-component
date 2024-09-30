export const READ_ONLY_TABLE_CSS = `
  kuc-readonly-table ,
  kuc-readonly-table  *,
  kuc-readonly-table:lang(en),
  kuc-readonly-table:lang(en) * {
    font-family: sans-serif;
  }
  kuc-readonly-table:lang(es),
  kuc-readonly-table:lang(es) * {
    font-family: sans-serif;
  }
  kuc-readonly-table:lang(ja),
  kuc-readonly-table:lang(ja) * {
      font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-readonly-table:lang(zh),
  kuc-readonly-table:lang(zh) * {
      font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-readonly-table:lang(zh-TW),
  kuc-readonly-table:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
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
    table-layout: fixed;
    width: 100%;
    display: inline-block;
  }
  .kuc-readonly-table__table__header {
    border-width: 0px 1px;
    border-color: var(--kuc-readonly-table-header-background-color, #3498db);
    border-style: solid;
  }
  .kuc-readonly-table__table__label {
    text-align: left;
    white-space: normal;
    overflow-wrap: anywhere;
    padding: 4px 0px;
  }
  .kuc-readonly-table__table__label[hidden] {
    display: none;
  }
  .kuc-readonly-table__table__label--no-column {
    overflow-wrap: break-word;
  }
  .kuc-readonly-table__table__header__cell {
    background-color: var(--kuc-readonly-table-header-background-color, #3498db);
    color: var(--kuc-readonly-table-header-color, #ffffff);
    height: var(--kuc-readonly-table-header-height, 40px);
    box-sizing: border-box;
    text-align: left;
    overflow: auto;
    white-space: nowrap;
    word-wrap: break-word;
    padding: 4px 8px;
    font-weight: 400;
    font-size: var(--kuc-readonly-table-header-font-size, 12px);
  }
  .kuc-readonly-table__table__header__cell[hidden] {
    display: none;
  }
  .kuc-readonly-table__table__body {
    vertical-align: top;
  }
  .kuc-readonly-table__table__body__row__cell-data {
    box-sizing: border-box;
    padding: 4px 8px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 1px;
  }
  .kuc-readonly-table__table__body__row__cell-data[hidden] {
    display: none;
  }
  .kuc-readonly-table__table__header__cell,
  .kuc-readonly-table__table__body__row__cell-data {
    scrollbar-width: none; /* Firefox */
  }
  .kuc-readonly-table__table__header__cell::-webkit-scrollbar,
  .kuc-readonly-table__table__body__row__cell-data::-webkit-scrollbar {
    width: 0; /* Safari and Chrome */
    display: none
  }
  .kuc-readonly-table__table__body__row__cell-data--html {
    white-space: normal;
  }
`;
