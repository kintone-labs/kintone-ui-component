/* eslint-disable @typescript-eslint/no-empty-function */
import Button from '../index';

describe('Unit test Button disable', () => {
  test('Function disable run successfully', () => {
    const button = new Button({isDisabled: false});
    const container = button.render();
    button.disable();
    expect(container).toBeDisabled();
  });
});
