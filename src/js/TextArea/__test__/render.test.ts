/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';

describe('Unit test TextArea render', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('render TextArea without props component', () => {
    const txtArea1 = new TextArea();
    expect(txtArea1.render()).toHaveClass('kuc-textarea-outer');
  });

  test('render TextArea with empty props component', () => {
    const txtArea2 = new TextArea({});
    expect(txtArea2.render()).toHaveClass('kuc-textarea-outer');
  });

  test('render TextArea with full props component', () => {
    const txtArea = new TextArea({value: 'textarea'});
    expect(txtArea.render()).toHaveClass('kuc-textarea-outer');
  });
});
