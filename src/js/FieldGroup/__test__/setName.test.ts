/* eslint-disable @typescript-eslint/no-empty-function */
import FieldGroup from '../index';

describe('Unit test FieldGroup setName', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => {});
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setName is called successfully', () => {

    const myFieldGroup = new FieldGroup({name: 'name'});

    myFieldGroup.setName('new name');
    expect(myFieldGroup.getName()).toBe('new name');
  });
});