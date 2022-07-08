import "./index.ts";
import { html } from "lit-html";

export default {
  title: "mobile/date-picker",
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
    viewport: {
      defaultViewport: "iPhone11Pro",
    },
    actions: {
      handles: ["change"],
    },
  },
};

const Template = (args) => {
  const handleDateChange = (event) => {
    console.log(event);
  };
  return html`
    <kuc-mobile-date-picker
      .disabled="${args.disabled}"
      .language="${args.language}"
      .value="${args.value}"
      .id="${args.id}"
      .label="${args.label}"
      .requiredIcon="${args.requiredIcon}"
      .visible="${args.visible}"
      .className="${args.className}"
      .error="${args.error}"
      @change="${handleDateChange}"
    ></kuc-mobile-date-picker>
  `;
};

export const Base = Template.bind({});
Base.args = {
  className: "date-picker-class",
  error: "",
  id: "date-picker-id",
  label: "Date Picker Label",
  language: "en",
  requiredIcon: false,
  value: "2021-03-31",
  visible: true,
};
