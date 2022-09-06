import { Dropdown, DropdownProps } from "kintone-ui-component";

const root = document.getElementById("root") as HTMLElement;
const dropdownProps: DropdownProps = {
  items: [
    {
      label: "-----",
      value: "-----",
    },
    {
      label: "Orange",
      value: "orange",
    }
  ],
  value: "-----",
  label: "フルーツ一覧",
  error: "エラーです",
};
const dropdown = new Dropdown(dropdownProps);
root.appendChild(dropdown);