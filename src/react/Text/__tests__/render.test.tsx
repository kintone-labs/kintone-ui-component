/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {render} from '@testing-library/react';

import Text from '../index';
describe('<Text/>', () => {

  test('should be render successfully', () => {
    const {container} = render(<Text value="success" isVisible />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('kuc-input-text');
  });
  test('should be render empty <div/> successfully', () => {
    const {container} = render(<Text value="success" isVisible={false} />);
    expect(container).toBeEmpty();
  });
});