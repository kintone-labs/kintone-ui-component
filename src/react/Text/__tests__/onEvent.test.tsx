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
    const onChange = (value: string) => {};
    const {container} = render(<Text value="error" onChange={onChange} />);
    const node = container.getElementsByClassName('kuc-input-text')[0];
    fireEvent.change(node, {target: {value: 'hello'}});
  });

  test('onClick event handler should fire successfully', ()=>{
    const onChange = (value: string) => {};
    const onClick = (e: any) => {};
    const {container} = render(<Text value="error" onChange={onChange} onClick={onClick} />);
    const node = container.getElementsByClassName('kuc-input-text')[0];
    fireEvent.change(node, {target: {value: 'hello'}});
    fireEvent.click(node, {target: {value: 'hello'}});
  });
});