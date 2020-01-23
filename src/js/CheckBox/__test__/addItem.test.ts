import '@testing-library/jest-dom/extend-expect';
import CheckBox from '../index';

describe('Unit test CheckBox addItem', () => {

  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];

  test('Function AddItem run successfully without optional props', () => {
    const checkBox = new CheckBox();
    const container = checkBox.render();
    checkBox.addItem({
      value: expectedValues[0]
    });
    if (!container.children || container.children.length !== 1) {
      expect(false);
    }
    const item: Element = container.children[0];
    const inputEl = (item.children[0] as HTMLInputElement);
    // check input & label elements
    expect(inputEl).not.toBeDisabled();
    expect(checkBox.getItems()).toEqual([{value: expectedValues[0]}]);
  });

  test('Function AddItem run successfully with full props', () => {
    const checkBox = new CheckBox();
    const container = checkBox.render();
    checkBox.addItem({
      label: expectedLabels[0],
      value: expectedValues[0],
      isDisabled: true
    });
    if (!container.children || container.children.length !== 1) {
      expect(false);
    }
    const item: Element = container.children[0];
    const inputEl = (item.children[0] as HTMLInputElement);
    const labelEl: Element = item.children[1];

    // check input, label, isDisabled properties
    expect(checkBox.getItems()).toEqual([{
      label: expectedLabels[0],
      value: expectedValues[0],
      isDisabled: true
    }]);
    expect(labelEl.textContent).toBe(expectedLabels[0]);
    expect(inputEl).toBeDisabled();
  });

  test('throw error without item', () => {
    expect(() => {
      const checkBox = new CheckBox();
      // @ts-ignore
      checkBox.addItem(null);
    }).toThrowError();
  });

  test('throw error without item.value', () => {
    expect(() => {
      const checkBox = new CheckBox();
      // @ts-ignore
      checkBox.addItem({
        label: expectedLabels[0],
        isDisabled: true
      });
      // 必須項目のvalueを省略してもエラーが発生しない
    }).toThrowError();
  });
});
