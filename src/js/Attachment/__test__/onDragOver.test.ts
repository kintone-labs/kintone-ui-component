/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';
import {createEvent, fireEvent} from '@testing-library/dom';

describe('Unit test for Attachment onDragOver event handler', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('onDragOver fire successfully', () => {
    const myAttachment = new Attachment();
    const container = myAttachment.render();
    const drag = container.getElementsByClassName('kuc-attachment-file');

    const newFile = new File([''], 'file.png', {
      type: 'image/png',
    });
    Object.defineProperty(newFile, 'kind', {
      value: 'file'
    });

    const dragOverEvent = createEvent.dragOver(drag[0]);
    Object.defineProperty(dragOverEvent, 'dataTransfer', {
      value: {
        items: [newFile]
      },
    });
    try {
      fireEvent(drag[0], dragOverEvent);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('onDragOver fire successfully with no file', () => {
    const myAttachment = new Attachment();
    const container = myAttachment.render();
    const drag = container.getElementsByClassName('kuc-attachment-file');

    const dragOverEvent = createEvent.dragOver(drag[0]);
    Object.defineProperty(dragOverEvent, 'dataTransfer', {
      value: {
        items: []
      },
    });
    try {
      fireEvent(drag[0], dragOverEvent);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
});