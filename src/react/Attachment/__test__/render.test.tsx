/* eslint-disable @typescript-eslint/no-empty-function */
import {render} from '@testing-library/react';
import Attachment from '../index';
import React from 'react';

describe('Unit test Attachment react', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('render without props Attachment', () => {
    const {container} = render(<Attachment />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-attachment-outer');
    }
  });

  test('render with isVisible = false', () => {
    const {container} = render(<Attachment isVisible={false} />);
    expect(container.firstElementChild).toBeFalsy();
  });

  test('render with files', () => {
    const {container} = render(<Attachment files={[{name: 'test_1', size: 12345}]} />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('kuc-attachment-outer');
  });

  test('render error', () => {
    const ERROR = 'Attachment error';
    const {container, getByText} = render(<Attachment isErrorVisible errorMessage={ERROR} />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('kuc-attachment-outer');
    const errorElm = getByText(ERROR);
    expect(errorElm).toBeTruthy();
  });

});