import "./index.ts";
import { html } from "lit-html";

export default {
  title: "mobile/datetime-picker",
  argTypes: {
    language: {
      name: "language",
      control: {
        type: "select",
        options: ["auto", "en", "ja", "zh"]
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: "iPhone11Pro"
    },
    actions: {
      handles: ["change"]
    }
  }
};

const Template = args => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html`
    <kuc-mobile-datetime-picker
      .className="${args.className}"
      .error="${args.error}"
      .id="${args.id}"
      .label="${args.label}"
      .language="${args.language}"
      .value="${args.value}"
      .disabled="${args.disabled}"
      .hour12="${args.hour12}"
      .requiredIcon="${args.requiredIcon}"
      .visible="${args.visible}"
      @change="${handleDateChange}"
    ></kuc-mobile-datetime-picker>
  `;
};

export const Base = Template.bind({});
Base.args = {
  className: "datetime-class",
  error: "DateTimePicker error",
  id: "datetime-id",
  label: "Date and Time label",
  language: "en",
  value: "2021-02-28",
  disabled: false,
  hour12: true,
  requiredIcon: true,
  visible: true
};

export const BaseHour12 = Template.bind({});
BaseHour12.args = {
  className: "datetime-class",
  error: "",
  id: "datetime-id",
  label: "Date and Time label",
  language: "en",
  value: "2021-02-28",
  disabled: false,
  hour12: true,
  requiredIcon: false,
  visible: true
};

export const BaseHour24 = Template.bind({});
BaseHour24.args = {
  className: "datetime-class",
  error: "",
  id: "datetime-id",
  label: "Date and Time label",
  language: "en",
  value: "2021-02-28",
  disabled: false,
  hour12: false,
  requiredIcon: false,
  visible: true
};

export const BaseLanguageEN = Template.bind({});
BaseLanguageEN.args = {
  className: "datetime-class",
  error: "",
  id: "datetime-id",
  label: "Date and Time label",
  language: "en",
  value: "2021-02-28",
  disabled: false,
  hour12: false,
  requiredIcon: false,
  visible: true
};

export const BaseLanguageJA = Template.bind({});
BaseLanguageJA.args = {
  className: "datetime-class",
  error: "",
  id: "datetime-id",
  label: "Date and Time label",
  language: "ja",
  value: "2021-02-28",
  disabled: false,
  hour12: false,
  requiredIcon: false,
  visible: true
};

export const BaseLanguageZH = Template.bind({});
BaseLanguageZH.args = {
  className: "datetime-class",
  error: "",
  id: "datetime-id",
  label: "Date and Time label",
  language: "zh",
  value: "2021-02-28",
  disabled: false,
  hour12: false,
  requiredIcon: false,
  visible: true
};

export const BaseError = Template.bind({});
BaseError.args = {
  className: "datetime-class",
  error: "Datetime error",
  id: "datetime-id",
  label: "Date and Time label",
  language: "en",
  value: "2021-02-28",
  disabled: false,
  hour12: false,
  requiredIcon: false,
  visible: true
};
