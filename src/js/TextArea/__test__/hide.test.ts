/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';

describe('Unit test TextArea hide', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });
  test('hide TextArea with props component', () => {
    const txtArea1 = new TextArea({value: 'textarea', isVisible: true});
    txtArea1.hide();
    expect(txtArea1.render()).not.toBeVisible();
  });
});