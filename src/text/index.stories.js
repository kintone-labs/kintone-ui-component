import { html } from "lit";
import "./index.ts";
export default {
  title: "desktop/text",
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
    actions: {
      handles: ["change", "focus", "input"],
    },
  },
};
const template = (args) => {
  const handleTextChange = (event) => {
    console.log(event);
  };
  const handleTextFocus = (event) => {
    console.log(event);
  };
  const handleTextInput = (event) => {
    console.log(event);
  };
  return html`
    <kuc-text
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
      @change="${handleTextChange}"
      @focus="${handleTextFocus}"
      @input="${handleTextInput}"
    ></kuc-text>
  `;
};
export const Base = template.bind({});
Base.args = {
  value: "Orange",
  className: "hoge var",
  id: "aaaaaa",
  textAlign: "right",
  placeholder: "hogehoge1",
  label: "フルーツ",
  requiredIcon: true,
  error: "エラーです",
  visible: true,
  prefix: "",
  suffix: "",
  disabled: false,
};
export const Base1 = template.bind({});
Base1.args = {
  value: "Orange",
  className: "sample-class",
  id: "sample-id",
  textAlign: "left",
  placeholder: "",
  label: "フルーツ",
  requiredIcon: true,
  error: "エラーです",
  visible: true,
  prefix: "$$$",
  suffix: "円",
  disabled: false,
};
export const Base2 = template.bind({});
Base2.args = {
  value: "Orange",
  className: "options-class",
  id: "options-id",
  textAlign: "right",
  placeholder: "fruit",
  label: "Fruit",
  requiredIcon: true,
  error: "Error occurred!",
  visible: true,
};
