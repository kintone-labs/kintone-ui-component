export const FIELD_GROUP_CSS = `
  kuc-field-group,
  kuc-field-group *,
  kuc-field-group:lang(en),
  kuc-field-group:lang(en) * {
    font-family: "HelveticaNeueW02-45Ligh", Arial,
      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  kuc-field-group:lang(ja),
  kuc-field-group:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-field-group:lang(zh),
  kuc-field-group:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-field-group:lang(zh-TW),
  kuc-field-group:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-field-group {
    display: inline-table;
    min-width: 517px;
  }
  .kuc-field-group__group {
    margin: 4px 8px;
    padding: 0 8px;
    border: 1px solid #e3e7e8;
    background-color: #f5f5f5;
  }
  .kuc-field-group__group h3 {
    margin: 0;
    padding: 0;
  }
  .kuc-field-group__trigger {
    border-style: none;
    position: relative;
    outline: none;
    margin: 12px 0 8px 8px;
    padding: 4px 8px 4px 24px;
    color: #333333;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: inherit;
    line-height: 1.5;
  }
  .kuc-field-group__trigger-disabled {
    color: rgba(0,0,0,.25);
    cursor: not-allowed;
  }
  .kuc-field-group__trigger-disabled:focus {
    outline: 0;
    border: none;
    pointer-events: none;
  }
  .kuc-field-group__trigger:focus {
    outline: 0;
    border: 1px solid #3498db;
  }
  .kuc-field-group__trigger--header {
    display: block;
    pointer-events: none;
  }
  .kuc-field-group__trigger--icon {
    border: solid currentcolor;
    border-width: 0 2px 2px 0;
    margin-left: 8px;
    height: 0.5rem;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
    width: 0.5rem;
  }
  .kuc-field-group__body {
    margin-left: 0;
    white-space: nowrap;
    word-wrap: normal;
    margin-bottom: 12px;
  }
  .kuc-field-group__trigger[aria-expanded='true'] .kuc-field-group__trigger--icon {
    transform: translateY(-60%) rotate(45deg);
  }
`;
