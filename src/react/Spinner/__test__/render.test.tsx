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
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-spinner-outer');
    }
  });

  test('render successfully with props Spinner component', () => {
    const {container} = render(<Spinner isVisible />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-spinner-outer');
    }
  });
});