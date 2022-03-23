import { html } from "lit-html";
import "./index.ts";

export default {
  title: "base/datetime/time",
  argTypes: {},
  parameters: {
    actions: {
      handles: ["kuc:base-time-change"]
    }
  }
};

const Template = ({ disabled, hour12, value, timeStep, max, min }) =>
  html`
    <kuc-base-time
      .disabled="${disabled}"
      .hour12="${hour12}"
      .value="${value}"
      .timeStep="${timeStep}"
      .max="${max}"
      .min="${min}"
    ></kuc-base-time>
  `;

export const Base = Template.bind({});
Base.args = {
  disabled: false,
  hour12: true,
  value: "08:15",
  timeStep: 30,
  max: "23:59",
  min: "00:00"
};
