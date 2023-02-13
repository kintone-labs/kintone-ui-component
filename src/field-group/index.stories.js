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
    error: "Error occurred",
    value: "orange",
  });
  const dropdown = new Dropdown({
    label: "Dropdown",
    items: [
      {
        label: "-----",
        value: "-----",
      },
      {
        label: "Orange",
        value: "orange",
      },
      {
        label: "Apple",
        value: "apple",
      },
    ],
    value: "apple",
    error: "Error occurred",
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
  label: "Field Group",
  disabled: false,
  expanded: false,
  content: getContent(),
};
