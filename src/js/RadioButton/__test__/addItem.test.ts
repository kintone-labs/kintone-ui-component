import RadioButton from '../index';

describe('Unit test RadioButton addItem', () => {
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

  test('Function AddItem run successfully without optional props', () => {
    const radioButton = new RadioButton();
    const container = radioButton.render();
    radioButton.addItem({
      value: expectedValues[0]
    });
    if (!container.children || container.children.length !== 1) {
      expect(false);
    }
    const item: Element = container.children[0];
    const inputEl = item.children[0] as HTMLInputElement;
    // check input & label elements
    expect(inputEl).not.toBeDisabled();
    expect(radioButton.getItems()).toEqual([{value: expectedValues[0]}]);
  });

  test('Function AddItem run successfully with full props', () => {
    const radioButton = new RadioButton();
    const container = radioButton.render();
    radioButton.addItem({
      label: expectedLabels[0],
      value: expectedValues[0],
      isDisabled: true
    });
    if (!container.children || container.children.length !== 1) {
      expect(false);
    }
    const item: Element = container.children[0];
    const inputEl = item.children[0] as HTMLInputElement;
    const labelEl = item.children[1] as HTMLSpanElement;

    // check input, label, isDisabled properties
    expect(radioButton.getItems()).toEqual([{
      label: expectedLabels[0],
      value: expectedValues[0],
      isDisabled: true
    }]);
    expect(labelEl.innerText).toBe(expectedLabels[0]);
    expect(inputEl).toBeDisabled();
  });

  test('throw error without item', () => {
    expect(() => {
      const radioButton = new RadioButton();
      // @ts-ignore
      radioButton.addItem(null);
    }).toThrowError();
  });

  test('throw error without item.value', () => {
    expect(() => {
      const radioButton = new RadioButton();
      // @ts-ignore
      radioButton.addItem({
        label: expectedLabels[0],
        isDisabled: true
      });
      // 必須項目のvalueを省略してもエラーが発生しない
    }).toThrowError();
  });
});