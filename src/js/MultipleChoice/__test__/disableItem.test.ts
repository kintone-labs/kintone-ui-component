import MultipleChoice from '../index';

describe('Unit test MultipleChoice disableItem', () => {
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

  test('Function disableItem run successfully', () => {
    const multipleChoice = new MultipleChoice({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
          isDisabled: false
        }
      ]
    });
    const container = multipleChoice.render();
    multipleChoice.disableItem(expectedValues[0]);
    const items = container.children;
    const item = items[0];
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