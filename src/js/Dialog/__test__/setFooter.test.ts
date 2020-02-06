/* eslint-disable @typescript-eslint/no-empty-function */
const messages = {
  INVALID_ARGUMENT: 'Error: invalid function arguments'
};

import Dialog from '../index';

describe('Unit test Dialog setFooter', () => {

  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => {});
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('Function setFooter and getFooter run correctly', () => {
    const myDialog = new Dialog({footer: 'footer 1'});
    const NEW_FOOTER = 'footer 2';
    myDialog.setFooter(NEW_FOOTER);
    expect(myDialog.getFooter()).toEqual(NEW_FOOTER);

    // Verify footer DOM
    const container = myDialog.render();
    const footerDOM = container.getElementsByClassName('kuc-dialog-footer');
    expect(footerDOM.length).toEqual(1);
    expect(footerDOM[0]).toBeInstanceOf(HTMLDivElement);
    expect(footerDOM[0].innerHTML).toEqual(NEW_FOOTER);
  });

  test('setFooter throw error with invalid footer', () => {
    try {
      const myDialog = new Dialog({footer: 'footer'});
      // @ts-ignore
      myDialog.setFooter(1);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.INVALID_ARGUMENT);
    }
  });
});