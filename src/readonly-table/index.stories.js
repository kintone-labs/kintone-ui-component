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
          headerName: "First column",
          width: "100px",
        },
        {
          headerName: "Second column",
        },
        {
          headerName: "Third column third column third column",
        },
      ],
      data: [
        ["1", "Orange", "sample data 1"],
        ["2", "Lemon", "sample data 2"],
        ["3", "Banana", "very very very long sample data 3"],
        ["4", "Grape", "sample data 4"],
        ["5", "Avocado", "sample data 5"],
        ["6", "Plum", "sample data 6"],
        ["7", "Peach", "sample data 7"],
        ["8", "Pineapple", "sample data 8"],
        ["9", "Watermelon", "sample data 9"],
        ["10", "Strawberry", "sample data 10"],
        [],
        [],
      ],
    });
    root.appendChild(readOnlyTable);
    return root;
  })
  .add("Base2", () => {
    const root = document.createElement("div");
    const readOnlyTable = new ReadOnlyTable({
      className: "sample-class",
      id: "sample-id",
      visible: true,
      label: "My ReadOnlyTable",
      rowsPerPage: 3,
      columns: [
        {
          headerName: "First column",
          width: "100px",
        },
        {
          headerName: "Second column",
        },
        {
          headerName: "Third column third column third column",
        },
      ],
    });
    readOnlyTable.data = [
      ["sample value 2", "bbb", "test"],
      ["sample value 2", "bbb", "test"],
      ["sample value 2", "bbb", "test"],
    ];
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
    });
    root.appendChild(readOnlyTable);
    return root;
  });
