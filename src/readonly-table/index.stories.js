import { ReadOnlyTable } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("desktop/readonly-table", module)
  .add("Base", () => {
    const root = document.createElement("div");
    const readOnlyTable = new ReadOnlyTable({
      className: "sample-class",
      id: "sample-id",
      visible: true,
      label: "My ReadOnlyTable",
      rowsPerPage: 3,
      pagination: true,
      columns: [
        {
          headerName: "First column"
        },
        {
          headerName: "Second column"
        },
        {
          headerName: "Third column"
        }
      ],
      data: [
        ["", "Orange", "sample data 1"],
        ["", "Lemon", "sample data 2"],
        ["", "Banana", "sample data 3"],
        ["", "Grape", "sample data 4"],
        ["", "Avocado", "sample data 5"],
        ["", "Plum", "sample data 6"],
        ["", "Peach", "sample data 7"],
        ["", "Pineapple", "sample data 8"],
        ["", "Watermelon", "sample data 9"],
        ["", "Strawberry", "sample data 10"]
      ]
    });
    root.appendChild(readOnlyTable);
    return root;
  })
  .add("Base2", () => {
    const root = document.createElement("div");
    const readOnlyTable = new ReadOnlyTable({
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
    const readOnlyTable = new ReadOnlyTable({
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
      data: [["Orange", "Ehime"]]
    });
    root.appendChild(readOnlyTable);
    return root;
  });
