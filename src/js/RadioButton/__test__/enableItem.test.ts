import RadioButton from '../index';

describe('Unit test CheckBox enableItem', () => {
  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];

    test('Function enableItem run successfully', () => {
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
    radioButton.enableItem(expectedValues[2]);

    const items = container.children;
    const item: Element = items[0];
    const inputEl = item.children[0] as HTMLInputElement;
    expect(inputEl).not.toBeDisabled();
  });

  //必須項目なのでエラーが出るのが仕様　もしくは全部Enabaleにするか
  test('throw error without prop', () => {
    expect(() => {
      const radioButton = new RadioButton({
        name: 'fruit',
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: true
          }
        ]
      });
      // @ts-ignore
      radioButton.enableItem();
    }).toThrowError();
  });
});