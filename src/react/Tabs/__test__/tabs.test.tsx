/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Tabs from '../index';

const messages = {
  INVALID_ARGUMENT: 'Error: invalid function arguments',
  MISSING_TAB_NAME: 'Missing tab name on tab item[{{index}}]',
  INVALID_ACTION: 'Behavior invalid'
};

describe('Unit test for Tabs react', () => {
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
    const {container} = render(<Tabs />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-tabs-tabs');
    } else {
      expect(false);
    }
  });

  test('Render successfully with full props', () => {
    const items = [{
      tabName: 'Tab 1',
    }, {
      tabName: 'Tab 2',
    }, {
      tabName: 'Tab 3',
    }];
    const {container} = render(
      <Tabs
        items={items}
        value={1}
      />
    );

    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-tabs-tabs');
    } else {
      expect(false);
    }
  });

  test('Render successfully without value', () => {
    const items = [{
      tabName: 'Tab 1',
    }, {
      tabName: 'Tab 2',
    }];
    const {container} = render(
      <Tabs
        items={items}
      />
    );

    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-tabs-tabs');
    } else {
      expect(false);
    }
  });

  test('Render successfully with disabled tab', () => {
    const items = [{
      tabName: 'Tab 1',
    }, {
      tabName: 'Tab 2',
      isDisabled: true
    }, {
      tabName: 'Tab 3',
    }];
    const {container} = render(
      <Tabs
        items={items}
        value={2}
      />
    );

    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-tabs-tabs');
    } else {
      expect(false);
    }
  });

  test('Throw error when value is not number', () => {
    try {
      const items = [{
        tabName: 'Tab 1',
      }];
      const {container} = render(
        <Tabs
          items={items}
          // @ts-ignore
          value="a"
        />
      );
      expect(container).toBeUndefined();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(messages.INVALID_ARGUMENT);
    }
  });

  test('Throw error when value is negative', () => {
    try {
      const items = [{
        tabName: 'Tab 1',
      }];
      const {container} = render(
        <Tabs
          items={items}
          value={-1}
        />
      );
      expect(container).toBeUndefined();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(messages.INVALID_ARGUMENT);
    }
  });

  test('Throw error when missing tab name', () => {
    try {
      const items = [{
        tabName1: 'Tab 1',
      }];
      const {container} = render(
        <Tabs
          // @ts-ignore
          items={items}
        />
      );
      expect(container).toBeUndefined();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(messages.MISSING_TAB_NAME.replace('{{index}}', '0'));
    }
  });

  test('Throw error when disable selected tab and vice versa', () => {
    try {
      const items = [{
        tabName: 'Tab 1'
      }, {
        tabName: 'Tab 2',
        isDisabled: true
      }];
      const {container} = render(
        <Tabs
          // @ts-ignore
          items={items}
          value={1}
        />
      );
      expect(container).toBeUndefined();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(messages.INVALID_ACTION);
    }
  });

  test('onClickTabItem called successfully', () => {
    const handler = (tabIndex: number) => {
      expect(tabIndex).toEqual(0);
    };

    const items = [{
      tabName: 'Tab 1',
    }, {
      tabName: 'Tab 2',
    }];
    const {container, getByText} = render(
      <Tabs
        items={items}
        onClickTabItem={handler}
        value={1}
      />
    );
    if (container.firstElementChild) {
      fireEvent.click(getByText('Tab 1'));
    } else {
      expect(false);
    }
  });

  test('onKeyUp called successfully', () => {
    const handler = jest.fn((tabIndex: number) => {
      expect(tabIndex).toEqual(0);
    });

    const items = [{
      tabName: 'Tab 1',
    }, {
      tabName: 'Tab 2',
    }];
    const {container, getByText} = render(
      <Tabs
        items={items}
        onClickTabItem={handler}
        value={1}
      />
    );
    expect(container.firstElementChild).toBeTruthy();
    fireEvent.click(getByText('Tab 1'));
    expect(handler).toBeCalled();
  });
});