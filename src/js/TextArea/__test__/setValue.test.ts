/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';

describe('Unit test TextArea setValue', () => {

  test('setValue TextArea component with props', () => {
    const txtArea2 = new TextArea({value: 'set value into textarea'});
    txtArea2.setValue('');
    expect(txtArea2.getValue()).toBe('');
  });
});