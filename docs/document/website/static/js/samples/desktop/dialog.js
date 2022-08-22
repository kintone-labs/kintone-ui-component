document.addEventListener("kuc:loaded", function () {
  const script = `
    const dialog = new Kuc.Dialog({
      title: "Title",
      content: "<div><p style='margin: 0;'>This is Content</p></div>",
      footer: "Footer"
    });

    dialog.open();
  `;

  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});
