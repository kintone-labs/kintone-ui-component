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
  --kuc-button-width-1-3-2: 100px;
  --kuc-button-height-1-3-2: 100px;
  --kuc-button-background-color-1-3-2: red;
  --kuc-button-background-hover-1-3-2: yellow;
  --kuc-button-background-active-1-3-2: blue;
  --kuc-button-background-focus-1-3-2: green;
  --kuc-button-text-color-1-3-2: white;
  --kuc-button-font-size-1-3-2: 18px;
}
`;

document.head.appendChild(styleEl);

root.appendChild(text);
