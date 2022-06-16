import { Button } from "kintone-ui-component";

const root = document.getElementById("app");
const text = new Button({
  className: "sample-class",
  id: "sample-id",
  visible: true,
  text: "text",
  disabled: false
});


const styleEl = document.createElement("style");
styleEl.innerText = `
.sample-class {
  --kuc-button-background-color-1-3-2: red;
  --kuc-button-text-color-1-3-2: haha;
}
`;

const headerEl = document.head.appendChild(styleEl);

root.appendChild(text);
