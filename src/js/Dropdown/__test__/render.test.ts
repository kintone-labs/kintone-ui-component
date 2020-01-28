import Dropdown from '../index';

describe('Unit test Dropdown render', () => {

  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];

  test('Render successfully without props', () => {
    const dropdown = new Dropdown();
    const container = dropdown.render();
    expect(container.className).toBe('kuc-dropdown-container');
    expect(container.classList.length).toBe(1);
    expect(container.getAttribute('disabled')).toBe(null);
    expect(container).toBeVisible();
  });

  test('Render successfully with full props', () => {
    // デフォルト値と異なる値をセットする。
    const dropdown = new Dropdown({
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
      value: expectedValues[1],
      isDisabled: false,
      isVisible: false
    });
    const container = dropdown.render();
    expect(container.className).toBe('kuc-dropdown-container');
    expect(container.classList.length).toBe(1);
    // 具体的にどこでこの処理が挟まれているのか謎。いずれ追求する。
    // 子要素のDisabledの検証を行うためにfalseで設定。別途trueの処理は挟んだほうがいいかもしれん
    // expect(container.getAttribute('disabled')).toBe('true');
    expect(container.getAttribute('disabled')).toBe(null);
    expect(container).not.toBeVisible();

    // check selected label text
    const selectedTextEl = container.querySelector('.kuc-dropdown-selected-label') as HTMLSpanElement;
    expect(selectedTextEl.innerText).toBe(expectedLabels[1]);

    // check each dropdown items
    const itemsEl: HTMLCollection = container.querySelector('.kuc-list-outer')!.children;
    if (!container.children || itemsEl.length !== 3) {
      expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLDivElement;
      const itemLabelEl = itemEl.children[1] as HTMLSpanElement;
      expect(itemLabelEl.innerText).toBe(expectedLabels[i]);

      // 選択されているのかどうか
      if (i === 1) {
        expect(itemEl.classList.contains('kuc-list-item-selected')).toBe(true);
      } else {
        expect(itemEl.classList.contains('kuc-list-item-selected')).toBe(false);
      }

      // diableになっているのかどうか
      // 全体のプロパティがdisabledの場合、子要素もdisabledになる。
      // むしろ全体のプロパティの方が優先される
      if (i === 0) {
        expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(false);
      } else {
        expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(true);
      }
    }

  });

  test('Render successfully with wrong props', () => {
    // 不正な値を設定した場合はデフォルト値がセットされることを確認する
    // @ts-ignore
    const dropdown = new Dropdown({
      isDisabled: 'abc',
      isVisible: 'abc'
    });
    const container = dropdown.render();
    expect(container.className).toBe('kuc-dropdown-container');
    expect(container.classList.length).toBe(1);
    expect(container.getAttribute('disabled')).toBe(null);
    expect(container).toBeVisible();
  });

  test('throw error with duplicate option.items[x].value', () => {
    expect(() => {
      new Dropdown({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0]
          },
          {
            label: expectedLabels[0],
            value: expectedValues[0]
          },
          {
            label: expectedLabels[2],
            value: expectedValues[2]
          },
        ],
      });
    }).toThrowError();
  });

  test('throw error with invalid option.value', () => {
    expect(() => {
      new Dropdown({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0]
          }
        ],
        value: expectedValues[1]
      });
    }).toThrowError();
  });

  // test('throw error with invalid option.items', () => {
  // });

  // test('throw error with invalid prop type of option.value', () => {
  // });

  // test('throw error with duplicate option.value', () => {
  // });
});