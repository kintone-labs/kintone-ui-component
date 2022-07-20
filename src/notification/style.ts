export const NOTIFICATION_CSS = `
  kuc-notification,
  kuc-notification *,
  :lang(en) kuc-notification,
  :lang(en) kuc-notification * {
    font-family: "HelveticaNeueW02-65Medi", Arial,
      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  :lang(ja) kuc-notification,
  :lang(ja) kuc-notification * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  :lang(zh) kuc-notification,
  :lang(zh) kuc-notification * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
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
    background-color: #e74c3c;
  }
  .kuc-notification__notification--info {
    background-color: #3498db;
  }
  .kuc-notification__notification--success {
    background-color: #91c36c;
  }
  .kuc-notification__notification--danger {
    background-color: #e74c3c;
  }
  .kuc-notification__notification__title {
    display: block;
    margin: 0px;
    font-size: 16px;
    max-width: 500px;
    min-height: 24px;
    word-break: break-word;
    white-space: pre-wrap;
  }
  .kuc-notification__notification__close-button {
    position: absolute;
    top: 5px;
    right: 0px;
    width: 48px;
    height: 48px;
    background-color: transparent;
    outline: none;
    border: none;
    pointer-events: auto;
    cursor: pointer;
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
