/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';
import createTableCell from '../TableCellFactory';

describe('Unit test for Table showActionButtons', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('showActionButtons is called successfully', () => {
    const myTable = new Table({
      actionButtonsShown: false,
      data: [
        {text: {value: 'this is a text field'}},
        {text: {value: 'this is a text field 2'}}
      ],
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
    myTable.showActionButtons();

    const tableBodyDOM = container.getElementsByClassName('kuc-table-tbody');
    const rowDOMList = tableBodyDOM[0].getElementsByClassName('kuc-table-tr');

    // Verify action button
    const actionButtons = rowDOMList[0].getElementsByTagName('button');
    expect(actionButtons.length).toEqual(2);
    expect(actionButtons[0].className).toEqual('kuc-icon-btn small  blue circle');
    expect(actionButtons[1].className).toEqual('kuc-icon-btn small hover-danger gray circle');
  });

  test('showActionButtons is called successfully with empty Table', () => {
    expect(() => {
      const myTable = new Table();
      myTable.render();
      myTable.showActionButtons();
    }).not.toThrow();
  });

  // TODO: Remove unreachable else path line 325 (unnecessary if) index.ts
});