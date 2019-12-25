/* eslint-disable @typescript-eslint/no-empty-function */
import Tabs from '../index';
import {getByText, fireEvent} from '@testing-library/dom';

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

  test('on is called correctly', () => {
    const items = [{
      tabName: 'Tab1'
    }, {
      tabName: 'Tab2'
    }];
    const myTabs = new Tabs({items});
    const container = myTabs.render();
    myTabs.on('clickTabItem', (tabIndex) => {
      expect(tabIndex).toEqual(1);
    });
    if (container) {
      const tab2 = getByText(container, 'Tab2');
      fireEvent.click(tab2);
    } else {
      expect(false);
    }
  });

  test('on is called correctly with event other than clickTabItem', () => {
    const items = [{
      tabName: 'Tab1'
    }];

    const myTabs = new Tabs({items});
    const container = myTabs.render();
    myTabs.on('click', () => {
      expect(true);
    });
    if (container && container.onclick) {
      // @ts-ignore
      container.onclick();
    } else {
      expect(false);
    }
  });
});