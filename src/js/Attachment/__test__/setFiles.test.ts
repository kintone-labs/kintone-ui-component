/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';

describe('Unit test Attachment setFiles', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setFiles is called successfully', () => {
    const myAttachment = new Attachment();
    const FILE_NAME = 'test_1';
    const FILE_SIZE = 1024;
    const FORMATED_FILE_SIZE = '1 KB';
    myAttachment.setFiles([{name: FILE_NAME, size: FILE_SIZE}]);

    // Verify files prop
    const files = myAttachment.getFiles();
    expect(files).toBeInstanceOf(Array);
    expect(files!.length).toEqual(1);
    expect(files![0]).toHaveProperty('name');
    expect(files![0]).toHaveProperty('size');
    expect(files![0].name).toEqual(FILE_NAME);
    expect(files![0].size).toEqual(FILE_SIZE);

    // Verify DOM
    const container = myAttachment.render();
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
});