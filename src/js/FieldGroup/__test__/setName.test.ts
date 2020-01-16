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
    const NEW_NAME = 'new name';
    myFieldGroup.setName(NEW_NAME);
    expect(myFieldGroup.getName()).toBe(NEW_NAME);

    // Verify name DOM
    const container = myFieldGroup.render();
    const fgTab = container.getElementsByClassName('kuc-fieldgroup-label');
    expect(fgTab.length).toEqual(1);
    const fgTabLabel = fgTab[0].lastElementChild;
    expect(fgTabLabel).toBeInstanceOf(HTMLSpanElement);
    expect((fgTabLabel! as HTMLSpanElement).innerText).toEqual(NEW_NAME);
  });
});