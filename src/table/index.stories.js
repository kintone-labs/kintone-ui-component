import { Table } from "./index.ts";
import { Dropdown } from "../dropdown";
import { Checkbox } from "../checkbox";
import { html, PropertyValues } from "lit";
import { storiesOf } from "@storybook/web-components";

storiesOf("desktop/table", module)
  .add("Base", () => {
    const renderAge = (cellData) => {
      const element = document.createElement("h3");
      element.innerText = `Custom cell: The age is ${cellData}`;
      return element;
    };

    const renderName = (cellData) => {
      const dropdown = new Dropdown({
        items: [
          {
            label: "-----",
            value: "-----",
          },
          {
            label: "Vo Duc Hau",
            value: "voduchau",
          },
          {
            label: "Apple",
            value: "apple",
          },
        ],
        value: cellData,
        selectedIndex: 0,
        label: "フルーツ一覧",
        requiredIcon: true,
        disabled: false,
        error: "エラーです",
      });

      return dropdown;
    };

    const root = document.createElement("div");
    const readOnlyTable = new Table({
      className: "sample-class",
      id: "sample-id",
      visible: true,
      label: "Table component",
      columns: [
        {
          headerName: "Name",
          dataIndex: "name",
          render: renderName,
        },
        {
          headerName: "Address",
          dataIndex: "address",
        },
        {
          headerName: "Age",
          dataIndex: "age",
          render: renderAge,
        },
      ],
      data: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
          tags: ["nice", "developer"],
        },
        {
          key: "2",
          name: "voduchau",
          age: 20,
          address: "New York No. 1 Lake Park",
          tags: ["nice", "developer"],
        },
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
