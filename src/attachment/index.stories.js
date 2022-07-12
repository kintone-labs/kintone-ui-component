import "./index.ts";
import { html } from "lit-html";

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
        options: ["auto", "en", "ja", "zh"],
      },
    },
    requiredIcon: { name: "requiredIcon" },
    fileList: { name: "fileList" },
    visible: { name: "visible" },
  },
  parameters: {
    actions: {
      handles: ["change"],
    },
  },
};
const Template = (args) => {
  const handleAttachmentChange = (event) => {
    console.log(event.detail);
  };
  return html`
    <kuc-attachment
      .disabled="${args.disabled}"
      .language="${args.language}"
      .fileList="${args.fileList}"
      .id="${args.id}"
      .label="${args.label}"
      .requiredIcon="${args.requiredIcon}"
      .visible="${args.visible}"
      .className="${args.className}"
      .error="${args.error}"
      @change="${handleAttachmentChange}"
    ></kuc-attachment>
  `;
};
export const BaseLanguageEN = Template.bind({});
BaseLanguageEN.args = {
  className: "date-picker-class",
  error: "",
  id: "date-picker-id",
  label: "Attachment Label",
  language: "en",
  requiredIcon: false,
  fileList: [{ name: "file.txt", size: "150" }],
  visible: true,
};
