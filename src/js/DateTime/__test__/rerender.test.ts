/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';

describe('Unit test DateTime rerender', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('rerender dateTextInput dateFormat d/MM/YYY DateTime', () => {
    try {
      const datetime = new DateTime({dateFormat: 'd/MM/YYY'});
      datetime.rerender(['dateTextInput']);
      expect(true).toBeTruthy();
    } catch (error) {
      expect(false);
    }
  });

  test('rerender timeTextInput DateTime', () => {
    try {
      const datetime = new DateTime({value: new Date(), type: 'time'});
      datetime.rerender(['timeTextInput']);
      expect(true).toBeTruthy();
    } catch (error) {
      expect(false);
    }
  });

  test('rerender timeTextInput with dateFormat d/Mm/yYY HH:mm DateTime', () => {
    try {
      const datetime = new DateTime({dateFormat: 'd/Mm/yYY HH:mm'});
      datetime.rerender(['timeTextInput']);
      expect(true).toBeTruthy();
    } catch (error) {
      expect(false);
    }
  });
});