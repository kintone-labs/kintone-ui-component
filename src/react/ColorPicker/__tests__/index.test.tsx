/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import 'jest-canvas-mock';
import Message from '../../../constant/Message';

import ColorPicker from '../index';

describe('<ColorPicker/>', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('should be render successfully', () => {
    const {getAllByRole, getByText} = render(<ColorPicker color="#ff000b" />);
    expect(getAllByRole('textbox')[0]).toHaveStyle('background-color: rgb(255, 0, 11)');
    expect(getByText('OK')).toHaveClass('kuc-btn submit');
    expect(getByText('Cancel')).toHaveClass('kuc-btn normal');
  });

  test('should return origin color when clicking Cancel button', ()=>{
    const changedColor = '#FFFFFF';
    const mockCallback = jest.fn((color) => {});

    const {getAllByRole, getByText} = render(<ColorPicker color="#ff000b" onChange={mockCallback} />);
    fireEvent.blur(getAllByRole('textbox')[0], {target: {value: changedColor}});
    fireEvent.click(getByText('Cancel'), {});
    expect(mockCallback).toBeCalledTimes(1);
    expect(getAllByRole('textbox')[0]).toHaveStyle('background-color: rgb(255, 0, 11)');
  });

  test('should change color when clicking OK button', ()=>{
    const changedColor = '#FFFFFF';

    const mockCallback = jest.fn(() => {});

    const {getAllByRole, getByText} = render(<ColorPicker color="#ff000b" onChange={mockCallback} />);
    fireEvent.blur(getAllByRole('textbox')[0], {target: {value: changedColor}});
    fireEvent.click(getByText('OK'), {});
    expect(mockCallback).toBeCalledTimes(1);
    expect(getAllByRole('textbox')[0]).toHaveStyle('background-color: rgb(255, 255, 255)');
  });

  test('should close color picker when focus out this component', ()=>{
    const {container, getAllByRole} = render(<ColorPicker color="#ff000b" />);
    fireEvent.focus(getAllByRole('textbox')[0], {target: {value: '#ffffff'}});
    expect(container.lastElementChild).toHaveStyle('display: block');
    fireEvent.mouseDown(document);
    expect((getAllByRole('textbox')[0].parentElement as HTMLDivElement).nextSibling).not.toBeVisible();
  });

  test('should throw error when invalid color param', ()=>{
    // @ts-ignore
    jest.spyOn(console, 'error').mockImplementationOnce(() => {});
    expect(() => {
      render(<ColorPicker color="#12345342" />);
    }).toThrowError(Message.colorPicker.INVALID_COLOR);
  });

  test('should invisible when isVisible param is false', () => {
    const {container} = render(<ColorPicker isVisible={false} />);
    expect(container).toContainHTML('<div></div>');
  });

  test('should change value successfully when R input is changed', ()=>{
    const mockCallback = jest.fn((color: string) => {
      expect(color).toBe('#f4000b');
    });

    const {getAllByRole, getByText} = render(<ColorPicker color="#ff000b" onChange={mockCallback} />);
    expect(getAllByRole('textbox')[0]).toHaveStyle('background-color: rgb(255, 0, 11)');
    fireEvent.focus(getAllByRole('textbox')[0]);
    fireEvent.blur(getAllByRole('textbox')[1], {target: {value: '244'}});
    fireEvent.click(getByText('OK'), {});
    expect(mockCallback).toBeCalledTimes(1);
  });

  test('should change value successfully when G input is changed', ()=>{
    const mockCallback = jest.fn((color: string) => {
      expect(color).toBe('#fff40b');
    });

    const {getAllByRole, getByText} = render(<ColorPicker color="#ff000b" onChange={mockCallback} />);
    fireEvent.focus(getAllByRole('textbox')[0]);
    fireEvent.blur(getAllByRole('textbox')[2], {target: {value: '244'}});
    fireEvent.click(getByText('OK'), {});
    expect(mockCallback).toBeCalledTimes(1);
  });

  test('should change value successfully when B input is changed', ()=>{
    const mockCallback = jest.fn((color: string) => {
      expect(color).toBe('#ff00f4');
    });

    const {getAllByRole, getByText} = render(<ColorPicker color="#ff000b" onChange={mockCallback} />);
    fireEvent.focus(getAllByRole('textbox')[0]);
    fireEvent.blur(getAllByRole('textbox')[3], {target: {value: '244'}});
    fireEvent.click(getByText('OK'), {});
    expect(mockCallback).toBeCalledTimes(1);
  });

  test('should change value successfully when H input is changed', ()=>{
    const mockCallback = jest.fn((color: string) => {
      expect(color).toBe('#00ffff');
    });
    const {getAllByRole, getByText} = render(<ColorPicker color="#ff000b" onChange={mockCallback} />);
    fireEvent.focus(getAllByRole('textbox')[0]);
    fireEvent.blur(getAllByRole('textbox')[4], {target: {value: '0.5'}});
    fireEvent.click(getByText('OK'), {});
    expect(mockCallback).toBeCalledTimes(1);
  });

  test('should change value successfully when clicking in color canvas', ()=>{
    const mockCallback = jest.fn((color: string) => {
      expect(color).toBe('#472b2d');
    });
    const {getAllByRole, getByText, container} = render(<ColorPicker color="#ff000b" onChange={mockCallback} />);
    fireEvent.focus(getAllByRole('textbox')[0], {target: {value: '#ff000b'}});
    const colorCanvas = container.getElementsByTagName('canvas')[0] as HTMLElement;
    // @ts-ignore
    jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementationOnce(() => {
      return {
        getImageData: () => {
          return {data: [71, 43, 45]};
        }
      };
    });

    fireEvent.mouseUp(colorCanvas, {clientX: 130, clientY: 183});
    fireEvent.click(getByText('OK'), {});
    expect(mockCallback).toBeCalledTimes(1);
  });

  test('should change value successfully when clicking in Hue canvas', ()=>{
    const mockImageData = [71, 43, 45];
    const mockCallback = jest.fn((color: string) => {
      expect(color).toBe('#472b2d');
    });
    const {getAllByRole, getByText, container} = render(<ColorPicker color="#ff000b" onChange={mockCallback} />);
    fireEvent.focus(getAllByRole('textbox')[0], {target: {value: '#ff000b'}});
    const colorCanvas = container.getElementsByTagName('canvas')[1] as HTMLElement;
    // @ts-ignore
    jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementationOnce(() => {
      return {
        getImageData: () => {
          return {data: mockImageData};
        }
      };
    });

    fireEvent.mouseUp(colorCanvas, {clientX: 130, clientY: 183});
    fireEvent.click(getByText('OK'), {});
    expect(mockCallback).toBeCalledTimes(1);
  });

});