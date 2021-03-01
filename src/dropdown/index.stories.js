import { Dropdown } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("dropdown", module)
  .add("Base", () => {
    const root = document.createElement("div");
    const dropdown = new Dropdown({
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
      value: "-----",
      label: "フルーツ一覧",
      requiredIcon: true,
      disabled: false,
      error: "エラーです"
    });
    dropdown.addEventListener("change", event => {
      console.log(event);
    });
    root.appendChild(dropdown);
    return root;
  })
  .add("Base2", () => {
    const root = document.createElement("div");
    const dropdown = new Dropdown();
    dropdown.value = "Orange";
    dropdown.items = [
      {
        label: "-----",
        value: "-----"
      },
      {
        label: "orange",
        value: "Orange"
      },
      {
        label: "apple",
        value: "Apple"
      }
    ];
    dropdown.label = "フルーツ一覧";
    dropdown.requiredIcon = true;
    dropdown.error = "エラーです";
    root.appendChild(dropdown);
    return root;
  })
  // UI For document site. Do not change or delete below.
  .add("Document", () => {
    const root = document.createElement("div");
    const dropdown = new Dropdown({
      value: "Orange",
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
    root.appendChild(dropdown);
    return root;
  });
