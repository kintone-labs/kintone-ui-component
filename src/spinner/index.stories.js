import { Spinner } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("desktop/spinner", module).add("Base", () => {
  const root = document.createElement("div");
  const spinner = new Spinner({
    text: "now loading..."
  });
  spinner.open();
  return root;
});
