import { Table } from "./index.ts";
import { Dropdown } from "../dropdown";
import { Checkbox } from "../checkbox";
import { storiesOf } from "@storybook/web-components";

storiesOf("desktop/table", module)
  .add("Base", () => {
    const customCell = (cellData) => {
      const element = document.createElement("div");
      if (typeof cellData === "string") {
        const elementInput1 = document.createElement("input");
        elementInput1.value = cellData;
        element.appendChild(elementInput1);
      }
      if (cellData instanceof Array) {
        for (let i = 0; i < cellData.length; i++) {
          const inputEl = document.createElement("input");
          inputEl.value = cellData[i];
          element.appendChild(inputEl);
        }
      }
      return element;
    };
    const KucText = document.createElement("input");
    KucText.value = "kuc input";

    const customCell2 = document.createElement("select");
    const option = document.createElement("option");
    option.value = "1";
    option.text = "1";
    const option2 = document.createElement("option");
    option2.value = "1";
    option2.text = "2";
    customCell2.appendChild(option);
    customCell2.appendChild(option2);

    const root = document.createElement("div");
    const readOnlyTable = new Table({
      className: "sample-class",
      id: "sample-id",
      visible: true,
      label: "Table component",
      columns: [
        {
          headerName: "1st column",
          cell: customCell2,
        },
        {
          headerName: "2nd column",
          cell: new Dropdown({
            className: "sample-class-2nd",
            id: "2",
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
                value: "Banana",
              },
            ],
          }),
        },
      ],
      data: [
        ["", "Orange"],
        ["", "Lemon"],
      ],
    });
    root.appendChild(readOnlyTable);
    return root;
  })
  .add("Base2", () => {
    const root = document.createElement("div");
    const readOnlyTable = new Table({
      columns: [
        {
          header: {
            text: "1st column",
          },
        },
        {
          header: {
            text: "2nd column",
          },
          visible: false,
        },
        {
          header: {
            text: "3rd column",
          },
        },
      ],
    });
    readOnlyTable.data = [1, ["sample value 2", "bbb", "test"]];
    root.appendChild(readOnlyTable);
    return root;
  })
  // UI For document site. Do not change or delete below.
  .add("Document", () => {
    const root = document.createElement("div");
    const readOnlyTable = new Table({
      columns: [
        {
          header: {
            text: "Fruit",
          },
          visible: true,
        },
        {
          header: {
            text: "Producing area",
          },
          visible: true,
        },
      ],
      data: [["Orange", "Ehime"]],
      label: "Table component",
    });
    root.appendChild(readOnlyTable);
    return root;
  });
