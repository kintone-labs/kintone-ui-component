export const FIELD_GROUP_CSS = `
  kuc-field-group .kuc-field-group__group__toggle .kuc-base-label__text,
  kuc-field-group:lang(en) .kuc-field-group__group__toggle .kuc-base-label__text {
    font-family: sans-serif;
  }
  kuc-field-group:lang(es) .kuc-field-group__group__toggle .kuc-base-label__text {
    font-family: sans-serif;
  }
  kuc-field-group:lang(ja) .kuc-field-group__group__toggle .kuc-base-label__text {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-field-group:lang(zh) .kuc-field-group__group__toggle .kuc-base-label__text {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-field-group:lang(zh-TW) .kuc-field-group__group__toggle .kuc-base-label__text {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-field-group {
    display: inline-table;
  }
  kuc-field-group[hidden] {
    display: none;
  }
  .kuc-field-group__group {
    min-width: 517px;
    padding: 0px 8px;
    border: 1px solid #e3e7e8;
    background-color: #f5f5f5;
  }
  .kuc-field-group__group h3 {
    margin: 0px;
    padding: 0px;
  }
  .kuc-field-group__group__toggle {
    display: flex;
    align-items: center;
    border-style: none;
    position: relative;
    outline: none;
    margin: 12px 0px 12px 8px;
    min-height: 34px;
    padding: 4px 8px 4px 24px;
    color: #333333;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: inherit;
    line-height: 1.5;
  }
  .kuc-field-group__group__toggle:disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .kuc-field-group__group__toggle:disabled .kuc-base-label__text {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .kuc-field-group__group__toggle .kuc-base-label__text {
    font-size: 16px;
  }
  .kuc-field-group__group__toggle:disabled:focus {
    outline: 0;
    border: 1px solid transparent;
  }
  .kuc-field-group__group__toggle:focus {
    outline: 0;
    border: 1px solid #3498db;
  }
  .kuc-field-group__group__toggle svg {
    position: absolute;
    left: 8px;
  }
  .kuc-field-group__group__body {
    padding: 0px 8px;
    margin-left: 0px;
    white-space: nowrap;
    word-wrap: normal;
    margin-bottom: 12px;
  }
`;
