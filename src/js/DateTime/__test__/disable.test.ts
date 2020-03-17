/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';

describe('Unit test DateTime disable', () => {

  test('disable & enable successfully DateTime', () => {
    const datetime = new DateTime();
    const container = datetime.render();
    datetime.disable();
    expect(container.getElementsByClassName('kuc-input-text text-input')[0]).toBeDisabled();
    datetime.enable();
    expect(container.getElementsByClassName('kuc-input-text text-input')[0]).not.toBeDisabled();
  });
});
