import "./index.ts";
import { html } from "lit-html";
export default {
  title: "base/datetime/date",
  argTypes: {
    disabled: {
      name: "disabled",
      control: {
        type: "select",
        options: [true, false],
      },
    },
    language: {
      name: "language",
      control: {
        type: "select",
        options: ["en", "ja", "zh"],
      },
    },
    value: {
      name: "value",
      control: {
        type: "text",
      },
    },
    inputId: {
      name: "inputId",
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    actions: {
      handles: ["kuc:base-date-change"],
    },
  },
};

const Template = ({ disabled, language, value, inputId }) => {
  const handleDateChange = (event) => {
    console.log(event);
  };
  return html`
    <kuc-base-date
      .disabled="${disabled}"
      .language="${language}"
      .value="${value}"
      .inputId="${inputId}"
      @kuc:base-date-change="${handleDateChange}"
    ></kuc-base-date>
  `;
};

export const base = Template.bind({});
base.args = {
  disabled: false,
  language: "en",
  value: "2021-10-20",
  inputId: "e7ef328d-2841-42e5-aca6",
};
