import RadioButton from '../index';

describe('Unit test RadioButton enableItem', () => {
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