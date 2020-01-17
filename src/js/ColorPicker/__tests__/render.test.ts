import {getByRole, getByText, fireEvent} from '@testing-library/dom';

import ColorPicker from '../index';
import Message from '../../../constant/Message';
import 'jest-canvas-mock';

describe('[JS] Text', () => {
  test('should be render successfully', () => {
    const colorPicker = new ColorPicker({color: '#ff000b'});
    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    expect(getByRole(textBoxOuter, 'textbox')).toHaveStyle('background-color: rgb(255, 0, 11)');
    expect(getByText(colorPicker.render(), 'OK')).toHaveClass('kuc-btn submit');
    expect(getByText(colorPicker.render(), 'Cancel')).toHaveClass('kuc-btn normal');
    expect(colorPicker.render()).toMatchSnapshot();
  });

  test('should render successfully with no param is specifing', ()=>{
    const colorPicker = new ColorPicker({});
    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    expect(getByRole(textBoxOuter, 'textbox')).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(colorPicker.render()).toMatchSnapshot();
  });

  test('should disable when isDisabled param is true', ()=>{
    const colorPicker = new ColorPicker({isDisabled: true});
    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    expect(getByRole(textBoxOuter, 'textbox')).toBeDisabled();
    expect(colorPicker.render().lastElementChild).toHaveStyle('display: none');
  });

  test('should disable when isDisabled param is true', ()=>{
    const colorPicker = new ColorPicker({isDisabled: true});
    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    expect(getByRole(textBoxOuter, 'textbox')).toBeDisabled();
    expect(colorPicker.render().lastElementChild).toHaveStyle('display: none');
  });

  test('should show color picker when focus on text input', ()=>{
    const colorPicker = new ColorPicker({});
    colorPicker.on('change', (color) => {
      colorPicker.setColor('#FFFFFF');
    });

    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    fireEvent.focus(getByRole(textBoxOuter, 'textbox'), {target: {value: '#ffffff'}});
    expect(getByRole(textBoxOuter, 'textbox')).toHaveStyle('border: 1px solid #3498db');
    expect(colorPicker.render().lastElementChild).toHaveStyle('display: block');
  });

  test('should close color picker when focus out this component', ()=>{
    const colorPicker = new ColorPicker({});

    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    fireEvent.focus(getByRole(textBoxOuter, 'textbox'), {target: {value: '#ffffff'}});

    fireEvent.mouseDown(document);
    expect(colorPicker.render().lastElementChild).toHaveStyle('display: none');
  });
  test('should throw error when invalid color param', ()=>{
    expect(() => {
      new ColorPicker({color: '#12345342'});
    }).toThrowError(Message.colorPicker.INVALID_COLOR);
  });
});