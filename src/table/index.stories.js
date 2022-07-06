import { Table } from "./index.ts";
import { Dropdown } from "../dropdown";
import { Checkbox } from "../checkbox";
import { html, PropertyValues } from "lit";
import { storiesOf } from "@storybook/web-components";

storiesOf("desktop/table", module).add("Base", () => {
  const renderAge = (dataCell, dataRow) => {
    const element = document.createElement("h3");
    element.innerText = `Custom cell: The age is ${dataCell}`;
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
});
