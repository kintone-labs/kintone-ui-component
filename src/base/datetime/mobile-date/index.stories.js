import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/datetime/mobile-date",
  argTypes: {
    language: {
      name: "language",
      control: {
        type: "select",
        options: ["en", "ja", "zh"],
      },
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "iPhone11Pro",
    },
    actions: {
      handles: ["kuc:mobile-base-date-change"],
    },
  },
};

const Template = (args) => {
  return html`
    <kuc-mobile-base-date
      .value="${args.value}"
      .language="${args.language}"
      .disabled="${args.disabled}"
      .required="${args.required}"
    ></kuc-mobile-base-date>
  `;
};

export const Base = Template.bind({});
Base.args = {
  value: "2022-02-14",
  disabled: false,
  required: false,
  language: "en",
};
