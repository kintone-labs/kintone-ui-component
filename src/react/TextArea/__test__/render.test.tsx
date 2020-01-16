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
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-textarea-outer');
      const txtAreaSizeDOM = container.getElementsByClassName('kuc-textarea-resize')[0];
      expect(txtAreaSizeDOM.getAttribute('role')).toBe('button');
      expect(txtAreaSizeDOM.getAttribute('tabindex')).toBe('0');
    }
  });

  test('Render successfully without props', () => {
    const {container} = render(<TextArea />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-textarea-outer');
      const txtAreaSizeDOM = container.getElementsByClassName('kuc-textarea-resize')[0];
      expect(txtAreaSizeDOM.getAttribute('role')).toBe('button');
      expect(txtAreaSizeDOM.getAttribute('tabindex')).toBe('0');
    }
  });
  test('Render successfully without props', () => {
    const {container} = render(<TextArea value="success" isDisabled={false} />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-textarea-outer');
      const txtAreaSizeDOM = container.getElementsByClassName('kuc-textarea-resize')[0];
      expect(txtAreaSizeDOM.getAttribute('role')).toBe('button');
      expect(txtAreaSizeDOM.getAttribute('tabindex')).toBe('0');
    }
  });

  test('Render with props invisible TextArea', () => {
    const {container} = render(<TextArea value="textarea" isVisible={false} />);
    expect(container).toBeEmpty();
  });
});

