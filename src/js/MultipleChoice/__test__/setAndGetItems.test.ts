import MultipleChoice from '../index';

describe('Unit test MultipleChoice setItems and getItems', () => {
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
  const expectedIsDisabled = [false, true, true];

  test('Function setItems & getItems run successfully with full props', () => {
    const multipleChoice = new MultipleChoice();
    const container = multipleChoice.render();
    const newItems = [
      {
        label: expectedLabels[0],
        value: expectedValues[0],
        isDisabled: expectedIsDisabled[0]
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1],
        isDisabled: expectedIsDisabled[1]
      }
    ];
    multipleChoice.setItems(newItems);

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
      if (expectedIsDisabled[index]) {
        expect(item.classList.contains('kuc-list-item-disable')).toBe(true);
      } else {
        expect(item.classList.contains('kuc-list-item-disable')).toBe(false);
      }
      expect(labelEl.textContent).toBe(expectedLabels[index]);
    }

    // Check getItems
    expect(multipleChoice.getItems()).toEqual(newItems);
  });

  test('Function AddItem run successfully without optional props', () => {
    const multipleChoice = new MultipleChoice();
    const container = multipleChoice.render();
    const newItems = [
      {
        value: expectedValues[0]
      }
    ];
    multipleChoice.setItems(newItems);
    const items = container.children;
    const item = items[0];
    if (!item.children || item.children.length !== 1) {
      expect(false);
    }

    // Check input & label elements
    expect(item.classList.contains('kuc-list-item-disable')).toBe(false);

    // Check getItems
    expect(multipleChoice.getItems()).toEqual(newItems);
  });

  test('Throw error without items', () => {
    expect(() => {
      const multipleChoice = new MultipleChoice();
      // @ts-ignore
      multipleChoice.setItems(null);
    }).toThrowError();
  });

  test('Throw error without item.value', () => {
    expect(() => {
      const multipleChoice = new MultipleChoice();
      // @ts-ignore
      multipleChoice.setItems([{
        label: expectedLabels[0],
        isDisabled: true
      }]);
      // No error occurs even if the value of required item is not specified
    }).toThrowError();
  });
});