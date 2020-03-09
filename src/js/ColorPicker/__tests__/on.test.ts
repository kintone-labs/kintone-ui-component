/* eslint-disable @typescript-eslint/no-empty-function */
import {fireEvent, getByText} from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

import ColorPicker from '../index';
import 'jest-canvas-mock';

describe('[JS] Unit test ColorPicker handle event', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });
  test('should be fire onChange event', ()=>{
    const value = '#666666';

    const colorPicker = new ColorPicker({color: value});

    const mockCallback = jest.fn((color) => {
      expect(color).toBe(color);
    });

    colorPicker.on('change', mockCallback);
    fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
    expect(mockCallback).toBeCalled();
  });

  test('should be fire onChange when input is changed', ()=>{
    const color = '#ff000b';
    const changedColor = '#FFFFFF';

    const colorPicker = new ColorPicker({color: color});

    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    const textbox = textBoxOuter.getElementsByTagName('input')[0];
    expect(textbox).toHaveStyle('background-color: rgb(255, 0, 11)');

    const mockCallback = jest.fn((inputColor) => {
      expect(inputColor).toBe(changedColor);
    });
    colorPicker.on('change', mockCallback);

    fireEvent.blur(textbox, {target: {value: changedColor}});
    fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
    expect(mockCallback).toBeCalled();
  });

  test('should return origin color when clicking Cancel button', ()=>{
    const color = '#ff000b';
    const changedColor = '#FFFFFF';

    const colorPicker = new ColorPicker({color: color});

    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;

    const textbox = textBoxOuter.getElementsByTagName('input')[0];
    expect(textbox).toHaveStyle('background-color: rgb(255, 0, 11)');

    const mockCallback = jest.fn(() => {});
    colorPicker.on('change', mockCallback);

    fireEvent.blur(textbox, {target: {value: changedColor}});
    fireEvent.click(getByText(colorPicker.render(), 'Cancel'), {});
    expect(mockCallback).not.toBeCalled();
    expect(colorPicker.getColor()).toBe(color);
  });

  test('should change value successfully when R input is changed', ()=>{
    const color = '#ff000b';

    const colorPicker = new ColorPicker({color: color});

    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    const textbox = textBoxOuter.getElementsByTagName('input')[0];
    expect(textbox).toHaveStyle('background-color: rgb(255, 0, 11)');

    const picker = colorPicker.render().lastElementChild as HTMLElement;
    const inputROuter = getByText(picker, 'R').nextElementSibling as HTMLElement;
    const inputR = inputROuter.firstChild as HTMLElement;
    fireEvent.change(inputR, {target: {value: '244'}});
    fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
    expect(colorPicker.getColor()).toBe('#f4000b');
  });

  test('should change value successfully when G input is changed', ()=>{
    const color = '#ff000b';

    const colorPicker = new ColorPicker({color: color});

    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    const textbox = textBoxOuter.getElementsByTagName('input')[0];
    expect(textbox).toHaveStyle('background-color: rgb(255, 0, 11)');

    const picker = colorPicker.render().lastElementChild as HTMLElement;
    const inputGOuter = getByText(picker, 'G').nextElementSibling as HTMLElement;
    const inputG = inputGOuter.firstChild as HTMLElement;
    fireEvent.change(inputG, {target: {value: '244'}});
    fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
    expect(colorPicker.getColor()).toBe('#fff40b');
  });

  test('should change value successfully when B input is changed', ()=>{
    const color = '#ff000b';

    const colorPicker = new ColorPicker({color: color});

    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    const textbox = textBoxOuter.getElementsByTagName('input')[0];
    expect(textbox).toHaveStyle('background-color: rgb(255, 0, 11)');

    const picker = colorPicker.render().lastElementChild as HTMLElement;
    const inputBOuter = getByText(picker, 'B').nextElementSibling as HTMLElement;
    const inputB = inputBOuter.firstChild as HTMLElement;
    fireEvent.change(inputB, {target: {value: '244'}});
    fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
    expect(colorPicker.getColor()).toBe('#ff00f4');
  });

  test('should change value successfully when H input is changed', ()=>{
    const color = '#ff000b';
    const colorPicker = new ColorPicker({color: color});

    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    const textbox = textBoxOuter.getElementsByTagName('input')[0];
    expect(textbox).toHaveStyle('background-color: rgb(255, 0, 11)');

    const picker = colorPicker.render().lastElementChild as HTMLElement;
    const inputHOuter = getByText(picker, 'H').nextElementSibling as HTMLElement;
    const inputH = inputHOuter.firstChild as HTMLElement;
    fireEvent.change(inputH, {target: {value: '0.5'}});
    fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
    expect(colorPicker.getColor()).toBe('#00ffff');
  });

  test('should change value successfully when S input is changed', ()=>{
    const color = '#ff000b';
    const colorPicker = new ColorPicker({color: color});

    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    const textbox = textBoxOuter.getElementsByTagName('input')[0];
    expect(textbox).toHaveStyle('background-color: rgb(255, 0, 11)');

    const picker = colorPicker.render().lastElementChild as HTMLElement;
    const inputSOuter = getByText(picker, 'S').nextElementSibling as HTMLElement;
    const inputS = inputSOuter.firstChild as HTMLElement;
    fireEvent.change(inputS, {target: {value: '0.5'}});
    fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
    expect(colorPicker.getColor()).toBe('#ff8085');
  });

  test('should change value successfully when V input is changed', ()=>{
    const color = '#ff000b';
    const colorPicker = new ColorPicker({color: color});

    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    const textbox = textBoxOuter.getElementsByTagName('input')[0];
    expect(textbox).toHaveStyle('background-color: rgb(255, 0, 11)');

    const picker = colorPicker.render().lastElementChild as HTMLElement;
    const inputVOuter = getByText(picker, 'V').nextElementSibling as HTMLElement;
    const inputV = inputVOuter.firstChild as HTMLElement;
    fireEvent.change(inputV, {target: {value: '0.5'}});
    fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
    expect(colorPicker.getColor()).toBe('#800005');
  });

  test('should change value successfully when clicking in color canvas', ()=>{
    const color = '#ff000b';
    const colorPicker = new ColorPicker({color: color});

    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    const textbox = textBoxOuter.getElementsByTagName('input')[0];
    expect(textbox).toHaveStyle('background-color: rgb(255, 0, 11)');
    fireEvent.focus(textbox, {target: {value: '#ff000b'}});

    const picker = colorPicker.render().lastElementChild as HTMLElement;
    expect(picker).toHaveStyle('display: block');
    picker.getElementsByTagName('canvas');

    const colorCanvas = picker.getElementsByTagName('canvas')[0] as HTMLElement;
    // @ts-ignore
    jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementationOnce(() => {
      return {
        getImageData: () => {
          return {data: [71, 43, 45]};
        }
      };
    });

    fireEvent.mouseUp(colorCanvas, {clientX: 130, clientY: 183});
    fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
    expect(colorPicker.getColor()).toBe('#472b2d');
  });

  test('should change value successfully when clicking in Hue canvas', ()=>{
    const color = '#ff000b';
    const mockImageData = [71, 43, 45];
    const colorPicker = new ColorPicker({color: color});

    const textBoxOuter = colorPicker.render().firstElementChild as HTMLElement;
    const textbox = textBoxOuter.getElementsByTagName('input')[0];
    fireEvent.focus(textbox, {target: {value: '#ff000b'}});

    const picker = colorPicker.render().lastElementChild as HTMLElement;
    expect(picker).toHaveStyle('display: block');
    picker.getElementsByTagName('canvas');
    // @ts-ignore
    jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementationOnce(() => {
      return {
        getImageData: () => {
          return {data: mockImageData};
        }
      };
    });

    const colorCanvas = picker.getElementsByTagName('canvas')[1] as HTMLElement;

    fireEvent.mouseUp(colorCanvas, {clientX: 130, clientY: 183});
    fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
    expect(colorPicker.getColor()).toBe('#472b2d');
  });
});