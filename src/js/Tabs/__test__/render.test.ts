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

  test('Render successfully without props', () => {
    const myTabs = new Tabs({});
    const container = myTabs.render();
    if (container) {
      expect(container.className).toContain('kuc-tabs-tabs');
    } else {
      expect(false);
    }
  });

  test('Render successfully with full props', () => {
    const items = [{
      tabName: 'Tab1',
    }, {
      tabName: 'Tab2',
    }, {
      tabName: 'Tab3',
    }];
    const myTabs = new Tabs({items});
    const container = myTabs.render();
    if (container) {
      expect(container.className).toContain('kuc-tabs-tabs');
    } else {
      expect(false);
    }
  });

  test('Value is set to default when value props is undefined', () => {
    const items = [{
      tabName: 'Tab1',
    }, {
      tabName: 'Tab2',
    }];

    // @ts-ignore
    const myTabs = new Tabs({items, value: undefined});
    const container = myTabs.render();
    if (container) {
      expect(container.className).toContain('kuc-tabs-tabs');
    } else {
      expect(false);
    }
  });

  test('Throw error when missing tab name', () => {
    try {
      const items = [{
        tabName: 'Tab1',
      }, {
        tabName: 'Tab2',
      }, {}];

      // @ts-ignore
      const myTabs = new Tabs({items});
      expect(myTabs).toBeUndefined();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(messages.MISSING_TAB_NAME.replace('{{index}}', '2'));
    }
  });
});