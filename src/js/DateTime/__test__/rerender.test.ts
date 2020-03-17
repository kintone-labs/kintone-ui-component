/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';

describe('Unit test DateTime rerender', () => {

  test('rerender dateTextInput dateFormat d/MM/YYY DateTime', () => {
    try {
      const datetime = new DateTime({dateFormat: 'd/MM/YYY'});
      const container = datetime.render();
      datetime.rerender(['dateTextInput']);
      expect(container.getElementsByClassName('label-error')[0]).toHaveStyle('display: block;');
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
});