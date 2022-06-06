document.addEventListener("kuc:loaded", function() {
  const container = document.querySelector("#sample-container__components");
  const contentWindow = container.querySelector("#iframe").contentWindow;
  const ifrDocument = contentWindow.document;

  const spinner = new Kuc.Spinner();
  ifrDocument.querySelector("body").appendChild(spinner);
});
