/* eslint-disable @typescript-eslint/no-empty-function */
import Spinner from '../index';
import {render} from '@testing-library/react';
import React from 'react';

describe('Unit test Spinner render', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('render successfully without props Spinner component', () => {
    const {container} = render(<Spinner />);
    expect(container.firstElementChild).toBeNull();
  });

  test('render successfully with props Spinner component', () => {
    const {container} = render(<Spinner isVisible />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('kuc-spinner-outer');
  });
});