export const SWITCH_CSS = `
  kuc-switch,
  kuc-switch *,
  kuc-switch:lang(en),
  kuc-switch:lang(en) * {
    font-family: sans-serif;
  }
  kuc-switch:lang(es),
  kuc-switch:lang(es) * {
    font-family: sans-serif;
  }
  kuc-switch:lang(ja),
  kuc-switch:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  kuc-switch:lang(zh),
  kuc-switch:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }
  kuc-switch:lang(zh-TW),
  kuc-switch:lang(zh-TW) * {
    font-family: "微軟正黑體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }

  kuc-switch {
    display: inline-table;
    font-size: 14px;
    color: #333333;
    vertical-align: top;
    line-height: 1.5;
    --kuc-switch-slider-height: 32px;
  }

  kuc-switch[hidden] {
    display: none;
  }

  .kuc-switch__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-flex;
    margin: 0px;
    width: 100%;
    align-items: center;
    gap: 6px;
  }

  .kuc-switch__group--top {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .kuc-switch__group--bottom {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 4px;
  }

  .kuc-switch__group--left {
    flex-direction: row;
  }

  .kuc-switch__group--right {
    flex-direction: row-reverse;
  }

  .kuc-switch__group__label {
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
  }

  .kuc-switch__group__label--disabled {
    cursor: not-allowed;
  }

  .kuc-switch__group--top .kuc-switch__group__label,
  .kuc-switch__group--bottom .kuc-switch__group__label {
    padding-left: 4px;
  }

  .kuc-switch__group__label .kuc-base-label__text {
    font-size: 14px;
  }

  .kuc-switch__group__switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
  }

  .kuc-switch__group__switch__input {
    opacity: 0;
    width: 0px;
    height: 0px;
    position: absolute;
  }

  .kuc-switch__group__switch__handle {
    position: absolute;
    width: calc(var(--kuc-switch-slider-height, 32px) - 10px);
    height: calc(var(--kuc-switch-slider-height, 32px) - 10px);
    left: 5px;
    background-color: #ffffff;
    transition: left 0.4s ease-in-out;
    border-radius: 50%;
    cursor: pointer;
  }

  .kuc-switch__group__switch__input:checked ~ .kuc-switch__group__switch__handle {
    left: calc(100% - var(--kuc-switch-slider-height, 32px) + 5px);
  }

  .kuc-switch__group__switch__slider {
    position: relative;
    transition: padding-left 0.4s ease-in-out, padding-right 0.4s ease-in-out;
    border-radius: calc(var(--kuc-switch-slider-height, 32px) / 2);
    display: inline-block;
    cursor: pointer;
    border: none;
    overflow: hidden;
    min-width: 22px;
    background-color: #b5b5b5;
    padding-left: calc(var(--kuc-switch-slider-height, 32px) - 2px);
    padding-right: calc(var(--kuc-switch-slider-height, 32px) / 2 - 2px);
  }

  .kuc-switch__group__switch__input:checked ~ .kuc-switch__group__switch__slider {
    background-color: #3498db;
    padding-left: calc(var(--kuc-switch-slider-height, 32px) / 2 - 2px);
    padding-right: calc(var(--kuc-switch-slider-height, 32px) - 2px);
  }

  .kuc-switch__group__switch__input:focus-visible ~ .kuc-switch__group__switch__slider {
    outline: 2px solid #3498db;
    outline-offset: 1px;
    transition: outline-offset 0s, outline 0s;
  }

  .kuc-switch__group__switch__input:disabled ~ .kuc-switch__group__switch__slider,
  .kuc-switch__group__switch__input:disabled ~ .kuc-switch__group__switch__handle{
    opacity: 0.5;
    cursor: not-allowed;
  }

  .kuc-switch__group__switch__slider__text {
    font-size: 14px;
    transition: margin-left 0.4s ease-in-out, margin-right 0.4s ease-in-out;
    pointer-events: none;
    white-space: nowrap;
    text-align: center;
    display: block;
    height: var(--kuc-switch-slider-height, 32px);
    line-height: var(--kuc-switch-slider-height, 32px);
  }

  .kuc-switch__group__switch__slider__text--off {
    color: #666666;
    margin-top: calc(-1 * var(--kuc-switch-slider-height, 32px));
    margin-left: 0;
    margin-right: 0;
  }

  .kuc-switch__group__switch__slider__text--on {
    color: #ffffff;
    margin-left: calc(-100% - var(--kuc-switch-slider-height, 32px));
    margin-right: calc(100% + var(--kuc-switch-slider-height, 32px));
  }

  .kuc-switch__group__switch__input:checked ~ .kuc-switch__group__switch__slider .kuc-switch__group__switch__slider__text--off {
    margin-left: calc(100% + var(--kuc-switch-slider-height, 32px));
    margin-right: calc(-100% - var(--kuc-switch-slider-height, 32px));
  }

  .kuc-switch__group__switch__input:checked ~ .kuc-switch__group__switch__slider .kuc-switch__group__switch__slider__text--on {
    margin-left: 0;
    margin-right: 0;
  }
`;
