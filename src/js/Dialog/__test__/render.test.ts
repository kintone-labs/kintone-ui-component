/* eslint-disable @typescript-eslint/no-empty-function */
const messages = {
  INVALID_ARGUMENT: 'Error: invalid function arguments'
};

import Dialog from '../index';

describe('Unit test Dialog js', () => {

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
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-dialog-container');
    } else {
      expect(false);
    }
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

  test('Function setHeader and getHeader run correctly', () => {
    const myDialog = new Dialog({header: 'header 1'});
    myDialog.setHeader('header 2');
    expect(myDialog.getHeader()).toEqual('header 2');
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

  test('Function setContent and getContent run correctly', () => {
    const myDialog = new Dialog({content: 'content 1'});
    myDialog.setContent('content 2');
    expect(myDialog.getContent()).toEqual('content 2');
  });

  test('setContent throw error with invalid header', () => {
    try {
      const myDialog = new Dialog({content: 'content'});
      // @ts-ignore
      myDialog.setContent(1);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });

  test('Function setFooter and getFooter run correctly', () => {
    const myDialog = new Dialog({footer: 'footer 1'});
    myDialog.setFooter('footer 2');
    expect(myDialog.getFooter()).toEqual('footer 2');
  });

  test('setFooter throw error with invalid header', () => {
    try {
      const myDialog = new Dialog({footer: 'footer'});
      // @ts-ignore
      myDialog.setFooter(1);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
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

  test('Function rerender work normally with no params', () => {
    const myDialog = new Dialog({});
    try {
      myDialog.rerender();
      expect(true);
    } catch (error) {
      if (error) {
        expect(false);
      }
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