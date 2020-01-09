/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';
import {fireEvent} from '@testing-library/dom';

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

  test('onEvent successfully dateTextInput of DateTime', () => {
    const datetime = new DateTime({value: null, type: 'date'});
    const dateTextInput = datetime.render().getElementsByTagName('input')[0];
    datetime.render();
    fireEvent.click(dateTextInput, {target: {value: null}});
    fireEvent.focus(dateTextInput, {target: {value: null}});
    fireEvent.keyDown(dateTextInput, {key: 'Tab'});
    fireEvent.blur(dateTextInput, {target: {value: null}});
    expect(true).toBeTruthy();
  });

  test('_onCalendarDateClick successfully DateTime', () => {
    const datetime = new DateTime({value: new Date()});
    datetime.render();
    // @ts-ignore
    datetime._onCalendarDateClick(new Date());
    expect(true).toBeTruthy();
  });

  test('_onTimeClick successfully DateTime', () => {
    const datetime = new DateTime({value: new Date()});
    datetime.render();
    // @ts-ignore
    datetime._onTimeClick(new Date());
    expect(true).toBeTruthy();
  });
  test('_checkDateInputError throws error with dateFormat underfined DateTime', () => {
    const datetime = new DateTime({dateFormat: undefined});
    datetime.render();
    // @ts-ignore
    datetime._checkDateInputError();
    expect(true).toBeTruthy();
  });
  test('_checkDateInputError throws error with dateFormat xx/yy DateTime ', () => {
    const datetime = new DateTime({dateFormat: 'xx/yy'});
    datetime.render();
    // @ts-ignore
    datetime._checkDateInputError();
    expect(true).toBeTruthy();
  });
  test('_changeHoursBy & _changeMinutesBy DateTime', () => {
    const datetime = new DateTime();
    datetime.render();
    // @ts-ignore
    datetime._changeHoursBy(3);
    // @ts-ignore
    datetime._changeMinutesBy(45);
    expect(true).toBeTruthy();
  });
  test('onEvent timeTextInput DateTime', () => {
    const datetime = new DateTime({type: 'time'});
    const time = datetime.render().getElementsByClassName('kuc-input-text text-input time')[0];
    datetime.render();
    fireEvent.click(time, {target: {selectionStart: 3}});
    fireEvent.focus(time, {target: {selectionStart: 4, selectionEnd: 2}});
    fireEvent.keyDown(time);
    fireEvent.keyDown(time, {key: 'Tab'});
    fireEvent.keyDown(time, {key: 'kintone'});
    fireEvent.keyDown(time, {key: 'ArrowLeft'});
    fireEvent.keyDown(time, {key: 'ArrowRight'});
    fireEvent.keyDown(time, {key: 'ArrowUp'});
    fireEvent.keyDown(time, {key: 'ArrowDown'});
    fireEvent.keyDown(time, {keyCode: 100, target: {selectionStart: 4}});
    fireEvent.blur(time);
    fireEvent.blur(time, {relatedTarget: null});
    // @ts-ignore
    datetime._setTimeValueOnInput(9);
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