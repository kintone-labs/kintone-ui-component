import '@testing-library/jest-dom/extend-expect';
import MultipleChoice from '../index';

describe('Unit test MultipleChoice hide', () => {
  test('Function hide run successfully', () => {

    const expectedLabels = ['Orange', 'Banana', 'Lemon'];
    const expectedValues = ['orange', 'banana', 'lemon'];

    const multipleChoice = new MultipleChoice({
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
      isVisible: true
    });
    const container = multipleChoice.render();
    multipleChoice.hide();
    expect(container).not.toBeVisible();
  });
});