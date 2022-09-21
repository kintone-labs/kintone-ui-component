import {
  Dropdown,
  DropdownProps,
  CustomEventDetail,
} from "kintone-ui-component";

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
    },
    {
      label: "Apple",
      value: "apple",
    },
  ],
  value: "-----",
  label: "Fruit",
  error: "Error occurred!",
};
const dropdown = new Dropdown(dropdownProps);
dropdown.addEventListener("change", ((event: CustomEvent) => {
  const detail: CustomEventDetail = event.detail;
  console.log(detail);
}) as EventListener);

root.appendChild(dropdown);
