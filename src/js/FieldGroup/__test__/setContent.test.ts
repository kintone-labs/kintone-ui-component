/* eslint-disable @typescript-eslint/no-empty-function */
import FieldGroup from '../index';

describe('Unit test FieldGroup setContent', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => {});
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setContent is called successfully', () => {
    const contentDiv = document.createElement('span');
    contentDiv.innerHTML = 'content';

    const myFieldGroup = new FieldGroup({content: contentDiv});

    const newContentDiv = document.createElement('span');
    newContentDiv.innerHTML = 'content';

    myFieldGroup.setContent(newContentDiv);
    expect(myFieldGroup.getContent()).toBe(newContentDiv);

    // Verify content DOM
    const container = myFieldGroup.render();
    const fgContent = container.getElementsByClassName('kuc-fieldgroup-contents');
    expect(fgContent.length).toEqual(1);
    expect(fgContent[0].firstElementChild).toBe(newContentDiv);
  });
});