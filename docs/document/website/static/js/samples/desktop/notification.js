document.addEventListener("kuc:loaded", function() {
  const container = document.querySelector("#sample-container__components");
  const contentWindow = container.querySelector("#iframe").contentWindow;
  const ifrDocument = contentWindow.document;

  const divInfo = document.createElement("div");
  divInfo.className = "notification-info";
  const notificatonInfo = new Kuc.Notification({text: "Info!", type: "info"});
  divInfo.appendChild(notificatonInfo);

  const divSuccess = document.createElement("div");
  divSuccess.className = "notification-success";
  const notificatonSuccess = new Kuc.Notification({text: "Success!", type: "success"});
  divSuccess.appendChild(notificatonSuccess);

  const divError = document.createElement("div");
  divError.className = "notification-error";
  const notificatonError = new Kuc.Notification({text: "Error!", type: "error"});
  divError.appendChild(notificatonError);

  ifrDocument.querySelector("body").appendChild(divInfo);
  ifrDocument.querySelector("body").appendChild(divSuccess);
  ifrDocument.querySelector("body").appendChild(divError);

  ifrDocument.querySelector(".notification-info kuc-notification").style.position = "relative";
  ifrDocument.querySelector(".notification-success kuc-notification").style.position = "relative";
  ifrDocument.querySelector(".notification-error kuc-notification").style.position = "relative";

  ifrDocument.querySelector(".notification-info kuc-notification").classList.add("kuc-notification-fadein");
  ifrDocument.querySelector(".notification-success kuc-notification").classList.add("kuc-notification-fadein");
  ifrDocument.querySelector(".notification-error kuc-notification").classList.add("kuc-notification-fadein");

});