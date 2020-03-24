import CheckBox from '../index';

describe('Unit test CheckBox enableItem', () => {
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
    const checkBox = new CheckBox({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
          isDisabled: true
        }
      ]
    });
    const container = checkBox.render();
    checkBox.enableItem(expectedValues[0]);
    const items = container.children;
    const item: Element = items[0];
    const inputEl = item.children[0] as HTMLInputElement;
    expect(inputEl).not.toBeDisabled();
  });

  test('throw error without prop', () => {
    expect(() => {
      const checkBox = new CheckBox({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: true
          }
        ]
      });
      // @ts-ignore
      checkBox.enableItem();
    }).toThrowError();
  });
});
