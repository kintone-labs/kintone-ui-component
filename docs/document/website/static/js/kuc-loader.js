(function() {
  window.addEventListener("DOMContentLoaded", () => {
    const docVersion = window.location.pathname.match(/\d+\.\d+\.\d+/);
    const urlVersion = docVersion ? `@${docVersion[0]}` : "";
    const kucLink = `https://unpkg.com/kintone-ui-component${urlVersion}/umd/kuc.min.js`;

    const kucScript = document.createElement("script");
    kucScript.onload = function() {
      const loadedEvent = new Event("kuc:loaded");
      document.dispatchEvent(loadedEvent);
    };

    kucScript.src = kucLink;
    document.head.appendChild(kucScript);
  });
})();
