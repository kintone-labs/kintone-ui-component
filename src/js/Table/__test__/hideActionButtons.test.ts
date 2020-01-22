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

  test('hideActionButtons is called successfully', () => {
    const myTable = new Table({
      actionButtonsShown: true,
      data: [
        {text: {value: 'this is a text field'}}
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
    myTable.hideActionButtons();

    const tableBodyDOM = container.getElementsByClassName('kuc-table-tbody');
    const rowDOMList = tableBodyDOM[0].getElementsByClassName('kuc-table-tr');

    // Verify action button
    const actionButtons = rowDOMList[0].getElementsByTagName('button');
    expect(actionButtons.length).toEqual(0);
  });
});