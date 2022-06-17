(function() {
  window.addEventListener("DOMContentLoaded", () => {
    const kucLink = `https://unpkg.com/kintone-ui-component/umd/kuc.min.js`;

    const kucScript = document.createElement("script");
    kucScript.onload = function() {
      const loadedEvent = new Event("kuc:loaded");
      document.dispatchEvent(loadedEvent);
    };

    kucScript.src = kucLink;
    document.head.appendChild(kucScript);
  });
})();
