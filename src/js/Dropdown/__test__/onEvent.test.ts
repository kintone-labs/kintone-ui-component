
import Dropdown from '../index';
import {fireEvent} from '@testing-library/dom';

describe('Unit test Dropdown onEvent', () => {
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

  test('Function onChange event run successfully', () => {
    const dropdown = new Dropdown({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0]
        },
        {
          label: expectedLabels[1],
          value: expectedValues[1]
        },
        {
          label: expectedLabels[2],
          value: expectedValues[2]
        },
      ],
      value: expectedValues[1],
      isDisabled: false,
      isVisible: true
    });
    const container = dropdown.render();
    const itemsEl = container.querySelector('.kuc-list-outer')!.children;
    const itemEl = itemsEl[2];
    dropdown.on('change', (e: any) => {
      expect(e).toBe(expectedValues[2]);
    });
    fireEvent.click(itemEl);
    const selectedTextEl = container.querySelector('.kuc-dropdown-selected-label') as HTMLSpanElement;
    expect(selectedTextEl.innerText).toBe(expectedLabels[2]);
  });

  test('Function onClick event will not work', () => {
    const dropdown = new Dropdown({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0]
        },
        {
          label: expectedLabels[1],
          value: expectedValues[1]
        },
        {
          label: expectedLabels[2],
          value: expectedValues[2]
        },
      ],
      value: expectedValues[1],
      isDisabled: false,
      isVisible: true
    });
    const container = dropdown.render();
    const itemsEl = container.querySelector('.kuc-list-outer')!.children;
    const itemEl = itemsEl[2];
    let counter = 0;
    dropdown.on('click', (e: any) => {
      counter += 1;
    });
    fireEvent.click(itemEl);
    expect(counter).toBe(0);
  });

});