import { html } from "lit";
import "./index.ts";
export default {
  title: "mobile/radio-button",
  argTypes: {
    borderVisible: { name: "borderVisible" },
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
  const handleRadioButtonChange = (event) => {
    console.log(event);
  };
  return html`
    <kuc-mobile-radio-button
      .className="${args.className}"
      .borderVisible="${args.borderVisible}"
      .disabled="${args.disabled}"
      .error="${args.error}"
      .id="${args.id}"
      .items="${args.items}"
      .label="${args.label}"
      .requiredIcon="${args.requiredIcon}"
      .selectedIndex="${args.selectedIndex}"
      .value="${args.value}"
      .visible="${args.visible}"
      @change="${handleRadioButtonChange}"
    ></kuc-mobile-radio-button>
  `;
};
export const Base = template.bind({});
Base.args = {
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
  ],
  value: "item-2",
  selectedIndex: 1,
  className: "sample-class",
  id: "sample-id",
  visible: true,
  disabled: false,
  borderVisible: true,
  label: "Radio button",
  requiredIcon: true,
  error: "Error occurred!",
};
export const Base1 = template.bind({});
Base1.args = {
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
    },
    {
      label: "Item 3",
      value: "item-3",
    },
  ],
  value: "item-3",
  selectedIndex: 3,
  className: "sample-class",
  id: "sample-id",
  visible: true,
  disabled: false,
  borderVisible: true,
  label: "Radio Button",
  requiredIcon: true,
  error: "Error occurred!",
};
export const Base2 = template.bind({});
Base2.args = {
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
    },
  ],
  value: "",
  selectedIndex: 0,
  className: "sample-class",
  id: "sample-id",
  visible: true,
  disabled: false,
  borderVisible: true,
  label: "Radio button",
  requiredIcon: true,
  error: "Error occurred!",
};
