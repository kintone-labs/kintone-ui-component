import {getByRole} from '@testing-library/dom';

import ColorPicker from '../index';
import 'jest-canvas-mock';

describe('[JS] Text', () => {
  test('should disable successfully', () => {
    const colorPicker = new ColorPicker({color: '#FF0000'});
    colorPicker.disable();

    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    expect(getByRole(textBoxOuter, 'textbox')).toBeDisabled();
  });
});