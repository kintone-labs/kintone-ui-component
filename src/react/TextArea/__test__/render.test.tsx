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
    }
  });

  test('Render successfully without props', () => {
    const {container} = render(<TextArea />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-textarea-outer');
    }
  });
  test('Render successfully without props', () => {
    const {container} = render(<TextArea value="success" isDisabled={false} />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-textarea-outer');
    }
  });

});

