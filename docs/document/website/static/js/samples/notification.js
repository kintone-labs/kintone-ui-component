document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const ifrDocument = container.querySelector('#iframe').contentWindow.document;
  ifrDocument.open();
  ifrDocument.write(`<kuc-notification class="kuc-notification-fadein"><!---->
    <!--?lit$738241082$-->
    <style>
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
    </style>

    <div class="kuc-notification__notification kuc-notification__notification--info">
      <pre class="kuc-notification__notification__title" aria-live="assertive" role="alert"><!--
      --><!--?lit$738241082$-->Info!</pre>
      <button class="kuc-notification__notification__close-button" type="button" aria-label="close">
        <!--?lit$738241082$-->
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>close button</title>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#448aca"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z" fill="white"></path>
        </svg>
      </button>
    </div>
  </kuc-notification>`);

  ifrDocument.write(`<kuc-notification class="kuc-notification-fadein" style="margin-top:80px"><!---->
    <div class="kuc-notification__notification kuc-notification__notification--success">
      <pre class="kuc-notification__notification__title" aria-live="assertive" role="alert"><!--
      -->Success!</pre>
      <button class="kuc-notification__notification__close-button" type="button" aria-label="close">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>close button</title>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#9bbc65"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z" fill="white"></path>
        </svg>
      </button>
    </div>
  </kuc-notification>`);

  ifrDocument.write(`<kuc-notification class="kuc-notification-fadein" style="margin-top:150px"><!---->
  <div class="kuc-notification__notification kuc-notification__notification--error">
    <pre class="kuc-notification__notification__title" aria-live="assertive" role="alert"><!--
    -->Error!</pre>
    <button class="kuc-notification__notification__close-button" type="button" aria-label="close">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>close button</title>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#c65040"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z" fill="white"></path>
      </svg>
    </button>
  </div>
</kuc-notification>`);
  iframe.contentWindow.document.close();
});