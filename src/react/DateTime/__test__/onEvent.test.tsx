/* eslint-disable @typescript-eslint/no-empty-function */
import {render, fireEvent, cleanup, act, waitFor} from '@testing-library/react';
import DateTime from '../index';
import React from 'react';

import Message from '../../../constant/Message';

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

  test('should render successfully with full props DateTime', () => {
    const onChange = jest.fn((value: Date) => {
      expect(value.getDate()).toBe(26);
    });
    const {getByText} = render(
      <DateTime
        value={new Date('16:24 06/01/2020')}
        type="datetime"
        locale="zh"
        dateFormat="dd/MM/YYYY"
        timeFormat="HH:mm"
        isDisabled={false}
        isVisible
        onChange={onChange}
      />
    );
    fireEvent.click(getByText('26'));
    expect(onChange).toBeCalledTimes(1);
  });
  test('should show Date picker when the DateTime input is focus', (done) => {
    const {container} = render(
      <DateTime
        value={new Date()}
        type="date"
        dateFormat="dd/MM/YYYY"
      />
    );

    const datetimeInput = container.getElementsByClassName('kuc-input-text text-input')[0];
    const piker = container.getElementsByClassName('date-picker-container')[0];
    expect(piker).toHaveStyle('display: none;');
    fireEvent.focus(datetimeInput, {target: {value: null}});

    setTimeout(() => {
      expect(piker).toHaveStyle('display: block;');
      done();
    }, 1);

    fireEvent.keyDown(datetimeInput, {key: 'Tab', code: 9});
    expect(piker).toHaveStyle('display: none;');
  });
  test('should show Time picker when the Time input is focus', () => {
    const onChange = (value: Date) => {};
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

    const piker = container.getElementsByClassName('time-picker-container')[0];
    expect(piker).toHaveStyle('display: none;');
    fireEvent.focus(node, {target: {selectionStart: 0}});

    expect(piker).toHaveStyle('display: flex;');
  });

  test('onKeyDown dateTextInput DateTime', (done) => {
    const {container} = render(
      <DateTime
        value={new Date()}
        type="datetime"
        dateFormat="dd/MM/YYYY"
        onChange={() => {}}
      />
    );

    const piker = container.getElementsByClassName('date-picker-container')[0];
    const node = container.getElementsByClassName('kuc-input-text text-input')[0];
    fireEvent.focus(node);

    setTimeout(() => {
      expect(piker).toHaveStyle('display: block;');
      done();
    }, 1);

    fireEvent.keyDown(node, {key: 'Tab', code: 9});
    expect(piker).toHaveStyle('display: none;');
  });

  test('onEvent date-picker-container DateTime', () => {
    const today = new Date();
    today.setHours(0);
    today.setSeconds(0);
    today.setMinutes(0);
    today.setMilliseconds(0);

    const noneDate = new Date('02/02/2020');
    noneDate.setHours(0);
    noneDate.setSeconds(0);
    noneDate.setMinutes(0);
    noneDate.setMilliseconds(0);

    const onChange = jest.fn(() => {});
    const {container} = render(
      <DateTime
        isVisible
        isDisabled={false}
        value={new Date('02/02/2020')}
        type="datetime"
        dateFormat="dd/MM/YYYY"
        timeFormat="HH:mm"
        onChange={onChange}
      />
    );
    const calendarTodayBtn = container.getElementsByClassName('today calendar-button-control')[0];
    fireEvent.click(calendarTodayBtn);
    expect(onChange).toHaveBeenNthCalledWith(1, today);

    const noneBtn = container.getElementsByClassName('none calendar-button-control')[0];
    fireEvent.keyUp(noneBtn);
    expect(onChange).toHaveBeenNthCalledWith(2, noneDate);
  });
  test('Should change date successfully when clicking into the time picker', () => {
    const onChange = jest.fn((date: Date) => {
      expect(date.getHours()).toEqual(0);
      expect(date.getMinutes()).toEqual(30);
    });
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
    const timePicker = container.getElementsByClassName('kuc-time-list-item')[1];
    fireEvent.click(timePicker);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('should selected range successfully inside the Time input when pressing Tab button', async () => {
    const {container} = render(
      <DateTime
        value={new Date()}
        type="datetime"
        dateFormat="dd/MM/YYYY"
        timeFormat="HH:mm"
        onChange={() => {}}
      />
    );
    const node = container.getElementsByClassName('kuc-input-text text-input time')[0] as HTMLInputElement;
    act(() => node.focus());
    expect(node).toHaveFocus();
    await waitFor(() => expect(node.selectionStart).toEqual(0));
    await waitFor(() => expect(node.selectionEnd).toEqual(2));

    fireEvent.keyDown(node, {key: 'Tab', code: 9});
    await waitFor(() => expect(node.selectionStart).toEqual(3));
    await waitFor(() => expect(node.selectionEnd).toEqual(5));
  });

  test('should reset hour:minutes to 00:00 when typing invalid value into Time input', () => {
    const invlaidvalue = 'kintone';
    const onChange = jest.fn(()=> {});

    const today = new Date();
    today.setHours(4);
    today.setSeconds(0);
    today.setMinutes(0);
    today.setMilliseconds(0);

    const {container} = render(
      <DateTime
        value={today}
        type="datetime"
        dateFormat="dd/MM/YYYY"
        timeFormat="HH:mm"
        onChange={onChange}
      />
    );
    const node = container.getElementsByClassName('kuc-input-text text-input time')[0] as HTMLInputElement;
    fireEvent.focus(node);
    fireEvent.change(node, {target: {value: invlaidvalue}});
    expect(node).toHaveValue('00:00');

    fireEvent.keyDown(node, {key: 'Tab', code: 9});
    fireEvent.change(node, {target: {value: 20}});
    fireEvent.change(node, {target: {value: invlaidvalue}});
    expect(node).toHaveValue('00:00');
  });

  test('should selected range successfully inside the Time input when pressing Arrow Right/Left button', () => {
    const mockFn = spyOn(HTMLInputElement.prototype, 'setSelectionRange');

    const {container} = render(
      <DateTime
        value={new Date()}
        type="datetime"
        dateFormat="dd/MM/YYYY"
        timeFormat="HH:mm"
        onChange={() => {}}
      />
    );
    const node = container.getElementsByClassName('kuc-input-text text-input time')[0] as HTMLInputElement;
    fireEvent.focus(node);
    fireEvent.keyDown(node, {key: 'ArrowRight'});
    expect(mockFn).toHaveBeenNthCalledWith(1, 3, 5);

    fireEvent.keyDown(node, {key: 'ArrowLeft'});
    expect(mockFn).toHaveBeenNthCalledWith(2, 0, 2);
  });
  test('should change time successfully when pressing Arrow Up/Down button', async () => {
    const date = new Date();
    date.setHours(4);
    date.setSeconds(0);
    date.setMinutes(0);
    date.setMilliseconds(0);

    const updateHourUp = new Date();
    updateHourUp.setHours(5);
    updateHourUp.setSeconds(0);
    updateHourUp.setMinutes(0);
    updateHourUp.setMilliseconds(0);

    const updateTimeUp = new Date();
    updateTimeUp.setHours(4);
    updateTimeUp.setSeconds(0);
    updateTimeUp.setMinutes(1);
    updateTimeUp.setMilliseconds(0);

    const onchange = jest.fn((value: Date) => {});

    const {container} = render(
      <DateTime
        value={date}
        type="datetime"
        dateFormat="dd/MM/YYYY"
        timeFormat="HH:mm"
        onChange={onchange}
      />
    );
    const node = container.getElementsByClassName('kuc-input-text text-input time')[0] as HTMLInputElement;
    act(() => node.focus());
    expect(node).toHaveFocus();
    await waitFor(() => expect(node.selectionStart).toEqual(0));

    fireEvent.keyDown(node, {key: 'ArrowUp'});
    expect(onchange).toHaveBeenNthCalledWith(1, updateHourUp);

    fireEvent.keyDown(node, {key: 'ArrowDown'});
    expect(onchange).toHaveBeenNthCalledWith(2, date);

    fireEvent.keyDown(node, {key: 'Tab'});
    fireEvent.keyDown(node, {key: 'ArrowUp'});
    expect(onchange).toHaveBeenNthCalledWith(3, updateTimeUp);

    fireEvent.keyDown(node, {key: 'ArrowDown'});
    expect(onchange).toHaveBeenNthCalledWith(4, date);
  });

  test('should be show error when the dateFormat and timeFormat props is invalid', () => {
    const {getByText} = render(
      <DateTime
        value={new Date()}
        type="datetime"
        dateFormat="aa/zz"
        timeFormat="dd:aa"
      />
    );
    expect(getByText(Message.datetime.INVALID_DATE)).toBeTruthy();
  });
  test('change value DateTime', () => {
    const onChange = jest.fn((value: Date) => {
      expect(value).toBeInstanceOf(Date);
      expect(value.getUTCMonth()).toEqual(0);
      expect(value.getUTCDate()).toEqual(18);
      expect(value.getUTCFullYear()).toEqual(2020);
    });
    const {container} = render(
      <DateTime
        value={new Date('Mon, 6 Jan 2020 08:02:00 GMT')}
        type="datetime"
        onChange={onChange}
      />
    );
    const day = container.getElementsByClassName('day')[20];
    fireEvent.click(day);
    expect(onChange).toBeCalledTimes(1);
  });
});