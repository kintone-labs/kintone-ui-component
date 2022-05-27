import { MultiChoice } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

// Describe the component name to the first argument storiesOf
storiesOf("desktop/multichoice", module)
  .add("Base", () => {
    const root = document.createElement("div");
    // Generate component for testing
    const multiChoice = new MultiChoice({
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
        },
        {
          label: "Item 3",
          value: "item-3"
        }
      ],
      value: ["item-1", "item-2"],
      selectedIndex: [0, 1],
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
  .add("Base2", () => {
    const root = document.createElement("div");
    // Many items
    const multiChoice = new MultiChoice({
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
        },
        {
          label: "Item 6",
          value: "item-6"
        },
        {
          label: "Item 7",
          value: "item-7"
        }
      ],
      value: ["item-1", "item-3"],
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
  .add("Base3", () => {
    const root = document.createElement("div");
    // Disabled
    const multiChoice = new MultiChoice({
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
        },
        {
          label: "Item 6",
          value: "item-6"
        },
        {
          label: "Item 7",
          value: "item-7"
        }
      ],
      value: ["item-1", "item-3"],
      selectedIndex: [0, 2],
      error: "Error occurred!",
      className: "sample-class",
      id: "sample-id",
      visible: true,
      disabled: true
    });

    multiChoice.addEventListener("change", function(event) {
      console.log(event);
    });

    root.appendChild(multiChoice);
    return root;
  });
