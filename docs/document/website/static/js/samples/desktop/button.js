document.addEventListener("kuc:loaded", function() {
  const script = `
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
    document.body.appendChild(buttonNormal);
    document.body.appendChild(buttonSubmit);
    document.body.appendChild(buttonAlert);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});