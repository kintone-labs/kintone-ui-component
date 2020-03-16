import RadioButton from '../index';

describe('Unit test RadioButton setItems and getItems', () => {
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
    const radioButton = new RadioButton();
    const container = radioButton.render();
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
    radioButton.setItems(newItems);

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
      const inputEl = (item.children[0] as HTMLInputElement);
      const labelEl = item.children[1] as HTMLLabelElement;

      // check input & label elements
      if (expectedIsDisabled[index]) {
        expect(inputEl).toBeDisabled();
      } else {
        expect(inputEl).not.toBeDisabled();
      }
      expect(labelEl.innerText).toBe(expectedLabels[index]);
    }

    // check getItems
    expect(radioButton.getItems()).toEqual(newItems);
  });

  test('Function setItems replace items successfully', () => {
    const radioButton = new RadioButton({
      name: 'fruit',
      items: [
        {
          label: expectedLabels[2],
          value: expectedValues[2]
        }
      ]
    });
    const container = radioButton.render();
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
    radioButton.setItems(newItems);

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
      const labelEl = item.children[1] as HTMLLabelElement;

      // check input & label elements
      if (expectedIsDisabled[index]) {
        expect(inputEl).toBeDisabled();
      } else {
        expect(inputEl).not.toBeDisabled();
      }
      expect(labelEl.innerText).toBe(expectedLabels[index]);
    }
  });

  test('Function setItem run successfully without optional props', () => {
    const radioButton = new RadioButton();
    const container = radioButton.render();
    const newItems = [
      {
        value: expectedValues[0]
      }
    ];
    radioButton.setItems(newItems);
    const items = container.children;
    const item: Element = items[0];
    if (!item.children || item.children.length !== 1) {
      expect(false);
    }
    const inputEl = item.children[0] as HTMLInputElement;

    // check input & label elements
    expect(inputEl).not.toBeDisabled();

    // check getItems
    expect(radioButton.getItems()).toEqual(newItems);
  });

  test('throw error without items', () => {
    expect(() => {
      const radioButton = new RadioButton();
      // @ts-ignore
      radioButton.setItems(null);
    }).toThrowError();
  });

  test('throw error without item.value', () => {
    expect(() => {
      const radioButton = new RadioButton();
      // @ts-ignore
      radioButton.setItems([{
        label: expectedLabels[0],
        isDisabled: true
      }]);
      // 必須項目のvalueが未指定でもエラーが発生しない
      // このケース場合はnameも必須になる
    }).toThrowError();
  });
});