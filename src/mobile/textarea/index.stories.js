import { MobileTextArea } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("mobile/textarea", module)
  .addParameters({ viewport: { defaultViewport: "iPhone11Pro" } })
  .add("Base", () => {
    const root = document.createElement("div");
    const mobileTextArea = new MobileTextArea({
      label: "Label",
      requiredIcon: true,
      value: "",
      placeholder: "Place holder",
      error: "Error occurred!",
      className: "options-class",
      id: "options-id",
      visible: true,
      disabled: false
    });

    mobileTextArea.addEventListener("change", function(event) {
      console.log(event.detail);
    });

    mobileTextArea.addEventListener("focus", function(event) {
      console.log(event.detail);
    });

    mobileTextArea.addEventListener("input", function(event) {
      console.log(event.detail);
    });
    root.appendChild(mobileTextArea);

    return root;
  });
