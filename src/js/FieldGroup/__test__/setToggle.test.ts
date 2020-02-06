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

    // Verify toggle DOM
    const container = myFieldGroup.render();
    const fgTab = container.getElementsByClassName('kuc-fieldgroup-label');
    expect(fgTab.length).toEqual(1);
    expect(fgTab[0].classList).toContain('collapse');
    const fgTabArrow = fgTab[0].firstElementChild;
    expect(fgTabArrow!.classList).toContain('right');
  });
});