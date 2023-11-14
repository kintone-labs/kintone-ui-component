import "./index.ts";
import { html } from "lit";
export default {
  title: "mobile/multi-choice",
  argTypes: {
    className: { name: "className" },
    disabled: { name: "disabled" },
    error: { name: "error" },
    id: { name: "id" },
    items: { name: "items" },
    label: { name: "label" },
    requiredIcon: { name: "requiredIcon" },
    selectedIndex: { name: "selectedIndex" },
    value: { name: "value" },
    visible: { name: "visible" },
  },
  parameters: {
    viewport: {
      defaultViewport: "iPhone11Pro",
    },
    actions: {
      handles: ["change"],
    },
  },
};
const template = (args) => {
  const handleMultiChoiceChange = (event) => {
    console.log(event);
  };
  return html`
    <kuc-mobile-multi-choice
      .className="${args.className}"
      .disabled="${args.disabled}"
      .error="${args.error}"
      .id="${args.id}"
      .items="${args.items}"
      .label="${args.label}"
      .requiredIcon="${args.requiredIcon}"
      .selectedIndex="${args.selectedIndex}"
      .value="${args.value}"
      .visible="${args.visible}"
      @change="${handleMultiChoiceChange}"
    ></kuc-mobile-multi-choice>
  `;
};
export const Base = template.bind({});
Base.args = {
  label: "Mutiple-Choice",
  requiredIcon: true,
  items: [
    {
      label: "Item 1",
      value: "item-1",
    },
    {
      label: "Item 2",
      value: "item-2",
    },
    {
      label: "Item 3",
      value: "item-3",
      disabled: true,
    },
    {
      label: "Item 4",
      value: "item-4",
      disabled: true,
    },
    {
      label: "Item 5",
      value: "item-5",
    },
  ],
  value: ["item-1", "item-3"],
  selectedIndex: [0, 2],
  error: "Error occurred!",
  className: "sample-class",
  id: "sample-id",
  visible: true,
  disabled: false,
};
export const Base1 = template.bind({});
Base1.args = {
  label: "Mutiple-Choice",
  requiredIcon: true,
  items: [
    {
      label: "Item 1",
      value: "item-1",
    },
    {
      label: "Item 1",
      value: "item-1",
    },
    {
      label: "Item 2",
      value: "item-2",
    },
  ],
  value: ["item-1", "item-1"],
  selectedIndex: [0, 1],
  error: "Error occurred!",
  className: "sample-class",
  id: "sample-id",
  visible: true,
  disabled: false,
};
