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
      expect((e.target as HTMLInputElement).getElementsByTagName('span')[0]).toBeTruthy();
    };
    const {getByRole} = render(<Label text="label" onClick={onClick} />);
    const node = getByRole('presentation');
    fireEvent.click(node, {});
  });
});