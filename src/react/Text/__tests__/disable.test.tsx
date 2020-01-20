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

  test('should be invisible', ()=>{
    const onChange = (value: string) => {};
    const onClick = (e: any) => {};

    const {container} = render(<Text value="error" isDisabled isVisible={false} onChange={onChange} onClick={onClick} />);
    expect(container.firstElementChild).toBeNull();
  });

});