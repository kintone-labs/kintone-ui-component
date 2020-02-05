/* eslint-disable @typescript-eslint/no-empty-function */
import {render, fireEvent, createEvent} from '@testing-library/react';
import Attachment from '../index';
import React from 'react';

describe('Unit test for Attachment onDragEnter event handler', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('onDragEnter is fired successfully with dataTransfer.items[].kind', () => {
    const {container} = render(<Attachment />);
    const drag = container.getElementsByClassName('kuc-attachment-file');

    const newFile = new File([''], 'file.png', {
      type: 'image/png',
    });
    Object.defineProperty(newFile, 'kind', {
      value: 'file'
    });

    const dragEvent = createEvent.dragEnter(drag[0]);
    Object.defineProperty(dragEvent, 'dataTransfer', {
      value: {
        items: [newFile]
      },
    });
    try {
      fireEvent(drag[0], dragEvent);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('onDragEnter is fired successfully with dataTransfer.types', () => {
    const {container} = render(<Attachment />);
    const drag = container.getElementsByClassName('kuc-attachment-file');

    const newFile = new File([''], 'file.png', {
      type: 'image/png',
    });
    Object.defineProperty(newFile, 'kind', {
      value: '123'
    });

    const dragEvent = createEvent.dragEnter(drag[0]);
    Object.defineProperty(dragEvent, 'dataTransfer', {
      value: {
        items: [newFile],
        types: ['files']
      },
    });
    try {
      fireEvent(drag[0], dragEvent);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('onDragEnter will not fire without dataTransfer.items and dataTransfer.types', () => {
    const {container} = render(<Attachment />);
    const drag = container.getElementsByClassName('kuc-attachment-file');

    const dragEvent = createEvent.dragEnter(drag[0]);
    Object.defineProperty(dragEvent, 'dataTransfer', {
      value: {}
    });
    try {
      fireEvent(drag[0], dragEvent);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('onDragEnter will not fire without valid types', () => {
    const {container} = render(<Attachment />);
    const drag = container.getElementsByClassName('kuc-attachment-file');

    const newFile = new File([''], 'file.png', {
      type: 'image/png',
    });
    Object.defineProperty(newFile, 'kind', {
      value: '123'
    });

    const dragEvent = createEvent.dragEnter(drag[0]);
    Object.defineProperty(dragEvent, 'dataTransfer', {
      value: {
        items: [newFile],
        types: ['123']
      },
    });
    try {
      fireEvent(drag[0], dragEvent);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  // TODO: Remove unreachable branch line 112, 118 index.tsx
});