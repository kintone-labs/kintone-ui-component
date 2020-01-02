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
    try {
      const myTable = new Table({
        actionButtonsShown: false,
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
      myTable.showActionButtons();
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('showActionButtons is called successfully with empty Table', () => {
    try {
      const myTable = new Table();
      myTable.render();
      myTable.showActionButtons();
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  // TODO: Remove unreachable else path line 325 (unnecessary if) index.ts
});