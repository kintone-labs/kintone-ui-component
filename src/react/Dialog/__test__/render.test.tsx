/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {render} from '@testing-library/react';

const messages = {
  INVALID_ARGUMENT: 'Error: invalid function arguments'
};

import Dialog from '../index';
describe('Unit test Dialog react', () => {

  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => {});
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('Render successfully without props', () => {
    const {container} = render(<Dialog />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-dialog-container');
    } else {
      expect(false);
    }
  });

  test('Render hidden Dialog successfully', () => {
    const {container} = render(<Dialog isVisible={false} />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-dialog-container hidden');
    } else {
      expect(false);
    }
  });

  test('Render successfully when showCloseButton is false', () => {
    const {container} = render(<Dialog showCloseButton={false} />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-dialog-container');
    } else {
      expect(false);
    }
  });

  test('Throw error with invalid header', () => {
    try {
      // @ts-ignore
      const {container} = render(<Dialog header={[1]} />);
      expect(container).toBeUndefined();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });

  test('Throw error with invalid content', () => {
    try {
      // @ts-ignore
      const {container} = render(<Dialog content={[1]} />);
      expect(container).toBeUndefined();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });

  test('Throw error with invalid footer', () => {
    try {
      // @ts-ignore
      const {container} = render(<Dialog footer={[1]} />);
      expect(container).toBeUndefined();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });

  test('Throw error with invalid showCloseButton', () => {
    try {
      // @ts-ignore
      const {container} = render(<Dialog showCloseButton={1} />);
      expect(container).toBeUndefined();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });

  test('Throw error with invalid isVisible', () => {
    try {
      // @ts-ignore
      const {container} = render(<Dialog isVisible={1} />);
      expect(container).toBeUndefined();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });
});