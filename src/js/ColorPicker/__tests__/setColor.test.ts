import {getByRole} from '@testing-library/dom';

import ColorPicker from '../index';
import Message from '../../../constant/Message';
import 'jest-canvas-mock';

describe('[JS] Text', () => {
  test('should setColor successfully', () => {
    const colorPicker = new ColorPicker({color: '#FF0000'});
    colorPicker.setColor('#666666');
    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    expect(getByRole(textBoxOuter, 'textbox')).toHaveStyle('background-color: rgb(102, 102, 102)');
  });

  test('should throw error when setColor has invalid color param', () => {
    const colorPicker = new ColorPicker({color: '#FF0000'});
    colorPicker.setColor('#666fff');
    expect(() => {
      colorPicker.setColor('#666ffff');
    }).toThrowError(Message.colorPicker.INVALID_COLOR);
  });
});