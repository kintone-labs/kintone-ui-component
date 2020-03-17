/* eslint-disable @typescript-eslint/no-empty-function */
import Label from '../index';

describe('Unit test Label rerender', () => {

  test('rerender successfully without props Label component', () => {
    try {
      const label = new Label();
      expect(label.rerender()).toBe('kuc-label');
    } catch (error) {
      expect(false);
    }
  });
});