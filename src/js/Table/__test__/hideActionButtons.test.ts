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
    try {
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
      myTable.render();
      myTable.hideActionButtons();
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
});