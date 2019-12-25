/* eslint-disable @typescript-eslint/no-empty-function */
import Label from '../index';

describe('Unit test Label rerender', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('rerender successfully without props Label component', () => {
    const label = new Label();
    expect(label.rerender()).toBeUndefined();
  });
});