import { DatePicker } from "../date-picker";
import { Dropdown } from "../dropdown/index.ts";
import { Text } from "../text/index.ts";
import { TextArea } from "../textarea";
import { TimePicker } from "../time-picker";

import { FieldGroup } from "./index.ts";

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
  const datePicker = new DatePicker({ value: "2012-12-12" });
  const timePicker = new TimePicker({ value: "12:12" });
  const textArea = new TextArea({ value: "text area" });

  wrapper.appendChild(textArea);
  wrapper.appendChild(text);
  wrapper.appendChild(dropdown);
  wrapper.appendChild(datePicker);
  wrapper.appendChild(timePicker);

  return wrapper;
};
const template = (args) => {
  const fieldGroup = new FieldGroup({ ...args });
  return fieldGroup;
};
export const Base = template.bind({});
Base.args = {
  label: "Field Group normal",
  disabled: false,
  expanded: false,
  content: getContent(),
  visible: true,
};

export const BaseDisabled = template.bind({});
BaseDisabled.args = {
  label: "Field Group disabled",
  disabled: true,
  expanded: false,
  content: getContent(),
  visible: true,
};
