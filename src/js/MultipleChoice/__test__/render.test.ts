import MultipleChoice from '../index';

describe('Unit test MultipleChoice render', () => {
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
    const multipleChoice = new MultipleChoice();
    const container = multipleChoice.render();
    expect(container.classList.length).toBe(2);
    expect(['kuc-multiple-list'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).toBeVisible();
  });

  test('Render successfully with full props', () => {
    // Set the different values from the default values.
    const multipleChoice = new MultipleChoice({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
          isDisabled: true
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
      ],
      value: [expectedValues[0], expectedValues[1]],
      isDisabled: true,
      isVisible: false
    });
    const container = multipleChoice.render();
    expect(container.classList.length).toBe(2);
    expect(['kuc-multiple-list'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).not.toBeVisible();
    if (!container.children || container.children.length !== 3) {
      expect(false);
    }
    const items = container.children;
    const selectedItem = multipleChoice.getValue() || [];
    // Check each items
    for (let index = 0; index < 3; index++) {
      const item = items[index];
      if (!item.children || item.children.length !== 2) {
        expect(false);
      }
      const labelEl = item.children[1];

      // Check input & label elements
      expect(item.classList.contains('kuc-list-item-disable')).toBe(true);
      expect(labelEl.textContent).toBe(expectedLabels[index]);

      // Check selected items
      if (selectedItem.indexOf(expectedValues[index]) > -1) {
        expect(item.classList.contains('kuc-list-item-selected')).toBe(true);
      } else {
        expect(item.classList.contains('kuc-list-item-selected')).toBe(false);
      }
    }
  });

  test('Render successfully with right disabled property value', () => {
    const disabledFlg = [false, true];
    const multipleChoice = new MultipleChoice({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
          isDisabled: disabledFlg[0]
        },
        {
          label: expectedLabels[1],
          value: expectedValues[1],
          isDisabled: disabledFlg[1]
        }
      ],
      isDisabled: false,
      isVisible: true
    });
    const container = multipleChoice.render();
    expect(container.classList.length).toBe(2);
    expect(['kuc-multiple-list'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).toBeVisible();
    if (!container.children || container.children.length !== 2) {
      expect(false);
    }
    const items = container.children;
    // Check each items
    for (let index = 0; index < 2; index++) {
      const item = items[index];
      if (!item.children || item.children.length !== 2) {
        expect(false);
      }
      const labelEl = item.children[1];

      // Check input & label elements
      expect(item.classList.contains('kuc-list-item-disable')).toBe(disabledFlg[index]);
      expect(labelEl.textContent).toBe(expectedLabels[index]);

      // Check selected items
      expect(item.classList.contains('kuc-list-item-selected')).toBe(false);
    }
  });

  test('Render successfully with wrong props', () => {
    // Confirm to be set the default values if an invalid value was set.
    // @ts-ignore
    const multipleChoice = new MultipleChoice({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
          isDisabled: false
        }],
      isDisabled: 'abc',
      isVisible: 'abc'
    });
    const container = multipleChoice.render();
    expect(container.classList.length).toBe(2);
    expect(['kuc-multiple-list'].every(c => container.classList.contains(c))).toBe(true);
    expect(container.classList.contains('kuc-list-item-disable')).toBe(false);
    expect(container).toBeVisible();

    if (!container.children || container.children.length !== 2) {
      expect(false);
    }
    const items = container.children;
    const item = items[0];
    const labelEl = item.children[1];
    if (!item.children || item.children.length !== 2) {
      expect(false);
    }
    expect(item.classList.contains('kuc-list-item-disable')).toBe(false);
    expect(labelEl.textContent).toBe(expectedLabels[0]);
  });

  test('Throw error with invalid option.items', () => {
    expect(() => {
      // @ts-ignore
      new MultipleChoice({
        items: ['orange', 'banana', 'lemon']
      });
    }).toThrowError();
  });

  test('Throw error with duplicate option.items[x].value', () => {
    expect(() => {
      new MultipleChoice({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          },
          {
            label: expectedLabels[1],
            value: expectedValues[0],
            isDisabled: true
          }
        ],
        value: []
      });
    }).toThrowError();
  });

  test('Throw error with invalid prop type of option.value', () => {
    expect(() => {
      // @ts-ignore
      new MultipleChoice({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          }
        ],
        // In case of not specify by array type.
        value: expectedValues[0]
      });
    }).toThrowError();
  });

  test('Throw error with invalid option.value not in item list', () => {
    expect(() => {
      new MultipleChoice({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          }
        ],
        // In case of specify value not in item list.
        value: [expectedValues[1]]
      });
    }).toThrowError();
  });

  test('Throw error with duplicate option.value', () => {
    expect(() => {
      new MultipleChoice({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          },
          {
            label: expectedLabels[1],
            value: expectedValues[1],
            isDisabled: true
          }
        ],
        // In case of overlap choice.
        value: [expectedValues[0], expectedValues[0]],
      });
    }).toThrowError();
  });
});