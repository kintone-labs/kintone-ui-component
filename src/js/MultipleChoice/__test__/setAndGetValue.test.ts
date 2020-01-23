import '@testing-library/jest-dom/extend-expect';
import MultipleChoice from '../index';

describe('Unit test MultipleChoice setItems and getItems', () => {

  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];
  const expectedIsDisabled = [false, true, true];

  test('Function setItems & getItems run successfully with full props', () => {
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
      const item: Element = items[index];
      if (!item.children || item.children.length !== 2) {
        expect(false);
      }
      const inputEl = (item.children[0] as HTMLInputElement);
      // Check selected items
      if (selectedItem.indexOf(expectedValues[index]) > -1) {
        expect(inputEl.checked).toBe(true);
      } else {
        expect(inputEl.checked).toBe(false);
      }
    }
  });

  // * Found an implementation bug here
  // * Error response omission
  test('Throw error without value', () => {
    expect(() => {
      const multipleChoice = new MultipleChoice({});
      // @ts-ignore
      multipleChoice.setValue(null);
      // No error occurs event if the value of required item is specified as null
    }).toThrowError();
  });

  test('Throw error with invalid value', () => {
    expect(() => {
      const multipleChoice = new MultipleChoice({});
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