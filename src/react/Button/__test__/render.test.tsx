import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Button from '../index';

describe('Unit test Button react', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
    // @ts-ignore
    console.log.mockImplementation(value => {
      return value;
    });
  });
  afterEach(() => {
    // @ts-ignore
    console.log.mockRestore();
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
    const handleClick = (e: any) => {
      if (e.target) {
        console.log(e.target.value);
        expect(e.target.value).toBe('on click');
      } else {
        expect(false);
      }
    };
    const {container} = render(<Button onClick={handleClick} />);
    if (container.firstElementChild) {
      fireEvent.click(container.firstElementChild, {
        target: {value: 'on click'}
      });
    } else {
      expect(false);
    }
  });
});
