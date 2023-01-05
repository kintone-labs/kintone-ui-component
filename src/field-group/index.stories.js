import { FieldGroup } from "./index.ts";
import { Text } from "../text/index.ts";
import { Dropdown } from "../dropdown/index.ts";

export default {
  title: "desktop/field-group",
  argTypes: {},
  parameters: {
    actions: {
      handles: ["change"],
    },
  },
};

const getContent = () => {
  const wrapper = document.createElement("div");
  const text = new Text({
    label: "Text",
    error: "error occured",
    value: "orange",
  });
  const dropdown = new Dropdown({
    label: "Dropdown",
    id: "sample-id",
    items: [
      {
        label: "Sample 1 Sample 1 Sample 1 Sample 1 Sample 1 Sample 1 Sample 1",
        value: "Sample 1",
      },
      {
        label: "Sample 2",
        value: "Sample 2",
      },
    ],
    value: "",
    selectedIndex: 0,
    error: "Error",
    visible: true,
  });
  wrapper.appendChild(text);
  wrapper.appendChild(dropdown);

  return wrapper;
};
const template = (args) => {
  const fieldGroup = new FieldGroup({ ...args });
  return fieldGroup;
};
export const Base = template.bind({});
Base.args = {
  disabled: false,
  toggle: false,
  content: getContent(),
};
