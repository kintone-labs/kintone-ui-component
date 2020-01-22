import CheckBox from '../index';

describe('Unit test CheckBox show', () => {
  test('Function show run successfully', () => {
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
        isVisible: false
      });
      const container = checkBox.render();
      checkBox.show();
      expect(container).toBeVisible();
  });
});
