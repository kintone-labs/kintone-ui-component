/* eslint-disable @typescript-eslint/no-empty-function */
const messages = {
  INVALID_ARGUMENT: 'Error: invalid function arguments'
};

import Dialog from '../index';

describe('Unit test Dialog setContent', () => {

  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => {});
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('Function setContent and getContent run correctly', () => {
    const myDialog = new Dialog({content: 'content 1'});
    myDialog.setContent('content 2');
    expect(myDialog.getContent()).toEqual('content 2');
  });

  test('setContent throw error with invalid content', () => {
    try {
      const myDialog = new Dialog({content: 'content'});
      // @ts-ignore
      myDialog.setContent(1);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });
});