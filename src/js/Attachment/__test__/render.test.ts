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
    const FILE_NAME = 'file2.png';
    const newFile = new File([''], FILE_NAME, {
      type: 'image/png',
    });
    const FORMATED_FILE_SIZE = '0 bytes';
    const BROWSE_BUTTON_TEXT = 'Browse file';
    const FILE_LIMIT_TEXT = 'Limit';
    const DROPZONE_TEXT = 'Dropzone Text';
    const ERROR_MESSAGE_TEXT = 'Error';
    const myAttachment = new Attachment({
      files: [newFile],
      browseButtonText: BROWSE_BUTTON_TEXT,
      fileLimitText: FILE_LIMIT_TEXT,
      dropZoneText: DROPZONE_TEXT,
      isErrorVisible: true,
      errorMessage: ERROR_MESSAGE_TEXT
    });
    const container = myAttachment.render();
    expect(container).toBeTruthy();
    expect(container.className).toContain('kuc-attachment-outer');

    // Verify browse button DOM
    const browseDOM = container.getElementsByClassName('kuc-attachment-file-upload-button-text');
    expect(browseDOM.length).toEqual(1);
    expect(browseDOM[0]).toBeInstanceOf(HTMLSpanElement);
    expect((browseDOM[0] as HTMLSpanElement).innerText).toEqual(BROWSE_BUTTON_TEXT);

    // Verify file limit text DOM
    const fileLimitDOM = container.getElementsByClassName('kuc-attachment-file-constraints');
    expect(fileLimitDOM.length).toEqual(1);
    expect(fileLimitDOM[0]).toBeInstanceOf(HTMLDivElement);
    expect((fileLimitDOM[0] as HTMLDivElement).innerText).toEqual(FILE_LIMIT_TEXT);

    // Verify dropzone text DOM
    const dropzoneDOM = container.getElementsByClassName('kuc-attachment-file-droppable-text');
    expect(dropzoneDOM.length).toEqual(1);
    expect(dropzoneDOM[0]).toBeInstanceOf(HTMLDivElement);
    expect((dropzoneDOM[0] as HTMLDivElement).innerText).toEqual(DROPZONE_TEXT);

    // Verify error DOM
    const errorDOM = container.getElementsByClassName('kuc-attachment-file-error');
    expect(errorDOM.length).toEqual(1);
    expect(errorDOM[0]).toBeInstanceOf(HTMLDivElement);
    expect((errorDOM[0] as HTMLDivElement).innerText).toEqual(ERROR_MESSAGE_TEXT);

    // Verify files DOM
    const fileDOMList = container.getElementsByClassName('kuc-attachment-file-item');
    expect(fileDOMList.length).toEqual(1);
    for (let index = 0; index < fileDOMList.length; index++) {
      const fileDOM = fileDOMList[index];

      // Verify file name DOM
      const fileNameDOM = (fileDOM.getElementsByClassName('kuc-attachment_file_name'))[0];
      expect(fileNameDOM.getAttribute('title')).toEqual(FILE_NAME);
      expect(fileNameDOM).toBeInstanceOf(HTMLDivElement);
      expect((fileNameDOM as HTMLDivElement).innerText).toEqual(FILE_NAME);

      // Verify file size DOM
      const fileSizeDOM = (fileDOM.getElementsByClassName('kuc-attachment_file_size'))[0];
      expect(fileSizeDOM).toBeInstanceOf(HTMLDivElement);
      expect((fileSizeDOM as HTMLDivElement).innerText).toEqual(FORMATED_FILE_SIZE);
    }
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