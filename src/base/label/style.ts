export const BASE_LABEL_CSS = `
  kuc-base-label,
  kuc-base-label *,
  kuc-base-label:lang(en),
  kuc-base-label:lang(en) * {
    font-family: sans-serif;
  }
  kuc-base-label:lang(es),
  kuc-base-label:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-label:lang(ja),
  kuc-base-label:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
  }
  kuc-base-label:lang(zh),
  kuc-base-label:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
  }
  kuc-base-label:lang(zh-TW),
  kuc-base-label:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-base-label {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    vertical-align: top;
  }
  kuc-base-label[hidden] {
    display: none;
  }
  .kuc-base-label__required-icon {
    font-size: 20px;
    vertical-align: -3px;
    color: #e74c3c;
    margin-left: 4px;
    line-height: 1;
  }
  .kuc-base-label__required-icon[hidden] {
    display: none;
  }
`;
