export const DIALOG_CSS = `
  kuc-dialog,
  kuc-dialog *,
  :lang(en) kuc-dialog,
  :lang(en) kuc-dialog * {
    font-family: "HelveticaNeueW02-45Ligh", Arial,
      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  :lang(ja) kuc-dialog,
  :lang(ja) kuc-dialog * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  :lang(zh) kuc-dialog,
  :lang(zh) kuc-dialog * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }

  kuc-dialog {
    display: none;
  }

  kuc-dialog[opened] {
    display: block;
  }

  .kuc-dialog__dialog {
    min-width: 320px;
    font-size: 20px;
    background-color: #ffffff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
  }

  .kuc-dialog__dialog__header {
    min-height: 64px;
    border-bottom: 1px solid #e3e7e8;
    display: flex;
    justify-content: space-between;
  }

  .kuc-dialog__dialog__header__title {
    font-size: 24px;
    padding: 0 24px;
    align-self: center;
    font-weight: 400;
  }

  .kuc-dialog__dialog__header__close-button {
    width: 48px;
    height: 48px;
    border: none;
    background-color: #ffffff;
    margin-right: 12px;
    margin-top: 11px;
    cursor: pointer;
  }

  .kuc-dialog__dialog__header__close-button:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
  }

  /* Firefox */
  @-moz-document url-prefix() {
    .kuc-dialog__dialog__header__close-button:focus-visible {
      outline: 1px dotted;
    }
  }

  /* Safari */
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    _::-webkit-full-page-media,
    _:future,
    :root .kuc-dialog__dialog__header__close-button:focus {
      outline: 5px auto -webkit-focus-ring-color;
    }
  }

  .kuc-dialog__dialog__header__close-button-svg {
    vertical-align: middle;
  }

  .kuc-dialog__dialog__content {
    border-bottom: #e3e7e8 solid 1px;
    background-color: #f7f9fa;
    padding: 24px;
    display: flex;
  }

  .kuc-dialog__dialog__content__icon-info,
  .kuc-dialog__dialog__content__icon-success,
  .kuc-dialog__dialog__content__icon-error,
  .kuc-dialog__dialog__content__icon-warning,
  .kuc-dialog__dialog__content__icon-question {
    margin-right: 16px;
    width: 24px;
    height: 24px;
  }

  .kuc-dialog__dialog__footer {
    padding: 24px;
  }

  .kuc-dialog__mask {
    position: fixed;
    top: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.6;
    z-index: 9999;
  }

  .kuc--has-dialog {
    overflow: hidden;
  }

  .kuc--has-dialog .kuc-dialog__dialog {
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 80vh;
  }
`;
