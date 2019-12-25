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

  test('disableItem is called correctly', () => {
    const items = [{
      tabName: 'Tab1',
    }, {
      tabName: 'Tab2',
    }];
    const myTabs = new Tabs({items});
    myTabs.disableItem('Tab2');
    const tabItems = myTabs.getItems();
    if (tabItems) {
      const disabledTab = tabItems[1];
      expect(disabledTab.isDisabled).toBeTruthy();
      // UPDATE IN SOURCE CODE: change isDisabled of tab in items to true
    } else {
      expect(false);
    }
  });

  test('disableItem throw error when called without tabName', () => {
    try {
      const items = [{
        tabName: 'Tab1',
      }, {
        tabName: 'Tab2',
      }];
      const myTabs = new Tabs({items});
      // @ts-ignore
      myTabs.disableItem();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(messages.INVALID_ARGUMENT);
    }
  });

  test('disableItem throw error when disable selected tab', () => {
    try {
      const items = [{
        tabName: 'Tab1',
      }, {
        tabName: 'Tab2',
      }];
      const myTabs = new Tabs({items});
      myTabs.disableItem('Tab1');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(messages.INVALID_ACTION);
    }
  });
});