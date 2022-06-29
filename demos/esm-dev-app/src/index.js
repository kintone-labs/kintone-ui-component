import { Button } from "kintone-ui-component";

const root = document.getElementById("app");
const text = new Button({
  className: "sample-class",
  id: "sample-id",
  visible: true,
  text: "text",
  disabled: false
});
root.appendChild(text);
