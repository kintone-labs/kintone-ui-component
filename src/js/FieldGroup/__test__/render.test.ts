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
    const NAME = 'FieldGroup name';
    const myFieldGroup = new FieldGroup({name: NAME});
    expect(myFieldGroup.getName()).toEqual(NAME);

    // Verify name DOM
    const container = myFieldGroup.render();
    const fgTab = container.getElementsByClassName('kuc-fieldgroup-label');
    expect(fgTab.length).toEqual(1);
    const fgTabLabel = fgTab[0].lastElementChild;
    expect(fgTabLabel).toBeInstanceOf(HTMLSpanElement);
    expect((fgTabLabel! as HTMLSpanElement).innerText).toEqual(NAME);
  });

  test('Init successfully with content props', () => {
    const contentDiv = document.createElement('span');
    contentDiv.innerHTML = 'content';
    const myFieldGroup = new FieldGroup({content: contentDiv});
    expect(myFieldGroup.getContent()).toBe(contentDiv);

    // Verify content DOM
    const container = myFieldGroup.render();
    const fgContent = container.getElementsByClassName('kuc-fieldgroup-contents');
    expect(fgContent.length).toEqual(1);
    expect(fgContent[0].firstElementChild).toBe(contentDiv);
  });

  test('Init successfully with toggle "expand"', () => {
    const myFieldGroup = new FieldGroup({toggle: 'expand'});
    expect(myFieldGroup.getToggle()).toEqual('expand');

    // Verify toggle DOM
    const container = myFieldGroup.render();
    const fgTab = container.getElementsByClassName('kuc-fieldgroup-label');
    expect(fgTab.length).toEqual(1);
    expect(fgTab[0].classList).toContain('expand');
    const fgTabArrow = fgTab[0].firstElementChild;
    expect(fgTabArrow!.classList).toContain('down');
  });
});