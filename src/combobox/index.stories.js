import { Combobox } from "./index.ts";
import { ComboboxItem } from "./type";

export default {
  title: "desktop/combobox",
  argTypes: {
    className: { name: "className" },
    error: { name: "error" },
    id: { name: "id" },
    label: { name: "label" },
    disabled: { name: "disabled" },
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
  className: "date-picker-class",
  error: "Error occurred",
  id: "date-picker-id",
  label: "Combobox Label",
  disabled: false,
  requiredIcon: false,
  value: "item-1",
  visible: true,
  items: [
    { label: "Item 1", value: "item-1" },
    { label: "Item 2", value: "item-2" },
    { label: "Item 3", value: "item-3" },
  ],
};
