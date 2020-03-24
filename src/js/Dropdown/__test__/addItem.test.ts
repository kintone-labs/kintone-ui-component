import Dropdown from '../index';

describe('Unit test Dropdown addItem', () => {
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

  test('Function addItem run successfully without optional props', () => {
    const dropdown = new Dropdown();
    const container = dropdown.render();
    dropdown.addItem({
      value: expectedValues[0]
    });

    const itemsEl = container.querySelector('.kuc-list-outer')!.children;
    if (!container.children || itemsEl.length !== 1) {
      expect(false);
    }
    const itemEl = itemsEl[0];
    expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(false);
    expect(dropdown.getItems()).toEqual([{value: expectedValues[0]}]);
  });

  test('Function addItem run successfully with full props', () => {
    const dropdown = new Dropdown();
    const container = dropdown.render();
    dropdown.addItem({
      value: expectedValues[0],
      label: expectedLabels[0],
      isDisabled: true
    });
    const itemsEl = container.querySelector('.kuc-list-outer')!.children;
    if (!container.children || itemsEl.length !== 1) {
      expect(false);
    }
    const itemEl = itemsEl[0];
    expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(true);
    expect(dropdown.getItems()).toEqual([{
      value: expectedValues[0],
      label: expectedLabels[0],
      isDisabled: true
    }]);
  });

  test('throw error without item', () => {
    expect(() => {
      const dropdown = new Dropdown();
      // @ts-ignore
      dropdown.addItem(null);
    }).toThrowError();
  });

  test('throw error without item.value', () => {
    expect(() => {
      const dropdown = new Dropdown();
      // @ts-ignore
      dropdown.addItem({
        label: expectedLabels[0],
        isDisabled: true
      });
    }).toThrowError();
  });

  test('throw error with duplicate items', () => {
    expect(() => {
      const dropdown = new Dropdown({
        items: [
          {
            value: expectedValues[1]
          }
        ]
      });
      dropdown.addItem({value: expectedValues[1]});
    }).toThrowError();
  });

});