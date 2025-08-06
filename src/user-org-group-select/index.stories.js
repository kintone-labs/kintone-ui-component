import { UserOrgGroupSelect } from "./index.ts";
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
    placeholder: { name: "placeholder" },
    requiredIcon: { name: "requiredIcon" },
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
  const orgGroupSelect = new UserOrgGroupSelect({ ...args });
  orgGroupSelect.addEventListener("change", (event) => {
    console.log(event);
  });
  orgGroupSelect.addEventListener("click-picker-icon", (event) => {
    console.log(event);
  });
  return orgGroupSelect;
};
export const Base = template.bind({});
Base.args = {
  label: "Assignees",
  items: [
    {
      label:
        "Alice Johnson (Senior Project Manager, International Business Development Department, Tokyo Headquarters)",
      value: "alice",
      type: "user",
      disabled: false,
    },
    { label: "Bob Smith", value: "bob", type: "user", disabled: true },
    { label: "Charlie Lee", value: "charlie", type: "user", disabled: true },
    {
      label: "Marketing Group",
      value: "marketing-group",
      type: "group",
      disabled: true,
    },
    {
      label: "Sales Team",
      value: "sales-team",
      type: "group",
      disabled: false,
    },
    {
      label: "Engineering Team",
      value: "engineering-team",
      type: "group",
      disabled: false,
    },
    {
      label: "Acme Corporation",
      value: "acme-corp",
      type: "org",
      disabled: false,
    },
    {
      label: "New York Office",
      value: "ny-office",
      type: "org",
      disabled: false,
    },
  ],
  value: ["alice", "marketing-group", "acme-corp"],
  requiredIcon: true,
  error: "Error occurred!",
  className: "sample-class",
  icon: "user",
  id: "sample-id",
  placeholder: "Please select assignees",
  visible: true,
  disabled: false,
};
