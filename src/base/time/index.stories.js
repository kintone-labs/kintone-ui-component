import { html } from "lit-html";
import "./index.ts";

export default {
  title: "base/time",
  argTypes: {},
  parameters: {
    actions: {
      handles: ["kuc:base-time-change"]
    }
  }
};

const Template = ({ disabled, hour12, value }) =>
  html`
    <kuc-base-time
      .disabled=${disabled}
      .hour12=${hour12}
      .value=${value}
    ></kuc-base-time>
  `;

export const Base = Template.bind({});
Base.args = {
  disabled: false,
  hour12: false,
  value: "13:15"
};
