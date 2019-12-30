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
  });

  test('Render successfully with props actionButtonsShown = false', () => {
    const myTable = new Table({actionButtonsShown: false});
    const container = myTable.render();
    expect(container).toBeTruthy();
    // @ts-ignore
    expect(container.className).toBe('kuc-table');
  });

  test('Render successfully with full props', () => {
    const myTable = new Table({
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
    expect(container).toBeTruthy();
    // @ts-ignore
    expect(container.className).toBe('kuc-table');
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