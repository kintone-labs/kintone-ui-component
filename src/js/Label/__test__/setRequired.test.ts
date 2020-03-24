/* eslint-disable @typescript-eslint/no-empty-function */
import Label from '../index';

const messages = {
  INVALID_ARGUMENT: 'Error: invalid function arguments'
};

describe('Unit test Label setRequired', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setRequired successfully with full props Label component', () => {
    const label = new Label({text: 'This is Label', backgroundColor: 'red', isDisabled: true, isRequired: true, isVisible: true, textColor: 'blue'});
    label.setRequired(false);
    expect(label.render().getElementsByClassName('kuc-require')).toBeDefined();
  });

  test('setRequired expect to throw error with props value string Label component', () => {
    try {
      const label = new Label({text: 'label', isRequired: true});
      // @ts-ignore
      label.setRequired('false');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });


});