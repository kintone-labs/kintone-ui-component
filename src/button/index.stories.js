import { Button } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("button", module)
  .add("Base", () => {
    const root = document.createElement("div");
    const normalButton = new Button({
      className: "sample-class",
      id: "sample-id",
      visible: true,
      disabled: false
    });
    normalButton.addEventListener("click", event => {
      console.log(["clickEvent", event]);
    });
    const submitButton = new Button({
      text: "Submit",
      type: "submit",
      visible: true,
      disabled: false
    });
    submitButton.addEventListener("click", event => {
      console.log(["clickEvent", event]);
    });

    const alertButton = new Button({
      text: "Alert",
      type: "alert",
      visible: true,
      disabled: false
    });
    alertButton.addEventListener("click", event => {
      console.log(["clickEvent", event]);
    });

    const disabledButton = new Button({
      text: "Submit",
      type: "submit",
      visible: true,
      disabled: true
    });
    disabledButton.addEventListener("click", event => {
      console.log(["clickEvent", event]);
    });
    root.appendChild(normalButton);
    root.appendChild(submitButton);
    root.appendChild(alertButton);
    root.appendChild(disabledButton);
    return root;
  })
  // UI For document site. Do not change or delete below.
  .add("Document", () => {
    const root = document.createElement("div");
    const buttonNormal = new Button({
      text: "Normal",
      type: "normal",
      className: "kuc_submit_button"
    });
    buttonNormal.style.margin = "0px 5px 0px 0px";

    const buttonSubmit = new Button({
      text: "Submit",
      type: "submit",
      className: "kuc_submit_button"
    });
    buttonSubmit.style.margin = "0px 5px 0px 0px";

    const buttonAlert = new Button({
      text: "Alert",
      type: "alert",
      className: "kuc_alert_button"
    });
    root.appendChild(buttonNormal);
    root.appendChild(buttonSubmit);
    root.appendChild(buttonAlert);
    return root;
  });
