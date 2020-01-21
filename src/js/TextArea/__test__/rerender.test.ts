/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';

describe('Unit test TextArea rerender', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('rerender without props TextArea component', () => {
    try {
      const txtArea1 = new TextArea();
      txtArea1.rerender();
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
});