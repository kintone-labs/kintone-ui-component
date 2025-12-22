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
    checkedText: { name: "checkedText" },
    unCheckedText: { name: "unCheckedText" },
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
      .checkedText="${args.checkedText}"
      .unCheckedText="${args.unCheckedText}"
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
  checkedText: "On",
  unCheckedText: "Off",
  checked: false,
  disabled: false,
  visible: true,
};
