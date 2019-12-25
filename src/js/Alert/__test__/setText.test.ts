/* eslint-disable @typescript-eslint/no-empty-function */
import Alert from '../index';

const messages = {
  INVALID_ARGUMENT: 'Error: invalid function arguments'
};

describe('Unit test Alert setText', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setText successfully without props Alert component', () => {
    const alert = new Alert();
    alert.setText('alert');
    expect(alert.render().textContent).toBe('alert');
  });

  test('setText error with invalid props Alert component', () => {
    try {
      const alert = new Alert({text: 'alert'});
      // @ts-ignore
      alert.setText(2);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });
});