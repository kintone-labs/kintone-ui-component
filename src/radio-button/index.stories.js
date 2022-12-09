import { html } from "lit";
import "./index.ts";
export default {
  title: "desktop/radio-button",
  argTypes: {
    borderVisible: { name: "borderVisible" },
    className: { name: "className" },
    disabled: { name: "disabled" },
    error: { name: "error" },
    id: { name: "id" },
    items: { name: "items" },
    itemLayout: {
      name: "itemLayout",
      options: ["horizontal", "vertical"],
      control: {
        type: "select",
      },
    },
    label: { name: "label" },
    requiredIcon: { name: "requiredIcon" },
    selectedIndex: { name: "selectedIndex" },
    value: { name: "value" },
    visible: { name: "visible" },
  },
  parameters: {
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
    <kuc-radio-button
      .className="${args.className}"
      .borderVisible="${args.borderVisible}"
      .disabled="${args.disabled}"
      .error="${args.error}"
      .id="${args.id}"
      .items="${args.items}"
      .itemLayout="${args.itemLayout}"
      .label="${args.label}"
      .requiredIcon="${args.requiredIcon}"
      .selectedIndex="${args.selectedIndex}"
      .value="${args.value}"
      .visible="${args.visible}"
      @change="${handleRadioButtonChange}"
    ></kuc-radio-button>
  `;
};
export const Base = template.bind({});
Base.args = {
  borderVisible: true,
  className: "sample-class",
  items: [
    {
      label: "item-1",
      value: "item-1",
    },
    {
      label: "item-2",
      value: "item-2",
    },
    {
      label: "item-3",
      value: "item-3",
    },
  ],
  itemLayout: "vertical",
  id: "sample-id",
  value: "item-1",
  visible: true,
  selectedIndex: 0,
  label: "フルーツ一覧",
  requiredIcon: true,
  disabled: false,
  error: "エラーです",
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
  ],
  value: "item-2",
  selectedIndex: 1,
  className: "sample-class",
  id: "sample-id",
  visible: true,
  disabled: true,
  borderVisible: true,
  itemLayout: "vertical",
  label: "Radio button",
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
  itemLayout: "horizontal",
  label: "Radio button",
  requiredIcon: true,
  error: "Error occurred!",
};
