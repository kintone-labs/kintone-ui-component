/* eslint-disable @typescript-eslint/no-empty-function */
import TableCell from '../TableCell';

describe('Unit test for TableCell', () => {

  test('TableCell can be initialzed without props', () => {
    expect(() => {
      new TableCell();
    }).not.toThrow();
  });

  test('TableCell init function can be called without provided init function', () => {
    expect(() => {
      const myCell = new TableCell();
      myCell.init();
    }).not.toThrow();
  });
});