document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const buttonNormal = new Kuc.Button({
    text: "Normal",
    type: "normal",
    className: "kuc_normal_button"
  });

  const buttonSubmit = new Kuc.Button({
    text: "Submit",
    type: "submit",
    className: "kuc_submit_button"
  });

  const buttonAlert = new Kuc.Button({
    text: "Alert",
    type: "alert",
    className: "kuc_alert_button"
  });
  container.appendChild(buttonNormal);
  container.appendChild(buttonSubmit);
  container.appendChild(buttonAlert);
});