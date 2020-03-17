/* eslint-disable @typescript-eslint/no-empty-function */
import ColorPicker from '../index';
import 'jest-canvas-mock';

describe('[JS] Unit test ColorPicker disable', () => {
  test('should disable successfully', () => {
    const colorPicker = new ColorPicker({color: '#FF0000'});
    colorPicker.disable();

    const textBox = (colorPicker.render().firstElementChild as HTMLElement).firstElementChild!;
    expect(textBox).toBeDisabled();
  });
});