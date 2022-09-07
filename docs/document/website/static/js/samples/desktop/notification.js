document.addEventListener("kuc:loaded", function () {
  const script = `
    const notificatonInfo = new Kuc.Notification({text: "Info!", type: "info"});
    notificatonInfo.open();

    const notificatonSuccess = new Kuc.Notification({text: "Success!", type: "success"});
    notificatonSuccess.open();
    notificatonSuccess.style.paddingTop = "80px";

    const notificatonError = new Kuc.Notification({text: "Error!", type: "error"});
    notificatonError.open();
    notificatonError.style.paddingTop = "160px";
  `;

  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});
