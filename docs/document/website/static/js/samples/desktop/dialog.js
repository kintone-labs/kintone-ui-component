document.addEventListener("kuc:loaded", function () {
  const script = `
    const okButton = new Kuc.Button({
      text: "OK",
      type: "submit"
    });
    const cancelButton = new Kuc.Button({
      text: "Cancel",
      type: "normal",
    });
    cancelButton.style.marginRight = "16px";

    const footerEl = document.createElement("div");
    footerEl.style.display = "flex";
    footerEl.appendChild(cancelButton)
    footerEl.appendChild(okButton)

    const dialog = new Kuc.Dialog({
      title: "Title",
      content: "<div><p style='margin: 0;'>This is Content</p></div>",
      footer: footerEl,
      icon: "info"
    });

    dialog.open();
  `;

  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});
