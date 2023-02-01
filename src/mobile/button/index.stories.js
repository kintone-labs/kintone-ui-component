import { html } from "lit";
import "./index.ts";
export default {
  title: "mobile/button",
  argTypes: {
    className: { name: "className" },
    disabled: { name: "disabled" },
    id: { name: "id" },
    type: {
      name: "type",
      options: ["normal", "submit"],
      control: {
        type: "select",
      },
    },
    text: { name: "text" },
    visible: { name: "visible" },
  },
  parameters: {
    viewport: {
      defaultViewport: "iPhone11Pro",
    },
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
    <kuc-mobile-button
      .className="${args.className}"
      .disabled="${args.disabled}"
      .id="${args.id}"
      .type="${args.type}"
      .text="${args.text}"
      .visible="${args.visible}"
      @click="${handleClick}"
    ></kuc-mobile-button>
  `;
};

export const Base = template.bind({});
Base.args = {
  className: "sample-class",
  id: "sample-id",
  text: "MobileButton",
  visible: true,
  disabled: false,
  type: "normal",
};
