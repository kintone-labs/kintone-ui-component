import { Table } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("desktop/table", module)
  .add("Base", () => {
    const customCell = () => {
      const inputEl = document.createElement("input");
      inputEl.className = "custom_input";
      inputEl.value = "hello";
      return inputEl;
    };
    const root = document.createElement("div");
    const readOnlyTable = new Table({
      className: "sample-class",
      id: "sample-id",
      visible: true,
      label: "Table component",
      columns: [
        {
          headerName: "1st column"
        },
        {
          headerName: "2nd column"
        },
        {
          headerName: "3rd column"
        },
        {
          headerName: "custom column",
          cell: customCell
        }
      ],
      data: [
        ["", "Orange", "sample data 1", ["1"]],
        ["", "Lemon", "sample data 2", ["2"]],
        ["", "Banana", "sample data 3", ["3"]]
      ]
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
            text: "1st column"
          }
        },
        {
          header: {
            text: "2nd column"
          },
          visible: false
        },
        {
          header: {
            text: "3rd column"
          }
        }
      ]
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
            text: "Fruit"
          },
          visible: true
        },
        {
          header: {
            text: "Producing area"
          },
          visible: true
        }
      ],
      data: [["Orange", "Ehime"]],
      label: "Table component"
    });
    root.appendChild(readOnlyTable);
    return root;
  });
