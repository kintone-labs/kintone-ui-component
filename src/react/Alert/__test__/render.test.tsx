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

  test('render without props Alert error', () => {
    const {container} = render(<Alert />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-alert bg-danger');
    }
  });
  test('render with props Alert success', () => {
    const {container} = render(<Alert type="success" />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-alert bg-success');
    }
  });
  test('render with props Alert isVisible', () => {
    const {container} = render(<Alert isVisible={false} />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-alert bg-danger');
    }
  });
});