/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Text from '../index';
describe('<Text/>', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('onChange event handler should fire successfully', ()=>{
    let textValue = 'error';
    const onChangeText = (value: string) => {
      expect(value).toBe(textValue);
    };
    const {container, rerender} = render(<Text value={textValue} onChange={onChangeText} />);
    expect(container.firstElementChild).toBeTruthy();
    textValue = 'hello';
    fireEvent.change(container.firstElementChild!, {target: {value: textValue}});
    rerender(<Text value={textValue} />);
    expect(container.firstElementChild).toHaveValue(textValue);
  });

  test('onClick event handler should fire successfully', ()=>{
    let textValue = 'error';
    const onClick = (e: any) => {
      expect((e.target as HTMLInputElement).value).toBe(textValue);
    };
    const {container, rerender} = render(<Text value={textValue} onClick={onClick} />);
    expect(container.firstElementChild).toBeTruthy();
    textValue = 'hello';
    fireEvent.click(container.firstElementChild!, {target: {value: textValue}});
    rerender(<Text value={textValue} />);
    expect(container.firstElementChild).toHaveValue(textValue);
  });
});