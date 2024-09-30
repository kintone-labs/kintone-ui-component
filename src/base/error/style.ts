export const BASE_ERROR_CSS = `
  kuc-base-error,
  kuc-base-error *,
  kuc-base-error:lang(en),
  kuc-base-error:lang(en) * {
    font-family: sans-serif;
  }
  kuc-base-error:lang(es),
  kuc-base-error:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-error:lang(ja),
  kuc-base-error:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-base-error:lang(zh),
  kuc-base-error:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-base-error:lang(zh-TW),
  kuc-base-error:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-base-error {
    width: 100%;
    font-size: 14px;
    display: inline-table;
    vertical-align: top;
  }
  kuc-base-error[hidden] {
    display: none;
  }
  .kuc-base-error__error {
    line-height: 1.5;
    padding: 4px 18px;
    box-sizing: border-box;
    background-color: #e74c3c;
    color: #ffffff;
    margin: 8px 0px;
    word-break: break-all;
    white-space: normal;
  }
  .kuc-base-error__error[hidden] {
    display: none;
  }
`;
