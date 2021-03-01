import { TextArea } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("textarea", module)
  .add("Base", () => {
    const root = document.createElement("div");
    const textarea = new TextArea({
      label: "フルーツ",
      requiredIcon: true,
      value: "Apple",
      error: "エラーです",
      className: "options-class",
      id: "options-id",
      visible: true,
      disabled: false
    });
    textarea.addEventListener("change", event => {
      console.log(event);
      console.log(event.detail.oldValue);
      console.log(event.detail.value);
    });
    textarea.addEventListener("focus", event => {
      console.log(event);
      console.log(event.detail.value);
    });
    root.appendChild(textarea);
    return root;
  })
  .add("Base2", () => {
    const root = document.createElement("div");
    const textarea = new TextArea();
    root.appendChild(textarea);
    return root;
  })
  .add("Base3", () => {
    const root = document.createElement("div");
    const textarea = new TextArea({
      placeholder: "placeholder"
    });
    root.appendChild(textarea);
    return root;
  })
  .add("Base4", () => {
    const root = document.createElement("div");
    const textarea = new TextArea({
      error: "Error occurred!"
    });
    root.appendChild(textarea);
    return root;
  })
  // UI For document site. Do not change or delete below.
  .add("Document", () => {
    const root = document.createElement("div");
    const textarea = new TextArea({});
    root.appendChild(textarea);
    return root;
  });
