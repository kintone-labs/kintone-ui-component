import {getByRole} from '@testing-library/dom';

import ColorPicker from '../index';
import 'jest-canvas-mock';

describe('[JS] Text', () => {
  test('should enable successfully', () => {
    const colorPicker = new ColorPicker({color: '#FF0000', isDisabled: true});
    colorPicker.enable();

    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    expect(getByRole(textBoxOuter, 'textbox')).not.toBeDisabled();
  });
});