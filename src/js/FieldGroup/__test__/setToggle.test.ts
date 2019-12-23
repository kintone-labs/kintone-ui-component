/* eslint-disable @typescript-eslint/no-empty-function */
import FieldGroup from '../index';

describe('Unit test FieldGroup setToggle', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => {});
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setToggle is called successfully', () => {

    const myFieldGroup = new FieldGroup({toggle: 'expand'});

    myFieldGroup.setToggle('collapse');
    expect(myFieldGroup.getToggle()).toBe('collapse');
  });
});