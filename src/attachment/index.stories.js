import { Attachment } from "./index.ts";

export default {
  title: "desktop/attachment",
  argTypes: {
    className: { name: "className" },
    error: { name: "error" },
    id: { name: "id" },
    label: { name: "label" },
    language: {
      name: "language",
      control: {
        type: "select",
        options: ["auto", "en", "ja", "zh", "zh-TW"],
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
    const label = document.getElementsByClassName(
      "kuc-attachment__group__label"
    );
    console.log(label);
    label[0].dispatchEvent(new PointerEvent("click", { cancelable: true }));
  });
  return attachment;
};
export const BaseLanguageEN = Template.bind({});
BaseLanguageEN.args = {
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
