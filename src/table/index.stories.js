import "./index.ts";
import { Dropdown } from "../dropdown";
import { Checkbox } from "../checkbox";
import { TextArea } from "../textarea";

import { html } from "lit-html";

export default {
  title: "desktop/table",
  argTypes: {
    className: { name: "className" },
    id: { name: "id" },
    label: { name: "label" },
    data: { name: "data" },
    columns: { name: "columns" },
    visible: { name: "visible" },
  },
  parameters: {
    actions: {
      handles: ["change"],
    },
  },
};

const Template = (args) => {
  const handleDateChange = (event) => {
    console.log(event);
  };
  return html`
    <kuc-table
      .id="${args.id}"
      .label="${args.label}"
      .visible="${args.visible}"
      .className="${args.className}"
      .data="${args.data}"
      .columns="${args.columns}"
      @change="${handleDateChange}"
    ></kuc-table>
  `;
};

const renderAge = (dataCell, dataRow) => {
  const text = new TextArea({ value: dataCell });
  return text;
};

const renderName = (cellData) => {
  const dropdown = new Dropdown({
    items: [
      {
        label: "a",
        value: "a",
      },
      {
        label: "Vo Duc Hau",
        value: "voduchau",
      },
      {
        label: "b",
        value: "b",
      },
    ],
    value: cellData,
    selectedIndex: 0,
  });

  return dropdown;
};

const renderAddress = (cellData) => {
  const checkbox = new Checkbox({
    items: [
      {
        label: "VietNam",
        value: "vn",
      },
      {
        label: "Japan",
        value: "ja",
      },
    ],
    value: cellData,
  });

  return checkbox;
};

export const Base = Template.bind({});
Base.args = {
  label: "Table component",
  visible: true,
  columns: [
    {
      headerName: "Name",
      dataIndex: "name",
      requiredIcon: true,
      render: renderName,
    },
    {
      headerName: "Address",
      dataIndex: "address",
      render: renderAddress,
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
      name: "a",
      age: 32,
      address: ["vn"],
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "voduchau",
      age: 20,
      address: ["vn", "ja"],
      tags: ["nice", "developer"],
    },
  ],
};
