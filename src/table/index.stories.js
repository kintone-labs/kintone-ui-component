import { Checkbox } from "../checkbox";
import { DatePicker } from "../date-picker";
import { Dropdown } from "../dropdown";
import { MultiChoice } from "../multichoice";
import { RadioButton } from "../radio-button";
import { TextArea } from "../textarea";
import { TimePicker } from "../time-picker";

import { Table } from "./index.ts";

export default {
  title: "desktop/table",
  argTypes: {
    className: { name: "className" },
    id: { name: "id" },
    label: { name: "label" },
    data: { name: "data" },
    columns: { name: "columns" },
    headerVisible: { name: "headerVisible" },
    visible: { name: "visible" },
  },
  parameters: {
    actions: {
      handles: ["change"],
    },
  },
};

const renderAge = (cellData, rowData) => {
  const text = new TextArea({ value: cellData });
  return text;
};

const renderName = (cellData, rowData, index) => {
  const dropdown = new Dropdown({
    items: [
      {
        label: "Nguyen Van A",
        value:
          "a ád ád ád ákld ákd lád lkasjd laksjd alskdj álkd jaslkdj álkdj álkdj alskdj alksdj álkdj alsk djalk djaslkd jaslk jas dlkasjdlkasjdalksdj álkd jaslkd jasldk jasdl kjasd lkajsd lkasjd lkasjd lákj dalksd jaslkd jaslkd jaslkd jas lkdjas lkdajs dlkajs dlkajd alskdj álk djasl dkjasdlk jaslkd jasdl kj",
      },
      {
        label: "Vo Duc Hau",
        value: "hau",
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
      { label: "Orange", value: "orange" },
      { label: "Banana", value: "banana" },
      { label: "Tomato", value: "tomato" },
    ],
    value: cellData,
  });
  return multichoice;
};

const Template = (args) => {
  const wrapper = document.createElement("div");

  const label = document.createElement("label");
  label.innerHTML = "Custom CSS Variables";

  const styleEl = document.createElement("style");
  styleEl.innerHTML = `
    kuc-table {
      --kuc-table-header-cell-0-width: 200px;
      --kuc-table-header-cell-2-width: auto;
    }
  `;
  document.head.appendChild(styleEl);

  const ul = document.createElement("ul");
  // Create list items and set their text content
  const li1 = document.createElement("li");
  li1.textContent = "--kuc-table-header-cell-0-width: 200px; -> Name";

  const li2 = document.createElement("li");
  li2.textContent = "--kuc-table-header-cell-2-width: auto; -> Age";

  // Append the list items to the unordered list
  ul.appendChild(li1);
  ul.appendChild(li2);

  const table = new Table({ ...args });
  table.addEventListener("change", (event) => {
    console.log(event, "event");
  });

  wrapper.appendChild(label);
  wrapper.appendChild(ul);
  wrapper.appendChild(table);
  return wrapper;
};

// NOTES: Currently, storybook doesn't support the function type of args.
// https://storybook.js.org/docs/react/essentials/controls#annotation
// So please don't edit columns value on controls tab.
const columns = [
  {
    title: "Name",
    field: "name",
    requiredIcon: true,
    // render: renderName,
  },
  {
    title: "Address",
    field: "address",
    render: renderAddress,
  },
  {
    title: "Age",
    field: "age",
    render: renderAge,
  },
  {
    title: "Date",
    field: "date",
    render: renderDate,
  },
  {
    title: "Gender",
    field: "gender",
    render: renderGender,
  },
  {
    title: "Time",
    field: "time",
    render: renderTime,
  },
  {
    title: "Multichoice",
    field: "multichoice",
    render: renderMultiChoice,
  },
];

const data = [
  {
    name: "LongtextLongtextLongtextLongtextLongtextLongtextLongtextLongtextLongtextLongtextLongtext",
    age: 32,
    date: "2021-03-31",
    time: "12:12",
    gender: "female",
    multichoice: ["banana", "tomato"],
    address: ["vn"],
  },
  {
    name: "Longtext Longtext Longtext Longtext Longtext Longtext Longtext Longtext Longtext Longtext",
    age: 20,
    date: "2021-02-22",
    time: "13:13",
    gender: "male",
    multichoice: ["orange", "banana"],
    address: ["ja"],
  },
];

export const Base = Template.bind({});
Base.args = {
  label: "Table component",
  headerVisible: true,
  visible: true,
  columns: columns,
  data: data,
  id: "table-id",
  className: "table-classname",
  actionButton: true,
};
