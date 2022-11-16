import { ReadOnlyTable } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("desktop/readonly-table", module)
  .add("Base", () => {
    const root = document.createElement("div");
    const readOnlyTable = new ReadOnlyTable({
      className: "sample-class",
      id: "sample-id",
      visible: true,
      label: "フルーツ",
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
      data: [
        ["", "Orange", "sample data 1"],
        ["", "Lemon", "sample data 2"],
        ["", "Banana", "sample data 3"],
      ],
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
    const readOnlyTable = new ReadOnlyTable({
      label: "Read Only Table",
      columns: [
        {
          header: {
            text: "Number",
          },
          visible: true,
        },
        {
          header: {
            text: "City",
          },
          visible: true,
        },
        {
          header: {
            text: "Country",
          },
          visible: true,
        },
        {
          header: {
            text: "Population",
          },
          visible: true,
        },
      ],
      data: [
        ["4", "Rachgia", "Vietnam", "400,000"],
        ["5", "Edmonton", "Canada", "981,000"],
        ["6", "Calgary", "Canada", "1,336,000"],
      ],
    });
    root.appendChild(readOnlyTable);
    return root;
  });
