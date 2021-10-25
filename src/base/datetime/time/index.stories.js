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

const Template = ({ disabled, hour12, inputAriaInvalid, inputId, value }) =>
  html`
    <kuc-base-time
      .disabled=${disabled}
      .hour12=${hour12}
      .inputAriaInvalid=${inputAriaInvalid}
      .inputId=${inputId}
      .value=${value}
    ></kuc-base-time>
  `;

export const Base = Template.bind({});
Base.args = {
  disabled: false,
  hour12: false,
  inputAriaInvalid: false,
  inputId: "e7ef328d-1831-42e5-ace7",
  value: "13:15"
};
