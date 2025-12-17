import { html } from "lit";
import "./index.ts";

export default {
  title: "desktop/switch",
  argTypes: {
    className: { name: "className" },
    id: { name: "id" },
    label: { name: "label" },
    labelPlacement: {
      name: "labelPlacement",
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "select",
      },
    },
    textOff: { name: "textOff" },
    textOn: { name: "textOn" },
    checked: { name: "checked" },
    disabled: { name: "disabled" },
    visible: { name: "visible" },
  },
  parameters: {
    actions: {
      handles: ["change"],
    },
  },
};

const template = (args) => {
  const handleChange = (event) => {
    console.log(event);
  };

  return html`
    <kuc-switch
      .className="${args.className}"
      .id="${args.id}"
      .label="${args.label}"
      .labelPlacement="${args.labelPlacement}"
      .textOff="${args.textOff}"
      .textOn="${args.textOn}"
      .checked="${args.checked}"
      .disabled="${args.disabled}"
      .visible="${args.visible}"
      @change="${handleChange}"
    ></kuc-switch>
  `;
};

export const Base = template.bind({});
Base.args = {
  className: "sample-class",
  id: "sample-id",
  label: "Switch",
  labelPlacement: "left",
  textOff: "Off",
  textOn: "On",
  checked: false,
  disabled: false,
  visible: true,
};
