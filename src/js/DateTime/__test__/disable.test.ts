/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';

describe('Unit test DateTime disable', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('disable & enable successfully DateTime', () => {
    const datetime = new DateTime();
    const container = datetime.render();
    datetime.disable();
    expect(container.getElementsByClassName('kuc-input-text text-input')[0]).toBeDisabled();
    datetime.enable();
    expect(container.getElementsByClassName('kuc-input-text text-input')[0]).not.toBeDisabled();
  });
});
