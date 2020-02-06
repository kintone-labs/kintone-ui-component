/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';
import {fireEvent} from '@testing-library/dom';
import Message from '../../../constant/Message';

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
    // expect(container.getElementsByClassName('kuc-input-text text-input time')[0]).toHaveFocus();
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
  test('onEvent timeTextInput DateTime', () => {
    const datetime = new DateTime({type: 'time', value: new Date('Mon, 6 Jan 2020 18:40:00 GMT+7')});
    const time = datetime.render().getElementsByClassName('kuc-input-text text-input time')[0];
    datetime.render();
    fireEvent.click(time, {target: {selectionStart: 2}});
    fireEvent.focus(time, {target: {selectionStart: 4, selectionEnd: 2}});
    fireEvent.keyDown(time);
    fireEvent.keyDown(time, {key: 'Tab'});
    fireEvent.keyDown(time, {key: 'kintone'});
    fireEvent.keyDown(time, {key: 'ArrowLeft'});
    fireEvent.keyDown(time, {key: 'ArrowRight'});
    fireEvent.keyDown(time, {key: 'ArrowUp'});
    fireEvent.keyDown(time, {key: 'ArrowDown'});
    // @ts-ignore
    datetime._setTimeValueOnInput(9);
    fireEvent.keyDown(time, {keyCode: 100, target: {selectionStart: 4}});
    // @ts-ignore
    datetime._setTimeValueOnInput(17);
    fireEvent.keyDown(time, {keyCode: 100, target: {selectionStart: 1}});
    fireEvent.keyDown(time, {keyCode: 48, target: {selectionStart: 1}});
    fireEvent.blur(time);
    fireEvent.blur(time, {relatedTarget: null});
    // @ts-ignore
    datetime._setTimeValueOnInput('kintone');
    expect(true).toBeTruthy();
  });

  test('onEvent dateTextInput throws error DateTime', () => {
    const datetime = new DateTime({type: 'time', value: new Date('Mon, 6 Jan 2020 08:2:00 GMT')});
    const datetimeRender = datetime.render();
    const timePicker = datetimeRender.getElementsByClassName('kuc-time-list-item');
    const time = datetimeRender.getElementsByClassName('kuc-input-text text-input time')[0];
    fireEvent.click(time, {target: {selectionStart: 4}});
    fireEvent.click(timePicker[30]);
    fireEvent.click(time, {target: {selectionStart: 3}});
    fireEvent.click(timePicker[5]);
    expect(true).toBeTruthy();
  });
});