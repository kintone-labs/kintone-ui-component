/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';

describe('Unit test Attachment on', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('on is called successfully', () => {
    const myAttachment = new Attachment();
    myAttachment.on('filesAdd', () => {});
    myAttachment.on('fileRemove', () => {});
  });
});