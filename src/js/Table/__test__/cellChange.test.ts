/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';
import createTableCell from '../TableCellFactory';
import {fireEvent} from '@testing-library/dom';

describe('Unit test for Table cellChange', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('onCellChange is called successfully', () => {
    const myTable = new Table({
      data: [
        {text: {value: 'this is a text field'}},
        {text: {value: 'this is a text field 2'}}
      ],
      columns: [
        {
          header: 'Text',
          cell: function() {
            return createTableCell('text', 'text');
          }
        }
      ],
      onCellChange: (event) => {
        expect(event).toBeTruthy();
      }
    });
    const container = myTable.render();
    const inputToChange = container.getElementsByTagName('input');
    fireEvent.change(inputToChange[0]);
  });
});