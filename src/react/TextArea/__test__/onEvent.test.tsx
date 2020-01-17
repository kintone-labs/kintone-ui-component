/* eslint-disable @typescript-eslint/no-empty-function */
import {render, fireEvent} from '@testing-library/react';
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

  test('onChange with props visible TextArea', () => {
    const onChange = (value: string) => {
      expect(value).toBe('on change event textarea');
    };
    const onClick = (e: React.SyntheticEvent<EventTarget, Event>) => {
      expect((e.target as HTMLInputElement).value).toBe('on click event textarea');
    };
    const {container} = render(<TextArea value="textarea" onChange={onChange} onClick={onClick} />);
    const node = container.getElementsByClassName('kuc-textarea')[0];
    fireEvent.change(node, {target: {value: 'on change event textarea'}});
    fireEvent.click(node, {target: {value: 'on click event textarea'}});
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('kuc-textarea-outer');
  });

  test('onMouseEvent with props TextArea', () => {
    try {
      const {container, getByRole} = render(<TextArea value="textarea" />);
      const textAreaResize = getByRole('button');
      fireEvent.mouseDown(textAreaResize, {clientX: 1900, clientY: 2020});
      fireEvent.mouseMove(textAreaResize, {currentX: 1009, currentY: 1009, clientX: 2009, clientY: 2009});
      fireEvent.mouseMove(textAreaResize, {currentX: 909, currentY: 1004, clientX: 1900, clientY: 2000});
      fireEvent.mouseUp(textAreaResize, {clientX: 1909, clientY: 2009});
      expect(container.firstElementChild).toBeTruthy();
      expect(container.firstElementChild!.className).toBe('kuc-textarea-outer');
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
});