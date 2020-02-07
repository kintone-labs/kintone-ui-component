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
  test('Render successfully with onClick event', () => {
    let clickBL = false;
    const handleClick = (e: any) => {
      if (e.target) {
        expect(clickBL).toBe(false);
        clickBL = true;
      } else {
        expect(false);
      }
    };
    const {container} = render(<NotifyPopup text="testString" onClick={handleClick} />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.children[0].className).toBe('kuc-notify-title');
      fireEvent.click(container.firstElementChild.children[0]);
      expect(clickBL).toBe(true);
    } else {
      expect(false);
    }
  });
  test('Render successfully with onClose event', () => {
    let clickBL = false;
    const handleClick = (e: any) => {
      if (e.target) {
        expect(clickBL).toBe(false);
        clickBL = true;
      } else {
        expect(false);
      }
    };
    const {container} = render(<NotifyPopup text="testString" onClose={handleClick} />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.children[1].className).toBe('kuc-close-button');
      fireEvent.click(container.firstElementChild.children[1].children[0]);
      expect(clickBL).toBe(true);
    } else {
      expect(false);
    }
  });
  test('Render successfully with wrong props', () => {
    // @ts-ignore
    const {container} = render(<NotifyPopup text="testString" type="abc" isVisible="abc" />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-notify bg-danger');
      expect(container.firstElementChild).not.toBeDisabled();
      expect(container.firstElementChild).toBeVisible();
      expect(container.firstElementChild.textContent).toBe('testString');
    } else {
      expect(false);
    }
  });
});