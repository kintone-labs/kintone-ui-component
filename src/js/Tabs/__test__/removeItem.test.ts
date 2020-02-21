/* eslint-disable @typescript-eslint/no-empty-function */
import Tabs from '../index';

const messages = {
  INVALID_ARGUMENT: 'Error: invalid function arguments',
  MISSING_TAB_NAME: 'Missing tab name on tab item[{{index}}]',
  INVALID_ACTION: 'Behavior invalid',
  MISSING_NEW_ITEM_TABNAME: 'Missing tab name.'
};

describe('Unit test Tabs addItem', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => {});
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('removeItem is called correctly', () => {
    const items = [{
      tabName: 'Tab1',
    }, {
      tabName: 'Tab2',
    }];
    const myTabs = new Tabs({items});
    myTabs.removeItem(1);
    const tabItems = myTabs.getItems();
    expect(tabItems).toBeTruthy();
    expect(tabItems!.length).toEqual(1);
    // Verify tab name DOM
    const container = myTabs.render();
    const tabNameDOMList = container.getElementsByClassName('kuc-tabs-container');
    expect(tabNameDOMList.length).toEqual(1);
  });

  test('removeItem throw error when index is not a number', () => {
    try {
      const items = [{
        tabName: 'Tab1',
      }, {
        tabName: 'Tab2',
      }];
      const myTabs = new Tabs({items});
      // @ts-ignore
      myTabs.removeItem('a');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(messages.INVALID_ARGUMENT);
    }
  });

  test('removeItem throw error when index is negative', () => {
    try {
      const items = [{
        tabName: 'Tab1',
      }, {
        tabName: 'Tab2',
      }];
      const myTabs = new Tabs({items});
      myTabs.removeItem(-1);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(messages.INVALID_ARGUMENT);
    }
  });
});