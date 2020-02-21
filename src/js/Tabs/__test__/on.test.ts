/* eslint-disable @typescript-eslint/no-empty-function */
import Tabs from '../index';
import {getByText, fireEvent} from '@testing-library/dom';

// const messages = {
//   INVALID_ARGUMENT: 'Error: invalid function arguments',
//   MISSING_TAB_NAME: 'Missing tab name on tab item[{{index}}]',
//   INVALID_ACTION: 'Behavior invalid',
//   MISSING_NEW_ITEM_TABNAME: 'Missing tab name.'
// };

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
    const onClickTabItem = jest.fn((tabIndex) => {
      expect(tabIndex).toEqual(1);
    });
    myTabs.on('clickTabItem', onClickTabItem);
    expect(container).toBeTruthy();
    const tab2 = getByText(container, 'Tab2');
    fireEvent.click(tab2);
    expect(onClickTabItem).toHaveBeenCalled();
  });

  test('on is called correctly with event other than clickTabItem', () => {
    const items = [{
      tabName: 'Tab1'
    }];

    const myTabs = new Tabs({items});
    const container = myTabs.render();

    const onClickHandler = jest.fn(() => {
      expect(true).toBeTruthy();
    });
    myTabs.on('click', onClickHandler);
    fireEvent.click(container);
    expect(onClickHandler).toHaveBeenCalled();
  });
});