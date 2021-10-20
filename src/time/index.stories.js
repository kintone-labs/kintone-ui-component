import { storiesOf } from "@storybook/web-components";
import { Time } from "./index.ts";

storiesOf("desktop/time", module).add("Base", () => {
  const root = document.createElement("div");
  const TimeComponent = new Time({
    className: "sample-class",
    id: "sample-id",
    error: "",
    label: "Time",
    value: "13:15",
    disabled: false,
    hour12: true,
    visible: true,
    requiredIcon: false
  });
  TimeComponent.addEventListener("change", function(event) {
    console.log(event.detail);
  });
  root.appendChild(TimeComponent);
  return root;
});
