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
          headerName: "First col",
          key: "firstName",
        },
        {
          headerName: "Second col",
          key: "age",
        },
        {
          headerName: "Third column is very long",
          key: "lastName",
        },
      ],
      data: [
        { age: "18", firstName: "Chi", lastName: "Nguyen" },
        { age: "17", firstName: "A", lastName: "Nguyen" },
        { age: "17", firstName: "B", lastName: "Nguyen" },
        { age: "12", firstName: "C", lastName: "Nguyen" },
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
