/* eslint-disable @typescript-eslint/no-empty-function */
import {render, fireEvent} from '@testing-library/react';
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

  test('onClick without props Label', () => {
    const onClick = (e: React.SyntheticEvent<EventTarget>) => {
      expect(true);
    };
    const {container, getByRole} = render(<Label text="label" onClick={onClick} />);
    const node = getByRole('presentation');
    fireEvent.click(node, {});
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('kuc-label');
  });
});