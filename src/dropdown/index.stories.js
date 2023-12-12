import { html } from "lit";
import "./index.ts";

export default {
  title: "desktop/dropdown",
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
    <kuc-dropdown
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
    ></kuc-dropdown>
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
      disabled: true,
    },
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Apple",
      value: "apple",
    },
  ],
  value: "apple",
  selectedIndex: 3,
  label: "フルーツ一覧",
  requiredIcon: true,
  visible: true,
  disabled: false,
  error: "エラーです",
};
const template2 = (args) => {
  const handleDropDownChange = (event) => {
    console.log(event);
  };
  return html`
    <div>
      <div style="height:100px"></div>
      <kuc-dropdown
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
      ></kuc-dropdown>
    </div>
  `;
};
export const Base2 = template2.bind({});
Base2.args = {
  label: "Dropdown",
  id: "sample-id",
  items: [
    {
      label: "Sample 1 Sample 1 Sample 1 Sample 1 Sample 1 Sample 1 Sample 1",
      value: "Sample 1",
    },
    {
      label: "Sample 2",
      value: "Sample 2",
    },
  ],
  value: "",
  selectedIndex: 0,
  error: "Error",
  visible: true,
};
