/* eslint-disable @typescript-eslint/no-empty-function */
import Alert from '../index';

describe('Unit test Alert rerender', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('rerender successfully without props Alert component', () => {
    try {
      const alert = new Alert();
      alert.rerender();
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
});