/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import Text from '../index';

const messages = {
  INVALID_ARGUMENT: 'Error: invalid function arguments'
};

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

  test('should setValue() and getValue() successfully', ()=>{
    const value = 'hello';

    const text = new Text({value: undefined});
    expect(text.render()).toHaveValue('');
    text.setValue(value);
    expect(text.getValue()).toBe(value);
  });

  test('should setValue() null for rerender successfully', ()=>{
    const text = new Text({value: 'kintone'});
    // @ts-ignore
    text.setValue(null);
    expect(text.render()).toHaveValue('');
  });

  test('should setValue() throw error when setValue is called without parameters ', ()=>{
    try {
      const text = new Text();
      // @ts-ignore
      text.setValue();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });
});