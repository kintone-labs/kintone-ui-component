/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';

describe('Unit test Attachment setDropZoneText', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setDropZoneText is called successfully', () => {
    const DROPZONE_TEXT = 'Drop files here.';
    const myAttachment = new Attachment();
    const container = myAttachment.render();
    myAttachment.setDropZoneText(DROPZONE_TEXT);
    const dropzoneDOM = container.getElementsByClassName('kuc-attachment-file-droppable-text');
    expect(dropzoneDOM.length).toEqual(1);
    expect(dropzoneDOM[0]).toBeInstanceOf(HTMLDivElement);
    expect((dropzoneDOM[0] as HTMLDivElement).innerText).toEqual(DROPZONE_TEXT);
  });
});