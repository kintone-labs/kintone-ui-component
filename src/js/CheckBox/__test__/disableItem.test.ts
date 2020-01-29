import CheckBox from '../index';

describe('Unit test CheckBox disableItem', () => {
  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];
  test('Function disableItem run successfully', () => {
    const checkBox = new CheckBox({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
          isDisabled: false
        }
      ]
    });
    const container = checkBox.render();
    checkBox.disableItem(expectedValues[0]);
    const items = container.children;
    const item: Element = items[0];
    const inputEl = item.children[0] as HTMLInputElement;
    expect(inputEl).toBeDisabled();
  });

  test('throw error without prop', () => {
    expect(() => {
      const checkBox = new CheckBox({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          }
        ]
      });
      // @ts-ignore
      checkBox.disableItem();
    }).toThrowError();
  });
});
