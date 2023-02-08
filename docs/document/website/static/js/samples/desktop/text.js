document.addEventListener("kuc:loaded", function() {
  const script = `
    const text = new Kuc.Text({});
    document.body.appendChild(text);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});