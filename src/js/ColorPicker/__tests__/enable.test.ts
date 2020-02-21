/* eslint-disable @typescript-eslint/no-empty-function */
import ColorPicker from '../index';
import 'jest-canvas-mock';

describe('[JS] Unit test ColorPicker enable', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });
  test('should enable successfully', () => {
    const colorPicker = new ColorPicker({color: '#FF0000', isDisabled: true});
    colorPicker.enable();
    const textBox = (colorPicker.render().firstElementChild as HTMLElement).firstElementChild!;
    expect(textBox).not.toBeDisabled();
  });
});