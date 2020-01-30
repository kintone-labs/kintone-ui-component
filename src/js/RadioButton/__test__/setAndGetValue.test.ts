import '@testing-library/jest-dom/extend-expect';
import RadioButton from '../index';

describe('Unit test RadioButton setValue and getValue', () => {

  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];
  const expectedIsDisabled = [false, true, true];

  test('Function setItems & getItems run successfully with full props', () => {
    const radioButton = new RadioButton({
      name: 'fruit',
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
    const container = radioButton.render();
    radioButton.setValue(expectedValues[1]);

    // check getItems
    const selectedItem = radioButton.getValue() || [];
    expect(selectedItem).toEqual(expectedValues[1]);

    // check dom
    const items = container.children;
    for (let index = 0; index < 3; index++) {
      const item: Element = items[index];
      if (!item.children || item.children.length !== 2) {
        expect(false);
      }
      const inputEl = (item.children[0] as HTMLInputElement);
      // check selected items
      if (selectedItem === expectedValues[index]) {
        expect(inputEl.checked).toBeTruthy();
      } else {
        expect(inputEl.checked).toBeFalsy();
      }
    }
  });

  test('throw error without value', () => {
    expect(() => {
      const radioButton = new RadioButton();
      // @ts-ignore
      radioButton.setValue(null);
      // 必須項目をnullで渡してもエラーが発生しない
    }).toThrowError();
  });

  test('throw error with invalid value', () => {
    expect(() => {
      const radioButton = new RadioButton();
      radioButton.setValue(expectedValues[0]);
    }).toThrowError();
  });

  test('throw error with duplicate value', () => {
    expect(() => {
      const radioButton = new RadioButton({
        name: 'fruit',
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
      radioButton.setValue(expectedValues[0]);
    }).toThrowError();
  });
});