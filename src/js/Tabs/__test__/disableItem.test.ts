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
    expect(tabItems).toBeTruthy();
    const disabledTab = tabItems![1];
    expect(disabledTab.isDisabled).toBeTruthy();

    // Verify tab name DOM
    const container = myTabs.render();
    const tabNameDOMList = container.getElementsByClassName('kuc-tabs-container');
    expect(tabNameDOMList.length).toEqual(2);
    const disabledTabNameDOM = tabNameDOMList[1];
    expect(disabledTabNameDOM.classList).toContain('kuc-tabs-disabled');
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