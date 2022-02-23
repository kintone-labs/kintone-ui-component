import { html } from "lit-html";
import "./index.ts";
export default {
  title: "mobile/time-picker",
  argTypes: {},
  parameters: {
    viewport: {
      defaultViewport: "iPhone11Pro"
    },
    actions: {
      handles: ["change"]
    }
  }
};
const Template = args =>
  html`
    <kuc-mobile-time-picker
      .className="${args.className}"
      .error="${args.error}"
      .id="${args.id}"
      .label="${args.label}"
      .value="${args.value}"
      .disabled="${args.disabled}"
      .hour12="${args.hour12}"
      .requiredIcon="${args.requiredIcon}"
      .visible="${args.visible}"
    ></kuc-mobile-time-picker>
  `;

export const BaseHour24 = Template.bind({});
BaseHour24.args = {
  className: "mobile-time-picker-class",
  error: "",
  id: "mobile-time-picker-id",
  label: "Mobile Time Picker Label",
  value: "13:15",
  disabled: false,
  hour12: false,
  requiredIcon: false,
  visible: true
};

export const BaseHour12 = Template.bind({});
BaseHour12.args = {
  className: "mobile-time-picker-class",
  error: "",
  id: "mobile-time-picker-id",
  label: "Mobile Time Picker Label",
  value: "13:15",
  disabled: false,
  hour12: true,
  requiredIcon: false,
  visible: true
};

export const BaseError = Template.bind({});
BaseError.args = {
  className: "mobile-time-picker-class",
  error: "Mobile TimePicker error",
  id: "mobile-time-picker-id",
  label: "Mobile Time Picker Label",
  value: "13:15",
  disabled: false,
  hour12: false,
  requiredIcon: false,
  visible: true
};
