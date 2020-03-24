import RadioButton from '../index';

describe('Unit test RadioButton render', () => {
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
    const radioButton = new RadioButton();
    const container = radioButton.render();
    expect(container.classList.length).toBe(1);
    expect(['kuc-input-radio'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).not.toBeDisabled();
    expect(container).toBeVisible();
  });

  test('Render successfully with full props', () => {
    // デフォルト値と異なる値をセットする。
    const radioButton = new RadioButton({
      name: 'fruit',
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
      value: expectedValues[0],
      isDisabled: true,
      isVisible: false
    });
    const container = radioButton.render();
    expect(container.classList.length).toBe(1);
    expect(['kuc-input-radio'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).not.toBeVisible();
    if (!container.children || container.children.length !== 3) {
      expect(false);
    }
    const items = container.children;
    const ids: string[] = [];
    const selectedItem = radioButton.getValue() || '';

    // check each items
    for (let index = 0; index < 3; index++) {
      const item: Element = items[index];
      if (!item.children || item.children.length !== 2) {
        expect(false);
      }
      const inputEl = item.children[0] as HTMLInputElement;
      const labelEl = item.children[1] as HTMLLabelElement;

      // check input & label elements
      expect(inputEl).toBeDisabled();
      expect(labelEl.innerText).toBe(expectedLabels[index]);

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

  test('Render successfully with wrong props', () => {
    // 不正な値を設定した場合はデフォルト値がセットされることを確認する
    // @ts-ignore
    const radioButton = new RadioButton({
      name: 'fruit',
      isDisabled: 'abc',
      isVisible: 'abc'
    });
    const container = radioButton.render();
    expect(container.classList.length).toBe(1);
    expect(['kuc-input-radio'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).not.toBeDisabled();
    expect(container).toBeVisible();
  });

  test('throw error with invalid option.items', () => {
    expect(() => {
      // @ts-ignore
      const radioButton = new RadioButton({
        items: ['orange', 'banana', 'lemon']
      });
      radioButton.render();
      // 必須項目のoptions.items[x].valueが未指定でもcheckboxが生成されている
    }).toThrowError();
  });

  test('throw error with duplicate option.items[x].value', () => {
    expect(() => {
      new RadioButton({
        name: 'fruit',
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
        value: '',
      });
    }).toThrowError();
  });

  test('throw error with invalid option.value', () => {
    expect(() => {
      // @ts-ignore
      const radioButton = new RadioButton({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          }
        ],
        value: expectedValues[1]
      });
      radioButton.render();
    }).toThrowError();
  });

  test('throw error without name', () => {
    expect(() => {
      // @ts-ignore
      const radioButton = new RadioButton({
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
        value: expectedValues[0]
      });
      radioButton.render();
    }).toThrowError();
  });
});