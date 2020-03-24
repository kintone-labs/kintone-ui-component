/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';

describe('Unit test Attachment setBrowseButtonText', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setBrowseButtonText is called successfully', () => {
    const BROWSE_BUTTON_TEXT = 'Drop files here.';
    const myAttachment = new Attachment();
    const container = myAttachment.render();
    myAttachment.setBrowseButtonText(BROWSE_BUTTON_TEXT);
    const browseDOM = container.getElementsByClassName('kuc-attachment-file-upload-button-text');
    expect(browseDOM.length).toEqual(1);
    expect(browseDOM[0]).toBeInstanceOf(HTMLSpanElement);
    expect((browseDOM[0] as HTMLDivElement).innerText).toEqual(BROWSE_BUTTON_TEXT);
  });
});