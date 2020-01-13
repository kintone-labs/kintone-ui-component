/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';
import {createEvent, fireEvent} from '@testing-library/dom';

describe('Unit test for Attachment onDragLeave event handler', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('onDragLeave fire successfully', () => {
    const myAttachment = new Attachment();
    const container = myAttachment.render();
    const drag = container.getElementsByClassName('kuc-attachment-file');

    const newFile = new File([''], 'file.png', {
      type: 'image/png',
    });
    Object.defineProperty(newFile, 'kind', {
      value: 'file'
    });

    const dragEnterEvent = createEvent.dragEnter(drag[0]);
    Object.defineProperty(dragEnterEvent, 'dataTransfer', {
      value: {
        items: [newFile]
      },
    });

    const dragLeaveEvent = createEvent.dragLeave(drag[0]);
    try {
      fireEvent(drag[0], dragEnterEvent);
      fireEvent(drag[0], dragLeaveEvent);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  // TODO: Remove unreachable branch line 263, 267 index.ts
});