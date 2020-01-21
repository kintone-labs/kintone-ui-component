/* eslint-disable @typescript-eslint/no-empty-function */
import {render} from '@testing-library/react';
import Label from '../index';
import React from 'react';

describe('Unit test Label react', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('render without props Label', () => {
    const {container} = render(<Label />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('kuc-label');
  });
  test('render with full props Label', () => {
    const {container} = render(<Label backgroundColor="red" isRequired isVisible text="label" textColor="blue" />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('kuc-label');
  });
  test('render with props isVisible=false props Label', () => {
    const {container} = render(<Label isVisible={false} />);
    expect(container.firstElementChild).toBeNull();
  });
});