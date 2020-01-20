/* eslint-disable @typescript-eslint/no-empty-function */
import Label from '../index';

describe('Unit test Label render', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('render successfully without props Label component and enable', () => {
    const label = new Label();
    expect(label.render().className).toBe('kuc-label');
  });
  test('render default text for invalid value props Label component', () => {
    // @ts-ignore
    const label = new Label({text: 1});
    expect(label.render().textContent).toBe('');
  });
  test('render successfully with full props Label component', () => {
    const label = new Label({text: 'This is Label', backgroundColor: 'red', isDisabled: false, isRequired: true, isVisible: true, textColor: 'blue'});
    expect(label.render().className).toBe('kuc-label');
    expect(label.render().getElementsByClassName('kuc-require').length).toEqual(1);
  });
});