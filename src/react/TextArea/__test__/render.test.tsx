/* eslint-disable @typescript-eslint/no-empty-function */
import {render} from '@testing-library/react';
import TextArea from '../index';
import React from 'react';

describe('Unit test TextArea react', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('Render successfully with props value', () => {
    const {container} = render(<TextArea value="success" />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('kuc-textarea-outer');
  });

  test('Render successfully without props', () => {
    const {container} = render(<TextArea />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('kuc-textarea-outer');
  });
  test('Render successfully without props', () => {
    const {container} = render(<TextArea value="success" isDisabled={false} />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('kuc-textarea-outer');
  });

  test('Render with props invisible TextArea', () => {
    const {container} = render(<TextArea value="textarea" isVisible={false} />);
    expect(container).toBeEmpty();
  });
});

