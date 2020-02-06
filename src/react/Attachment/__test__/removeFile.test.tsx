/* eslint-disable @typescript-eslint/no-empty-function */
import {render, fireEvent} from '@testing-library/react';
import Attachment from '../index';
import React from 'react';

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
    const handleFileRemove = (files: any) => {
      expect(files).toBeInstanceOf(Array);
      expect(files.length).toEqual(0);
    };
    const {container} = render(<Attachment files={[file]} onFileRemove={handleFileRemove} />);
    const removeButton = container.getElementsByClassName('kuc-attachment_file_action')[0].getElementsByTagName('button');
    try {
      fireEvent.click(removeButton[0]);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('removeFile is called when there\'s no onFileRemove', () => {
    const file = new File([''], 'file1.png', {
      type: 'image/png',
    });
    const {container} = render(<Attachment files={[file]} />);
    const removeButton = container.getElementsByClassName('kuc-attachment_file_action')[0].getElementsByTagName('button');
    try {
      fireEvent.click(removeButton[0]);
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
});