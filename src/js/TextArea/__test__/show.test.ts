/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';

describe('Unit test TextArea show', () => {
  test('show TextArea with full props component', () => {
    const txtArea1 = new TextArea({value: 'textarea', isVisible: false});
    txtArea1.show();
    expect(txtArea1.render()).toBeVisible();
  });
});