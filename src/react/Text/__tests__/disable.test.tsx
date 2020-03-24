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

  test('should be enabled and attribute disabled has not existed', ()=>{
    const {container} = render(<Text value="error" />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.getAttribute('disabled')).toBeNull();
  });

  test('should be disabled', ()=>{
    const {container} = render(<Text value="error" isDisabled />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.getAttribute('disabled')).toBe('');
  });
});