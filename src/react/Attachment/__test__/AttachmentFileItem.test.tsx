/* eslint-disable @typescript-eslint/no-empty-function */
import {render} from '@testing-library/react';
import AttachmentFileItem from '../AttachmentFileItem';
import React from 'react';

describe('Unit test for AttachmentFileItem react', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('Render file with size larger than 1 GB', () => {
    const handleRemove = () => {};
    const {container} = render(<AttachmentFileItem index={0} fileName="file1.png" fileSize={1073741824} onFileRemove={handleRemove} />);
    const fileSizeDOM = container.getElementsByClassName('kuc-attachment_file_size');
    const fileSize = fileSizeDOM[0].innerHTML;
    expect(fileSize).toEqual('1 GB');
  });

  test('Render file with size larger than 1 MB', () => {
    const handleRemove = () => {};
    const {container} = render(<AttachmentFileItem index={0} fileName="file1.png" fileSize={1048576} onFileRemove={handleRemove} />);
    const fileSizeDOM = container.getElementsByClassName('kuc-attachment_file_size');
    const fileSize = fileSizeDOM[0].innerHTML;
    expect(fileSize).toEqual('1 MB');
  });

  test('Render NaN bytes when fileSize type is not number', () => {
    const handleRemove = () => {};
    // @ts-ignore
    const {container} = render(<AttachmentFileItem index={0} fileName="file1.png" fileSize="123" onFileRemove={handleRemove} />);
    const fileSizeDOM = container.getElementsByClassName('kuc-attachment_file_size');
    const fileSize = fileSizeDOM[0].innerHTML;
    expect(fileSize).toEqual('NaN bytes');
  });
});