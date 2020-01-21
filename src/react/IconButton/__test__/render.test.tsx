import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import IconButton from '../index';

describe('Unit test IconButton react render', () => {

  test('Render successfully without props', () => {
    const {container} = render(<IconButton />);
    if (container.firstElementChild) {
      expect(['kuc-icon-btn', 'normal', 'gray', 'circle'].every(c => container.firstElementChild!.classList.contains(c))).toBe(true);
      expect(container.firstElementChild.classList.length).toBe(4);
      expect(container.firstElementChild).not.toBeDisabled();
      expect(container.firstElementChild).toBeVisible();
      expect(container.firstElementChild.firstElementChild!.firstElementChild!.getAttribute('d')).toBe('M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
    } else {
      expect(false);
    }
  });

  test('Render successfully with full props', () => {
    const {container} = render(
      <IconButton color="green" type="remove" size="small" shape="normal" isDisabled isVisible />
    );
    if (container.firstElementChild) {
      expect(['kuc-icon-btn', 'small', 'green', 'normal'].every(c => container.firstElementChild!.classList.contains(c))).toBe(true);
      expect(container.firstElementChild.classList.length).toBe(4);
      expect(container.firstElementChild).toBeDisabled();
      expect(container.firstElementChild).toBeVisible();
      expect(container.firstElementChild.firstElementChild!.firstElementChild!.getAttribute('d')).toBe('M19,13H5V11H19V13Z');
    } else {
      expect(false);
    }
  });

  test('Render successfully with click event', () => {
    const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
      expect(e.type).toBe('click');
    };
    const {container} = render(<IconButton onClick={handleClick} />);
    if (container.firstElementChild) {
      fireEvent.click(container.firstElementChild);
    } else {
      expect(false);
    }
  });

});