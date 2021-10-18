import { html } from "lit-html";

import "./index.ts";

export default {
  title: "base/time",
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
      handles: ["kuc:date-time-change"]
    }
  }
};

const Template = ({ disabled, hour12, visible, value }) =>
  html`
    <kuc-base-time
      .disabled=${disabled}
      .hour12=${hour12}
      .visible=${visible}
      .value=${value}
    ></kuc-base-time>
  `;

export const Base = Template.bind({});
Base.args = {
  disabled: false,
  hour12: false,
  visible: true,
  value: "13:15"
};
