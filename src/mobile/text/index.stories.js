import { MobileText } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("mobile/text", module)
  .addParameters({ viewport: { defaultViewport: "iPhone11Pro" } })
  .add("Base", () => {
    const root = document.createElement("div");
    const mobileText = new MobileText({
      value: "Orange",
      requiredIcon: true,
      label: "Text",
      error: "Error occured!"
    });
    mobileText.addEventListener("focus", event => {
      console.log(event.detail);
    });
    mobileText.addEventListener("change", event => {
      console.log(event.detail);
    });
    mobileText.addEventListener("input", event => {
      console.log(event.detail);
    });
    root.appendChild(mobileText);

    return root;
  });
