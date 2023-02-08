document.addEventListener("kuc:loaded", function () {
  const script = `
    const attachment = new Kuc.Attachment({});
    document.body.appendChild(attachment);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});
