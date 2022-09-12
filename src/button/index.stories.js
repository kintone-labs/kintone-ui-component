import { Button } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("desktop/button", module).add("Base", () => {
  const root = document.createElement("div");
  const normalButton = new Button({
    className: "sample-class",
    id: "sample-id",
    visible: true,
    disabled: false,
  });
  normalButton.addEventListener("click", (event) => {
    console.log(["clickEvent", event]);
  });
  normalButton.style.margin = "5px";

  const submitButton = new Button({
    text: "Submit",
    type: "submit",
    visible: true,
    disabled: false,
  });
  submitButton.addEventListener("click", (event) => {
    console.log(["clickEvent", event]);
  });
  submitButton.style.margin = "5px";

  const alertButton = new Button({
    text: "Alert",
    type: "alert",
    visible: true,
    disabled: false,
  });
  alertButton.addEventListener("click", (event) => {
    console.log(["clickEvent", event]);
  });
  alertButton.style.margin = "5px";

  const disabledButton = new Button({
    text: "Submit",
    type: "submit",
    visible: true,
    disabled: true,
  });
  disabledButton.addEventListener("click", (event) => {
    console.log(["clickEvent", event]);
  });
  disabledButton.style.margin = "5px";

  root.appendChild(normalButton);
  root.appendChild(submitButton);
  root.appendChild(alertButton);
  root.appendChild(disabledButton);
  return root;
});
