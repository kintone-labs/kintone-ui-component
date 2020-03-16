import Dropdown from '../index';

describe('Unit test Dropdown setItems and getItems', () => {
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

  test('Function getItems and setItems run successfully without optional props', () => {
    const dropdown = new Dropdown();
    const container = dropdown.render();

    const newItem = [
      {
        value: expectedValues[0],
      },
      {
        value: expectedValues[1],
      },
      {
        value: expectedValues[2],
      },
    ];
    dropdown.setItems(newItem);

    const itemsEl = container.querySelector('.kuc-list-outer')!.children;
    if (!container.children || itemsEl.length !== 2) {
      expect(false);
    }
    expect(dropdown.getItems()).toBe(newItem);
  });

  test('Function getItems and setItems run successfully with full props', () => {
    const dropdown = new Dropdown();
    const container = dropdown.render();

    const newItem = [
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
      },
    ];
    dropdown.setItems(newItem);
    const itemsEl = container.querySelector('.kuc-list-outer')!.children;
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

    expect(dropdown.getItems()).toBe(newItem);
  });

  test('Function getItems and setItems replace items successfully', () => {
    const dropdown = new Dropdown({
      items: [
        {
          label: expectedLabels[2],
          value: expectedValues[2],
          isDisabled: true
        }
      ]
    });
    const container = dropdown.render();
    const newItem = [
      {
        label: expectedLabels[0],
        value: expectedValues[0],
        isDisabled: false
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1],
        isDisabled: false
      }
    ];
    dropdown.setItems(newItem);
    const itemsEl = container.querySelector('.kuc-list-outer')!.children;
    if (!container.children || itemsEl.length !== 2) {
      expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i];
      const itemLabelEl = itemEl.children[1] as HTMLSpanElement;
      expect(itemLabelEl.innerText).toBe(expectedLabels[i]);
      expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(false);
    }

    expect(dropdown.getItems()).toBe(newItem);
  });

  test('throw error without item', () => {
    expect(() => {
      const dropdown = new Dropdown();
      // @ts-ignore
      dropdown.setItems(null);
    }).toThrowError();
  });

  test('throw error with duplicate items', () => {
    expect(() => {
      const dropdown = new Dropdown();
      const newItem = [
        {
          value: expectedValues[1],
        },
        {
          value: expectedValues[1],
        },
      ];
      // @ts-ignore
      dropdown.setItems(newItem);
    }).toThrowError();
  });

  test('throw error without item.value', () => {
    expect(() => {
      const dropdown = new Dropdown();
      const newItem = [
        {
          label: expectedLabels[1],
          isDisabled: true
        },
      ];
      // @ts-ignore
      dropdown.setItems(newItem);
    }).toThrowError();
  });

});