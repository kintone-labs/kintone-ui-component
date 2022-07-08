import { html } from "lit-html";
import "./index.ts";

export default {
  title: "base/datetime/time",
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
    actions: {
      handles: ["kuc:base-time-change"],
    },
  },
};

const Template = ({ disabled, hour12, value, timeStep, min, max, language }) =>
  html`
    <kuc-base-time
      .disabled="${disabled}"
      .hour12="${hour12}"
      .value="${value}"
      .timeStep="${timeStep}"
      .min="${min}"
      .max="${max}"
      .language="${language}"
    ></kuc-base-time>
  `;

export const Base = Template.bind({});
Base.args = {
  disabled: false,
  hour12: true,
  value: "08:15",
  timeStep: 30,
  min: "00:00",
  max: "23:59",
  language: "en",
};
