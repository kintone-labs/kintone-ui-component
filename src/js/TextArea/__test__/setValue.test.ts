/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';

describe('Unit test TextArea setValue', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setValue TextArea component with props', () => {
    const txtArea2 = new TextArea({value: 'set value into textarea'});
    txtArea2.setValue('');
    expect(txtArea2.getValue()).toBe('');
  });
});