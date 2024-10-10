export const BASE_MOBILE_LABEL_CSS = `
  kuc-base-mobile-label {
    display: inline-table;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-base-mobile-label:lang(es) ,
  kuc-base-mobile-label:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-mobile-label:lang(zh) ,
  kuc-base-mobile-label:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-base-mobile-label:lang(zh-TW),
  kuc-base-mobile-label:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-base-mobile-label[hidden] {
    display: none;
  }
  .kuc-base-mobile-label__text {
    text-shadow: 0 1px 0 #ffffff;
    color: #888888;
    white-space: normal;
    font-size: 86%;
  }
  .kuc-base-mobile-label__required-icon {
    font-size: 86%;
    position: relative;
    left: 3px;
    color: #d01212;
  }
  .kuc-base-mobile-label__required-icon[hidden] {
    display: none;
  }
`;
