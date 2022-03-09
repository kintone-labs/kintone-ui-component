document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const dialog = new Kuc.Dialog({
    title: "Title",
    content: "<div>This is Content</div>",
    footer: "Footer"
  });
  dialog.open();
  dialog.addEventListener("click", () => dialog.close());
  container.appendChild(dialog);
});