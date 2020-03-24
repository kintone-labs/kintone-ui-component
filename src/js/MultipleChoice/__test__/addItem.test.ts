import MultipleChoice from '../index';

describe('Unit test MultipleChoice addItem', () => {
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
    const multipleChoice = new MultipleChoice();
    const container = multipleChoice.render();
    multipleChoice.addItem({
      value: expectedValues[0]
    });
    if (!container.children || container.children.length !== 1) {
      expect(false);
    }
    const item = container.children[0];
    // Check input & label elements
    expect(item.classList.contains('kuc-list-item-disable')).toBe(false);
    expect(multipleChoice.getItems()).toEqual([{value: expectedValues[0]}]);
  });

  test('Function AddItem run successfully with full props', () => {
    const multipleChoice = new MultipleChoice();
    const container = multipleChoice.render();
    multipleChoice.addItem({
      label: expectedLabels[0],
      value: expectedValues[0],
      isDisabled: true
    });
    if (!container.children || container.children.length !== 1) {
      expect(false);
    }
    const item = container.children[0];
    const labelEl = item.children[1];

    // Check input, label, isDisabled properties
    expect(multipleChoice.getItems()).toEqual([{
      label: expectedLabels[0],
      value: expectedValues[0],
      isDisabled: true
    }]);
    expect(labelEl.textContent).toBe(expectedLabels[0]);
    expect(item.classList.contains('kuc-list-item-disable')).toBe(true);
  });

  test('Throw error without item', () => {
    expect(() => {
      const multipleChoice = new MultipleChoice();
      // @ts-ignore
      multipleChoice.addItem(null);
    }).toThrowError();
  });

  test('Throw error without item.value', () => {
    expect(() => {
      const multipleChoice = new MultipleChoice();
      // @ts-ignore
      multipleChoice.addItem({
        label: expectedLabels[0],
        isDisabled: true
      });
    }).toThrowError();
  });
});