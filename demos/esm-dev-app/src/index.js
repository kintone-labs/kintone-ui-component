import { Checkbox } from "kintone-ui-component";
// eslint-disable-next-line no-undef
const space = document.getElementsByTagName("BODY")[0];
const checkbox = new Checkbox({
  label: "Fruit",
  requiredIcon: true,
  items: [
    {
      label: "orange",
      value: "Orange"
    },
    {
      label: "apple",
      value: "Apple"
    }
  ],
  value: ["Orange"],
  itemLayout: "vertical",
  error: "Error occurred!",
  className: "options-class",
  id: "options-id",
  visible: true,
  disabled: false,
  borderVisible: true
});
space.appendChild(checkbox);
