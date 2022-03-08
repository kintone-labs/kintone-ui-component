document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const notificationInfo = new Kuc.Notification({
    text: "Info!",
    type: "info"
  });
  notificationInfo.open();
  notificationInfo.style.position = "unset";

  const notificationSuccess = new Kuc.Notification({
    text: "Success!",
    type: "success"
  });
  notificationSuccess.open();
  notificationSuccess.style.position = "unset";

  const notificationError = new Kuc.Notification({
    text: "Error!",
    type: "error"
  });
  notificationError.open();
  notificationError.style.position = "unset";

  container.appendChild(notificationInfo);
  container.appendChild(notificationSuccess);
  container.appendChild(notificationError);
});