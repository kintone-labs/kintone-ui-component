import RadioButton from '../index';

describe('Unit test RadioButton disableItem', () => {
  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];

  test('Function disableItem run successfully', () => {
    const radioButton = new RadioButton({
      name: 'fruit',
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
    const container = radioButton.render();
    radioButton.disableItem(expectedValues[0]);

    const items = container.children;
    const item: Element = items[0];
    const inputEl = item.children[0] as HTMLInputElement;
    expect(inputEl).toBeDisabled();
  });

  test('throw error without prop', () => {
    expect(() => {
      const radioButton = new RadioButton({
        name: 'fruit',
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          }
        ]
      });
      // @ts-ignore
      radioButton.disableItem();
    }).toThrowError();
  });
});