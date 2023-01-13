export const TOOLTIP_CSS = `
  kuc-tooltip,
  kuc-tooltip *,
  kuc-tooltip:lang(en),
  kuc-tooltip:lang(en) * {
    font-family: "HelveticaNeueW02-45Ligh", Arial,
      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  kuc-tooltip:lang(ja),
  kuc-tooltip:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-tooltip:lang(zh),
  kuc-tooltip:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-tooltip:lang(zh-TW),
  kuc-tooltip:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  .kuc-tooltip__group {
    position: relative;
    display: inline-block;
  }
  .kuc-tooltip__group .kuc-tooltip__text {
    visibility: hidden;
    min-width: 50px;
    min-width: 10px;
    transition: opacity 0.25s;
    background-color: var(--kuc-tooltip-background-color, #333333e6);
    color: #fff;
    text-align: var(--kuc-tooltip-text-align, "center");
    border-radius: 4px;
    padding: 4px 8px;
    position: absolute;
    z-index: 1;
  }
  .kuc-tooltip__group .kuc-tooltip__text.left {
    width: 100%;
    right: calc(100% + 5px);
  }
  .kuc-tooltip__group .kuc-tooltip__text.top {
    width: calc(100% - 16px);
    bottom: 100%;
  }
  .kuc-tooltip__group .kuc-tooltip__text.right {
    width: 100%;
    left: calc(100% + 5px);
  }
  .kuc-tooltip__group .kuc-tooltip__text.bottom {
    width: calc(100% - 16px);
    top: 100%;
  }
  .kuc-tooltip__group .kuc-tooltip__text::after {
    content: "";
    position: absolute;
    border-width: 5px;
    border-style: solid;
  }
  .kuc-tooltip__group .kuc-tooltip__text.left::after {
    top: 3px;
    left: 100%;
    border-color: transparent transparent transparent var(--kuc-tooltip-background-color, #333333e6);
  }
  .kuc-tooltip__group .kuc-tooltip__text.top::after {
    top: 100%;
    left: 3px;
    border-color: var(--kuc-tooltip-background-color, #333333e6) transparent transparent transparent;
  }
  .kuc-tooltip__group .kuc-tooltip__text.right::after {
    top: 3px;
    right: 100%;
    border-color: transparent var(--kuc-tooltip-background-color, #333333e6) transparent transparent;
  }
  .kuc-tooltip__group .kuc-tooltip__text.bottom::after {
    bottom: 100%;
    left: 3px;
    border-color: transparent transparent var(--kuc-tooltip-background-color, #333333e6) transparent;
  }
  .kuc-tooltip__group:hover .kuc-tooltip__text {
    visibility: visible;
  }
`;