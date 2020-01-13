/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';

describe('Unit test Attachment render', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('Render successfully without props', () => {
    const myAttachment = new Attachment();
    const container = myAttachment.render();
    expect(container).toBeTruthy();
    expect(container.className).toContain('kuc-attachment-outer');
  });

  test('Render successfully with props', () => {
    const newFile = new File([''], 'file2.png', {
      type: 'image/png',
    });
    const myAttachment = new Attachment({
      files: [newFile],
      browseButtonText: 'Browse file',
      fileLimitText: 'Limit'
    });
    const container = myAttachment.render();
    expect(container).toBeTruthy();
    expect(container.className).toContain('kuc-attachment-outer');
  });

  test('render error', () => {
    const ERROR = 'Attachment error';
    const myAttachment = new Attachment({
      isErrorVisible: true,
      errorMessage: ERROR
    });
    const container = myAttachment.render();
    expect(container).toBeTruthy();
    expect(container!.className).toBe('kuc-attachment-outer');
    const errorElm = container.getElementsByClassName('kuc-attachment-file-error');
    expect(errorElm[0]).toBeTruthy();
  });
});