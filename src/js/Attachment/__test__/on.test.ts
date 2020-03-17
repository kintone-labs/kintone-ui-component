/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';

describe('Unit test Attachment on', () => {

  test('on is called successfully', () => {
    const myAttachment = new Attachment();
    myAttachment.on('filesAdd', () => {});
    myAttachment.on('fileRemove', () => {});
  });
});