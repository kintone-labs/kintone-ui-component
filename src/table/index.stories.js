import { Table } from "./index.ts";
import { Dropdown } from "../dropdown";
import { Checkbox } from "../checkbox";
import { TextArea } from "../textarea";
import { DatePicker } from "../date-picker";
import { RadioButton } from "../radio-button";
import { MultiChoice } from "../multichoice";
import { TimePicker } from "../time-picker";

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

const renderAge = (dataCell, dataRow) => {
  const text = new TextArea({ value: dataCell });
  return text;
};

const renderName = (cellData, rowData, index) => {
  const dropdown = new Dropdown({
    items: [
      {
        label: "Vietnamese",
        value: "Vietnamese",
      },
      {
        label: "Japanese",
        value: "Japanese",
      },
    ],
    value: cellData,
    selectedIndex: 0,
  });
  return dropdown;
};

const renderAddress = (cellData, rowData, index) => {
  const checkbox = new Checkbox({
    id: `address-${index}`,
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

const renderDate = (cellData) => {
  const datePicker = new DatePicker({ value: cellData });
  return datePicker;
};

const renderTime = (cellData) => {
  const timePicker = new TimePicker({ value: cellData });
  return timePicker;
};

const renderGender = (cellData) => {
  const radioButton = new RadioButton({
    items: [
      { label: "male", value: "male" },
      { label: "female", value: "female" },
    ],
    value: cellData,
  });
  return radioButton;
};

const renderMultiChoice = (cellData) => {
  const multichoice = new MultiChoice({
    items: [
      { label: "sample1", value: "sample1" },
      { label: "sample2", value: "sample2" },
      { label: "sample3", value: "sample3" },
    ],
    value: cellData,
  });
  return multichoice;
};

const relatedNameAndAddress = {
  Vietnamese: ["vn"],
  Japanese: ["ja"],
};

const Template = (args) => {
  const table = new Table({ ...args });
  table.addEventListener("change", (event) => {
    const field = event.detail.field;
    const addressIndex = 1;
    if (field === "name") {
      const rowIndex = event.detail.rowIndex;
      const value = table.data[event.detail.rowIndex][field];
      table.data[rowIndex].address = relatedNameAndAddress[value];
      table.renderCell(rowIndex + 1, addressIndex);
    }
  });
  return table;
};

const columns = [
  {
    headerName: "Name",
    field: "name",
    requiredIcon: true,
    render: renderName,
  },
  {
    headerName: "Address",
    field: "address",
    render: renderAddress,
  },
  {
    headerName: "Age",
    field: "age",
    render: renderAge,
  },
  {
    headerName: "Date",
    field: "date",
    render: renderDate,
  },
  {
    headerName: "Gender",
    field: "gender",
    render: renderGender,
  },
  {
    headerName: "Time",
    field: "time",
    render: renderTime,
  },
  {
    headerName: "Multichoice",
    field: "multichoice",
    render: renderMultiChoice,
  },
];

export const Base = Template.bind({});
Base.args = {
  label: "Table component",
  visible: true,
  columns: columns,
  data: [
    {
      name: "Vietnamese",
      age: 32,
      date: "2021-03-31",
      time: "12:12",
      gender: "female",
      multichoice: ["sample1", "sample3"],
      address: ["vn"],
    },
    {
      name: "Japanese",
      age: 20,
      date: "2021-02-22",
      time: "13:13",
      gender: "male",
      multichoice: ["sample2", "sample3"],
      address: ["ja"],
    },
  ],
  id: "table-id",
  className: "table-classname",
  actionButtonsShown: true,
};
