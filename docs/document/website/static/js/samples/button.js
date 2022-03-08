document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const buttonNormal = new Kuc.Button({
    text: "Normal",
    type: "normal",
    className: "kuc_submit_button"
  });
  buttonNormal.style.margin = "0px 5px 0px 0px";

  const buttonSubmit = new Kuc.Button({
    text: "Submit",
    type: "submit",
    className: "kuc_submit_button"
  });
  buttonSubmit.style.margin = "0px 5px 0px 0px";

  const buttonAlert = new Kuc.Button({
    text: "Alert",
    type: "alert",
    className: "kuc_alert_button"
  });
  container.appendChild(buttonNormal);
  container.appendChild(buttonSubmit);
  container.appendChild(buttonAlert);
});