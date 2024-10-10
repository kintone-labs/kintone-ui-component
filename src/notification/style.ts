export const NOTIFICATION_CSS = `
  kuc-notification,
  kuc-notification *,
  kuc-notification:lang(en),
  kuc-notification:lang(en) * {
    font-family: sans-serif;
  }
  kuc-notification:lang(es),
  kuc-notification:lang(es) * {
    font-family: sans-serif;
  }
  kuc-notification:lang(ja),
  kuc-notification:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-notification:lang(zh),
  kuc-notification:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-notification:lang(zh-TW),
  kuc-notification:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-notification {
    color: #ffffff;
    font-weight: 700;
    text-align: center;
    text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.5);
  }
  kuc-notification {
    position: fixed;
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 1.5;
    z-index: 10000;
    margin-top: 16px;
    pointer-events: none;
    visibility: hidden;
    animation-fill-mode: forwards;
  }
  .kuc-notification-fadein {
    animation-name: kuc-notification-fade-in;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
  }
  .kuc-notification-fadeout {
    animation-name: kuc-notification-fade-out;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
  }
  .kuc-notification__notification {
    position: relative;
    display: inline-block;
    text-align: left;
    padding: 16px 56px 16px 24px;
    background-color: var(--kuc-notification-background-color, #e74c3c);
  }
  .kuc-notification__notification--info {
    background-color: var(--kuc-notification-background-color, #3498db);
  }
  .kuc-notification__notification--success {
    background-color: var(--kuc-notification-background-color, #91c36c);
  }
  .kuc-notification__notification--danger {
    background-color: var(--kuc-notification-background-color, #e74c3c);
  }
  .kuc-notification__notification__title {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: var(--kuc-notification-font-size, 16px);
    color: var(--kuc-notification-color, #ffffff);
    max-width: 500px;
    min-height: 24px;
    word-break: break-word;
    white-space: pre-wrap;
  }
  .kuc-notification__notification__close-button {
    position: absolute;
    top: 4px;
    right: 0;
    width: 48px;
    height: 48px;
    background-color: transparent;
    outline: none;
    border: none;
    pointer-events: auto;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .kuc-notification__notification__close-button__icon-background--danger {
    fill: var(--kuc-notification-close-button-background-color, #c65040);
  }
  .kuc-notification__notification__close-button__icon-background--info {
    fill: var(--kuc-notification-close-button-background-color, #448aca);
  }
  .kuc-notification__notification__close-button__icon-background--success {
    fill: var(--kuc-notification-close-button-background-color, #9bbc65);
  }
  @keyframes kuc-notification-fade-in {
    0% {
      visibility: visible;
      top: -56px;
    }
    100% {
      visibility: visible;
      top: 0;
    }
  }
  @keyframes kuc-notification-fade-out {
    0% {
      visibility: visible;
      top: 0;
    }
    10% {
      visibility: visible;
      top: 14px;
    }
    100% {
      top: -56px;
    }
  }
`;
