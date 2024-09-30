import { DatePicker } from "./index.ts";

export default {
  title: "desktop/date-picker",
  argTypes: {
    className: { name: "className" },
    disabled: { name: "disabled" },
    error: { name: "error" },
    id: { name: "id" },
    label: { name: "label" },
    language: {
      name: "language",
      options: ["auto", "en", "ja", "zh", "zh-TW", "es"],
      control: {
        type: "select",
      },
    },
    requiredIcon: { name: "requiredIcon" },
    value: { name: "value" },
    visible: { name: "visible" },
  },
  parameters: {
    actions: {
      handles: ["change"],
    },
  },
};

const template = (args) => {
  const datePicker = new DatePicker({ ...args });
  datePicker.addEventListener("change", (event) => {
    console.log(event);
  });
  return datePicker;
};

export const Base = template.bind({});
Base.args = {
  className: "date-picker-class",
  disabled: false,
  error: "Error occured",
  id: "date-picker-id",
  label: "Date Picker Label",
  language: "en",
  requiredIcon: false,
  value: "2021-03-12",
  visible: true,
};
