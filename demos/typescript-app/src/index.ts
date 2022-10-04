import { Dropdown, DropdownProps, DropdownItem } from "kintone-ui-component";

const root = document.getElementById("root") as HTMLElement;
const items : DropdownItem[] = [
  {
    label: "-----",
    value: "-----",
  },
  {
    label: "Orange",
    value: "orange",
  },
  {
    label: "Apple",
    value: "apple",
  },
];
const dropdownProps: DropdownProps = {
  items: items,
  value: "-----",
  label: "Fruit",
  error: "Error occurred!",
};
const dropdown = new Dropdown(dropdownProps);
root.appendChild(dropdown);
