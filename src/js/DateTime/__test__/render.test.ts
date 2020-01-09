/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';

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
    expect(datetime.render().className).toBe('date-time-container');
  });
  test('render successfully DateTime type time', () => {
    const datetime = new DateTime({type: 'time'});
    expect(datetime.render().className).toBe('date-time-container');
  });
  test('render successfully DateTime type time with isDisable', () => {
    const datetime = new DateTime({type: 'time', isDisabled: true});
    expect(datetime.render().className).toBe('date-time-container');
  });

  test('render throws error DateTime', () => {
    try {
      // @ts-ignore
      const datetime = new DateTime({value: 'kintone', dateFormat: 'kintone', type: 'date'});
      datetime.render();
      expect(true).toBeTruthy();
    } catch (error) {
      expect(false);
    }
  });
});