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
  });

  test('Render successfully with full props', () => {
    const myDialog = new Dialog({
      header: 'Dialog header',
      content: 'This is content',
      footer: 'Footer',
      isVisible: true,
      showCloseButton: true
    });
    const container = myDialog.render();
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-dialog-container');
    } else {
      expect(false);
    }
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
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-dialog-container');
    } else {
      expect(false);
    }
  });

  // WILL BE REMOVED
  test('Render successfully when showCloseButton is true', () => {
    const myDialog = new Dialog({showCloseButton: true});
    const container = myDialog.render();
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-dialog-container');
    } else {
      expect(false);
    }
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

    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-dialog-container hidden');
    } else {
      expect(false);
    }
  });
});