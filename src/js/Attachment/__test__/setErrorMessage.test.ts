/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';

describe('Unit test Attachment setErrorMessage', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setErrorMessage is called successfully', () => {
    const ERROR_MESSAGE_TEXT = 'Error.';
    const myAttachment = new Attachment();
    const container = myAttachment.render();
    myAttachment.setErrorMessage(ERROR_MESSAGE_TEXT);
    const errorDOM = container.getElementsByClassName('kuc-attachment-file-error');
    expect(errorDOM.length).toEqual(1);
    expect(errorDOM[0]).toBeInstanceOf(HTMLDivElement);
    expect((errorDOM[0] as HTMLDivElement).innerText).toEqual(ERROR_MESSAGE_TEXT);
  });
});