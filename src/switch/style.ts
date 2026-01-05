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
  }

  kuc-switch[hidden] {
    display: none;
  }

  .kuc-switch__group {
    border: none;
    padding: 0px;
    height: auto;
    display: flex;
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
    display: block;
    white-space: nowrap;
    cursor: pointer;
  }

  .kuc-switch__group__label[hidden] {
    display: none;
  }

  .kuc-switch__group__label--disabled {
    cursor: not-allowed;
  }

  .kuc-switch__group--top .kuc-switch__group__label,
  .kuc-switch__group--bottom .kuc-switch__group__label {
    padding-left: 3px;
  }

  .kuc-switch__group__label .kuc-base-label__text {
    font-size: 14px;
  }

  .kuc-switch__group__switch {
    position: relative;
    display: flex;
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
    width: calc(var(--kuc-switch-track-height, 28px) - 2 * 4px);
    height: calc(var(--kuc-switch-track-height, 28px) - 2 * 4px);
    left: 4px;
    background-color: #ffffff;
    transition: left 0.2s ease-in-out;
    border-radius: 50%;
    cursor: pointer;
  }

  .kuc-switch__group__switch__input:checked ~ .kuc-switch__group__switch__handle {
    left: calc(100% - var(--kuc-switch-track-height, 28px) + 4px);
  }

  .kuc-switch__group__switch__track {
    position: relative;
    transition: background-color 0.2s ease-in-out, padding-left 0.2s ease-in-out, padding-right 0.2s ease-in-out;
    border-radius: calc(var(--kuc-switch-track-height, 28px) / 2);
    display: block;
    cursor: pointer;
    border: none;
    overflow: hidden;
    background-color: #b5b5b5;
    padding-left: var(--kuc-switch-track-height, 28px);
    padding-right: 10px;
    box-sizing: border-box;
  }

  .kuc-switch__group__switch__input:checked ~ .kuc-switch__group__switch__track {
    background-color: #3498db;
    padding-left: 10px;
    padding-right: var(--kuc-switch-track-height, 28px);
  }

  .kuc-switch__group__switch__input:focus-visible ~ .kuc-switch__group__switch__track {
    outline: 1px solid #3498db;
    outline-offset: 1px;
    transition: outline-offset 0s, outline 0s;
  }

  .kuc-switch__group__switch__input:disabled ~ .kuc-switch__group__switch__track,
  .kuc-switch__group__switch__input:disabled ~ .kuc-switch__group__switch__handle{
    opacity: 0.5;
    cursor: not-allowed;
  }

  .kuc-switch__group__switch__track__text {
    font-size: 14px;
    color: #ffffff;
    transition: margin-left 0.2s ease-in-out, margin-right 0.2s ease-in-out;
    pointer-events: none;
    white-space: nowrap;
    text-align: center;
    display: block;
    height: var(--kuc-switch-track-height, 28px);
    line-height: var(--kuc-switch-track-height, 28px);
    min-width: 16px;
  }

  .kuc-switch__group__switch__track__text--unchecked {
    margin-top: calc(-1 * var(--kuc-switch-track-height, 28px));
    margin-left: 0;
    margin-right: 0;
  }

  .kuc-switch__group__switch__track__text--checked {
    margin-left: calc(-100% - var(--kuc-switch-track-height, 28px));
    margin-right: calc(100% + var(--kuc-switch-track-height, 28px));
  }

  .kuc-switch__group__switch__input:checked ~ .kuc-switch__group__switch__track .kuc-switch__group__switch__track__text--unchecked {
    margin-left: calc(100% + var(--kuc-switch-track-height, 28px));
    margin-right: calc(-100% - var(--kuc-switch-track-height, 28px));
  }

  .kuc-switch__group__switch__input:checked ~ .kuc-switch__group__switch__track .kuc-switch__group__switch__track__text--checked {
    margin-left: 0;
    margin-right: 0;
  }
`;
