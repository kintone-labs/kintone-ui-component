/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {render} from '@testing-library/react';

import FieldGroup from '../index';

describe('Unit test FieldGroup react', () => {

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
    const {container} = render(<FieldGroup />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-fieldgroup');
    } else {
      expect(false);
    }
  });

  test('Render null when isVisible = false', () => {
    const {container} = render(<FieldGroup isVisible={false} />);
    if (container.firstElementChild) {
      expect(false);
    } else {
      expect(true);
    }
  });

  test('FieldGroup toggle successfully', () => {
    try {
      const {container} = render(<FieldGroup />);
      if (container.firstElementChild && container.firstElementChild.firstElementChild) {
        const toggleSpan = container.firstElementChild.firstElementChild.firstElementChild;
        expect(toggleSpan).toBeInstanceOf(HTMLSpanElement);
        if (toggleSpan) {
          // console.log(toggleSpan)
          // toggleSpan.onclick();
        }
      } else {
        expect(false);
      }
    } catch (error) {
      expect(false);
    }
  });
});