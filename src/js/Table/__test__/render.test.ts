/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';
import createTableCell from '../TableCellFactory';

const message = {
  INVALID_ARGUMENT: 'Error: invalid function arguments'
};

describe('Unit test for Table render', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('Render successfully without props', () => {
    const myTable = new Table();
    const container = myTable.render();
    expect(container).toBeTruthy();
    // @ts-ignore
    expect(container.className).toBe('kuc-table');
  });

  test('Render successfully with props isVisible = false', () => {
    const myTable = new Table({isVisible: false});
    const container = myTable.render();
    expect(container).toBeTruthy();
    // @ts-ignore
    expect(container.className).toBe('kuc-table');
    expect(container.style.display).toEqual('none');
  });

  test('Render successfully with props actionButtonsShown = false', () => {
    const myTable = new Table({actionButtonsShown: false});
    const container = myTable.render();
    expect(container).toBeTruthy();
    expect(container.className).toBe('kuc-table');
  });

  test('Render successfully with full props', () => {
    const tableValue = [
      {text: {value: 'this is a text field 1'}},
      {text: {value: 'this is a text field 2'}}
    ];
    const myTable = new Table({
      data: tableValue,
      defaultRowData: {text: {value: 'default text field value'}},
      columns: [
        {
          header: 'Text',
          cell: function() {
            return createTableCell('text', 'text');
          }
        },
      ]
    });
    const container = myTable.render();
    expect(container).toBeTruthy();
    expect(container.className).toBe('kuc-table');

    // Verify table row DOM
    const tableBodyDOM = container.getElementsByClassName('kuc-table-tbody');
    expect(tableBodyDOM.length).toEqual(1);
    const rowDOMList = tableBodyDOM[0].getElementsByClassName('kuc-table-tr');
    expect(rowDOMList.length).toEqual(2);

    for (let index = 0; index < rowDOMList.length; index++) {
      // Verify row DOM
      const rowDOM = rowDOMList[index];
      const textCellDOM = rowDOM.getElementsByTagName('input');
      expect(textCellDOM.length).toEqual(1);
      expect(textCellDOM[0]).toBeInstanceOf(HTMLInputElement);
      expect(textCellDOM[0].value).toEqual(tableValue[index].text.value);

      // Verify action button
      const actionButtons = rowDOM.getElementsByTagName('button');
      expect(actionButtons.length).toEqual(2);
      expect(actionButtons[0].className).toEqual('kuc-icon-btn small  blue circle');
      expect(actionButtons[1].className).toEqual('kuc-icon-btn small hover-danger gray circle');
    }
  });

  test('Throw error when validate props fail', () => {
    try {
      // @ts-ignore
      const myTable = new Table({
        data: 1
      });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(message.INVALID_ARGUMENT);
    }
  });
});