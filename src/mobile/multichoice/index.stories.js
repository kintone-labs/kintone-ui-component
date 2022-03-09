import { MobileMultiChoice } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

// Describe the component name to the first argument storiesOf
storiesOf("mobile/multichoice", module)
  .addParameters({ viewport: { defaultViewport: "iPhone11Pro" } })
  .add("Base", () => {
    const root = document.createElement("div");
    const multiChoice = new MobileMultiChoice({
      label: "Mutiple-Choice",
      requiredIcon: true,
      items: [
        {
          label: "Item 1",
          value: "item-1"
        },
        {
          label: "Item 2",
          value: "item-2"
        },
        {
          label: "Item 3",
          value: "item-3"
        },
        {
          label: "Item 4",
          value: "item-4"
        },
        {
          label: "Item 5",
          value: "item-5"
        }
      ],
      value: ["item-1", "item-3"],
      selectedIndex: [0, 2],
      error: "Error occurred!",
      className: "sample-class",
      id: "sample-id",
      visible: true,
      disabled: false
    });

    multiChoice.addEventListener("change", function(event) {
      console.log(event);
    });

    root.appendChild(multiChoice);
    return root;
  })
  .add("Base1", () => {
    const root = document.createElement("div");
    const multiChoice = new MobileMultiChoice({
      label: "Mutiple-Choice",
      items: [
        {
          label: "Item 1",
          value: "item-1"
        },
        {
          label: "Item 2",
          value: "item-2"
        }
      ],
      className: "sample-class",
      id: "sample-id",
      visible: true,
      disabled: true
    });
    root.appendChild(multiChoice);
    return root;
  })
  // Check for duplicate value validation
  .add("Base2", () => {
    const root = document.createElement("div");
    const multiChoice = new MobileMultiChoice({
      label: "Mutiple-Choice",
      requiredIcon: true,
      items: [
        {
          label: "Item 1",
          value: "item-1"
        },
        {
          label: "Item 2",
          value: "item-2"
        }
      ],
      value: ["item-1", "item-1"],
      error: "Error occurred!",
      className: "sample-class",
      id: "sample-id",
      visible: true,
      disabled: false
    });

    root.appendChild(multiChoice);
    return root;
  });
