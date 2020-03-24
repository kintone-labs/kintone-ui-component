import CheckBox from '../index';

describe('Unit test CheckBox setItems and getItems', () => {
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
    const checkBox = new CheckBox();
    const container = checkBox.render();
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
    checkBox.setItems(newItems);

    if (!container.children || container.children.length !== 2) {
      expect(false);
    }
    const items = container.children;
    // check each items
    for (let index = 0; index < 2; index++) {
      const item: Element = items[index];
      if (!item.children || item.children.length !== 2) {
        expect(false);
      }
      const inputEl = item.children[0] as HTMLInputElement;
      const labelEl: Element = item.children[1];

      // check input & label elements
      if (expectedIsDisabled[index]) {
        expect(inputEl).toBeDisabled();
      } else {
        expect(inputEl).not.toBeDisabled();
      }
      expect(labelEl.textContent).toBe(expectedLabels[index]);
    }

    // check getItems
    expect(checkBox.getItems()).toEqual(newItems);
  });

  test('Function setItems replace items successfully', () => {
    const checkBox = new CheckBox({
      items: [
        {
          label: expectedLabels[2],
          value: expectedValues[2]
        }
      ]
    });
    const container = checkBox.render();
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
    checkBox.setItems(newItems);

    if (!container.children || container.children.length !== 2) {
      expect(false);
    }
    const items = container.children;
    // check each items
    for (let index = 0; index < 2; index++) {
      const item: Element = items[index];
      if (!item.children || item.children.length !== 2) {
        expect(false);
      }
      const inputEl = item.children[0] as HTMLInputElement;
      const labelEl: Element = item.children[1];

      // check input & label elements
      if (expectedIsDisabled[index]) {
        expect(inputEl).toBeDisabled();
      } else {
        expect(inputEl).not.toBeDisabled();
      }
      expect(labelEl.textContent).toBe(expectedLabels[index]);
    }
  });

  test('Function setItem run successfully without optional props', () => {
    const checkBox = new CheckBox();
    const container = checkBox.render();
    const newItems = [
      {
        value: expectedValues[0]
      }
    ];
    checkBox.setItems(newItems);
    const items = container.children;
    const item: Element = items[0];
    if (!item.children || item.children.length !== 1) {
      expect(false);
    }
    const inputEl = item.children[0] as HTMLInputElement;

    // check input & label elements
    expect(inputEl).not.toBeDisabled();

    // check getItems
    expect(checkBox.getItems()).toEqual(newItems);
  });

  test('throw error without items', () => {
    expect(() => {
      const checkBox = new CheckBox();
      // @ts-ignore
      checkBox.setItems(null);
    }).toThrowError();
  });

  test('throw error without item.value', () => {
    expect(() => {
      const checkBox = new CheckBox();
      // @ts-ignore
      checkBox.setItems([{
        label: expectedLabels[0],
        isDisabled: true
      }]);
    }).toThrowError();
  });
});
