import Dropdown from '../index';

describe('Unit test Dropdown enableItem', () => {
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

    const itemsEl = container.querySelector('.kuc-list-outer')!.children;
    const itemEl = itemsEl[2];
    expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(false);
  });

  test('throw error with invalid value', () => {
    expect(() => {
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
      // @ts-ignore
      dropdown.disableItem(null);
    }).toThrowError();
  });
});