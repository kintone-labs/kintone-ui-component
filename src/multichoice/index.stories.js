import { MultiChoice } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

// Describe the component name to the first argument storiesOf
storiesOf("multichoice", module)
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
  // UI For document site. Do not change or delete below.
  .add("Document", () => {
    const root = document.createElement("div");
    const multiChoice = new MultiChoice({
      value: ["Orange"],
      items: [
        {
          label: "orange",
          value: "Orange"
        },
        {
          label: "apple",
          value: "Apple"
        }
      ]
    });
    root.appendChild(multiChoice);
    return root;
  });
