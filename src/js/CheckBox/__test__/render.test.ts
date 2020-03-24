import CheckBox from '../index';

describe('Unit test CheckBox render', () => {
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
    const checkBox = new CheckBox();
    const container = checkBox.render();
    expect(container.classList.length).toBe(1);
    expect(['kuc-input-checkbox'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).toBeVisible();
  });

  test('Render successfully with full props', () => {
    // デフォルト値と異なる値をセットする。
    const checkBox = new CheckBox({
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
    const container = checkBox.render();
    expect(container.classList.length).toBe(1);
    expect(['kuc-input-checkbox'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).not.toBeVisible();
    if (!container.children || container.children.length !== 3) {
      expect(false);
    }
    const items = container.children;
    const ids: string[] = [];
    const selectedItem = checkBox.getValue() || [];
    // check each items
    for (let index = 0; index < 3; index++) {
      const item: Element = items[index];
      if (!item.children || item.children.length !== 2) {
        expect(false);
      }
      const inputEl = item.children[0] as HTMLInputElement;
      const labelEl: Element = item.children[1];

      // check input & label elements
      expect(inputEl).toBeDisabled();
      expect(labelEl.textContent).toBe(expectedLabels[index]);

      // check for item ids
      expect(inputEl.id === labelEl.getAttribute('for')).toBeTruthy();
      expect(ids.indexOf(inputEl.id) === -1).toBeTruthy();
      ids.push(inputEl.id);

      // check selected items
      if (selectedItem.indexOf(expectedValues[index]) > -1) {
        expect(inputEl.checked).toBeTruthy();
      } else {
        expect(inputEl.checked).toBeFalsy();
      }
    }
  });

  test('Render successfully without select value', () => {
    const disabledFlg = [false, true];
    const checkBox = new CheckBox({
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
    const container = checkBox.render();
    expect(container.classList.length).toBe(1);
    expect(['kuc-input-checkbox'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).toBeVisible();
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
      expect(inputEl.disabled).toBe(disabledFlg[index]);
      expect(labelEl.textContent).toBe(expectedLabels[index]);

      // check selected items
      expect(inputEl.checked).toBeFalsy();
    }
  });

  test('Render successfully with wrong props', () => {
    // 不正な値を設定した場合はデフォルト値がセットされることを確認する
    // @ts-ignore
    const checkBox = new CheckBox({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
          isDisabled: false
        }],
      isDisabled: 'abc',
      isVisible: 'abc'
    });
    const container = checkBox.render();
    expect(container.classList.length).toBe(1);
    expect(['kuc-input-checkbox'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).toBeVisible();

    if (!container.children || container.children.length !== 2) {
      expect(false);
    }
    const items = container.children;
    const item: Element = items[0];
    if (!item.children || item.children.length !== 2) {
      expect(false);
    }
    const inputEl = item.children[0] as HTMLInputElement;
    expect(inputEl).not.toBeDisabled();
  });

  test('throw error with invalid option.items', () => {
    expect(() => {
      // @ts-ignore
      new CheckBox({
        items: ['orange', 'banana', 'lemon']
      });
    }).toThrowError();
  });

  test('throw error with duplicate option.items[x].value', () => {
    expect(() => {
      new CheckBox({
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
        value: [],
      });
    }).toThrowError();
  });

  test('throw error with invalid prop type of option.value', () => {
    expect(() => {
      // @ts-ignore
      new CheckBox({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          }
        ],
        value: expectedValues[0]
      });
    }).toThrowError();
  });

  test('throw error with invalid option.value', () => {
    expect(() => {
      // @ts-ignore
      new CheckBox({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          }
        ],
        value: [expectedValues[1]]
      });
    }).toThrowError();
  });

  test('throw error with duplicate option.value', () => {
    expect(() => {
      new CheckBox({
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
        value: [expectedValues[0], expectedValues[0]],
      });
    }).toThrowError();
  });
});
