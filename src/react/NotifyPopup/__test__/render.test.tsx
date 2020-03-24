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
    jest.spyOn(console, 'error');
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.log.mockRestore();
    // @ts-ignore
    console.error.mockRestore();
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
      <NotifyPopup text="testString" type="success" isVisible />
    );
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-notify bg-success');
      expect(container.firstElementChild).not.toBeDisabled();
      expect(container.firstElementChild).toBeVisible();
      expect(container.firstElementChild.textContent).toBe('testString');
    } else {
      expect(false);
    }
  });
  test('Render successfully with full props_info', () => {
    const {container} = render(
      <NotifyPopup text="testString" type="info" isVisible />
    );
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('kuc-notify bg-info');
      expect(container.firstElementChild).not.toBeDisabled();
      expect(container.firstElementChild).toBeVisible();
      expect(container.firstElementChild.textContent).toBe('testString');
    } else {
      expect(false);
    }
  });
  test('Render successfully with be not Visible', () => {
    const {container} = render(
      <NotifyPopup text="testString" type="info" isVisible={false} />
    );
    expect(container.firstElementChild).toBeFalsy();
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
