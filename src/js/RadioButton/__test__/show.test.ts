import RadioButton from '../index';

describe('Unit test RadioButton show', () => {
  test('Function show run successfully', () => {
    const expectedLabels = ['Orange', 'Banana', 'Lemon'];
    const expectedValues = ['orange', 'banana', 'lemon'];
    const radioButton = new RadioButton({
      name: 'fruit',
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
    const container = radioButton.render();
    radioButton.show();
    expect(container).toBeVisible();
  });
});