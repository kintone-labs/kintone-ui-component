import { Button, Text } from "kintone-ui-component";

const root = document.getElementById("app");
const button = new Button({
  className: "button-class",
  id: "button-id",
  visible: true,
  text: "text",
  disabled: false
});
root.appendChild(button);

const text = new Text({
  value: "Orange",
  className: "text-class",
  id: "aaaaaa",
  textalign: "righttt",
  placeholder: "hogehoge1",
  label: "フルーツ",
  requiredIcon: true,
  error: "エラーです"
});
root.appendChild(text);
