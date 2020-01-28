import Dropdown from '../index';

describe('Unit test Dropdown enableItem', () => {
  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];

  test('Function enableItem run successfully with full props', () => {
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
          isDisabled: false
        },
        {
          label: expectedLabels[2],
          value: expectedValues[2],
          isDisabled: true
        },
      ]
    });
    const container = dropdown.render();
    dropdown.enableItem(expectedValues[2]);

    const itemsEl: HTMLCollection = container.querySelector('.kuc-list-outer')!.children;
    const itemEl = itemsEl[2] as HTMLDivElement;
    expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(false);
  });

  // requiredのため、恐らく本来はエラーを出力すべきである。
  test('Function enableItem run successfully without value', () => {
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
          isDisabled: false
        },
        {
          label: expectedLabels[2],
          value: expectedValues[2],
          isDisabled: true
        },
      ]
    });
    const container = dropdown.render();
    // @ts-ignore
    dropdown.disableItem(null);
    const itemsEl: HTMLCollection = container.querySelector('.kuc-list-outer')!.children;
    const itemEl = itemsEl[2] as HTMLDivElement;
    expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(true);
  });
});