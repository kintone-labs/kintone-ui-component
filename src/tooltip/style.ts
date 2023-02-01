export const TOOLTIP_CSS = `
  kuc-tooltip,
  kuc-tooltip *,
  kuc-tooltip:lang(en),
  kuc-tooltip:lang(en) * {
    font-family: "HelveticaNeueW02-45Ligh", Arial,
      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  :root {
    --tooltip-thingy-height: .5em;
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
  .kuc-tooltip__container {
    position: relative;
    display: inline-block;
  }
  .kuc-tooltip__container .kuc-tooltip__text {
    visibility: visible;
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
  .kuc-tooltip__container .kuc-tooltip__text.left {
    width: 100%;
    right: calc(100% + 5px);
  }
  .kuc-tooltip__container .kuc-tooltip__text.top {
    width: calc(100% - 16px);
    bottom: 100%;
  }
  .kuc-tooltip__container .kuc-tooltip__text.right {
    width: 100%;
    left: calc(100% + 5px);
  }
  .kuc-tooltip__container .kuc-tooltip__text.bottom {
    width: calc(100% - 16px);
    top: 100%;
  }
  .kuc-tooltip__container .kuc-tooltip__text.top::after {
    top: 100%;
    left: 3px;
    border-color: var(--kuc-tooltip-background-color, #333333e6) transparent transparent transparent;
  }
  .kuc-tooltip__container .kuc-tooltip__text.right::after {
    top: 3px;
    right: 100%;
    border-color: transparent var(--kuc-tooltip-background-color, #333333e6) transparent transparent;
  }
  .kuc-tooltip__container .kuc-tooltip__text.bottom::after {
    bottom: 100%;
    left: 3px;
    border-color: transparent transparent var(--kuc-tooltip-background-color, #333333e6) transparent;
  }
  .kuc-tooltip__container:hover .kuc-tooltip__text {
    visibility: visible;
  }
  .kuc-tooltip__tooltip .kuc-tooltip__tooltip--text {
    min-width: 32px;
    min-height: 32px;
    padding: 6px 8px;
    color: #fff;
    text-align: start;
    text-decoration: none;
    word-wrap: break-word;
    background-color: rgba(0,0,0,.85);
    border-radius: 6px;
    box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%);
    box-sizing: border-box;
  }
  .hidden {
    display: none;
  }
  .kuc-tooltip__container::after {
    position: absolute;
    right: -20%;
    top: 100%;
    left: -20%;
    display: block;
    height: calc(var(--tooltip-thingy-height) * 2);
  }
.kuc-tooltip__container.top [role="tooltip"] {
  top: unset;
  bottom: 100%;
}
.kuc-tooltip__container.right [role="tooltip"] {
  left: calc(100% + calc(var(--tooltip-thingy-height)));
  top: -50%;
  transform: translateX(0);
}
.kuc-tooltip__container.left [role="tooltip"] {
  width: fit-content;
  height: fit-content;
  margin: auto 0;
  right: 100%;
  left: auto;
  top: 0;
  bottom: 0;
  transform: translateX(0);
}
.kuc-tooltip__container .kuc-tooltip__tooltip--arrow {
  transform: translateX(-50%);
  border: var(--tooltip-thingy-height) solid transparent;
  border-bottom-color: black;
}
[role="tooltip"] {
  position: absolute;
  top: calc(100% + calc(var(--tooltip-thingy-height) * 2));
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  border-radius: 0.25em;
  color: white;
  min-width: max-content;
  max-width: 10em;
  z-index: 1000;
}

.kuc-tooltip__container.right [role="tooltip"] {
  top: auto;
}

.kuc-tooltip__container.right .kuc-tooltip__tooltip--arrow {
  border-right-color: black;
  border-bottom-color: transparent;
  width: fit-content;
  height: fit-content;
  margin: auto 0;
  top: 0;
  bottom: 0;
  right: 100%;
  left: auto;
  transform: translateX(0);
}

.kuc-tooltip__container.top .kuc-tooltip__tooltip--arrow {
  border-top-color: black;
  border-right-color: transparent;
  border-bottom-color: transparent;
  margin: auto 0;
  transform: translateX(0);
}

.kuc-tooltip__container.bottom .kuc-tooltip__tooltip--arrow {
  transform: translateX(0);
}

.kuc-tooltip__container.left .kuc-tooltip__tooltip--arrow {
  transform: translateX(0);
  border-left-color: black;
  border-bottom-color: transparent;
}

.kuc-tooltip__container.right [role="tooltip"] {
  width: fit-content;
  height: fit-content;
  margin: auto 0;
  left: 100%;
  top: 0;
  bottom: 0;
}

.kuc-tooltip__container.bottom [role="tooltip"] {
  top: auto;
}

.kuc-tooltip__container.right .kuc-tooltip__tooltip--wrapper {
  display: flex;
}
.kuc-tooltip__container.top .kuc-tooltip__tooltip--wrapper {
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
}
.kuc-tooltip__container.bottom .kuc-tooltip__tooltip--wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.kuc-tooltip__container.left .kuc-tooltip__tooltip--wrapper {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
`;
