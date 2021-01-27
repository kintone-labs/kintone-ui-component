/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';
import {fireEvent} from '@testing-library/dom';
import Message from '../../../constant/Message';
import {waitFor} from '@testing-library/react';

describe('Unit test DateTime onEvent', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('onEvent successfully dateTextInput of DateTime with date type', () => {
    const datetime = new DateTime({value: null, type: 'date'});
    const container = datetime.render();
    const dateTextInput = container.getElementsByTagName('input')[0];
    fireEvent.click(dateTextInput, {target: {value: null}});
    fireEvent.focus(dateTextInput, {target: {value: null}});
    expect(container.getElementsByClassName('date-picker-container')[0]).toHaveStyle('display: block;');

    fireEvent.blur(dateTextInput, {target: {value: null}});
    expect(container.getElementsByClassName('date-picker-container')[0]).toHaveStyle('display: none;');
  });

  test('onEvent successfully dateTextInput of DateTime with datetime type', () => {
    const datetime = new DateTime({value: new Date(), type: 'datetime'});
    const container = datetime.render();
    const dateTextInput = container.getElementsByTagName('input')[0];
    fireEvent.click(dateTextInput, {target: {value: null}});
    fireEvent.focus(dateTextInput, {target: {value: null}});
    expect(container.getElementsByClassName('date-picker-container')[0]).toHaveStyle('display: block;');
    fireEvent.keyDown(dateTextInput, {key: 'Tab'});
    expect(container.getElementsByClassName('date-picker-container')[0]).toHaveStyle('display: none;');
  });

  test('_onCalendarDateClick successfully DateTime', () => {
    const datetime = new DateTime({value: new Date('02/02/2020')});
    const container = datetime.render();
    // @ts-ignore
    datetime._onCalendarDateClick(new Date('02/03/2020'));
    expect(container.getElementsByTagName('input')[0]).toHaveValue('02/03/2020');
  });

  test('_onTimeClick successfully DateTime', () => {
    const datetime = new DateTime({value: new Date()});
    const container = datetime.render();
    const date = new Date();
    date.setHours(1);
    date.setMinutes(30);
    // @ts-ignore
    datetime._onTimeClick(date);
    expect(container.getElementsByTagName('input')[1]).toHaveValue('01:30');
  });
  test('error DOM should be displayed with dateFormat undefined', () => {
    const datetime = new DateTime({dateFormat: 'xx/yy'});
    const container = datetime.render();
    // @ts-ignore
    datetime._checkDateInputError();
    expect(container.getElementsByClassName('label-error')[0]).toHaveStyle('display: block;');
    expect(container.getElementsByClassName('label-error')[0].textContent).toBe(Message.datetime.INVALID_DATE);
  });
  test('_changeHoursBy & _changeMinutesBy to work normally.', () => {
    const date = new Date();
    date.setHours(1);
    date.setMinutes(30);

    const datetime = new DateTime({value: date});
    const container = datetime.render();
    // @ts-ignore
    datetime._changeHoursBy(1);
    // @ts-ignore
    datetime._changeMinutesBy(30);
    expect(container.getElementsByTagName('input')[1]).toHaveValue('03:00');
  });

  test('should selected range successfully inside the Time input when pressing Tab button', async () => {
    const datetime = new DateTime({type: 'time', value: new Date('Mon, 6 Jan 2020 18:40:00 GMT+7')});
    const container = datetime.render();
    const node = container.getElementsByClassName('kuc-input-text text-input time')[0] as HTMLInputElement;
    fireEvent.focus(node);
    await waitFor(() => expect(node.selectionStart).toEqual(0));
    await waitFor(() => expect(node.selectionEnd).toEqual(2));

    fireEvent.keyDown(node, {key: 'Tab', code: 9});
    await waitFor(() => expect(node.selectionStart).toEqual(3));
    await waitFor(() => expect(node.selectionEnd).toEqual(5));
  });

  test('should display invalid hour:minutes when typing invalid value into Time input', () => {
    const invalidValue = 'kintone';
    const onChange = jest.fn(()=> {});

    const today = new Date();
    today.setHours(4);
    today.setSeconds(0);
    today.setMinutes(0);
    today.setMilliseconds(0);
    const datetime = new DateTime({
      type: 'time',
      value: today,
      onChange: onChange
    });
    const container = datetime.render();
    const node = container.getElementsByClassName('kuc-input-text text-input time')[0] as HTMLInputElement;
    fireEvent.focus(node);
    fireEvent.change(node, {target: {value: invalidValue}});
    expect(node).toHaveValue(invalidValue);

    fireEvent.keyDown(node, {key: 'Tab', code: 9});
    fireEvent.change(node, {target: {value: invalidValue}});
    expect(node).toHaveValue(invalidValue);
  });

  test('should selected range successfully inside the Time input when pressing Arrow Right/Left button', () => {
    const mockFn = spyOn(HTMLInputElement.prototype, 'setSelectionRange');

    const datetime = new DateTime({type: 'time', value: new Date('Mon, 6 Jan 2020 18:40:00 GMT+7')});
    const container = datetime.render();
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

    const datetime = new DateTime({
      type: 'time',
      value: date
    });
    const container = datetime.render();
    const node = container.getElementsByClassName('kuc-input-text text-input time')[0] as HTMLInputElement;
    fireEvent.focus(node);
    await waitFor(() => expect(node.selectionStart).toEqual(0));

    fireEvent.keyDown(node, {key: 'ArrowUp'});
    expect(node).toHaveValue('05:00');

    fireEvent.keyDown(node, {key: 'ArrowDown'});
    expect(node).toHaveValue('04:00');

    fireEvent.keyDown(node, {key: 'Tab'});
    fireEvent.keyDown(node, {key: 'ArrowUp'});
    expect(node).toHaveValue('04:01');
    fireEvent.keyDown(node, {key: 'ArrowDown'});
    expect(node).toHaveValue('04:00');
  });

  test('should change time successfully when pressing a day button', () => {
    const datetime = new DateTime({type: 'time', value: new Date('02/05/2020')});
    const datetimeRender = datetime.render();
    const timePicker = datetimeRender.getElementsByClassName('kuc-time-list-item');
    const timeBtn = datetimeRender.getElementsByClassName('kuc-input-text text-input time')[0];
    fireEvent.click(timeBtn);
    fireEvent.click(timePicker[0]);
    expect(timeBtn).toHaveValue('00:00');
  });
});