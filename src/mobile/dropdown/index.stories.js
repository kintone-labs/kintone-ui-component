import "./index.ts";
import { html } from "lit";

export default {
  title: "mobile/dropdown",
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
  const handleDropDownChange = (event) => {
    console.log(event);
  };
  return html`
    <kuc-mobile-dropdown
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
      @change="${handleDropDownChange}"
    ></kuc-mobile-dropdown>
  `;
};
export const Base = template.bind({});
Base.args = {
  className: "sample-class",
  id: "sample-id",
  items: [
    {
      label: "-----",
      value: "",
    },
    {
      label: "Orange",
      value: "orange",
      disabled: true,
    },
    {
      label: "Apple",
      value: "apple",
    },
  ],
  value: "",
  selectedIndex: 0,
  label: "フルーツ一覧",
  requiredIcon: true,
  visible: true,
  disabled: false,
  error: "エラーです",
};
export const Base1 = template.bind({});
Base1.args = {
  className: "sample-class",
  id: "sample-id",
  items: [
    {
      label: "-----",
      value: "-----",
    },
    {
      label: "Orange",
      value: "orange",
    },
    {
      label: "Orange",
      value: "orange",
    },
    {
      label: "Apple",
      value: "apple",
      disabled: true,
    },
  ],
  value: "orange",
  selectedIndex: 2,
  label: "フルーツ一覧",
  requiredIcon: true,
  visible: true,
  disabled: false,
  error: "エラーです",
};
export const Base2 = template.bind({});
// Check for array validation of items
Base2.args = {
  className: "sample-class",
  id: "sample-id",
  items: null,
  value: "orange",
  selectedIndex: 2,
  label: "フルーツ一覧",
  requiredIcon: true,
  visible: true,
  disabled: false,
  error: "エラーです",
};
