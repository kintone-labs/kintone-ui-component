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
      console.log(event);
    });

    mobileTextArea.addEventListener("focus", function(event) {
      console.log(event);
    });
    root.appendChild(mobileTextArea);

    return root;
  })
  // UI For document site. Do not change or delete below.
  .add("Document", () => {
    const root = document.createElement("div");
    const mobileTextarea = new MobileTextArea({});
    root.appendChild(mobileTextarea);
    return root;
  });
