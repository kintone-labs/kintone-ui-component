import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Dropdown from '../index';

describe('Unit test Dropdown react', () => {
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
    const {container} = render(<Dropdown />);
    const childEl = container.firstElementChild!;
    expect(childEl.className).toBe('kuc-dropdown-container');
    expect(childEl.classList.length).toBe(1);
    expect(childEl.getAttribute('disabled')).toBe(null);
    expect(childEl).toBeVisible();
  });

  test('Render successfully with full props', () => {
    const items = [
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
    const {container} = render(<Dropdown items={items} value={expectedValues[1]} isDisabled={false} />);
    const childEl = container.firstElementChild!;

    expect(childEl.className).toBe('kuc-dropdown-container');
    expect(childEl.classList.length).toBe(1);
    expect(childEl.getAttribute('disabled')).toBe(null);
    expect(childEl).toBeVisible();

    const selectedTextEl = childEl.querySelector('.kuc-dropdown-selected-label') as HTMLSpanElement;
    expect(selectedTextEl.textContent).toBe(expectedLabels[1]);

    const itemsEl = childEl.querySelector('.kuc-list-outer')!.children;
    if (!childEl.children || itemsEl.length !== 3) {
      expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLDivElement;
      const itemLabelEl = itemEl.children[1] as HTMLSpanElement;
      expect(itemLabelEl.textContent).toBe(expectedLabels[i]);

      if (i === 1) {
        expect(itemEl.classList.contains('kuc-list-item-selected')).toBe(true);
      } else {
        expect(itemEl.classList.contains('kuc-list-item-selected')).toBe(false);
      }

      if (i === 0) {
        expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(false);
      } else {
        expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(true);
      }
    }
  });

  test('Render successfully with wrong props', () => {
    // @ts-ignore
    const {container} = render(<Dropdown isVisible="abc" isDisabled="abc" />);
    const childEl = container.firstElementChild!;
    expect(childEl.className).toBe('kuc-dropdown-container');
    expect(childEl.classList.length).toBe(1);
    expect(childEl.getAttribute('disabled')).toBe(null);
    expect(childEl).toBeVisible();
  });

  test('Render successfully with showing selection list', () => {
    const {container} = render(<Dropdown />);
    const childEl = container.firstElementChild!;
    const dropdownOuterEl = childEl.querySelector('.kuc-dropdown-outer') as HTMLDivElement;
    const itemsEl = childEl.querySelector('.kuc-list-outer') as HTMLDivElement;
    fireEvent.click(dropdownOuterEl);
    expect(itemsEl.getAttribute('style')).toContain('display: block');
  });

  test('Render successfully with hiding selection list', () => {
    const {container} = render(<Dropdown />);
    const childEl = container.firstElementChild!;
    const dropdownOuterEl = childEl.querySelector('.kuc-dropdown-outer') as HTMLDivElement;
    const itemsEl = childEl.querySelector('.kuc-list-outer') as HTMLDivElement;
    const body = document.body;

    fireEvent.click(dropdownOuterEl);
    fireEvent.mouseDown(body);
    expect(itemsEl).not.toBeVisible();
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
    const handleChange = (val: string) => {
      expect(val).toBe(expectedValues[1]);
    };
    const {container} = render(<Dropdown items={expectedItems} value={expectedValues[0]} onChange={handleChange} />);
    const childEl = container.firstElementChild!;
    const itemEl = childEl.children[0].children[1].children[1];
    fireEvent.click(itemEl);
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
    let counter = 0;
    const handleClick = (val: string) => {
      counter += 1;
      expect(false);
    };
    // @ts-ignore
    const {container} = render(<Dropdown items={expectedItems} value={expectedValues[1]} onClick={handleClick} />);
    const childEl = container.firstElementChild!;
    const itemEl = childEl.children[0].children[1].children[1];
    fireEvent.click(itemEl);
    expect(counter).toBe(0);
  });

  test('throw error with invalid option.items', () => {
    expect(() => {
      // @ts-ignore
      render(<Dropdown items={['orange', 'banana', 'lemon']} />);
    }).toThrowError();
  });

  test('throw error with invalid option.value', () => {
    expect(() => {
      const expectedItems = [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
        }
      ];
      // @ts-ignore
      render(<Dropdown items={expectedItems} value={expectedValues[1]} />);
    }).toThrowError();
  });

  test('throw error with duplicate option.items[x].value', () => {
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
      // @ts-ignore
      render(<Dropdown items={expectedItems} />);
    }).toThrowError();
  });

  test('throw error with invalid option.items[x].value', () => {
    expect(() => {
      const expectedItems = [
        {
          label: expectedLabels[0],
        },
        {
          label: expectedLabels[1],
        }
      ];
      // @ts-ignore
      render(<Dropdown items={expectedItems} />);
    }).toThrowError();
  });

});