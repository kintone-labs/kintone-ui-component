import { MobileBaseLabel } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("mobile/base/label", module)
  .addParameters({ viewport: { defaultViewport: "iPhone11Pro" } })
  .add("Base", () => {
    const root = document.createElement("div");
    const mobileBaseLabel = new MobileBaseLabel({
      value: "Text label",
      requiredIcon: true
    });

    root.appendChild(mobileBaseLabel);

    return root;
  });
