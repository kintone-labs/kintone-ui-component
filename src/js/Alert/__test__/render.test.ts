/* eslint-disable @typescript-eslint/no-empty-function */
import Alert from '../index';

describe('Unit test Alert render', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('render successfully without props Alert component', () => {
    const alert = new Alert();
    expect(alert.render().className).toBe('kuc-alert bg-danger');
  });

  test('render successfully with full props Alert type success', () => {
    const alert = new Alert({type: 'success', isDisabled: true, isVisible: false, text: 'alert'});
    expect(alert.render().className).toBe('kuc-alert bg-success');
  });
  test('render successfully with full props Alert type error', () => {
    const alert = new Alert({type: 'error', text: ''});
    expect(alert.render().className).toBe('kuc-alert bg-danger');
  });
});