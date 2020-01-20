import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import NotifyPopup from '../index';

describe('Unit test NotifyPopup react', () => {
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
    const {container} = render(<NotifyPopup />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-notify bg-danger');
      expect(container.firstElementChild).not.toBeDisabled();
      expect(container.firstElementChild).toBeVisible();
      expect(container.firstElementChild.textContent).toBe('');
    } else {
      expect(false);
    }
  });
  test('Render successfully with full props_success', () => {
    const {container} = render(
      <NotifyPopup text="testString" type="success" isVisible={false} />
    );
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-notify bg-danger');
      expect(container.firstElementChild).toBeDisabled();
      expect(container.firstElementChild).not.toBeVisible();
      expect(container.firstElementChild.textContent).toBe('testString');
    } else {
      expect(false);
    }
  });
  test('Render successfully with full props_info', () => {
    const {container} = render(
      <NotifyPopup text="testString" type="info" isVisible={false} />
    );
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-notify bg-danger');
      expect(container.firstElementChild).toBeDisabled();
      expect(container.firstElementChild).not.toBeVisible();
      expect(container.firstElementChild.textContent).toBe('testString');
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
    const {container} = render(<NotifyPopup onClick={handleClick} />);
    if (container.firstElementChild) {
        fireEvent.click(container.firstElementChild, {
            target: {text: 'on click'}
        });
    } else {
      expect(false);
    }
  });
});