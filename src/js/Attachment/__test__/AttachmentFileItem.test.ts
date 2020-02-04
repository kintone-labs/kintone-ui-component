/* eslint-disable @typescript-eslint/no-empty-function */
import AttachmentFileItem from '../AttachmentFileItem';

describe('Unit test for AttachmentFileItem', () => {
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
    const item = new AttachmentFileItem({
      index: 0,
      fileName: 'file1.png',
      fileSize: 1073741824
    });
    const container = item.render();
    const fileSizeDOM = container.getElementsByClassName('kuc-attachment_file_size');
    expect(fileSizeDOM[0]).toBeInstanceOf(HTMLDivElement);
    const fileSize = (fileSizeDOM[0] as HTMLDivElement).innerText;
    expect(fileSize).toEqual('1 GB');
  });

  test('Render file with size larger than 1 MB', () => {
    const item = new AttachmentFileItem({
      index: 0,
      fileName: 'file1.png',
      fileSize: 1048576
    });
    const container = item.render();
    const fileSizeDOM = container.getElementsByClassName('kuc-attachment_file_size');
    expect(fileSizeDOM[0]).toBeInstanceOf(HTMLDivElement);
    const fileSize = (fileSizeDOM[0] as HTMLDivElement).innerText;
    expect(fileSize).toEqual('1 MB');
  });

  test('Render NaN bytes when fileSize type is not number', () => {
    const handleRemove = () => {};
    // @ts-ignore
    const item = new AttachmentFileItem({
      index: 0,
      fileName: 'file1.png',
      fileSize: '123',
      onFileRemove: handleRemove
    });
    const container = item.render();
    const fileSizeDOM = container.getElementsByClassName('kuc-attachment_file_size');
    expect(fileSizeDOM[0]).toBeInstanceOf(HTMLDivElement);
    const fileSize = (fileSizeDOM[0] as HTMLDivElement).innerText;
    expect(fileSize).toEqual('NaN bytes');
  });

  test('Render with empty props', () => {
    const item = new AttachmentFileItem();
    expect(item).toBeInstanceOf(AttachmentFileItem);
  });
});