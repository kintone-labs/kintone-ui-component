/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {render} from '@testing-library/react';
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

  test('should be disabled', ()=>{
    const onChange = (value: string) => {};
    const onClick = (e: any) => {};

    const {container} = render(<Text value="error" onChange={onChange} onClick={onClick} />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.getAttribute('disabled')).toBeNull();
  });

  test('should be enabled', ()=>{
    const onChange = (value: string) => {};
    const onClick = (e: any) => {};

    const {container} = render(<Text value="error" isDisabled onChange={onChange} onClick={onClick} />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.getAttribute('disabled')).toBe('');
  });
});