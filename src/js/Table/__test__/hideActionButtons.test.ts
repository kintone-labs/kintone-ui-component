/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';

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
      const myTable = new Table({actionButtonsShown: true});
      myTable.render();
      myTable.hideActionButtons();
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
});