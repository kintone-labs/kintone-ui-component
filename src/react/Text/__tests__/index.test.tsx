/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Text from '../index';
describe('<Text/>', () => {
  test('should be render successfully', () => {
    const {container} = render(<Text value="success" />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('kuc-input-text');
  });

  test('should be invisible', ()=>{
    const onChange = (value: string) => {};
    const onClick = (e: any) => {};

    const {container} = render(<Text value="error" isDisabled isVisible={false} onChange={onChange} onClick={onClick} />);
    expect(container.firstElementChild).toBeNull();
  });

  test('should be fire onChange event', ()=>{
    const onChange = (value: string) => {
      expect(value).toBe('hello');
    };
    const {container} = render(<Text value="error" onChange={onChange} />);
    const node = container.getElementsByClassName('kuc-input-text')[0];
    fireEvent.change(node, {target: {value: 'hello'}});
  });

  test('should be fire onClick event', ()=>{
    const onChange = (value: string) => {
      expect(value).toBe('hello');
    };
    const onClick = (e: React.SyntheticEvent<EventTarget, Event>) => {
      expect((e.target as HTMLInputElement).value).toBe('hello');
    };
    const {container} = render(<Text value="error" onChange={onChange} onClick={onClick} />);
    const node = container.getElementsByClassName('kuc-input-text')[0];
    fireEvent.change(node, {target: {value: 'hello'}});
    fireEvent.click(node, {target: {value: 'hello'}});
  });

});