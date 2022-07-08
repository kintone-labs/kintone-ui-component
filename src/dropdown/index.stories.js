import { Dropdown } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("desktop/dropdown", module)
  .add("Base", () => {
    const root = document.createElement("div");
    const dropdown = new Dropdown({
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
      selectedIndex: 0,
      label: "フルーツ一覧",
      requiredIcon: true,
      disabled: false,
      error: "エラーです",
    });
    dropdown.addEventListener("change", (event) => {
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
        value: "-----",
      },
      {
        label: "orange",
        value: "Orange",
      },
      {
        label: "apple",
        value: "Apple",
      },
    ];
    dropdown.label = "フルーツ一覧";
    dropdown.requiredIcon = true;
    dropdown.error = "エラーです";
    root.appendChild(dropdown);
    return root;
  })
  .add("Base3", () => {
    const root = document.createElement("div");
    const dropdown = new Dropdown();
    dropdown.value = "Orange";
    dropdown.items = [
      {
        label: "-----",
        value: "-----",
      },
      {
        label: "orange",
        value: "Orange",
      },
      {
        label: "apple",
        value: "Apple",
      },
      {
        label: "banana",
        value: "Banana",
      },
    ];
    dropdown.label = "フルーツ一覧";
    dropdown.requiredIcon = true;
    dropdown.error = "エラーです";

    const div = document.createElement("div");
    div.style.height = "100px";
    root.appendChild(div);
    root.appendChild(dropdown);
    const div2 = document.createElement("div");
    div2.style.height = "100px";
    root.appendChild(div2);
    const dropdown2 = new Dropdown({
      label: "Dropdown",
      items: [
        {
          label:
            "Sample 1 Sample 1 Sample 1 Sample 1 Sample 1 Sample 1 Sample 1",
          value: "Sample 1",
        },
        {
          label: "Sample 2",
          value: "Sample 2",
        },
      ],
      error: "Error",
    });
    root.appendChild(dropdown2);
    return root;
  });
