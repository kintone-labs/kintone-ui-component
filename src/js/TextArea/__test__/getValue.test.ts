/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';

describe('Unit test TextArea getValue', () => {

  test('getValue successfully with props TextArea component', () => {
    const txtArea2 = new TextArea({value: 'set value into textarea'});
    expect(txtArea2.getValue()).toBe('set value into textarea');
  });
});