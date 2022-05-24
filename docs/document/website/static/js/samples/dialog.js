document.addEventListener("kuc:loaded", function() {
  const container = document.querySelector("#sample-container__components");
  const contentWindow = container.querySelector("#iframe").contentWindow;
  const ifrDocument = contentWindow.document;

  const dialog = new Kuc.Dialog({
    title: "Title",
    content: `<div><p style="margin: 0;">This is Content</p></div>`,
    footer: "Footer"
  });
  ifrDocument.querySelector("body").appendChild(dialog);
  ifrDocument.querySelector("kuc-dialog").setAttribute("opened", "opened");
});