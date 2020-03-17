/* eslint-disable @typescript-eslint/no-empty-function */
import ColorPicker from '../index';
import 'jest-canvas-mock';

describe('[JS] Unit test ColorPicker getColor', () => {
  test('should getColor successfully', () => {
    const colorPicker = new ColorPicker({color: '#FF0000'});
    colorPicker.setColor('#666666');
    expect(colorPicker.getColor()).toBe('#666666');
  });

  test('should return default color when not specify color', () => {
    const colorPicker = new ColorPicker();
    expect(colorPicker.getColor()).toBe('#ff0000');
  });
});