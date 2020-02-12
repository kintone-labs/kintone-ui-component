/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';

const messages = {
  INVALID_LOCALE: 'Invalid locale. This function accepts only the following locales: undefined'
};

describe('Unit test DateTime setLocale', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setLocale type datetime DateTime', () => {
    const datetime = new DateTime({value: new Date('October 13, 2019 11:13:00'), type: 'datetime'});
    datetime.render();
    datetime.setLocale('ja');
    expect(datetime.getLocale()).toBe('ja');
  });

  test('setLocale successfully DateTime', () => {
    const datetime = new DateTime();
    datetime.render();
    datetime.setLocale('en');
    expect(datetime.getLocale()).toBe('en');
  });

  test('setLocale number throws error DateTime', () => {
    try {
      const datetime = new DateTime();
      datetime.render();
      datetime.setLocale(3);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_LOCALE);
    }
  });
});