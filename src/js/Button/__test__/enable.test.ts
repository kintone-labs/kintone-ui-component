/* eslint-disable @typescript-eslint/no-empty-function */
import Button from '../index';

describe('Unit test Button enable', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });
  test('Function enable run successfully', () => {
    const button = new Button({isDisabled: false});
    const container = button.render();
    button.enable();
    expect(container).not.toBeDisabled();
  });
});
