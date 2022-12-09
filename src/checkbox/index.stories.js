import { html } from "lit";
import "./index.ts";

export default {
  title: "desktop/checkbox",
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
  const handleCheckBoxChange = (event) => {
    console.log(event);
  };
  return html`
    <kuc-checkbox
      .borderVisible="${args.borderVisible}"
      .className="${args.className}"
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
      @change="${handleCheckBoxChange}"
    ></kuc-checkbox>
  `;
};
export const Base = template.bind({});
Base.args = {
  items: [
    {
      label: "sample1",
      value: "sample1",
    },
    {
      label: "sample2",
      value: "sample2",
    },
  ],
  value: ["sample1"],
  className: "sample-class",
  id: "sample-id",
  visible: true,
  disabled: false,
  borderVisible: true,
  itemLayout: "vertical",
  label: "フルーツ",
  requiredIcon: true,
  error: "エラーです",
  selectedIndex: [],
};
export const Base1 = template.bind({});
Base1.args = {
  items: [
    {
      label: "Orange",
      value: "Orange",
    },
    {
      label: "Orange2",
      value: "Orange2",
    },
    {
      label: "Apple",
      value: "Apple",
    },
  ],
  value: ["Orange"],
  className: "sample-class",
  id: "sample-id",
  visible: true,
  disabled: false,
  borderVisible: true,
  itemLayout: "horizontal",
  selectedIndex: [],
  error: "",
  label: "フルーツ",
  requiredIcon: false,
};
export const Base2 = template.bind({});
Base2.args = {
  id: "sample-id",
  items: [
    {
      label: "sample1",
      value: "sample1",
    },
    {
      label: "sample2",
      value: "sample2",
    },
  ],
  value: ["", undefined],
  selectedIndex: [],
  visible: true,
};
export const Base3 = template.bind({});
Base3.args = {
  items: [
    {
      label: "sample1",
      value: "sample1",
    },
    {
      label: "sample1",
      value: "sample1",
    },
    {
      label: "sample2",
      value: "sample2",
    },
  ],
  value: ["sample1"],
  className: "sample-class",
  id: "sample-id",
  visible: true,
  disabled: false,
  borderVisible: true,
  itemLayout: "vertical",
  label: "Fruit",
  requiredIcon: true,
  error: "Error occurred!",
  selectedIndex: [1],
};
