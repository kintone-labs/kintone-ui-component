import { html } from "lit-html";
import "./index.ts";

export default {
  title: "desktop/time-picker",
  argTypes: {},
  parameters: {
    actions: {
      handles: ["change"]
    }
  }
};

const Template = args =>
  html`
    <kuc-time-picker
      .className="${args.className}"
      .error="${args.error}"
      .id="${args.id}"
      .label="${args.label}"
      .value="${args.value}"
      .disabled="${args.disabled}"
      .hour12="${args.hour12}"
      .requiredIcon="${args.requiredIcon}"
      .visible="${args.visible}"
    ></kuc-time-picker>
  `;

export const Base = Template.bind({});
Base.args = {
  className: "time-picker-class",
  error: "time picker error.",
  id: "time-picker-id",
  label: "Time Picker Label",
  value: "13:15",
  disabled: false,
  hour12: false,
  requiredIcon: false,
  visible: true
};
