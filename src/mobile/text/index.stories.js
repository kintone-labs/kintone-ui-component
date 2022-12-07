import { html } from "lit";
import "./index.ts";
export default {
  title: "mobile/text",
  argTypes: {
    className: { name: "className" },
    disabled: { name: "disabled" },
    error: { name: "error" },
    id: { name: "id" },
    label: { name: "label" },
    requiredIcon: { name: "requiredIcon" },
    placeholder: { name: "placeholder" },
    prefix: { name: "prefix" },
    suffix: { name: "suffix" },
    textAlign: {
      name: "textAlign",
      options: ["left", "right"],
      control: {
        type: "select",
      },
    },
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
  const handleMopbileTextChange = (event) => {
    console.log(event);
  };
  const handleMobileTextFocus = (event) => {
    console.log(event);
  };
  const handleMobileTextInput = (event) => {
    console.log(event);
  };
  return html`
    <kuc-mobile-text
      .className="${args.className}"
      .disabled="${args.disabled}"
      .error="${args.error}"
      .id="${args.id}"
      .label="${args.label}"
      .requiredIcon="${args.requiredIcon}"
      .placeholder="${args.placeholder}"
      .prefix="${args.prefix}"
      .suffix="${args.suffix}"
      .textAlign="${args.textAlign}"
      .value="${args.value}"
      .visible="${args.visible}"
      @change="${handleMopbileTextChange}"
      @focus="${handleMobileTextFocus}"
      @input="${handleMobileTextInput}"
    ></kuc-mobile-text>
  `;
};
export const Base = template.bind({});
Base.args = {
  value: "Orange",
  requiredIcon: true,
  label: "Text",
  error: "Error occured!",
  className: "hoge var",
  id: "aaaaaa",
  textAlign: "left",
  placeholder: "hogehoge1",
  prefix: "",
  suffix: "",
  disabled: false,
  visible: true,
};
