import { html } from "lit";
import "./index.ts";
export default {
  title: "desktop/textarea",
  argTypes: {
    className: { name: "className" },
    disabled: { name: "disabled" },
    error: { name: "error" },
    id: { name: "id" },
    label: { name: "label" },
    requiredIcon: { name: "requiredIcon" },
    placeholder: { name: "placeholder" },
    value: { name: "value" },
    visible: { name: "visible" },
  },
  parameters: {
    actions: {
      handles: ["change", "focus", "input"],
    },
  },
};
const template = (args) => {
  const handleTextAreaChange = (event) => {
    console.log(event);
  };
  const handleTextAreaFocus = (event) => {
    console.log(event);
  };
  const handleTextAreaInput = (event) => {
    console.log(event);
  };
  return html`
    <kuc-textarea
      .className="${args.className}"
      .disabled="${args.disabled}"
      .error="${args.error}"
      .id="${args.id}"
      .label="${args.label}"
      .requiredIcon="${args.requiredIcon}"
      .placeholder="${args.placeholder}"
      .value="${args.value}"
      .visible="${args.visible}"
      @change="${handleTextAreaChange}"
      @focus="${handleTextAreaFocus}"
      @input="${handleTextAreaInput}"
    ></kuc-textarea>
  `;
};

export const Base = template.bind({});
Base.args = {
  label: "フルーツ",
  requiredIcon: true,
  value: "Apple",
  error: "エラーです",
  className: "options-class",
  id: "options-id",
  visible: true,
  disabled: false,
  placeholder: "",
};
