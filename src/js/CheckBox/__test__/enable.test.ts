import '@testing-library/jest-dom/extend-expect';
import CheckBox from '../index';

describe('Unit test CheckBox enable', () => {
  test('Function enable run successfully', () => {
    const expectedLabels = ['Orange', 'Banana', 'Lemon'];
    const expectedValues = ['orange', 'banana', 'lemon'];
      const checkBox = new CheckBox({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
          },
          {
            label: expectedLabels[1],
            value: expectedValues[1],
          },
          {
            label: expectedLabels[2],
            value: expectedValues[2],
          }
        ],
        isDisabled: true
      });
      const container = checkBox.render();
      checkBox.enable();
      if (!container.children || container.children.length !== 3) {
        expect(false);
      }
      const items = container.children;
      for (let index = 0; index < 3; index++) {
        const item: Element = items[index];
        if (!item.children || item.children.length !== 2) {
          expect(false);
        }
        const inputEl = (item.children[0] as HTMLInputElement);  
        // check input & label elements
        expect(inputEl).not.toBeDisabled();
      };
  });
});
