document.addEventListener("kuc:loaded", function() {
  const container = document.querySelector("#sample-container__components");
  const contentWindow = container.querySelector("#iframe").contentWindow;
  const ifrDocument = contentWindow.document;

  const mobileNotification = new Kuc.MobileNotification({
    text: "Error!"
  });
  ifrDocument.querySelector("body").appendChild(mobileNotification);
  ifrDocument.querySelector("kuc-mobile-notification").classList.add("kuc-mobile-notification-fadein");
});