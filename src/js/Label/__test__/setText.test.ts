/* eslint-disable @typescript-eslint/no-empty-function */
import Label from '../index';

const messages = {
  INVALID_ARGUMENT: 'Error: invalid function arguments'
};

describe('Unit test Label setText', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setText expect to throw error with props value number Label component', () => {
    try {
      const label = new Label({text: 'label'});
      // @ts-ignore
      label.setText(3);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });

  test('setText successfully with full props Label component', () => {
    const label = new Label({text: 'This is Label', backgroundColor: 'red', isDisabled: true, isVisible: true, textColor: 'blue'});
    label.setText('');
    expect((label.render().firstElementChild as HTMLElement).textContent).toBe('');
  });
});