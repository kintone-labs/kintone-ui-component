import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Button from '../index';

describe('Unit test Button react', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('Render successfully without props', () => {
    const {container} = render(<Button />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-btn normal');
      expect(container.firstElementChild).not.toBeDisabled();
      expect(container.firstElementChild).toBeVisible();
      expect(container.firstElementChild.textContent).toBe('');
    } else {
      expect(false);
    }
  });

  test('Render successfully with full props', () => {
    const {container} = render(
      <Button text="Submit" type="submit" isDisabled isVisible={false} />
    );
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-btn submit');
      expect(container.firstElementChild).toBeDisabled();
      expect(container.firstElementChild).not.toBeVisible();
      expect(container.firstElementChild.textContent).toBe('Submit');
    } else {
      expect(false);
    }
  });

  test('Render successfully with wrong props', () => {
    const {container} = render(
      // @ts-ignore
      <Button text="Submit" type="abc" isDisabled="abc" isVisible="abc" />
    );
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-btn normal');
      expect(container.firstElementChild).not.toBeDisabled();
      expect(container.firstElementChild).toBeVisible();
      expect(container.firstElementChild.textContent).toBe('Submit');
    } else {
      expect(false);
    }
  });

  test('Render successfully with onClick prop', () => {
    let onClickFlg = false;
    const handleClick = (e: any) => {
      if (e.target) {
        expect(e.target.value).toBe('on click');
        onClickFlg = true;
      } else {
        expect(false);
      }
    };
    const {container} = render(<Button onClick={handleClick} />);
    if (container.firstElementChild) {
      fireEvent.click(container.firstElementChild, {
        target: {value: 'on click'}
      });
      expect(onClickFlg).toBe(true);
    } else {
      expect(false);
    }
  });
});
