import MultipleChoice from '../index';

describe('Unit test MultipleChoice disableItem', () => {

  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];

  test('Function disableItem run successfully', () => {
    const multipleChoice = new MultipleChoice({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
          isDisabled: true
        }
      ]
    });
    const container = multipleChoice.render();
    multipleChoice.disableItem(expectedValues[0]);
    const items = container.children;
    const item: Element = items[0];
    expect(item.classList.contains('kuc-list-item-disable')).toBe(true);
  });

  test('Throw error without prop', () => {
    expect(() => {
      const multipleChoice = new MultipleChoice({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: true
          }
        ]
      });
      // @ts-ignore
      multipleChoice.disableItem();
    }).toThrowError();
  });
});