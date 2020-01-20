/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import Text from '../index';

describe('[JS] Text', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('should be render successfully', () => {
    const text = new Text({value: 'success', isDisabled: false});
    expect(text.render()).toHaveClass('kuc-input-text');
    expect(text.render()).toHaveValue('success');
    expect(text.render()).not.toBeDisabled();
  });
});