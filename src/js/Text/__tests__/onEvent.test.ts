/* eslint-disable @typescript-eslint/no-empty-function */
import {fireEvent} from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

import Text from '../index';

describe('[JS] Text', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('should not be fire onClick event', ()=>{
    const mockCallback = jest.fn(() => {});
    const defaultValue = 'success';

    const text = new Text({value: defaultValue, isDisabled: true});
    text.render();

    text.on('click', mockCallback);
    fireEvent.click(text.render(), {target: {value: defaultValue}});

    expect(mockCallback).toBeCalledTimes(0);
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