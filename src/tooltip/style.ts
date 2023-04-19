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
  .kuc-tooltip__tooltip--hidden {
    display: none;
  }
  .kuc-tooltip__container {
    position: relative;
    display: inline-block;
  }
  .kuc-tooltip__container::after {
    position: absolute;
    right: -20%;
    top: 100%;
    left: -20%;
    display: block;
    height: calc(0.5em * 2);
  }
  .kuc-tooltip__tooltip .kuc-tooltip__tooltip__text {
    min-height: 32px;
    padding: 6px 8px;
    color: #ffffff;
    text-align: start;
    text-decoration: none;
    word-wrap: break-word;
    background-color: #000000;
    border-radius: 6px;
    box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%);
    box-sizing: border-box;
  }
  .kuc-tooltip__tooltip {
    position: absolute;
    top: calc(100% + calc(0.5em * 2));
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    border-radius: 0.25em;
    color: white;
    width: max-content;
    z-index: 1000;
  }
  .kuc-tooltip__tooltip .kuc-tooltip__tooltip__text {
    max-width: 250px;
  }
  .kuc-tooltip__container.kuc-tooltip__container--top .kuc-tooltip__tooltip {
    top: unset;
    bottom: 100%;
  }
  .kuc-tooltip__container.kuc-tooltip__container--bottom .kuc-tooltip__tooltip {
    width: max-content;
    top: auto;
  }
  .kuc-tooltip__container.kuc-tooltip__container--left .kuc-tooltip__tooltip {
    width: max-content;
    height: fit-content;
    margin: auto 0;
    right: 100%;
    left: auto;
    top: 0;
    bottom: 0;
    transform: translateX(0);
  }
  .kuc-tooltip__container.kuc-tooltip__container--right .kuc-tooltip__tooltip {
    width: max-content;
    height: fit-content;
    margin: auto 0;
    left: 100%;
    top: 0;
    bottom: 0;
    transform: translateX(0);
  }
  .kuc-tooltip__container .kuc-tooltip__tooltip__arrow {
    border: 0.5em solid transparent;
    border-bottom-color: #000000;
  }
  .kuc-tooltip__container.kuc-tooltip__container--top .kuc-tooltip__tooltip__arrow {
    border-top-color: #000000;
    border-right-color: transparent;
    border-bottom-color: transparent;
    margin: auto 0;
  }
  .kuc-tooltip__container.kuc-tooltip__container--left .kuc-tooltip__tooltip__arrow {
    border-left-color: #000000;
    border-bottom-color: transparent;
  }
  .kuc-tooltip__container.kuc-tooltip__container--right .kuc-tooltip__tooltip__arrow {
    border-right-color: #000000;
    border-bottom-color: transparent;
    width: fit-content;
    height: fit-content;
    margin: auto 0;
    top: 0;
    bottom: 0;
    right: 100%;
    left: auto;
  }
  .kuc-tooltip__container .kuc-tooltip__tooltip__wrapper {
    display: flex;
    align-items: center;
  }
  .kuc-tooltip__container.kuc-tooltip__container--top .kuc-tooltip__tooltip__wrapper {
    flex-direction: column-reverse;
  }
  .kuc-tooltip__container.kuc-tooltip__container--bottom .kuc-tooltip__tooltip__wrapper {
    flex-direction: column;
  }
  .kuc-tooltip__container.kuc-tooltip__container--left .kuc-tooltip__tooltip__wrapper {
    flex-direction: row-reverse;
  }
`;
