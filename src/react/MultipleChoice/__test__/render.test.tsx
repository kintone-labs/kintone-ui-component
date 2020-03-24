/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import MultipleChoice from '../index';

describe('Unit test MultipleChoice react', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];

  test('Render successfully without props', () => {
    const {container} = render(<MultipleChoice />);
    if (container.firstElementChild) {
      const childEl = container.firstElementChild;
      expect(childEl.classList.length).toBe(2);
      expect(['kuc-multiple-list'].every(c => childEl.classList.contains(c))).toBe(true);
      expect(childEl.classList.contains('kuc-list-item-disable')).toBe(false);
      expect(childEl).toBeVisible();
    } else {
      expect(false);
    }
  });

  test('Render successfully with full props', () => {
    const expectedItems = [
      {
        label: expectedLabels[0],
        value: expectedValues[0],
        isDisabled: false
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1],
        isDisabled: true
      },
      {
        label: expectedLabels[2],
        value: expectedValues[2],
        isDisabled: true
      },
    ];
    const value = [expectedValues[0], expectedValues[1]];
    const {container} =
      render(
        <MultipleChoice
          items={expectedItems}
          value={value}
          isDisabled
          isVisible={false}
        />);
    if (container.firstElementChild) {
      const childEl = container.firstElementChild;
      expect(childEl.classList.length).toBe(1);
      expect(['kuc-multiple-list'].every(c => childEl.classList.contains(c))).toBe(true);
      expect(childEl).not.toBeVisible();
      if (!childEl.children || childEl.children.length !== 3) {
        expect(false);
      }
      const items = childEl.children;
      const ids: string[] = [];
      const selectedItem = value;
      // Check each items
      for (let index = 0; index < 3; index++) {
        const item = items[index];
        if (!item.children || item.children.length !== 2) {
          expect(false);
        }
        const inputEl = item.children[0] as HTMLInputElement;
        const labelEl = item.children[1];

        // Check input & label elements
        // expect(inputEl).toBeDisabled();
        expect(item.classList.contains('kuc-list-item-disable')).toBe(true);
        expect(labelEl.textContent).toBe(expectedLabels[index]);

        // Check for item ids
        expect(inputEl.id === labelEl.getAttribute('for')).toBe(true);
        expect(ids.indexOf(inputEl.id) === -1).toBe(true);
        ids.push(inputEl.id);

        // Check selected items
        if (selectedItem.indexOf(expectedValues[index]) > -1) {
          expect(inputEl.checked).toBe(true);
        } else {
          expect(inputEl.checked).toBe(false);
        }
      }
    } else {
      expect(false);
    }
  });

  test('Render successfully with wrong props', () => {
    const expectedItems = [
      {
        label: expectedLabels[0],
        value: expectedValues[0],
        isDisabled: false
      }
    ];
    // @ts-ignore
    const {container} = render(<MultipleChoice items={expectedItems} isVisible="abc" isDisabled="abc" />);
    if (container.firstElementChild) {
      const childEl = container.firstElementChild;
      expect(childEl.classList.length).toBe(3);
      expect(['kuc-multiple-list'].every(c => childEl.classList.contains(c))).toBe(true);
      expect(childEl.classList.contains('kuc-list-item-disable')).toBe(false);
      expect(childEl).toBeVisible();

      const items = childEl.children;
      const item = items[0];
      expect(item.classList.contains('kuc-list-item-disable')).toBe(false);
      if (!item.children || item.children.length !== 2) {
        expect(false);
      }
      const inputEl = item.children[0] as HTMLInputElement;
      expect(inputEl).not.toBeDisabled();
    } else {
      expect(false);
    }
  });

  test('Render successfully with onChange for selected', () => {
    const expectedItems = [
      {
        label: expectedLabels[0],
        value: expectedValues[0],
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1],
      }
    ];
    let value = [expectedValues[0], expectedValues[1]];
    const handleChange = (val: string[]) => {
      // Check that expectedValues[0] is selected by click container.firstElementChild
      expect(val).toEqual([expectedValues[1]]);
      value = val;
    };
    const {container} = render(
      <MultipleChoice
        items={expectedItems}
        value={value}
        onChange={handleChange}
      />);
    if (container.firstElementChild) {
      const childEl = container.firstElementChild;
      fireEvent.click(childEl.children[0].children[0]);
      expect(value).toEqual([expectedValues[1]]);
    } else {
      expect(false);
    }
  });

  test('Render successfully with onChange for not selected', () => {
    const expectedItems = [
      {
        label: expectedLabels[0],
        value: expectedValues[0],
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1],
      }
    ];
    let value = [expectedValues[1]];
    const handleChange = (val: string[]) => {
      // Check that expectedValues[0] is selected by click container.firstElementChild
      expect(val.every(c => [expectedValues[0], expectedValues[1]].includes(c))).toBe(true);
      value = val;
    };
    const {container} = render(<MultipleChoice items={expectedItems} value={value} onChange={handleChange} />);
    if (container.firstElementChild) {
      const childEl = container.firstElementChild;
      fireEvent.click(childEl.children[0].children[0]);
      expect(value.every(c => [expectedValues[0], expectedValues[1]].includes(c))).toBe(true);
    } else {
      expect(false);
    }
  });

  test('onClick event will not work', () => {
    const expectedItems = [
      {
        label: expectedLabels[0],
        value: expectedValues[0],
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1],
      }
    ];
    const value = [expectedValues[1]];
    const handleClick = (e: any) => {
      // Check handleClick will not work
      expect(false);
    };
    // @ts-ignore
    const {container} = render(<MultipleChoice items={expectedItems} value={value} onClick={handleClick} />);
    if (container.firstElementChild) {
      const childEl = container.firstElementChild;
      fireEvent.click(childEl);
    } else {
      expect(false);
    }
  });

  test('Throw error with invalid option.items', () => {
    expect(() => {
      // @ts-ignore
      render(<MultipleChoice items={['orange', 'banana', 'lemon']} />);
    }).toThrowError();
  });

  test('Throw error with duplicate option.items[x].value', () => {
    expect(() => {
      const expectedItems = [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
        },
        {
          label: expectedLabels[1],
          value: expectedValues[0],
        }
      ];
      render(<MultipleChoice items={expectedItems} />);
    }).toThrowError();
  });

  test('Throw error with invalid prop type of option.value', () => {
    expect(() => {
      const expectedItems = [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
        },
        {
          label: expectedLabels[1],
          value: expectedValues[1],
        }
      ];
      // @ts-ignore
      render(<MultipleChoice items={expectedItems} value={expectedValues[0]} />);
    }).toThrowError();
  });

  test('Throw error with invalid prop value of option.value', () => {
    expect(() => {
      const expectedItems = [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
        },
        {
          label: expectedLabels[1],
          value: expectedValues[1],
        }
      ];
      render(<MultipleChoice items={expectedItems} value={[expectedValues[2]]} />);
    }).toThrowError();
  });

  test('Throw error with duplicate option.value', () => {
    expect(() => {
      const expectedItems = [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
        },
        {
          label: expectedLabels[1],
          value: expectedValues[1],
        }
      ];
      render(<MultipleChoice items={expectedItems} value={[expectedValues[0], expectedValues[0]]} />);
    }).toThrowError();
  });
});