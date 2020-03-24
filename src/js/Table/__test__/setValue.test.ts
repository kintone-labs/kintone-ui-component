/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';
import createTableCell from '../TableCellFactory';

const message = {
  INVALID_ARGUMENT: 'Error: invalid function arguments'
};

describe('Unit test for Table setValue', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setValue is called successfully', () => {
    const tableValue = [
      {text: {value: 'first row'}},
      {text: {value: 'second row'}},
      {text: {value: 'third row'}}
    ];
    const myTable = new Table({
      columns: [
        {
          header: 'Text',
          cell: function() {
            return createTableCell('text', 'text');
          }
        },
      ]
    });
    myTable.render();
    myTable.setValue(tableValue);
    expect(myTable.getValue()).toBe(tableValue);

    // Verify table row DOM
    const container = myTable.render();
    const tableBodyDOM = container.getElementsByClassName('kuc-table-tbody');
    expect(tableBodyDOM.length).toEqual(1);
    const rowDOMList = tableBodyDOM[0].getElementsByClassName('kuc-table-tr');
    expect(rowDOMList.length).toEqual(3);

    for (let index = 0; index < rowDOMList.length; index++) {
      const rowDOM = rowDOMList[index];
      const textCellDOM = rowDOM.getElementsByTagName('input');
      expect(textCellDOM.length).toEqual(1);
      expect(textCellDOM[0]).toBeInstanceOf(HTMLInputElement);
      expect(textCellDOM[0].value).toEqual(tableValue[index].text.value);
    }
  });

  test('setValue throw error when called with invalid argument', () => {
    try {
      const tableValue = 1;
      const myTable = new Table();
      myTable.render();
      // @ts-ignore
      myTable.setValue(tableValue);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(message.INVALID_ARGUMENT);
    }
  });
});