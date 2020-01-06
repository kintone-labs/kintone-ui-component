/* eslint-disable @typescript-eslint/no-empty-function */
import TableCell from '../TableCell';

describe('Unit test for TableCell', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('TableCell can be initialzed without props', () => {
    const myCell = new TableCell();
    expect(myCell).toBeInstanceOf(TableCell);
  });

  test('TableCell init function can be called without provided init function', () => {
    const myCell = new TableCell();
    try {
      myCell.init();
      expect(myCell).toBeInstanceOf(TableCell);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
});