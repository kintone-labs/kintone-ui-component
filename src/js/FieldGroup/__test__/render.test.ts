/* eslint-disable @typescript-eslint/no-empty-function */
import FieldGroup from '../index';

describe('Unit test FieldGroup render', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => {});
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('Render successfully without props', () => {
    const myFieldGroup = new FieldGroup({});
    const container = myFieldGroup.render();
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-fieldgroup');
    } else {
      expect(false);
    }
  });

  test('Init successfully with name props', () => {
    const myFieldGroup = new FieldGroup({name: 'FieldGroup name'});
    expect(myFieldGroup.getName()).toEqual('FieldGroup name');
  });

  test('Init successfully with content props', () => {
    const contentDiv = document.createElement('span');
    contentDiv.innerHTML = 'content';
    const myFieldGroup = new FieldGroup({content: contentDiv});
    expect(myFieldGroup.getContent()).toBe(contentDiv);
  });

  test('Init successfully with toggle "expand"', () => {
    const myFieldGroup = new FieldGroup({toggle: 'expand'});
    expect(myFieldGroup.getToggle()).toEqual('expand');
  });
});