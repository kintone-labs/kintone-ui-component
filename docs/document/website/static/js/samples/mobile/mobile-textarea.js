document.addEventListener("kuc:loaded", function() {
  const script = `
    const mobileTextArea = new Kuc.MobileTextArea({});
    document.body.appendChild(mobileTextArea);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});