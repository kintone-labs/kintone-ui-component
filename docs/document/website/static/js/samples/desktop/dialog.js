document.addEventListener("kuc:loaded", function () {
  const script = `
    const dialogOKButton = new Kuc.Button({
      text: "OK",
      type: "submit"
    });
    const dialogCancelButton = new Kuc.Button({
      text: "Cancel",
      type: "cancel",
      id: "kuc_dialog_cancel_button"
    });
    dialogCancelButton.style.marginRight = "16px";

    const footerEl = document.createElement("div");
    footerEl.style.display = "flex";
    footerEl.appendChild(dialogCancelButton)
    footerEl.appendChild(dialogOKButton)

    const dialog = new Kuc.Dialog({
      title: "Title",
      content: "<div><p style='margin: 0;'>This is Content</p></div>",
      footer: footerEl
    });

    dialog.open();
  `;

  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});
