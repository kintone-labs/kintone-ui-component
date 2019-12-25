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

  test('setValue TextArea component without props', () => {
    const txtArea1 = new TextArea();
    txtArea1.setValue('set value into textarea');
    expect(txtArea1.getValue()).toBe('set value into textarea');
  });
  test('setValue TextArea component with props', () => {
    const txtArea2 = new TextArea({value: 'set value into textarea'});
    txtArea2.setValue('');
    expect(txtArea2.getValue()).toBe('');
  });
});