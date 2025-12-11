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
    display: inline-flex;
    margin: 0px;
    width: 100%;
    align-items: center;
    gap: 4px;
  }

  .kuc-switch__group--top {
    flex-direction: column;
    align-items: flex-start;
  }

  .kuc-switch__group--bottom {
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  .kuc-switch__group--left {
    flex-direction: row;
  }

  .kuc-switch__group--right {
    flex-direction: row-reverse;
  }

  .kuc-switch__group__label {
    display: inline-block;
  }
  
  .kuc-switch__group__label .kuc-base-label__text {
     white-space: nowrap;
     font-size: 14px;
  }

  .kuc-switch__group__switch {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 30px;
    cursor: pointer;
    flex-shrink: 0;
  }

  .kuc-switch__group__switch__input {
    opacity: 0;
    width: 0px;
    height: 0px;
  }

  .kuc-switch__group__switch__slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #d8d8d8;
    transition: 0.4s;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kuc-switch__group__switch__slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 5px;
    bottom: 5px;
    background-color: #ffffff;
    transition: 0.4s;
    border-radius: 50%;
  }

  .kuc-switch__group__switch__input:checked + .kuc-switch__group__switch__slider {
    background-color: #3498db;
  }

  .kuc-switch__group__switch__input:checked + .kuc-switch__group__switch__slider:before {
    transform: translateX(70px);
  }

  .kuc-switch__group__switch__input:disabled + .kuc-switch__group__switch__slider {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .kuc-switch__group__switch:has(.kuc-switch__group__switch__input:disabled) {
    cursor: not-allowed;
  }

  .kuc-switch__group__switch__slider__text {
    position: absolute;
    font-size: 14px;
    font-weight: bold;
    z-index: 1;
    transition: 0.4s;
    pointer-events: none;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    max-width: 40px;
  }

  .kuc-switch__group__switch__input:not(:checked) + .kuc-switch__group__switch__slider .kuc-switch__group__switch__slider__text {
    color: #666666;
  }

  .kuc-switch__group__switch__input:checked + .kuc-switch__group__switch__slider .kuc-switch__group__switch__slider__text {
    color: #ffffff;
  }
`;
