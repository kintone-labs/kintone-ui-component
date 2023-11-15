import { html } from "lit";
import "./index";
export default {
  title: "mobile/checkbox",
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
  const handleMobileCheckBoxChange = (event) => {
    console.log(event);
  };
  return html`
    <kuc-mobile-checkbox
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
      @change="${handleMobileCheckBoxChange}"
    ></kuc-mobile-checkbox>
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
    {
      label: "sample3",
      value: "sample3",
      disabled: true,
    },
  ],
  value: ["sample1"],
  selectedIndex: [0],
  className: "sample-class",
  id: "sample-id",
  visible: true,
  disabled: false,
  borderVisible: true,
  label: "フルーツ",
  requiredIcon: true,
  error: "エラーです",
};

export const Base1 = template.bind({});
Base1.args = {
  items: [
    {
      label: "Orange",
      value: "orange",
    },
    {
      label: "Apple",
      value: "apple",
    },
  ],
  value: ["", undefined],
  selectedIndex: [],
  className: "sample-class",
  id: "sample-id",
  visible: true,
  disabled: true,
  borderVisible: true,
  label: "フルーツ",
  requiredIcon: false,
  error: "",
};
export const Base2 = template.bind({});
Base2.args = {
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
  selectedIndex: [1],
  className: "sample-class",
  id: "sample-id",
  visible: true,
  disabled: false,
  borderVisible: true,
  label: "Fruit",
  requiredIcon: true,
  error: "Error occurred!",
};
