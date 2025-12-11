import { Switch } from "./index.ts";

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
  const kucSwitch = new Switch({ ...args });
  kucSwitch.addEventListener("change", handleChange);

  return kucSwitch;
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
