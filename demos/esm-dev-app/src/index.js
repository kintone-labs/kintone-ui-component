import "@webcomponents/webcomponentsjs/webcomponents-bundle.js";
import { Checkbox } from "kintone-ui-component";
// eslint-disable-next-line no-undef
const space = kintone.app.getHeaderSpaceElement();
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
