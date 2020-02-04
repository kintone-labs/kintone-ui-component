/* eslint-disable @typescript-eslint/no-empty-function */
import FieldGroup from '../index';

describe('Unit test FieldGroup _handleToggleClick', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => {});
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('_handleToggleClick is called successfully', () => {

    const myFieldGroup = new FieldGroup({});

    // @ts-ignore
    myFieldGroup.fgTab.onclick();
    expect(myFieldGroup.getToggle()).toBe('expand');

    // @ts-ignore
    myFieldGroup.fgTab.onclick();
    expect(myFieldGroup.getToggle()).toBe('collapse');
  });
});