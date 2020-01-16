/* eslint-disable @typescript-eslint/no-empty-function */
import Tabs from '../index';

const messages = {
  INVALID_ARGUMENT: 'Error: invalid function arguments',
  MISSING_TAB_NAME: 'Missing tab name on tab item[{{index}}]',
  INVALID_ACTION: 'Behavior invalid'
};

describe('Unit test Tabs render', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => {});
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('setValue is called correctly', () => {
    const items = [{
      tabName: 'Tab1',
    }, {
      tabName: 'Tab2',
    }, {
      tabName: 'Tab3',
    }];
    const myTabs = new Tabs({items});
    myTabs.setValue(1);
    expect(myTabs.getValue()).toEqual(1);

    // Verify tab DOM
    const container = myTabs.render();
    const tabNameDOMList = container.getElementsByClassName('kuc-tabs-container');
    expect(tabNameDOMList.length).toEqual(3);
    const selectedTabNameDOM = tabNameDOMList[1];
    expect(selectedTabNameDOM.classList).toContain('kuc-tabs-container-selection');
  });

  test('Throw error when setValue is called with negative value', () => {
    try {
      const items = [{
        tabName: 'Tab1',
      }, {
        tabName: 'Tab2',
      }, {
        tabName: 'Tab3',
      }];
      const myTabs = new Tabs({items});
      myTabs.setValue(-1);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(messages.INVALID_ARGUMENT);
    }
  });

  test('Throw error when setValue is called with undefined', () => {
    try {
      const items = [{
        tabName: 'Tab1',
      }, {
        tabName: 'Tab2',
      }, {
        tabName: 'Tab3',
      }];
      const myTabs = new Tabs({items});
      // @ts-ignore
      myTabs.setValue(undefined);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(messages.INVALID_ARGUMENT);
    }
  });

  test('Throw error when setValue with disabled tab', () => {
    try {
      const items = [{
        tabName: 'Tab1',
      }, {
        tabName: 'Tab2',
        isDisabled: true
      }, {
        tabName: 'Tab3',
      }];
      const myTabs = new Tabs({items});
      myTabs.setValue(1);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(messages.INVALID_ARGUMENT);
    }
  });
});