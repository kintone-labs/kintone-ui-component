import "./index.ts";
import { html } from "lit-html";

export default {
  title: "desktop/date-picker",
  argTypes: {},
  parameters: {
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
    <kuc-date-picker
      .disabled=${args.disabled}
      .language=${args.language}
      .value=${args.value}
      .id=${args.id}
      .label=${args.label}
      .requiredIcon=${args.requiredIcon}
      .visible=${args.visible}
      .className=${args.className}
      .error=${args.error}
      @change="${handleDateChange}"
    ></kuc-date-picker>
  `;
};

export const Base = Template.bind({});
Base.args = {
  className: "date-picker-class",
  id: "date-picker-id",
  label: "Date Picker Label",
  requiredIcon: false,
  language: "auto",
  value: "2021-02-28",
  visible: true
};
