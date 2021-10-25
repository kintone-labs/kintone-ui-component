import { storiesOf } from "@storybook/web-components";
import { DatePicker } from "./index.ts";
storiesOf("desktop/date-picker", module).add("Base", () => {
  const root = document.createElement("div");
  const date = new DatePicker({
    value: "10/20/2021",
    requiredIcon: true,
    error: "error",
    label: "DATE",
    language: "en"
  });
  root.appendChild(date);
  return root;
});
storiesOf("desktop/date-picker", module).add("Under", () => {
  const root = document.createElement("div");
  const date = new DatePicker({
    requiredIcon: true,
    error: "error",
    label: "DATE",
    language: "auto"
  });
  date.addEventListener("change", function(event){
    console.log(event);
  })
  const div = document.createElement("div");
  div.style.height = "400px";
  const divFooter = document.createElement("div");
  divFooter.style.height = "300px";
  root.appendChild(div);
  root.appendChild(date);
  root.appendChild(divFooter);
  return root;
});
