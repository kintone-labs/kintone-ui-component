import MultipleChoice from '../index';

describe('Unit test MultipleChoice addItem', () => {

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
    const item: Element = container.children[0];
    const inputEl = (item.children[0] as HTMLInputElement);
    // Check input & label elements
    expect(inputEl).not.toBeDisabled();
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
    const item: Element = container.children[0];
    const labelEl: Element = item.children[1];

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

  // * Found an implementation bug here
  // * Error response omission
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