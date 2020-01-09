/* eslint-disable @typescript-eslint/no-empty-function */
import {render, fireEvent} from '@testing-library/react';
import DateTime from '../index';
import React from 'react';

describe('Unit test DateTime react', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('onChange with full props DateTime', () => {
    const onChange = (value: Date) => {
      expect(true);
    };
    const {container} = render(
      <DateTime
        value={new Date('16:24 06/01/2020')}
        type="datetime"
        locale="zh"
        dateFormat="dd/MM/YYYY"
        timeFormat="HH:mm"
        isDisabled
        isVisible
        onChange={onChange}
      />
    );
    const node = container.getElementsByClassName('kuc-input-text text-input')[0] as HTMLInputElement;
    fireEvent.change(node);
    expect(node.value).toBe('01/06/2020');
  });
  test('onEvent dateTextInput DateTime', () => {
    const onChange = (value: Date) => {
      expect(true);
    };
    const {container} = render(
      <DateTime
        value={new Date()}
        type="date"
        dateFormat="dd/MM/YYYY"
        onChange={onChange}
      />
    );
    const node = container.getElementsByClassName('kuc-input-text text-input')[0];
    fireEvent.click(node, {target: {value: null}});
    fireEvent.blur(node, {target: {value: null}});
    fireEvent.blur(node, {target: {value: '02/06/2020'}});
    fireEvent.change(node, {target: {value: '02/06/2020'}});
    fireEvent.focus(node, {target: {value: null}});
    fireEvent.click(node, {target: {value: null}});
    fireEvent.blur(node, {target: {value: 'kintone'}});
  });
  test('onEvent datetimeTextInput DateTime', () => {
    const onChange = (value: Date) => {
      expect(true);
    };
    const {container} = render(
      <DateTime
        value={new Date()}
        type="datetime"
        dateFormat="dd/MM/YYYY"
        timeFormat="HH:mm"
        onChange={onChange}
      />
    );
    const node = container.getElementsByClassName('kuc-input-text text-input time')[0];
    fireEvent.click(node, {target: {selectionStart: 2}});
    fireEvent.change(node, {target: {value: '13:10'}});
    fireEvent.change(node, {target: {selectionStart: 4}});
    fireEvent.focus(node, {target: {value: null}});
    fireEvent.click(node, {target: {value: null}});
    fireEvent.blur(node, {target: {value: 'kintone'}});
    fireEvent.change(node, {target: {value: 'kintone', selectionStart: 2}});
    fireEvent.change(node, {target: {selectionStart: 5, value: '13:10'}});
    fireEvent.change(node, {target: {selectionStart: 3, value: '19:30'}});
    fireEvent.change(node, {target: {selectionStart: 4, value: '4:40'}});
    fireEvent.change(node, {target: {selectionStart: 2, value: '10:20'}});
    fireEvent.change(node, {target: {selectionStart: 1, value: '-33:30'}});
    fireEvent.keyDown(node);
  });

  test('onKeyDown dateTextInput DateTime', () => {
    const onChange = (value: Date) => {
      expect(true);
    };
    const {container} = render(
      <DateTime
        value={new Date()}
        type="date"
        dateFormat="dd/MM/YYYY"
        onChange={onChange}
      />
    );
    const node = container.getElementsByClassName('kuc-input-text text-input')[0];
    fireEvent.click(node, {target: {value: '02/06/2020'}});
    fireEvent.keyDown(node, {key: 'Tab'});
    expect(true).toBeTruthy();
  });

  test('onEvent date-picker-container DateTime', () => {
    const onChange = (value: Date) => {
      expect(true);
    };
    const {container} = render(
      <DateTime
        isVisible
        isDisabled={false}
        value={new Date()}
        type="datetime"
        dateFormat="dd/MM/YYYY"
        timeFormat="HH:mm"
        onChange={onChange}
      />
    );
    const calendarTodayBtn = container.getElementsByClassName('today calendar-button-control')[0];
    const calendarPreviousBtn = container.getElementsByClassName('none calendar-button-control')[0];
    fireEvent.click(calendarTodayBtn, {target: {calendarDate: '03/02/2020'}});
    fireEvent.click(calendarPreviousBtn, {target: {previousDate: '01/02/2020'}});
  });
  test('onEvent date-time-picker-container DateTime', () => {
    const onChange = (value: Date) => {
      expect(true);
    };
    const {container} = render(
      <DateTime
        isVisible
        isDisabled={false}
        value={new Date()}
        type="datetime"
        dateFormat="dd/MM/YYYY"
        timeFormat="HH:mm"
        onChange={onChange}
      />
    );
    const timePicker = container.getElementsByClassName('kuc-time-list-item')[0];
    fireEvent.click(timePicker, {target: {timePickerDate: '03:23 03/02/2020'}});
  });
  test('timeInputKeydownHandler date-time-picker-container DateTime', () => {
    const onChange = (value: Date) => {
      expect(true);
    };
    const {container} = render(
      <DateTime
        isVisible
        isDisabled={false}
        value={new Date()}
        type="datetime"
        dateFormat="dd/MM/YYYY"
        timeFormat="HH:mm"
        onChange={onChange}
      />
    );
    const node = container.getElementsByClassName('kuc-input-text text-input time')[0];
    fireEvent.keyDown(node, {key: 'Tab'});
    fireEvent.keyDown(node, {key: 'kintone'});
    fireEvent.keyDown(node, {key: 'ArrowLeft', target: {selectionStart: 1, selectionEnd: 4}});
    fireEvent.keyDown(node, {key: 'ArrowRight', target: {selectionStart: 1, selectionEnd: 4}});
    fireEvent.keyDown(node, {key: 'ArrowUp', target: {selectionStart: 1, selectionEnd: 4}});
    fireEvent.keyDown(node, {key: 'ArrowUp', target: {selectionStart: 2, selectionEnd: 4}});
    fireEvent.keyDown(node, {key: 'ArrowDown', target: {selectionStart: 2, selectionEnd: 4}});
    fireEvent.keyDown(node, {key: 'ArrowDown', target: {selectionStart: 1, selectionEnd: 4}});
  });
  test('throws error dateFormat timeFormat DateTime', () => {
    const onChange = (value: Date) => {
      expect(true);
    };
    const {container} = render(
      <DateTime
        value={new Date()}
        type="datetime"
        dateFormat="aa/zz"
        timeFormat="dd:aa"
        onChange={onChange}
      />
    );
    const node = container.getElementsByClassName('kuc-input-text text-input')[0];
    fireEvent.click(node, {target: {value: '04/10/2020'}});
  });
  test('change value DateTime', () => {
    const onChange = (value: Date) => {
      expect(true);
    };
    const {container} = render(
      <DateTime
        value={new Date('Mon, 6 Jan 2020 08:02:00 GMT')}
        type="datetime"
        onChange={onChange}
      />
    );
    const day = container.getElementsByClassName('day')[20];
    fireEvent.click(day);
  });
});