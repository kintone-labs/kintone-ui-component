/* eslint-disable @typescript-eslint/no-empty-function */
import {fireEvent} from '@testing-library/dom';

import ColorPicker from '../index';
import Message from '../../../constant/Message';
import 'jest-canvas-mock';

// TODO: Remove unreachable if path line 41 (unnecessary if) index.ts

describe('[JS] Unit test ColorPicker render', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });
  test('should be render successfully', () => {
    const colorPicker = new ColorPicker({color: '#ff000b'});
    expect(colorPicker.render().firstElementChild).toBeTruthy();
    const textBoxOuter = (colorPicker.render().firstElementChild as HTMLElement).firstElementChild;
    expect(textBoxOuter).toHaveStyle('background-color: rgb(255, 0, 11)');
    expect(colorPicker.render().getElementsByClassName('kuc-btn submit').length).toEqual(1);
    expect(colorPicker.render().getElementsByClassName('kuc-btn normal').length).toEqual(1);
  });

  test('should render successfully with no param is specifing', ()=>{
    const colorPicker = new ColorPicker({});
    expect(colorPicker.render().firstElementChild).toBeTruthy();
    const textBoxOuter = (colorPicker.render().firstElementChild as HTMLElement).firstElementChild;
    expect(textBoxOuter).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  test('should disable when isDisabled param is true', ()=>{
    const colorPicker = new ColorPicker({isDisabled: true});
    const textBox = (colorPicker.render().firstElementChild as HTMLElement).firstElementChild!;
    expect(textBox).toBeDisabled();
  });

  test('should show color picker when focus on text input', ()=>{
    const colorPicker = new ColorPicker({});
    expect(colorPicker.render().firstElementChild).toBeTruthy();
    const textBoxOuter = (colorPicker.render().firstElementChild as HTMLElement).firstElementChild!;
    fireEvent.focus(textBoxOuter, {target: {value: '#ffffff'}});
    expect(textBoxOuter).toHaveStyle('border: 1px solid #e3e7e8');
  });

  test('should close color picker when focus out this component', ()=>{
    const colorPicker = new ColorPicker({});
    expect(colorPicker.render().firstElementChild).toBeTruthy();
    const textBoxOuter = (colorPicker.render().firstElementChild as HTMLElement).firstElementChild!;
    fireEvent.focus(textBoxOuter, {target: {value: '#ffffff'}});

    fireEvent.mouseDown(document);
    expect(colorPicker.render().lastElementChild).toHaveStyle('display: none');
  });
  test('should throw error when invalid color param', ()=>{
    expect(() => {
      new ColorPicker({color: '#12345342'});
    }).toThrowError(Message.colorPicker.INVALID_COLOR);
  });
});