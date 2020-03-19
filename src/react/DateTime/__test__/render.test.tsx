/* eslint-disable @typescript-eslint/no-empty-function */
import {render, cleanup} from '@testing-library/react';
import DateTime from '../index';
import React from 'react';

// TODO: Remove unreachable else path line 77,78 (unnecessary if) Locale.ts
// TODO: Remove unreachable else path line 51-53 (unnecessary case) Locale.ts
describe('Unit test DateTime react', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
    cleanup();
  });

  test('render without props DateTime', () => {
    const {container} = render(<DateTime />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('date-time-container');
  });
  test('render with full props DateTime', () => {
    const {container} = render(
      <DateTime
        value={new Date()}
        type="datetime"
        locale="zh"
        dateFormat="YYYY/MM"
        timeFormat="HH:mm:ss"
        isDisabled
        isVisible
      />
    );
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('date-time-container');
  });
  test('render with format EE/d/M/Y H:m full props DateTime', () => {
    const {container} = render(
      <DateTime
        value={new Date()}
        type="datetime"
        locale="zh"
        dateFormat="EE/d/M/Y"
        timeFormat="H:m"
        isDisabled
        isVisible
      />
    );
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('date-time-container');
  });
  test('render with format EEEE/d/M/Y full props DateTime', () => {
    const {container} = render(
      <DateTime
        value={new Date()}
        type="datetime"
        locale="zh"
        dateFormat="EEEE/d/M/Y"
      />
    );
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('date-time-container');
  });

  test('render with format calendartitle full props DateTime', () => {
    const {container} = render(
      <DateTime
        value={new Date()}
        type="datetime"
        locale="zh"
        dateFormat="calendartitle"
      />
    );
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('date-time-container');
  });

  test('render with props isVisible=false DateTime', () => {
    const {container} = render(<DateTime value={new Date()} isVisible={false} locale="en" />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('');
    }
  });
  test('render with wrong props DateTime', () => {
    // @ts-ignore
    const {container} = render(<DateTime value={new Date()} isDisabled="false" type="kintone" />);
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toBe('date-time-container');
    expect(container.getElementsByClassName('date-container')).toBeTruthy();
    expect(container.getElementsByClassName('date-container').length).toEqual(1);
    expect(container.getElementsByClassName('time-container')).toBeTruthy();
    expect(container.getElementsByClassName('time-container').length).toEqual(1);
  });
});