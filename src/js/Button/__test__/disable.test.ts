/* eslint-disable @typescript-eslint/no-empty-function */
import Button from '../index';

describe('Unit test Button disable', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });
  test('Function disable run successfully', () => {
    const button = new Button({isDisabled: false});
    const container = button.render();
    button.disable();
    expect(container).toBeDisabled();
  });
});
