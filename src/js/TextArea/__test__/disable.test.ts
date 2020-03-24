/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';
import '@testing-library/jest-dom/extend-expect';

describe('Unit test TextArea disable', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('disable successfully TextArea component', () => {
    const txtArea1 = new TextArea({value: 'textarea'});
    txtArea1.disable();
    expect(txtArea1.render().getAttribute('disabled')).toBe('true');
    expect(txtArea1.render().querySelector('textarea') as HTMLTextAreaElement).toBeDisabled();
  });
});