export const BUTTON_CSS = `
  kuc-button,
  kuc-button *,
  kuc-button:lang(en),
  kuc-button:lang(en) * {
    font-family: sans-serif;
  }
  kuc-button:lang(es),
  kuc-button:lang(es) * {
    font-family: sans-serif;
  }
  kuc-button:lang(ja),
  kuc-button:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  kuc-button:lang(zh),
  kuc-button:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei,
      "Heiti SC", sans-serif;
  }
  kuc-button:lang(zh-TW),
  kuc-button:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-button {
    display: inline-block;
    vertical-align: top;
  }
  kuc-button[hidden] {
    display: none;
  }
  .kuc-button__button {
    display: grid;
    align-items: center;
    align-content: center;
    font-size: var(--kuc-button-font-size, 16px);
    width: var(--kuc-button-width, "auto");
    height: var(--kuc-button-height, 48px);
    min-width: var(--kuc-button-width, 163px);
    padding: 0px 16px;
    user-select: none;
    white-space: nowrap;
  }
  .kuc-button__button--normal {
    background-color: var(--kuc-button-background-color, #f7f9fa);
    color: var(--kuc-button-text-color, #3498db);
    border: 1px solid #e3e7e8;
  }
  .kuc-button__button--normal:hover,
  .kuc-button__button--normal:focus-visible,
  .kuc-button__button--normal:active {
    cursor: pointer;
  }
  .kuc-button__button--normal:hover {
    background-color: var(--kuc-button-background-color-hover, #c8d6dd);
  }
  .kuc-button__button--normal:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #c8d6dd);
  }
  .kuc-button__button--normal:active {
    background-color: var(--kuc-button-background-color-active, #c8d6dd);
  }
  .kuc-button__button--submit {
    background-color: var(--kuc-button-background-color, #3498db);
    color: var(--kuc-button-text-color, #ffffff);
    border: 1px solid #e3e7e8;
  }
  .kuc-button__button--submit:hover,
  .kuc-button__button--submit:focus-visible,
  .kuc-button__button--submit:active {
    cursor: pointer;
  }
  .kuc-button__button--submit:hover {
    background-color: var(--kuc-button-background-color-hover, #1d6fa5);
  }
  .kuc-button__button--submit:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #1d6fa5);
  }
  .kuc-button__button--submit:active {
    background-color: var(--kuc-button-background-color-active, #1d6fa5);
  }
  .kuc-button__button--alert {
    background-color: var(--kuc-button-background-color, #e74c3c);
    color: var(--kuc-button-text-color, #ffffff);
    border: 1px solid #e3e7e8;
  }
  .kuc-button__button--alert:hover,
  .kuc-button__button--alert:focus-visible,
  .kuc-button__button--alert:active {
    cursor: pointer;
  }
  .kuc-button__button--alert:hover {
    background-color: var(--kuc-button-background-color-hover, #bf2718);
  }
  .kuc-button__button--alert:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #bf2718);
  }
  .kuc-button__button--alert:active {
    background-color: var(--kuc-button-background-color-active, #bf2718);
  }
  .kuc-button__button:disabled {
    background-color: #d4d7d7;
    border: 1px solid #e3e7e8;
    color: #888888;
    cursor: not-allowed;
  }
  .kuc-button__button--normal:focus-visible,
  .kuc-button__button--submit:focus-visible,
  .kuc-button__button--alert:focus-visible {
    outline: 1px solid #3498db;
  }
`;
