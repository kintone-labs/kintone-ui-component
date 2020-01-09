/* eslint-disable @typescript-eslint/no-empty-function */
import {render, fireEvent, createEvent} from '@testing-library/react';
import Attachment from '../index';
import React from 'react';

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
    const {container} = render(<Attachment />);
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
    fireEvent(drag[0], dragOverEvent);
  });

  test('onDragOver fire successfully with no file', () => {
    const {container} = render(<Attachment />);
    const drag = container.getElementsByClassName('kuc-attachment-file');

    const dragOverEvent = createEvent.dragOver(drag[0]);
    Object.defineProperty(dragOverEvent, 'dataTransfer', {
      value: {
        items: []
      },
    });
    fireEvent(drag[0], dragOverEvent);
  });
});