/* eslint-disable @typescript-eslint/no-empty-function */
import Alert from '../index';

const messages = {
  INVALID_ARGUMENT: 'Error: invalid function arguments'
};

describe('Unit test Alert setType', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setType successfully without props Alert component', () => {
    const alert = new Alert();
    alert.setType('error');
    expect(alert.render().className).toBe('kuc-alert bg-danger');
  });

  test('setType error with invalid props Alert component', () => {
    try {
      const alert = new Alert({type: 'success'});
      // @ts-ignore
      alert.setType('danger');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });
});