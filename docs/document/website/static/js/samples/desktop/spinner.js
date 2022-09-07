document.addEventListener("kuc:loaded", function () {
  const script = `
    const spinner = new Kuc.Spinner();
    spinner.open();
  `;

  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});
