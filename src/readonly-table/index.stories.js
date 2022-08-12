import { ReadOnlyTable } from "./index.ts";

export default {
  title: "desktop/readonly-table",
  argTypes: {},
  parameters: {
    actions: {
      handles: ["kuc:pagination-click-prev", "kuc:pagination-click-next"],
    },
  },
};

const Template = (args) => {
  const readOnlyTable = new ReadOnlyTable({ ...args });
  return readOnlyTable;
};

export const Base = Template.bind({});
Base.args = {
  id: "sample-id",
  className: "sample-class",
  visible: true,
  pagination: true,
  rowsPerPage: 3,
  columns: [
    {
      headerName: "Number",
      field: "index",
    },
    {
      headerName: "City",
      field: "name",
    },
    {
      headerName: "Country",
      field: "country",
    },
    {
      headerName: "Population",
      field: "population",
    },
  ],
  data: [
    {
      index: "1",
      name: "Ho Chi Minh",
      country: "Vietnam",
      population: "8,993,000",
    },
    {
      index: "2",
      name: "Can Tho",
      country: "Vietnam",
      population: "1,282,000",
    },
    {
      index: "3",
      name: "Vinh Long",
      country: "Vietnam",
      population: "200,000",
    },
    {
      index: "4",
      name: "Rach Gia",
      country: "Vietnam",
      population: "400,000",
    },
    {
      index: "5",
      name: "Edmonton",
      country: "Canada",
      population: "981,000",
    },
    {
      index: "6",
      name: "Calgary",
      country: "Canada",
      population: "1,336,000",
    },
    {
      index: "7",
      name: "Vancouver",
      country: "Canada",
      population: "675,000",
    },
  ],
};

export const Base2 = Template.bind({});
Base2.args = {
  id: "sample-id",
  className: "sample-class",
  label: "My ReadOnly Table",
  visible: true,
  pagination: true,
  rowsPerPage: 3,
  columns: [
    {
      headerName: "Number",
      field: "index",
    },
    {
      headerName: "City",
      field: "name",
    },
    {
      headerName: "Country",
      field: "country",
    },
    {
      headerName: "Population",
      field: "population",
    },
  ],
  data: [
    {
      index: "1",
      name: "Ho Chi Minh",
      country: "Vietnam",
      population: "8,993,000",
    },
    {
      index: "2",
      name: "Can Tho",
      country: "Vietnam",
      population: "1,282,000",
    },
    {
      index: "3",
      name: "An imaginary long long long city name as an exameple for long content in a cell",
      country: "Vietnam",
      population: "200,000",
    },
    {
      index: "4",
      name: "Rach Gia",
      country: "Vietnam",
      population: "400,000",
    },
    {
      index: "5",
      name: "Edmonton",
      country: "Canada",
      population: "981,000",
    },
    {
      index: "6",
      name: "Calgary",
      country: "Canada",
      population: "1,336,000",
    },
    {
      index: "7",
      name: "Vancouver",
      country: "Canada",
      population: "675,000",
    },
  ],
};

export const Base3 = Template.bind({});
Base3.args = {
  id: "sample-id",
  className: "sample-class",
  label: "My ReadOnly Table",
  visible: true,
  pagination: true,
  rowsPerPage: 3,
  columns: [
    {
      headerName: "Number",
      field: "index",
    },
    {
      headerName:
        "A very very long header name as an example of long content in header",
      field: "name",
    },
    {
      headerName: "Country",
      field: "country",
    },
    {
      headerName: "Population",
      field: "population",
    },
  ],
  data: [
    {
      index: "1",
      name: "Ho Chi Minh",
      country: "Vietnam",
      population: "8,993,000",
    },
    {
      index: "2",
      name: "Can Tho",
      country: "Vietnam",
      population: "1,282,000",
    },
    {
      index: "3",
      name: "Vinh Long",
      country: "Vietnam",
      population: "200,000",
    },
    {
      index: "4",
      name: "Rach Gia",
      country: "Vietnam",
      population: "400,000",
    },
    {
      index: "5",
      name: "Edmonton",
      country: "Canada",
      population: "981,000",
    },
    {
      index: "6",
      name: "Calgary",
      country: "Canada",
      population: "1,336,000",
    },
    {
      index: "7",
      name: "Vancouver",
      country: "Canada",
      population: "675,000",
    },
  ],
};
