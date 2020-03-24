/* eslint-disable @typescript-eslint/no-empty-function */
import {render, fireEvent, createEvent} from '@testing-library/react';
import Attachment from '../index';
import React from 'react';

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

    const dropHandler = (files: any[]) => {
      expect(files.length).toEqual(2);
      expect(files[1]).toBe(newFile);
    };
    const {container} = render(<Attachment files={[file]} onFilesAdd={dropHandler} />);
    const droppable = container.getElementsByClassName('kuc-attachment-file-droppable');

    const dropEvent = createEvent.drop(droppable[0]);
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: {
        files: [newFile]
      },
    });
    try {
      fireEvent(droppable[0], dropEvent);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('onDrop is fired successfully for IE with no init files', () => {

    const newFile = new File([''], 'file2.png', {
      type: 'image/png',
    });

    const dropHandler = (files: any[]) => {
      expect(files.length).toEqual(1);
      expect(files[0]).toBe(newFile);
    };
    const {container} = render(<Attachment onFilesAdd={dropHandler} />);
    const droppable = container.getElementsByClassName('kuc-attachment-file-droppable');

    const dropEvent = createEvent.drop(droppable[0]);
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: {
        files: [newFile]
      },
    });
    try {
      fireEvent(droppable[0], dropEvent);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('onDrop is fired successfully for IE without files', () => {
    const {container} = render(<Attachment />);
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

    // TODO: Remove unreachable branch line 43 index.tsx
  });

  test('onDrop is fired successfully for Chrome', () => {
    const file = new File([''], 'file1.png', {
      type: 'image/png',
    });

    const newFile = new File([''], 'file2.png', {
      type: 'image/png',
    });

    const dropHandler = (files: any[]) => {
      expect(files.length).toEqual(2);
      expect(files[1]).toBe(newFile);
    };
    const {container} = render(<Attachment files={[file]} onFilesAdd={dropHandler} />);
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

    const {container} = render(<Attachment />);
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