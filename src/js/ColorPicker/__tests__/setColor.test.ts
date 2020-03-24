/* eslint-disable @typescript-eslint/no-empty-function */
import ColorPicker from '../index';
import Message from '../../../constant/Message';
import 'jest-canvas-mock';

describe('[JS] Unit test ColorPicker setColor', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });
  test('should setColor successfully', () => {
    const colorPicker = new ColorPicker({color: '#FF0000'});
    colorPicker.setColor('#666666');
    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    const textbox = textBoxOuter.getElementsByTagName('input')[0];
    expect(textbox).toHaveStyle('background-color: rgb(102, 102, 102)');
  });

  test('should throw error when setColor has invalid color param', () => {
    const colorPicker = new ColorPicker({color: '#FF0000'});
    colorPicker.setColor('#666fff');
    expect(() => {
      colorPicker.setColor('#666ffff');
    }).toThrowError(Message.colorPicker.INVALID_COLOR);
  });
});