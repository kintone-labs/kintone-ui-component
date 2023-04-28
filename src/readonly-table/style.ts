export const READ_ONLY_TABLE_CSS = `
  kuc-readonly-table ,
  kuc-readonly-table  *,
  kuc-readonly-table:lang(en),
  kuc-readonly-table:lang(en) * {
      font-family: "HelveticaNeueW02-45Ligh", Arial,
      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
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
    border-color: #3498db;
    border-style: solid;
  }
  .kuc-readonly-table__table__label {
    text-align: left;
    white-space: nowrap;
    padding: 4px 0px;
  }
  .kuc-readonly-table__table__label[hidden] {
    display: none;
  }
  .kuc-readonly-table__table__header__cell {
    background-color: #3498db;
    color: #ffffff;
    height: 40px;
    box-sizing: border-box;
    text-align: left;
    white-space: nowrap;
    word-wrap: break-word;
    padding: 4px 8px;
    font-weight: 400;
    font-size: 12px;
  }
  .kuc-readonly-table__table__header__cell[hidden] {
    display: none;
  }
  .kuc-readonly-table__table__body {
    vertical-align: top;
  }
  .kuc-readonly-table__table__body__row__cell-data {
    overflow: hidden;
    box-sizing: border-box;
    padding: 4px 8px;
    white-space: pre-wrap;
    word-wrap: break-word;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 1px;
  }
  .kuc-readonly-table__table__body__row__cell-data[hidden] {
    display: none;
  }
`;
