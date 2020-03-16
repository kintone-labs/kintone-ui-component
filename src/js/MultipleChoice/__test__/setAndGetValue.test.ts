import MultipleChoice from '../index';

describe('Unit test MultipleChoice setItems and getItems', () => {
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
  const expectedIsDisabled = [false, true, true];

  test('Function setValue & getValue run successfully with full props', () => {
    const multipleChoice = new MultipleChoice({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
          isDisabled: expectedIsDisabled[0]
        },
        {
          label: expectedLabels[1],
          value: expectedValues[1],
          isDisabled: expectedIsDisabled[1]
        },
        {
          label: expectedLabels[2],
          value: expectedValues[2],
          isDisabled: expectedIsDisabled[2]
        }
      ]
    });
    const container = multipleChoice.render();
    multipleChoice.setValue([expectedValues[0], expectedValues[1]]);

    // Check getItems
    const selectedItem = multipleChoice.getValue() || [];
    expect(selectedItem).toEqual([expectedValues[0], expectedValues[1]]);

    // Check dom
    const items = container.children;
    for (let index = 0; index < 3; index++) {
      const item = items[index];
      if (!item.children || item.children.length !== 2) {
        expect(false);
      }
      // Check selected items
      if (selectedItem.indexOf(expectedValues[index]) > -1) {
        expect(item.classList.contains('kuc-list-item-selected')).toBe(true);
      } else {
        expect(item.classList.contains('kuc-list-item-selected')).toBe(false);
      }
    }
  });

  test('Throw error without value', () => {
    expect(() => {
      const multipleChoice = new MultipleChoice();
      // @ts-ignore
      multipleChoice.setValue(null);
    }).toThrowError();
  });

  test('Throw error with invalid value', () => {
    expect(() => {
      const multipleChoice = new MultipleChoice();
      multipleChoice.setValue([expectedValues[0]]);
    }).toThrowError();
  });

  test('Throw error with duplicate value', () => {
    expect(() => {
      const multipleChoice = new MultipleChoice({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: expectedIsDisabled[0]
          },
          {
            label: expectedLabels[1],
            value: expectedValues[1],
            isDisabled: expectedIsDisabled[1]
          }
        ]
      });
      multipleChoice.setValue([expectedValues[0], expectedValues[0]]);
    }).toThrowError();
  });
});