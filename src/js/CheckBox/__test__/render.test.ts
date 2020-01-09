import '@testing-library/jest-dom/extend-expect';
import CheckBox from '../index';

describe('Unit test CheckBox render', () => {
  test('Render successfully without props', () => {
    const checkBox = new CheckBox({});
    const container = checkBox.render();
    expect(container.classList.length).toBe(1);
    expect(['kuc-input-checkbox'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).not.toBeDisabled();
    expect(container).toBeVisible();
  });

  test('Render successfully with full props', () => {
    // デフォルト値と異なる値をセットする。
    const expectedLabels = ['Orange', 'Banana', 'Lemon'];
    const expectedValues = ['orange', 'banana', 'lemon'];
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
      expect(item.classList.length).toBe(1);
      expect(['kuc-input-checkbox-item'].every(c => item.classList.contains(c))).toBe(true);
      if (!item.children || item.children.length !== 2) {
        expect(false);
      }
      const inputEl = (item.children[0] as HTMLInputElement);
      const labelEl: Element = item.children[1];

      // check input & label elements
      expect(inputEl.type).toBe('checkbox');
      expect(inputEl).toBeDisabled();
      expect(labelEl.textContent).toBe(expectedLabels[index]);
      expect(inputEl.id === labelEl.getAttribute('for')).toBeTruthy();

      // duplicate check for ids
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
    const checkBox = new CheckBox({
      isDisabled: 'abc',
      isVisible: 'abc'
    });
    const container = checkBox.render();
    expect(container.classList.length).toBe(1);
    expect(['kuc-input-checkbox'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).not.toBeDisabled();
    expect(container).toBeVisible();
  });

  test('throw error with invalid option.items', () => {
    // 必須項目のoptions.items[x].valueが未指定でもcheckboxが生成されている
    // @ts-ignore
    expect(() => {
      // @ts-ignore
      new CheckBox({
        items: ['orange', 'banana', 'lemon']
      });
    }).toThrowError();
  });

  test('throw error with duplicate option.items[x].value', () => {
    const expectedLabels = ['Orange', 'Banana', 'Lemon'];
    const expectedValues = ['orange', 'banana', 'lemon'];
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
          },
          {
            label: expectedLabels[2],
            value: expectedValues[2],
            isDisabled: true
          },
        ],
        value: [],
      });
    }).toThrowError();
  });

  test('throw error with invalid prop type of option.value', () => {
    const expectedLabels = ['Orange', 'Banana', 'Lemon'];
    const expectedValues = ['orange', 'banana', 'lemon'];
    expect(() => {
      // @ts-ignore
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
          },
          {
            label: expectedLabels[2],
            value: expectedValues[2],
            isDisabled: true
          },
        ],
        value: expectedValues[0]
      });
    }).toThrowError();
  });

  test('throw error with invalid option.value', () => {
    const expectedLabels = ['Orange', 'Banana', 'Lemon'];
    const expectedValues = ['orange', 'banana', 'lemon'];
    expect(() => {
      // @ts-ignore
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
        value: [expectedValues[2]]
      });
    }).toThrowError();
  });

  test('throw error with duplicate option.value', () => {
    const expectedLabels = ['Orange', 'Banana', 'Lemon'];
    const expectedValues = ['orange', 'banana', 'lemon'];
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
          },
          {
            label: expectedLabels[2],
            value: expectedValues[2],
            isDisabled: true
          },
        ],
        value: [expectedValues[0], expectedValues[0]],
      });
    }).toThrowError();
  });
});
