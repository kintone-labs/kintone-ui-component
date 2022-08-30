export const BUTTON_CSS = `
  kuc-button,
  kuc-button *,
  :lang(en) kuc-button,
  :lang(en) kuc-button * {
    font-family: "HelveticaNeueW02-45Ligh", Arial, "Hiragino Kaku Gothic ProN",
      Meiryo, sans-serif;
  }
  :lang(ja) kuc-button,
  :lang(ja) kuc-button * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  :lang(zh) kuc-button,
  :lang(zh) kuc-button * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei,
      "Heiti SC", sans-serif;
  }
  kuc-button {
    display: inline-block;
    vertical-align: top;
  }
  kuc-button[hidden] {
    display: none;
  }
  .kuc-button__button {
    font-size: var(--kuc-button-font-size, 16px);
    width: var(--kuc-button-width, "auto");
    height: var(--kuc-button-height, 48px);
    min-width: 163px;
    padding: 0px 16px;
    user-select: none;
  }
  .kuc-button__button--normal {
    background-color: var(--kuc-button-background-color, #f7f9fa);
    color: var(--kuc-button-text-color, #3498db);
    border: 1px solid #e3e7e8;
    box-shadow: 1px 1px 1px #ffffff inset;
  }
  .kuc-button__button--normal:hover,
  .kuc-button__button--normal:focus-visible,
  .kuc-button__button--normal:active {
    box-shadow: none;
    cursor: pointer;
  }
  .kuc-button__button--normal:hover {
    background-color: var(--kuc-button-background-hover, #c8d6dd);
  }
  .kuc-button__button--normal:focus {
    background-color: var(--kuc-button-background-focus, #c8d6dd);
  }
  .kuc-button__button--normal:active {
    background-color: var(--kuc-button-background-active, #c8d6dd);
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
    background-color: var(--kuc-button-background-hover, #1d6fa5);
  }
  .kuc-button__button--submit:focus {
    background-color: var(--kuc-button-background-focus, #1d6fa5);
  }
  .kuc-button__button--submit:active {
    background-color: var(--kuc-button-background-active, #1d6fa5);
  }
  .kuc-button__button--alert {
    background-color: var(--kuc-button-background-color, #e74c3c);
    color: var(--kuc-button-text-color, #ffffff);
    border: 0 none;
    box-shadow: 1px 1px 1px #ffffff inset;
  }
  .kuc-button__button--alert:hover,
  .kuc-button__button--alert:focus-visible,
  .kuc-button__button--alert:active {
    box-shadow: none;
    cursor: pointer;
  }
  .kuc-button__button--alert:hover {
    background-color: var(--kuc-button-background-hover, #bf2718);
  }
  .kuc-button__button--alert:focus {
    background-color: var(--kuc-button-background-focus, #bf2718);
  }
  .kuc-button__button--alert:active {
    background-color: var(--kuc-button-background-active, #bf2718);
  }
  .kuc-button__button:disabled {
    background-color: var(--kuc-button-background-color, #d4d7d7);
    border: 1px solid #e3e7e8;
    box-shadow: none;
    color: var(--kuc-button-text-color, #888888);
    cursor: default;
  }
`;
