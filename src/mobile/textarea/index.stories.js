import { html } from "lit";
import "./index.ts";
export default {
  title: "mobile/textarea",
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
    viewport: {
      defaultViewport: "iPhone11Pro",
    },
    actions: {
      handles: ["change", "focus", "input"],
    },
  },
};
const template = (args) => {
  const handleMopbileTextAreaChange = (event) => {
    console.log(event);
  };
  const handleMobileTextAreaFocus = (event) => {
    console.log(event);
  };
  const handleMobileTextAreaInput = (event) => {
    console.log(event);
  };
  return html`
    <kuc-mobile-textarea
      .className="${args.className}"
      .disabled="${args.disabled}"
      .error="${args.error}"
      .id="${args.id}"
      .label="${args.label}"
      .requiredIcon="${args.requiredIcon}"
      .placeholder="${args.placeholder}"
      .value="${args.value}"
      .visible="${args.visible}"
      @change="${handleMopbileTextAreaChange}"
      @focus="${handleMobileTextAreaFocus}"
      @input="${handleMobileTextAreaInput}"
    ></kuc-mobile-textarea>
  `;
};
export const Base = template.bind({});
Base.args = {
  label: "Label",
  requiredIcon: true,
  value: "",
  placeholder: "Place holder",
  error: "Error occurred!",
  className: "options-class",
  id: "options-id",
  visible: true,
  disabled: false,
};
