import { html } from "lit-html";
import "./index.ts";

export default {
  title: "desktop/readonly-table",
  argTypes: {
    id: { name: "id" },
  },
};

const Template = (args) => {
  return html`
    <kuc-readonly-table
      .id="${args.id}"
      .class="${args.className}"
      .label="${args.label}"
      .visible="${args.visible}"
      .rowsPerPage="${args.rowsPerpage}"
      .pagination="${args.pagination}"
      .columns="${args.columns}"
      .data="${args.data}"
    >
    </kuc-readonly-table>
  `;
};

export const Base = Template.bind({});
Base.args = {
  id: "sample-id",
  className: "sample-class",
  label: "My ReadOnly Table",
  visible: true,
  pagination: true,
  rowsPerpage: 3,
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

// storiesOf("desktop/readonly-table", module)
//   .add("Base", () => {
//     const root = document.createElement("div");
//     const readOnlyTable = new ReadOnlyTable({
//       className: "sample-class",
//       id: "sample-id",
//       visible: true,
//       label: "My ReadOnlyTable",
//       rowsPerPage: 3,
//       pagination: true,
//       columns: [
//         {
//           headerName: "Number",
//           field: "index",
//         },
//         {
//           headerName: "City",
//           field: "name",
//         },
//         {
//           headerName: "Country",
//           field: "country",
//         },
//         {
//           headerName: "Population",
//           field: "population",
//         },
//       ],
//       data: [
//         {
//           index: "1",
//           name: "Ho Chi Minh",
//           country: "Vietnam",
//           population: "8,993,000",
//         },
//         {
//           index: "2",
//           name: "Can Tho",
//           country: "Vietnam",
//           population: "1,282,000",
//         },
//         {
//           index: "3",
//           name: "An imaginary long long long city name as an exameple for long content in a cell",
//           country: "Vietnam",
//           population: "200,000",
//         },
//         {
//           index: "4",
//           name: "Rach Gia",
//           country: "Vietnam",
//           population: "400,000",
//         },
//         {
//           index: "5",
//           name: "Edmonton",
//           country: "Canada",
//           population: "981,000",
//         },
//         {
//           index: "6",
//           name: "Calgary",
//           country: "Canada",
//           population: "1,336,000",
//         },
//         {
//           index: "7",
//           name: "Vancouver",
//           country: "Canada",
//           population: "675,000",
//         },
//       ],
//     });
//     root.appendChild(readOnlyTable);
//     return root;
//   })
//   .add("Base2", () => {
//     const root = document.createElement("div");
//     const readOnlyTable = new ReadOnlyTable({
//       className: "sample-class",
//       id: "sample-id",
//       visible: true,
//       label: "My ReadOnlyTable",
//       rowsPerPage: 3,
//       pagination: true,
//       columns: [
//         {
//           headerName: "Number",
//           field: "index",
//         },
//         {
//           headerName:
//             "This is the column for the name of the city and it is supposed to be longer than the city name",
//           field: "name",
//         },
//         {
//           headerName: "Country",
//           field: "country",
//         },
//         {
//           headerName: "Population",
//           field: "population",
//         },
//       ],
//       data: [
//         {
//           index: "1",
//           name: "Ho Chi Minh",
//           country: "Vietnam",
//           population: "8,993,000",
//         },
//         {
//           index: "2",
//           name: "Can Tho",
//           country: "Vietnam",
//           population: "1,282,000",
//         },
//         {
//           index: "3",
//           name: "Vinh Long is a city in Southern Vietnam",
//           country: "Vietnam",
//           population: "200,000",
//         },
//         {
//           index: "4",
//           name: "Rach Gia",
//           country: "Vietnam",
//           population: "400,000",
//         },
//         {
//           index: "5",
//           name: "Edmonton",
//           country: "Canada",
//           population: "981,000",
//         },
//         {
//           index: "6",
//           name: "Calgary",
//           country: "Canada",
//           population: "1,336,000",
//         },
//         {
//           index: "7",
//           name: "Vancouver",
//           country: "Canada",
//           population: "675,000",
//         },
//       ],
//     });
//     root.appendChild(readOnlyTable);
//     return root;
//   })
//   .add("Document", () => {
//     const root = document.createElement("div");
//     const readOnlyTable = new ReadOnlyTable({
//       className: "sample-class",
//       id: "sample-id",
//       visible: true,
//       label: "My ReadOnlyTable",
//       rowsPerPage: 3,
//       pagination: true,
//       columns: [
//         {
//           headerName: "Index",
//           field: "index",
//         },
//         {
//           headerName: "Column 1",
//           field: "data1",
//         },
//         {
//           headerName: "Column 2",
//           field: "data2",
//         },
//         {
//           headerName: "Column 3",
//           field: "data3",
//         },
//       ],
//       data: [
//         {
//           index: "1",
//           data1: "Sample 1",
//           data2: "Sample 1",
//           data3: "Sample 1",
//         },
//       ],
//     });
//     root.appendChild(readOnlyTable);
//     return root;
//   });
