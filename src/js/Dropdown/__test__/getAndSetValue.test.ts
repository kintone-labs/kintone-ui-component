import Dropdown from '../index';

describe('Unit test Dropdown setValue and getValue', () => {
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

  test('Function getValue and setValue run successfully with full props', () => {
    const dropdown = new Dropdown({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
          isDisabled: false
        },
        {
          label: expectedLabels[1],
          value: expectedValues[1],
          isDisabled: false
        },
        {
          label: expectedLabels[2],
          value: expectedValues[2],
          isDisabled: true
        }
      ]
    });
    const container = dropdown.render();
    dropdown.setValue(expectedValues[1]);

    const itemsEl: HTMLCollection = container.querySelector('.kuc-list-outer')!.children;
    if (!container.children || itemsEl.length !== 3) {
      expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i];
      const itemLabelEl = itemEl.children[1] as HTMLSpanElement;
      expect(itemLabelEl.innerText).toBe(expectedLabels[i]);

      if (i <= 1) {
        expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(false);
      } else {
        expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(true);
      }
    }

    expect(dropdown.getValue()).toBe(expectedValues[1]);
  });

  test('throw error without value', () => {
    expect(() => {
      const dropdown = new Dropdown();
      // @ts-ignore
      dropdown.setValue(null);
    }).toThrowError();
  });

  test('throw error with nonexistent value', () => {
    expect(() => {
      const dropdown = new Dropdown();
      dropdown.setValue(expectedValues[1]);
    }).toThrowError();
  });

  test('throw error with number value', () => {
    expect(() => {
      const dropdown = new Dropdown();
      // @ts-ignore
      dropdown.setValue(1);
    }).toThrowError();
  });
});