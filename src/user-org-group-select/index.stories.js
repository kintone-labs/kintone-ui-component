import { html } from "lit";
import "./index.ts";
export default {
  title: "desktop/user-org-group-select",
  argTypes: {
    className: { name: "className" },
    disabled: { name: "disabled" },
    error: { name: "error" },
    icon: { name: "icon" },
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
      handles: ["change", "click-picker-icon"],
    },
  },
};
const template = (args) => {
  const handleMultiChoiceChange = (event) => {
    console.log(event);
  };
  return html`
    <kuc-user-org-group-select
      .className="${args.className}"
      .disabled="${args.disabled}"
      .error="${args.error}"
      .icon="${args.icon}"
      .id="${args.id}"
      .items="${args.items}"
      .label="${args.label}"
      .placeholder="${args.placeholder}"
      .requiredIcon="${args.requiredIcon}"
      .value="${args.value}"
      .visible="${args.visible}"
      @change="${handleMultiChoiceChange}"
    ></kuc-user-org-group-select>
  `;
};
export const Base = template.bind({});
Base.args = {
  label: "Sample label",
  requiredIcon: true,
  items: [
    {
      label: "User A",
      value: "userA",
      type: "user",
      disabled: true,
    },
    {
      label: "User B",
      value: "userB",
      type: "user",
    },
    {
      label: "Organization AOrganization AOrsAOrganization",
      value: "orgA",
      type: "org",
    },
    {
      label: "Group A",
      value: "groupA",
      type: "group",
    },
    {
      label: "User C",
      value: "userC",
      type: "user",
    },
  ],
  value: ["item-1", "orgA", "groupA"],
  error: "Error occurred!",
  className: "sample-class",
  icon: "user",
  id: "sample-id",
  placeholder: "Sample placeholder",
  visible: true,
  disabled: false,
};
