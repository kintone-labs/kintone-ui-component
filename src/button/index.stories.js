import { html } from "lit-html";
import "./index.ts";
export default {
  title: "desktop/button",
  argTypes: {
    className: { name: "className" },
    disabled: { name: "disabled" },
    id: { name: "id" },
    type: {
      name: "type",
      options: ["normal", "alert", "submit"],
      control: {
        type: "select",
      },
    },
    text: { name: "text" },
    visible: { name: "visible" },
  },
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
};

const template = (args) => {
  const handleClick = (event) => {
    console.log(event);
  };
  return html`
    <kuc-button
      .className="${args.className}"
      .disable="${args.disabled}"
      .id="${args.id}"
      .type="${args.type}"
      .text="${args.text}"
      .visible="${args.visible}"
      @click="${handleClick}"
    ></kuc-button>
  `;
};

export const Base = template.bind({});
Base.args = {
  className: "sample-class",
  error: "button error",
  id: "sample-id",
  text: "Button",
  visible: true,
  disabled: false,
  type: "normal",
};
