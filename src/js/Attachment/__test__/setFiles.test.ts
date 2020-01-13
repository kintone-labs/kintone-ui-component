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
    myAttachment.setFiles([{name: 'test_1', size: 12345}]);
    const files = myAttachment.getFiles();
    expect(files).toBeInstanceOf(Array);
    expect(files!.length).toEqual(1);
    expect(files![0]).toHaveProperty('name');
    expect(files![0]).toHaveProperty('size');
    expect(files![0].name).toEqual('test_1');
    expect(files![0].size).toEqual(12345);
  });
});