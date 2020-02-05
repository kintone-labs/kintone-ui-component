/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';
import {createEvent, fireEvent} from '@testing-library/dom';

describe('Unit test for Attachment onDrop event handler', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('onDrop is fired successfully for IE', () => {
    const file = new File([''], 'file1.png', {
      type: 'image/png',
    });

    const newFile = new File([''], 'file2.png', {
      type: 'image/png',
    });

    const dropHandler = jest.fn((files: any[]) => {
      expect(files.length).toEqual(2);
      expect(files[1]).toBe(newFile);
    });
    const myAttachment = new Attachment({
      files: [file]
    });
    myAttachment.on('filesAdd', dropHandler);
    const container = myAttachment.render();
    const droppable = container.getElementsByClassName('kuc-attachment-file-droppable');

    const dropEvent = createEvent.drop(droppable[0]);
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: {
        files: [newFile]
      },
    });
    try {
      fireEvent(droppable[0], dropEvent);
      expect(dropHandler.mock.calls.length).toBe(1);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('onDrop is fired successfully for IE with no init files', () => {

    const newFile = new File([''], 'file2.png', {
      type: 'image/png',
    });

    const dropHandler = jest.fn((files: any[]) => {
      expect(files.length).toEqual(1);
      expect(files[0]).toBe(newFile);
    });
    const myAttachment = new Attachment({});
    myAttachment.on('filesAdd', dropHandler);
    const container = myAttachment.render();
    const droppable = container.getElementsByClassName('kuc-attachment-file-droppable');

    const dropEvent = createEvent.drop(droppable[0]);
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: {
        files: [newFile]
      },
    });
    try {
      fireEvent(droppable[0], dropEvent);
      expect(dropHandler.mock.calls.length).toBe(1);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('onDrop is fired successfully for IE without files', () => {
    const myAttachment = new Attachment();
    const container = myAttachment.render();
    const droppable = container.getElementsByClassName('kuc-attachment-file-droppable');

    const dropEvent = createEvent.drop(droppable[0]);
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: {
        files: []
      },
    });
    try {
      fireEvent(droppable[0], dropEvent);
    } catch (error) {
      expect(error).toBeFalsy();
    }

    // TODO: Remove unreachable branch line 89 index.ts
  });

  test('onDrop is fired successfully for Chrome', () => {
    const file = new File([''], 'file1.png', {
      type: 'image/png',
    });

    const newFile = new File([''], 'file2.png', {
      type: 'image/png',
    });

    const dropHandler = jest.fn((files: any[]) => {
      expect(files.length).toEqual(2);
      expect(files[1]).toBe(newFile);
    });
    const myAttachment = new Attachment({
      files: [file]
    });
    myAttachment.on('filesAdd', dropHandler);
    const container = myAttachment.render();
    const droppable = container.getElementsByClassName('kuc-attachment-file-droppable');

    const dropEvent = createEvent.drop(droppable[0]);
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: {
        items: [newFile],
        files: [newFile]
      },
    });
    try {
      fireEvent(droppable[0], dropEvent);
      expect(dropHandler.mock.calls.length).toBe(1);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('onDrop will pass when drop folder', () => {
    const newFile = new File([''], 'file3.png', {
      type: 'image/png',
    });
    Object.defineProperty(newFile, 'webkitGetAsEntry', {
      value: function() {
        return {
          isDirectory: true
        };
      }
    });

    const myAttachment = new Attachment();
    const container = myAttachment.render();
    const droppable = container.getElementsByClassName('kuc-attachment-file-droppable');

    const dropEvent = createEvent.drop(droppable[0]);
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: {
        items: [newFile],
        files: [newFile]
      },
    });
    try {
      fireEvent(droppable[0], dropEvent);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
});