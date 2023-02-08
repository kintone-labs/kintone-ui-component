(function() {
  window.addEventListener("DOMContentLoaded", () => {
    // const kucLink = `https://unpkg.com/kintone-ui-component/umd/kuc.min.js`;
    const kucLink = `/js/kuc.min.js`;

    const kucScript = document.createElement("script");
    kucScript.onload = function() {
      if(typeof window.Kucs !== 'undefined') {
        const version = Object.keys(window.Kucs)[0];
        window.Kuc = window.Kucs[version];
      }
      const loadedEvent = new Event("kuc:loaded");
      document.dispatchEvent(loadedEvent);
    };

    kucScript.src = kucLink;

    const iframe = document.querySelector('.sample-container #iframe');
    if (iframe) {
      iframe.contentWindow.document.head.appendChild(kucScript);
      return;
    }

    document.head.appendChild(kucScript);
  });
})();
