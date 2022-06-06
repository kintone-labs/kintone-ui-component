import { MobileCheckbox } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("mobile/checkbox", module)
  .addParameters({ viewport: { defaultViewport: "iPhone11Pro" } })
  .add("Base", () => {
    const root = document.createElement("div");
    const checkbox = new MobileCheckbox({
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
    const checkbox = new MobileCheckbox({
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
      disabled: true,
      borderVisible: true
    });
    checkbox.addEventListener("change", event => {
      console.log(event);
    });
    root.appendChild(checkbox);
    return root;
  })
  .add("Base3", () => {
    const root = document.createElement("div");
    const checkbox = new MobileCheckbox({
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
      label: "",
      error: ""
    });
    checkbox.addEventListener("change", event => {
      console.log(event);
    });
    root.appendChild(checkbox);
    return root;
  })
  // Check for duplicate value validation
  .add("Base4", () => {
    const root = document.createElement("div");
    const checkbox = new MobileCheckbox({
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
    root.appendChild(checkbox);
    return root;
  })
  .add("Base5", () => {
    const root = document.createElement("div");
    const checkbox = new MobileCheckbox({
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
      label: "Fruit",
      // requiredIcon: true,
      error: "Error occurred!"
    });
    root.appendChild(checkbox);
    return root;
  });
