/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';

const messages = {
  INVALID_DATE: 'Error: invalid function arguments'
};

describe('Unit test DateTime render', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('render successfully without props DateTime component', () => {
    const datetime = new DateTime();
    expect(datetime.render().className).toBe('date-time-container');
  });

  test('render successfully with full props DateTime type datetime', () => {
    const datetime = new DateTime({value: new Date(), type: 'datetime', locale: 'en'});
    expect(datetime.render().className).toBe('date-time-container');
  });
  test('render successfully DateTime type date', () => {
    const datetime = new DateTime({type: 'date', locale: 'zh'});
    const container = datetime.render();
    expect(container.className).toBe('date-time-container');
    expect(container.getElementsByClassName('date-container')[0]).toBeTruthy();
    expect(container.getElementsByClassName('time-container')[0]).toBeFalsy();
  });
  test('render successfully DateTime type time', () => {
    const datetime = new DateTime({type: 'time'});
    const container = datetime.render();
    expect(container.className).toBe('date-time-container');
    expect(container.getElementsByClassName('date-container')[0]).toBeFalsy();
    expect(container.getElementsByClassName('time-container')[0]).toBeTruthy();
  });
  test('render successfully DateTime type time with isDisable', () => {
    const datetime = new DateTime({type: 'time', isDisabled: true});
    const container = datetime.render();
    expect(container.className).toBe('date-time-container');
    expect(container.getElementsByClassName('date-container')[0]).toBeFalsy();
    expect(container.getElementsByClassName('time-container')[0]).toBeTruthy();
    expect(container.getElementsByClassName('kuc-input-text text-input time')[0]).toBeDisabled();
  });

  test('render throws error DateTime', () => {
    expect(() => {
      // @ts-ignore
      const datetime = new DateTime({value: 'kintone', dateFormat: 'kintone', type: 'date'});
      datetime.render();
    }).toThrow(new Error(messages.INVALID_DATE));
  });
});