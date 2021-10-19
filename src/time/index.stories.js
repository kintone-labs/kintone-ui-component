import { html } from "lit-html";

import "./index.ts";

export default {
  title: "desktop/time",
  argTypes: {
    disabled: {
      name: "disabled",
      control: {
        type: "select",
        options: [true, false]
      }
    },
    hour12: {
      name: "hour12",
      control: {
        type: "select",
        options: [true, false]
      }
    },
    visible: {
      name: "visible",
      control: {
        type: "select",
        options: [true, false]
      }
    },
    value: {
      name: "value",
      controls: { type: "text" }
    }
  },
  parameters: {
    actions: {
      handles: ["kuc:time-change"]
    }
  }
};

const Template = ({
  label,
  error,
  value,
  timeStep,
  disabled,
  hour12,
  visible,
  requiredIcon
}) =>
  html`
    <kuc-time
      .label="${label}"
      .error="${error}"
      .value="${value}"
      .timeStep="${timeStep}"
      ?hour12="${hour12}"
      ?visible="${visible}"
      ?disabled="${disabled}"
      ?requiredIcon="${requiredIcon}"
    ></kuc-time>
  `;

export const Base = Template.bind({});
Base.args = {
  label: "Time",
  error: "",
  value: "13:15",
  timeStep: 30,
  disabled: false,
  hour12: false,
  visible: true,
  requiredIcon: false
};
