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
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-label');
    }
  });
  test('render with full props Label', () => {
    const {container} = render(<Label backgroundColor="red" isRequired isVisible text="label" textColor="blue" />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-label');
    }
  });

  test('render with props isVisible props Label', () => {
    const {container} = render(<Label isVisible={false} />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-label');
    }
  });
});