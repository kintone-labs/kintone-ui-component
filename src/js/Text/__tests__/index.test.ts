/* eslint-disable @typescript-eslint/no-empty-function */
import {fireEvent} from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

import Text from '../index';

describe('[JS] Text', () => {
  test('should be render successfully', () => {
    const text = new Text({value: 'success', isDisabled: false});
    expect(text.render()).toHaveClass('kuc-input-text');
    expect(text.render()).toHaveValue('success');
    expect(text.render()).not.toBeDisabled();
  });

  test('should getValue() successfully', ()=>{
    const value = 'hello';

    const text = new Text({value: undefined});
    expect(text.render()).toHaveValue('');
    text.setValue(value);
    expect(text.getValue()).toBe(value);
  });

  test('should setValue() successfully', ()=>{
    const value = 'hello';

    const text = new Text();
    expect(text.render()).toHaveValue('');
    text.setValue(value);
    expect(text.render()).toHaveValue(value);
  });

  test('should setValue() null successfully', ()=>{
    const text = new Text({value: 'kintone'});
    // @ts-ignore
    text.setValue(null);
    text.rerender();
    expect(true).toBeTruthy();
  });

  test('should disable() successfully', ()=>{
    const mockCallback = jest.fn(() => {});
    const defaultValue = 'success';

    const text = new Text({value: defaultValue});
    text.disable();

    expect(text.render()).toBeDisabled();

    text.on('click', mockCallback);
    fireEvent.change(text.render(), {target: {value: defaultValue}});

    expect(mockCallback).toBeCalledTimes(0);
  });

  test('should not be fire onClick event', ()=>{
    const mockCallback = jest.fn(() => {});
    const defaultValue = 'success';

    const text = new Text({value: defaultValue, isDisabled: true});
    text.render();

    text.on('click', mockCallback);
    fireEvent.click(text.render(), {target: {value: defaultValue}});

    expect(mockCallback).toBeCalledTimes(0);
    expect(text.render()).toMatchSnapshot();
  });

  test('should be fire onChange event', ()=>{
    const defaultValue = 'success';
    const changeValue = 'hello';

    const text = new Text({value: defaultValue});
    text.render();

    const mockCallback = jest.fn((event) => {
      expect(event.target.value).toBe(changeValue);
    });

    text.on('change', mockCallback);
    fireEvent.change(text.render(), {target: {value: changeValue}});
    expect(mockCallback).toBeCalled();
  });

  test('should be fire onClick event', ()=>{
    const defaultValue = 'success';

    const text = new Text({value: defaultValue});
    text.render();
    const mockCallback = jest.fn((event) => {
      expect(event.target.value).toBe(defaultValue);
    });
    text.on('click', mockCallback);
    fireEvent.click(text.render(), {target: {value: defaultValue}});
    expect(mockCallback).toBeCalled();
  });
});