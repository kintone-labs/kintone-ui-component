import { Spinner } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("spinner", module)
  .add("Base", () => {
    const root = document.createElement("div");
    const spinner = new Spinner({
      text: "now loading..."
    });
    spinner.open();
    return root;
  })
  // UI For document site. Do not change or delete below.
  .add("Document", () => {
    const root = document.createElement("div");
    const spinner = new Spinner({
      text: "now loading..."
    });
    spinner.open();
    return root;
  });
