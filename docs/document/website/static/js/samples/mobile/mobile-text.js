document.addEventListener("kuc:loaded", function() {
  const script = `
    const mobileText = new Kuc.MobileText({ className: "cus-mobile-text"});
    document.body.appendChild(mobileText);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});