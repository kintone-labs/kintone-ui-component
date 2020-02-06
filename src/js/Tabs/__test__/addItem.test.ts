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

  test('addItem is called correctly', () => {
    const newTabName = 'Tab3';
    const items = [{
      tabName: 'Tab1',
    }, {
      tabName: 'Tab2',
    }];
    const myTabs = new Tabs({items});
    const newTab = {
      tabName: newTabName,
    };
    myTabs.addItem(newTab);
    const tabItems = myTabs.getItems();
    expect(tabItems).toBeTruthy();
    expect(tabItems!.length).toEqual(3);

    // Verify tab name DOM
    const container = myTabs.render();
    const tabNameDOMList = container.getElementsByClassName('kuc-tabs-container');
    expect(tabNameDOMList.length).toEqual(3);
    const newTabDOM = tabNameDOMList[2] as HTMLLIElement;
    expect(newTabDOM.innerHTML).toEqual(newTabName);
  });

  test('addItem throw error when called with no param', () => {
    try {
      const items = [{
        tabName: 'Tab1',
      }, {
        tabName: 'Tab2',
      }];
      const myTabs = new Tabs({items});
      // @ts-ignore
      myTabs.addItem();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(messages.INVALID_ARGUMENT);
    }
  });

  test('addItem throw error when called with no tabName', () => {
    try {
      const items = [{
        tabName: 'Tab1',
      }, {
        tabName: 'Tab2',
      }];
      const myTabs = new Tabs({items});
      // @ts-ignore
      myTabs.addItem({});
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(messages.MISSING_NEW_ITEM_TABNAME);
    }
  });
});