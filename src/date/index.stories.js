import { storiesOf } from "@storybook/web-components";
import { KucDate } from "./index.ts";
storiesOf("desktop/date", module).add("Base", () => {
  const root = document.createElement("div");
  const date = new KucDate({
    value: "2021-10-20",
    requiredIcon: true,
    error: "error",
    label: "DATE",
    language: "zh"
  });
  root.appendChild(date);
  return root;
});
storiesOf("desktop/date", module).add("Under", () => {
  const root = document.createElement("div");
  const date = new KucDate({
    requiredIcon: true,
    error: "error",
    label: "DATE",
    language: "auto"
  });
  const div = document.createElement("div");
  div.style.height = "300px";
  const divFooter = document.createElement("div");
  divFooter.style.height = "300px";
  root.appendChild(div);
  root.appendChild(date);
  root.appendChild(divFooter);
  return root;
});
