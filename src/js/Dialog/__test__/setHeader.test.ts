/* eslint-disable @typescript-eslint/no-empty-function */
const messages = {
  INVALID_ARGUMENT: 'Error: invalid function arguments'
};

import Dialog from '../index';

describe('Unit test Dialog setHeader', () => {

  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => {});
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('Function setHeader and getHeader run correctly', () => {
    const myDialog = new Dialog({header: 'header 1'});
    const NEW_HEADER = 'header 2';
    myDialog.setHeader(NEW_HEADER);
    expect(myDialog.getHeader()).toEqual(NEW_HEADER);

    // Verify header DOM
    const container = myDialog.render();
    const headerDOM = container.getElementsByClassName('kuc-dialog-header');
    expect(headerDOM.length).toEqual(1);
    expect(headerDOM[0]).toBeInstanceOf(HTMLDivElement);
    expect(headerDOM[0].innerHTML).toContain(NEW_HEADER);
  });

  test('setHeader throw error with invalid header', () => {
    try {
      const myDialog = new Dialog({header: 'header'});
      // @ts-ignore
      myDialog.setHeader(1);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });

  test('Update header works normally without removing close button', () => {
    const headerDOM = document.createElement('h1');
    headerDOM.innerHTML = 'header 1';

    const myDialog = new Dialog({header: headerDOM, showCloseButton: true});

    const newHeaderDOM = document.createElement('h1');
    newHeaderDOM.innerHTML = 'header 2';
    myDialog.setHeader(newHeaderDOM);
    expect(myDialog.getHeader()).toBe(newHeaderDOM);
  });
});