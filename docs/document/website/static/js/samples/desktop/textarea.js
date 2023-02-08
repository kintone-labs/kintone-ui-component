document.addEventListener("kuc:loaded", function() {
  const script = `
    const textarea = new Kuc.TextArea({});
    document.body.appendChild(textarea);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});