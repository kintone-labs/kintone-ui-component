import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/datetime/mobile-time",
  argTypes: {},
  parameters: {
    viewport: {
      defaultViewport: "iPhone11Pro",
    },
    actions: {
      handles: ["kuc:base-mobile-time-change"],
    },
  },
};

const Template = (args) => {
  return html`
    <kuc-base-mobile-time
      .value="${args.value}"
      .hour12="${args.hour12}"
      .disabled="${args.disabled}"
    ></kuc-base-mobile-time>
  `;
};

export const Base = Template.bind({});
Base.args = {
  value: "12:30",
  disabled: false,
  hour12: false,
};
