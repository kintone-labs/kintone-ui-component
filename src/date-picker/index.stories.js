import "./index.ts";
import { html } from "lit-html";

export default {
  title: "desktop/date-picker",
  argTypes: {
    className: {
      name: "className",
      control: {
        type: "text"
      }
    },
    error: {
      name: "error",
      control: {
        type: "text"
      }
    },
    id: {
      name: "id",
      control: {
        type: "text"
      }
    },
    label: {
      name: "label",
      control: {
        type: "text"
      }
    },
    language: {
      name: "language",
      control: {
        type: "select",
        options: ["auto", "en", "ja", "zh"]
      }
    },
    requiredIcon: {
      name: "requiredIcon",
      control: { type: "boolean" }
    },
    value: {
      name: "value",
      control: {
        type: "text"
      }
    },
    visible: {
      name: "visible",
      control: { type: "boolean" }
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
    console.log(event);
  };
  return html`
    <kuc-date-picker
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
    ></kuc-date-picker>
  `;
};

export const BaseLanguageEN = Template.bind({});
BaseLanguageEN.args = {
  className: "date-picker-class",
  error: "",
  id: "date-picker-id",
  label: "Date Picker Label",
  language: "en",
  requiredIcon: false,
  value: "2021-03-31",
  visible: true
};

export const BaseLanguageJA = Template.bind({});
BaseLanguageJA.args = {
  className: "date-picker-class",
  error: "",
  id: "date-picker-id",
  label: "Date Picker Label",
  language: "ja",
  requiredIcon: false,
  value: "2021-03-31",
  visible: true
};

export const BaseLanguageZH = Template.bind({});
BaseLanguageZH.args = {
  className: "date-picker-class",
  error: "",
  id: "date-picker-id",
  label: "Date Picker Label",
  language: "zh",
  requiredIcon: false,
  value: "2021-03-31",
  visible: true
};

export const BaseError = Template.bind({});
BaseError.args = {
  className: "date-picker-class",
  error: "Date picker error",
  id: "date-picker-id",
  label: "Date Picker Label",
  requiredIcon: true,
  language: "en",
  value: "2021-03-31",
  visible: true
};
