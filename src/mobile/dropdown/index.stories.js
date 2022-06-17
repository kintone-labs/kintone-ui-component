import { MobileDropdown } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("mobile/dropdown", module)
  .addParameters({ viewport: { defaultViewport: "iPhone11Pro" } })
  .add("Base", () => {
    const root = document.createElement("div");
    const dropdown = new MobileDropdown({
      items: [
        {
          label: "-----",
          value: "-----"
        },
        {
          label: "Orange",
          value: "orange"
        },
        {
          label: "Apple",
          value: "apple"
        }
      ],
      value: "apple",
      label: "フルーツ一覧",
      requiredIcon: true,
      error: "エラーです",
      visible: true
    });
    dropdown.addEventListener("change", event => {
      console.log(event);
    });
    root.appendChild(dropdown);
    return root;
  })
  .add("Base2", () => {
    const root = document.createElement("div");
    const dropdown = new MobileDropdown();
    dropdown.value = "Orange";
    dropdown.items = [
      {
        label: "-----",
        value: "-----"
      },
      {
        label: "Orange",
        value: "orange"
      },
      {
        label: "Apple",
        value: "apple"
      }
    ];
    dropdown.label = "フルーツ一覧";
    dropdown.requiredIcon = true;
    dropdown.value = "orange";
    dropdown.visible = false;
    root.appendChild(dropdown);
    return root;
  })
  .add("Base3", () => {
    const root = document.createElement("div");
    const dropdown = new MobileDropdown();
    dropdown.value = "orange";
    dropdown.items = [
      {
        label: "-----",
        value: "-----"
      },
      {
        label: "Orange",
        value: "orange"
      },
      {
        label: "Apple",
        value: "opple"
      }
    ];
    dropdown.label = "フルーツ一覧";
    dropdown.requiredIcon = true;
    dropdown.error = "エラーです";
    dropdown.disabled = true;
    root.appendChild(dropdown);
    return root;
  })
  // Check for array validation of items
  .add("Base4", () => {
    const root = document.createElement("div");
    const dropdown = new MobileDropdown();
    dropdown.value = "orange";
    dropdown.items = null;
    dropdown.label = "フルーツ一覧";
    dropdown.requiredIcon = true;
    dropdown.error = "エラーです";
    dropdown.disabled = true;
    root.appendChild(dropdown);
    return root;
  })
  // Check for duplicate Item.value validation
  .add("Base5", () => {
    const root = document.createElement("div");
    const dropdown = new MobileDropdown();
    dropdown.value = "orange";
    dropdown.items = [
      {
        label: "Orange",
        value: "orange"
      },
      {
        label: "Orange",
        value: "orange"
      }
    ];
    dropdown.label = "フルーツ一覧";
    dropdown.requiredIcon = true;
    dropdown.error = "エラーです";
    dropdown.disabled = true;
    root.appendChild(dropdown);
    return root;
  });
