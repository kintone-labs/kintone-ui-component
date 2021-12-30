import { MobileBaseError } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("mobile/base/error", module)
  .addParameters({ viewport: { defaultViewport: "iPhone11Pro" } })
  .add("Base", () => {
    const root = document.createElement("div");
    const mobileBaseError = new MobileBaseError({
      value: "Error occured!"
    });

    root.appendChild(mobileBaseError);

    return root;
  });
