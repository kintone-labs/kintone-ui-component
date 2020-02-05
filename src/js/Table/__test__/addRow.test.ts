/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';
import createTableCell from '../TableCellFactory';

describe('Unit test for Table addRow', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('addRow button work normally', () => {
    const defaultRowData = {
      text: {
        value: 'default text field value'
      }
    };
    const handleRowAdd = jest.fn(({data, rowIndex}: any) => {
      expect(data.length).toEqual(2);
      expect(data[rowIndex]).toStrictEqual(defaultRowData);

      // Verify table row DOM
      const tableBodyDOM = container.getElementsByClassName('kuc-table-tbody');
      expect(tableBodyDOM.length).toEqual(1);
      const rowDOMList = tableBodyDOM[0].getElementsByClassName('kuc-table-tr');
      expect(rowDOMList.length).toEqual(2);

      // Verify row DOM
      const rowDOM = rowDOMList[1];
      const textCellDOM = rowDOM.getElementsByTagName('input');
      expect(textCellDOM.length).toEqual(1);
      expect(textCellDOM[0]).toBeInstanceOf(HTMLInputElement);
      expect(textCellDOM[0].value).toEqual(defaultRowData.text.value);

      // TODO: should render DOM before fire onRowAdd event (index.ts line 241)
    });
    const myTable = new Table({
      columns: [
        {
          header: 'Text',
          cell: function() {
            return createTableCell('text', 'text');
          }
        },
      ],
      actionButtonsShown: true,
      data: [
        {text: {value: 'this is a text field'}}
      ],
      defaultRowData: defaultRowData,
      onRowAdd: handleRowAdd
    });
    const container = myTable.render();
    const actionButtons = container.getElementsByTagName('button');
    actionButtons[0].click();
    expect(handleRowAdd.mock.calls.length).toBe(1);
  });
});