import { Attachment } from "./index.ts";

export default {
  title: "desktop/attachment",
  argTypes: {
    message: { name: "message" },
    className: { name: "className" },
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
    files: { name: "files" },
    visible: { name: "visible" },
    disabled: { name: "disabled" },
  },
  parameters: {
    actions: {
      handles: ["change"],
    },
  },
};
const Template = (args) => {
  const attachment = new Attachment({ ...args });
  attachment.addEventListener("change", (event) => {
    console.log(event);
  });
  return attachment;
};
export const BaseLanguageEN = Template.bind({});
BaseLanguageEN.args = {
  message: "max-size: (1GB)",
  className: "attachment-class",
  error: "Error",
  id: "attachment-id",
  label: "Attachment Label",
  language: "auto",
  requiredIcon: true,
  files: [{ name: "file.txt", size: "150" }],
  visible: true,
  disabled: false,
};
