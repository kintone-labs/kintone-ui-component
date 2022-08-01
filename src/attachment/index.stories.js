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
  const handleAttachmentChange = (event) => {
    console.log(event);
  };
  return html`
    <kuc-attachment
      .disabled="${args.disabled}"
      .language="${args.language}"
      .id="${args.id}"
      .label="${args.label}"
      .requiredIcon="${args.requiredIcon}"
      .visible="${args.visible}"
      .files="${args.files}"
      .className="${args.className}"
      .error="${args.error}"
      @change="${handleAttachmentChange}"
    ></kuc-attachment>
  `;
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
