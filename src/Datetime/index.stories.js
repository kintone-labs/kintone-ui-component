import { Datetime } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("Datetime", module).add("base", () => {
  const root = document.createElement("div");
  const datetime = new Datetime();
  root.appendChild(datetime);
  return root;
});
