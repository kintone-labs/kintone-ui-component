/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';
import {fireEvent} from '@testing-library/dom';

describe('Unit test Attachment react removeFile', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('removeFile is called successfully', () => {
    const file = new File([''], 'file1.png', {
      type: 'image/png',
    });
    const handleFileRemove = jest.fn((files: any) => {
      expect(files).toBeInstanceOf(Array);
      expect(files.length).toEqual(0);
    });
    const myAttachment = new Attachment({
      files: [file],
      onFileRemove: handleFileRemove
    });
    const container = myAttachment.render();
    const removeButton = container.getElementsByClassName('kuc-attachment_file_action')[0].getElementsByTagName('button');
    try {
      fireEvent.click(removeButton[0]);
      expect(handleFileRemove.mock.calls.length).toBe(1);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('removeFile is called when there\'s no onFileRemove', () => {
    const file = new File([''], 'file1.png', {
      type: 'image/png',
    });
    const myAttachment = new Attachment({
      files: [file]
    });
    const container = myAttachment.render();
    const removeButton = container.getElementsByClassName('kuc-attachment_file_action')[0].getElementsByTagName('button');
    try {
      fireEvent.click(removeButton[0]);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
});