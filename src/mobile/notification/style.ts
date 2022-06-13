export const MOBILE_NOTIFICATION_CSS = `
  kuc-mobile-notification {
    display: block;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
    visibility: hidden;
    animation-fill-mode: forwards;
    position: relative;
    top: -100px;
    left: 0;
  }

  :lang(zh) kuc-mobile-notification,
  :lang(zh) kuc-mobile-notification * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }

  .kuc-mobile-notification-fadein {
    animation-name: kuc-mobile-notification-fade-in;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
    width: 100%;
    position: fixed;
    visibility: visible;
  }

  .kuc-mobile-notification-fadeout {
    animation-name: kuc-mobile-notification-fade-out;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
    width: 100%;
    position: fixed;
  }

  .kuc-mobile-notification__notification {
    background-color: #ffffcf;
    background: linear-gradient(#ffda4a, #ffc32c);
    width: 100%;
    min-height: 48px;
    z-index: 20;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;
    color: #333333;
    text-align: center;
    vertical-align: top;
  }

  .kuc-mobile-notification__notification__title {
    display: inline-block;
    vertical-align: middle;
    padding: 17px 44px 11px 44px;
    margin: 0 0 0 -20px;
    text-align: left;
    font-weight: inherit;
    font-family: inherit;
    word-break: break-word;
    white-space: pre-wrap;
  }

  .kuc-mobile-notification__notification__close-button {
    position: absolute;
    right: 0;
    top: 0;
    width: 44px;
    height: 48px;
    padding: 0;
    background-color: transparent;
    border: none;
    vertical-align: middle;
    pointer-events: auto;
    outline: none;
  }
  @keyframes kuc-mobile-notification-fade-in {
    0% {
      top: -100px;
      left: 0;
    }
    50% {
      top: -50px;
      left: 0;
    }
    100% {
      top: 0;
      left: 0;
    }
  }
  @keyframes kuc-mobile-notification-fade-out {
    0% {
      visibility: visible;
      top: 0;
      left: 0;
    }
    50% {
      visibility: visible;
      top: -50px;
      left: 0;
    }
    100% {
      top: -100px;
      left: 0;
    }
  }
`;
