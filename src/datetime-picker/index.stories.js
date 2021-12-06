import "./index.ts";
import { html } from "lit-html";

export default {
  title: "desktop/datetime-picker",
  argTypes: {
    language: {
      name: "language",
      options: ["en", "ja", "zh", "auto"],
      control: { type: "select" }
    },
    value: {
      name: "value",
      control: {
        type: "text"
      }
    }
  },
  parameters: {
    actions: {
      handles: ["change"]
    }
  }
};
const Template = args => {
  const handleDateChange = event => {
    // console.log(event);
  };
  return html`
    <kuc-datetime-picker
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
    ></kuc-datetime-picker>
  `;
};
export const Base = Template.bind({});
Base.args = {
  className: "datetime-class",
  error: "",
  id: "datetime-id",
  label: "Date and Time label",
  language: "auto",
  value: "2021-12-12T06:30:30",
  disabled: false,
  hour12: false,
  requiredIcon: true,
  visible: true
};
