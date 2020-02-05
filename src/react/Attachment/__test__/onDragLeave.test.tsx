/* eslint-disable @typescript-eslint/no-empty-function */
import {render, fireEvent, createEvent} from '@testing-library/react';
import Attachment from '../index';
import React from 'react';

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
    const {container} = render(<Attachment />);
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

  // TODO: Remove unreachable branch line 127, 131 index.tsx
});