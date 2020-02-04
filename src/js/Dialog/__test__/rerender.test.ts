/* eslint-disable @typescript-eslint/no-empty-function */

import Dialog from '../index';

describe('Unit test Dialog render', () => {

  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => {});
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('Function rerender work normally with no params', () => {
    const myDialog = new Dialog({});
    try {
      myDialog.rerender();
    } catch (error) {
      expect(false).toEqual(true);
    }
  });
});