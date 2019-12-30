/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';

const message = {
  INVALID_ARGUMENT: 'Error: invalid function arguments'
};

describe('Unit test for Table setValue', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setValue is called successfully', () => {
    const tableValue = [
      {text: {value: 'first row'}},
      {text: {value: 'second row'}},
      {text: {value: 'third row'}}
    ];
    const myTable = new Table();
    myTable.render();
    myTable.setValue(tableValue);
    expect(myTable.getValue()).toBe(tableValue);
  });

  test('setValue throw error when called with invalid argument', () => {
    try {
      const tableValue = 1;
      const myTable = new Table();
      myTable.render();
      // @ts-ignore
      myTable.setValue(tableValue);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(message.INVALID_ARGUMENT);
    }
  });
});