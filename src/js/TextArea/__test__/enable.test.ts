/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';

describe('Unit test TextArea enable', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('enable successfull TextArea component', () => {
    const txtArea1 = new TextArea({value: 'textarea', isDisabled: true});
    txtArea1.enable();
    expect(txtArea1.render().getAttribute('disabled')).toBeNull();
    expect(txtArea1.render().querySelector('textarea') as HTMLTextAreaElement).toBeEnabled();
  });
});