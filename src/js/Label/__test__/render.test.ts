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
  test('render successfully with props value Label component', () => {
    const label = new Label({text: ''});
    expect(label.render().className).toBe('kuc-label');
  });
  test('render successfully with full props Label component and disable', () => {
    const label = new Label({text: 'This is Label', backgroundColor: 'red', isDisabled: false, isRequired: true, isVisible: true, textColor: 'blue'});
    expect(label.render().className).toBe('kuc-label');
  });
});