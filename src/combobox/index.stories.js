import { Combobox } from "./index.ts";

export default {
  title: "desktop/combobox",
  argTypes: {
    className: { name: "className" },
    error: { name: "error" },
    id: { name: "id" },
    label: { name: "label" },
    disabled: { name: "disabled" },
    placeholder: { name: "placeholder" },
    requiredIcon: { name: "requiredIcon" },
    value: { name: "value" },
    visible: { name: "visible" },
    items: { name: "items" },
  },
  parameters: {
    actions: {
      handles: ["change"],
    },
  },
};

const template = (args) => {
  const combobox = new Combobox({ ...args });
  combobox.addEventListener("change", (event) => {
    console.log(event);
  });
  return combobox;
};

export const Base = template.bind({});
Base.args = {
  className: "combobox-class",
  error: "Error occurred",
  id: "combobox-id",
  label: "Combobox Label",
  disabled: false,
  requiredIcon: false,
  placeholder: "",
  value: "item-2",
  visible: true,
  items: [
    { label: "Item 1", value: "item-1" },
    { label: "Item 2", value: "item-2", disabled: true },
    { label: "Item 3", value: "item-3", disabled: true },
    { label: "Item 11", value: "item-11" },
    { label: "Item 12", value: "item-12" },
    { label: "Item 13", value: "item-13" },
  ],
};
