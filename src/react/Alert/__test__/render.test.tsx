/* eslint-disable @typescript-eslint/no-empty-function */
import {render} from '@testing-library/react';
import Alert from '../index';
import React from 'react';

describe('Unit test Alert react', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('render without props Alert default type error', () => {
    const {container} = render(<Alert />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('kuc-alert bg-danger');
  });
  test('render with props Alert type success', () => {
    const {container} = render(<Alert type="success" />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('kuc-alert bg-success');
  });
  test('render with props Alert isVisible', () => {
    const {container} = render(<Alert isVisible={false} />);
    expect(container.firstElementChild).toBeNull();
  });
});