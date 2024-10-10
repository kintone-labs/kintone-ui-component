export const TOOLTIP_CSS = `
  kuc-tooltip,
  kuc-tooltip *,
  kuc-tooltip:lang(en),
  kuc-tooltip:lang(en) * {
    font-family: sans-serif;
  }
  kuc-tooltip:lang(es),
  kuc-tooltip:lang(es) * {
    font-family: sans-serif;
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
  .kuc-tooltip__group__title--hidden {
    display: none;
  }
  .kuc-tooltip__group {
    position: relative;
    display: inline-block;
  }
  .kuc-tooltip__group::after {
    position: absolute;
    right: -20%;
    top: 100%;
    left: -20%;
    display: block;
    height: calc(0.5em * 2);
  }
  .kuc-tooltip__group__title .kuc-tooltip__group__title__wrapper__text {
    max-width: var(--kuc-tooltip-width, 250px);
    width: var(--kuc-tooltip-width, auto);
    min-height: var(--kuc-tooltip-height, 32px);;
    height: var(--kuc-tooltip-height, auto);
    padding: 6px 8px;
    color: var(--kuc-tooltip-color, #ffffff);
    text-align: start;
    text-decoration: none;
    word-wrap: break-word;
    overflow: auto;
    white-space: normal;
    background-color: var(--kuc-tooltip-background-color, #000000);
    font-size: var(--kuc-tooltip-font-size);
    border-radius: 6px;
    box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%);
    box-sizing: border-box;
  }
  .kuc-tooltip__group__title {
    position: absolute;
    top: calc(100% + calc(0.5em * 2));
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    border-radius: 0.25em;
    color: var(--kuc-tooltip-color, #ffffff);
    width: max-content;
    z-index: 1000;
  }
  .kuc-tooltip__group.kuc-tooltip__group--top > .kuc-tooltip__group__title {
    top: unset;
    bottom: 100%;
  }
  .kuc-tooltip__group.kuc-tooltip__group--bottom > .kuc-tooltip__group__title {
    width: max-content;
    top: auto;
  }
  .kuc-tooltip__group.kuc-tooltip__group--left > .kuc-tooltip__group__title {
    width: max-content;
    height: fit-content;
    margin: auto 0;
    right: 100%;
    left: auto;
    top: 0;
    bottom: 0;
    transform: translateX(0);
  }
  .kuc-tooltip__group.kuc-tooltip__group--right > .kuc-tooltip__group__title {
    width: max-content;
    height: fit-content;
    margin: auto 0;
    left: 100%;
    top: 0;
    bottom: 0;
    transform: translateX(0);
  }
  .kuc-tooltip__group .kuc-tooltip__group__title__wrapper__arrow {
    border: 0.5em solid transparent;
    border-bottom-color: var(--kuc-tooltip-background-color, #000000);
  }
  .kuc-tooltip__group.kuc-tooltip__group--top > .kuc-tooltip__group__title .kuc-tooltip__group__title__wrapper__arrow {
    border-top-color: var(--kuc-tooltip-background-color, #000000);
    border-right-color: transparent;
    border-bottom-color: transparent;
    margin: auto 0;
  }
  .kuc-tooltip__group.kuc-tooltip__group--left > .kuc-tooltip__group__title .kuc-tooltip__group__title__wrapper__arrow {
    border-left-color: var(--kuc-tooltip-background-color, #000000);
    border-bottom-color: transparent;
  }
  .kuc-tooltip__group.kuc-tooltip__group--right > .kuc-tooltip__group__title .kuc-tooltip__group__title__wrapper__arrow {
    border-right-color: var(--kuc-tooltip-background-color, #000000);
    border-bottom-color: transparent;
    width: fit-content;
    height: fit-content;
    margin: auto 0;
    top: 0;
    bottom: 0;
    right: 100%;
    left: auto;
  }
  .kuc-tooltip__group .kuc-tooltip__group__title__wrapper {
    display: flex;
    align-items: center;
  }
  .kuc-tooltip__group.kuc-tooltip__group--top > .kuc-tooltip__group__title .kuc-tooltip__group__title__wrapper {
    flex-direction: column-reverse;
  }
  .kuc-tooltip__group.kuc-tooltip__group--bottom > .kuc-tooltip__group__title .kuc-tooltip__group__title__wrapper {
    flex-direction: column;
  }
  .kuc-tooltip__group.kuc-tooltip__group--left > .kuc-tooltip__group__title .kuc-tooltip__group__title__wrapper {
    flex-direction: row-reverse;
  }
`;
