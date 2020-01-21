/* eslint-disable @typescript-eslint/no-empty-function */
import {render, fireEvent} from '@testing-library/react';
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

  test('onClick called successfully Alert', () => {
    const onClick = (e: React.SyntheticEvent<EventTarget>) => {
      expect((e.target as HTMLInputElement).className).toBe('kuc-alert bg-danger');
    };
    const {container} = render(<Alert onClick={onClick} />);
    const node = container.getElementsByClassName('kuc-alert bg-danger')[0];
    fireEvent.click(node, {});
  });
});