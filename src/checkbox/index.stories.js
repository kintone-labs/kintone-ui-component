import { Checkbox } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("desktop/checkbox", module)
  .add("Base", () => {
    const root = document.createElement("div");
    const checkbox = new Checkbox({
      items: [
        {
          label: "sample1",
          value: "sample1"
        },
        {
          label: "sample2",
          value: "sample2"
        }
      ],
      value: ["sample1"],
      className: "sample-class",
      id: "sample-id",
      visible: true,
      disabled: false,
      borderVisible: true,
      itemLayout: "vertical",
      label: "フルーツ",
      requiredIcon: true,
      error: "エラーです"
    });
    checkbox.addEventListener("change", event => {
      console.log(["detail.oldValue", event.detail.oldValue]);
      console.log(["detail.value", event.detail.value]);
    });
    root.appendChild(checkbox);
    return root;
  })
  .add("Base2", () => {
    const root = document.createElement("div");
    const checkbox = new Checkbox({
      items: [
        {
          label: "Orange",
          value: "Orange"
        },
        {
          label: "Orange2",
          value: "Orange2"
        },
        {
          label: "Apple",
          value: "Apple"
        }
      ],
      value: ["Orange"],
      className: "sample-class",
      id: "sample-id",
      visible: true,
      disabled: false,
      borderVisible: true,
      itemLayout: "horizontal"
    });
    checkbox.addEventListener("change", event => {
      console.log(event);
    });
    root.appendChild(checkbox);
    return root;
  })
  .add("Base3", () => {
    const root = document.createElement("div");
    const checkbox = new Checkbox({
      items: [
        {
          label: "Orange",
          value: "Orange"
        },
        {
          label: "Apple",
          value: "Apple"
        }
      ],
      value: ["Orange"],
      className: "sample-class",
      id: "sample-id",
      visible: true,
      disabled: false,
      borderVisible: false,
      itemLayout: "horizontal",
      label: "",
      error: ""
    });
    checkbox.addEventListener("change", event => {
      console.log(event);
    });
    root.appendChild(checkbox);
    return root;
  })
  .add("Base4", () => {
    const root = document.createElement("div");
    const checkbox = new Checkbox({
      items: [
        {
          label: "sample1",
          value: "sample1"
        },
        {
          label: "sample2",
          value: "sample2"
        }
      ],
      value: ["", undefined]
    });
    // checkbox.value = ["", undefined];
    root.appendChild(checkbox);
    return root;
  })
  .add("Base5", () => {
    const root = document.createElement("div");
    const checkbox = new Checkbox({
      items: [
        {
          label: "sample1",
          value: "sample1"
        },
        {
          label: "sample2",
          value: "sample2"
        }
      ],
      value: ["sample1"],
      className: "sample-class",
      id: "sample-id",
      visible: true,
      disabled: false,
      borderVisible: true,
      itemLayout: "vertical",
      label: "Fruit",
      requiredIcon: true,
      error: "Error occurred!"
    });
    root.appendChild(checkbox);
    return root;
  });
