import { html } from "lit-html";
import "./index.ts";

export default {
  title: "desktop/time-picker",
  argTypes: {
    language: {
      name: "language",
      control: {
        type: "select",
        options: ["auto", "en", "ja", "zh"],
      },
    },
  },
  parameters: {
    actions: {
      handles: ["change"],
    },
  },
};

const Template = (args) =>
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
      .timeStep="${args.timeStep}"
      .min="${args.min}"
      .max="${args.max}"
      .language="${args.language}"
    ></kuc-time-picker>
  `;

export const BaseHour24 = Template.bind({});
BaseHour24.args = {
  className: "time-picker-class",
  error: "",
  id: "time-picker-id",
  label: "Time Picker Label",
  value: "13:15",
  disabled: false,
  hour12: false,
  requiredIcon: false,
  visible: true,
  language: "en",
  timeStep: 60,
  min: "00:00",
  max: "23:59",
};

export const BaseHour12 = Template.bind({});
BaseHour12.args = {
  className: "time-picker-class",
  error: "",
  id: "time-picker-id",
  label: "Time Picker Label",
  value: "13:15",
  disabled: false,
  hour12: true,
  requiredIcon: false,
  visible: true,
  language: "en",
  timeStep: 30,
  min: "08:00",
  max: "20:00",
};

export const BaseError = Template.bind({});
BaseError.args = {
  className: "time-picker-class",
  error: "TimePicker error",
  id: "time-picker-id",
  label: "Time Picker Label",
  value: "13:15",
  disabled: false,
  hour12: false,
  requiredIcon: false,
  visible: true,
  language: "en",
  timeStep: 30,
  min: "00:00",
  max: "23:59",
};
