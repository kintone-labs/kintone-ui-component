document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const mobileNotification = new Kuc.MobileNotification({
    text: "Error!"
  });
  mobileNotification.open();
  mobileNotification.style.position = "relative";
  container.appendChild(mobileNotification);
});