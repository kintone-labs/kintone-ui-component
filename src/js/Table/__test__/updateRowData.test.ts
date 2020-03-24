/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';
import createTableCell from '../TableCellFactory';

const message = {
  INVALID_ARGUMENT: 'Error: invalid function arguments'
};

describe('Unit test for Table updateRowData', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('updateRowData is called successfully', () => {
    try {
      const tableData = [
        {
          text: {value: 'this is a text field1'},
          checkbox: {
            items: [
              {label: 'Orange', value: 'Orange', isDisabled: false},
              {label: 'Banana', value: 'Banana', isDisabled: true},
              {label: 'Lemon', value: 'Lemon', isDisabled: true},
            ],
            value: ['Orange', 'Banana']
          },
        }
      ];
      const myTable = new Table({
        data: tableData,
        defaultRowData: {
          text: {value: 'default text field value'},
          checkbox: {
            items: [
              {label: 'Orange', value: 'Orange', isDisabled: false},
              {label: 'Banana', value: 'Banana', isDisabled: true},
              {label: 'Lemon', value: 'Lemon', isDisabled: true},
            ],
            value: ['Orange', 'Banana']
          },
        },
        columns: [
          {
            header: 'Text',
            cell: function() {
              return createTableCell('text', 'text');
            }
          },
          {
            header: 'Checkbox',
            cell: function() {
              return createTableCell('checkbox', 'checkbox');
            }
          }
        ]
      });
      myTable.render();
      myTable.updateRowData(0, tableData);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('updateRowData is called successfully with fieldName', () => {
    try {
      const tableData = [
        {
          text: {value: 'this is a text field1'},
          checkbox: {
            items: [
              {label: 'Orange', value: 'Orange', isDisabled: false},
              {label: 'Banana', value: 'Banana', isDisabled: true},
              {label: 'Lemon', value: 'Lemon', isDisabled: true},
            ],
            value: ['Orange', 'Banana']
          },
        }
      ];
      const myTable = new Table({
        data: []
      });
      myTable.render();
      // @ts-ignore
      myTable.updateRowData(0, tableData, true, true, 'text');
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('Throw error when validate fail', () => {
    try {
      const myTable = new Table();
      myTable.render();
      // @ts-ignore
      myTable.updateRowData(undefined);

      // TODO: Remove unreachable code line 296 index.ts
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(message.INVALID_ARGUMENT);
    }
  });

  // TODO: Unreachable code line 139 index.ts
});