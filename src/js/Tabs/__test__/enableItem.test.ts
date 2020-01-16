/* eslint-disable @typescript-eslint/no-empty-function */
import Tabs from '../index';

const messages = {
  INVALID_ARGUMENT: 'Error: invalid function arguments',
  MISSING_TAB_NAME: 'Missing tab name on tab item[{{index}}]',
  INVALID_ACTION: 'Behavior invalid',
  MISSING_NEW_ITEM_TABNAME: 'Missing tab name.'
};

describe('Unit test Tabs disableItem', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => {});
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('enableItem is called correctly', () => {
    const items = [{
      tabName: 'Tab1'
    }, {
      tabName: 'Tab2',
      isDisabled: true
    }];
    const myTabs = new Tabs({items});
    myTabs.enableItem('Tab2');
    const tabItems = myTabs.getItems();
    expect(tabItems).toBeTruthy();
    // @ts-ignore
    const enabledTab = tabItems[1];
    expect(enabledTab.isDisabled).toBeFalsy();

    // Verify tab name DOM
    const container = myTabs.render();
    const tabNameDOMList = container.getElementsByClassName('kuc-tabs-container');
    expect(tabNameDOMList.length).toEqual(2);
    const disabledTabNameDOM = tabNameDOMList[1];
    expect(disabledTabNameDOM.classList).not.toContain('kuc-tabs-disabled');
  });

  test('enableItem throws error when called withou tabName', () => {
    try {
      const items = [{
        tabName: 'Tab1'
      }, {
        tabName: 'Tab2'
      }];
      const myTabs = new Tabs({items});
      // @ts-ignore
      myTabs.enableItem();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(messages.INVALID_ARGUMENT);
    }
  });
});