/* eslint-disable @typescript-eslint/no-empty-function */
const messages = {
  INVALID_ARGUMENT: 'Error: invalid function arguments'
};

import Dialog from '../index';

describe('Unit test Dialog render', () => {

  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => {});
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('Render successfully without props', () => {
    const myDialog = new Dialog({});
    const container = myDialog.render();
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toContain('kuc-dialog-container');

    // Verify close button DOM
    const closeButtonDOM = container.getElementsByClassName('kuc-dialog-close-button');
    expect(closeButtonDOM.length).toEqual(1);
    expect(closeButtonDOM[0]).toBeInstanceOf(HTMLSpanElement);
  });

  test('Render successfully with full props', () => {
    const DIALOG_HEADER = 'Dialog header';
    const DIALOG_CONTENT = 'This is content';
    const DIALOG_FOOTER = 'Footer';
    const myDialog = new Dialog({
      header: DIALOG_HEADER,
      content: DIALOG_CONTENT,
      footer: DIALOG_FOOTER,
      isVisible: true,
      showCloseButton: true
    });
    const container = myDialog.render();
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toContain('kuc-dialog-container');

    // Verify header DOM
    const headerDOM = container.getElementsByClassName('kuc-dialog-header');
    expect(headerDOM.length).toEqual(1);
    expect(headerDOM[0]).toBeInstanceOf(HTMLDivElement);
    expect(headerDOM[0].innerHTML).toContain(DIALOG_HEADER);

    // Verify close button DOM
    const closeButtonDOM = container.getElementsByClassName('kuc-dialog-close-button');
    expect(closeButtonDOM.length).toEqual(1);
    expect(closeButtonDOM[0]).toBeInstanceOf(HTMLSpanElement);

    // Verify content DOM
    const contentDOM = container.getElementsByClassName('kuc-dialog-body');
    expect(contentDOM.length).toEqual(1);
    expect(contentDOM[0]).toBeInstanceOf(HTMLDivElement);
    expect(contentDOM[0].innerHTML).toEqual(DIALOG_CONTENT);

    // Verify footer DOM
    const footerDOM = container.getElementsByClassName('kuc-dialog-footer');
    expect(footerDOM.length).toEqual(1);
    expect(footerDOM[0]).toBeInstanceOf(HTMLDivElement);
    expect(footerDOM[0].innerHTML).toEqual(DIALOG_FOOTER);
  });

  test('Render hidden Dialog successfully', () => {
    const myDialog = new Dialog({isVisible: false});
    const container = myDialog.render();
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-dialog-container hidden');
    } else {
      expect(false);
    }
  });

  test('Render successfully when showCloseButton is false', () => {
    const myDialog = new Dialog({showCloseButton: false});
    const container = myDialog.render();
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toContain('kuc-dialog-container');
  });

  // WILL BE REMOVED
  test('Render successfully when showCloseButton is true', () => {
    const myDialog = new Dialog({showCloseButton: true});
    const container = myDialog.render();
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toContain('kuc-dialog-container');
  });

  test('Init failed with invalid header props', () => {
    try {
      // @ts-ignore
      const myDialog = new Dialog({
        header: 1,
      });
      if (myDialog) {
        expect(false);
      }
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });

  test('Init failed with invalid content props', () => {
    try {
      // @ts-ignore
      const myDialog = new Dialog({
        content: 1,
      });
      if (myDialog) {
        expect(false);
      }
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });

  test('Init failed with invalid footer props', () => {
    try {
      // @ts-ignore
      const myDialog = new Dialog({
        footer: 1,
      });
      if (myDialog) {
        expect(false);
      }
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });

  test('Init failed with invalid showCloseButton props', () => {
    try {
      // @ts-ignore
      const myDialog = new Dialog({
        showCloseButton: 'abc',
      });
      if (myDialog) {
        expect(false);
      }
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });

  test('Init failed with invalid isVisible props', () => {
    try {
      // @ts-ignore
      const myDialog = new Dialog({
        isVisible: 'abc',
      });
      if (myDialog) {
        expect(false);
      }
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });

  test('Close button function normally', () => {
    const myDialog = new Dialog({showCloseButton: true});
    const container = myDialog.render();

    // @ts-ignore
    myDialog._closeButton._onClick();
    expect(container.firstElementChild).toBeTruthy();
    expect(container.firstElementChild!.className).toContain('kuc-dialog-container hidden');
  });
});