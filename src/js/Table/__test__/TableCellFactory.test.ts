/* eslint-disable @typescript-eslint/no-empty-function */
import createTableCell from '../TableCellFactory';
import Table from '../index';

const message = {
  INVALID_ARGUMENT: 'Error: invalid function arguments'
};

describe('Unit test for TableCellFactory', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('createTableCell is called successfully with all type of cell', () => {
    try {
      const typeList = ['dropdown', 'multichoice', 'radio', 'label', 'icon', 'alert'];
      const myTable = new Table({
        data: [
          {
            dropdown: 'cell 1'
          },
          {
            multichoice: 'cell 2'
          },
          {
            radio: 'cell 3'
          },
          {
            label: 'cell 4'
          },
          {
            icon: 'cell 5'
          },
          {
            alert: 'cell 6'
          }
        ],
        actionButtonsShown: false,
        defaultRowData: {},
        columns: typeList.map((type, index) => {
          return {
            header: type,
            cell: function() {
              return createTableCell(type, type);
            }
          };
        })
      });
      myTable.render();
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  });
});