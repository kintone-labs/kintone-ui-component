/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';

describe('Unit test Attachment setFileLimitText', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setFileLimitText is called successfully', () => {
    const FILE_LIMIT_TEXT = 'File limit.';
    const myAttachment = new Attachment();
    const container = myAttachment.render();
    myAttachment.setFileLimitText(FILE_LIMIT_TEXT);
    const fileLimitDOM = container.getElementsByClassName('kuc-attachment-file-constraints');
    expect(fileLimitDOM.length).toEqual(1);
    expect(fileLimitDOM[0]).toBeInstanceOf(HTMLDivElement);
    expect((fileLimitDOM[0] as HTMLDivElement).innerText).toEqual(FILE_LIMIT_TEXT);
  });
});