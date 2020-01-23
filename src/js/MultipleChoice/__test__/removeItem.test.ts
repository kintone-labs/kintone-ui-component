import '@testing-library/jest-dom/extend-expect';
import MultipleChoice from '../index';

describe('Unit test MultipleChoice removeItem', () => {

  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];

  test('Function removeItem run successfully', () => {
    const multipleChoice = new MultipleChoice({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
          isDisabled: false
        },
        {
          label: expectedLabels[1],
          value: expectedValues[1],
          isDisabled: true
        },
        {
          label: expectedLabels[2],
          value: expectedValues[2],
          isDisabled: true
        }
      ]
    });
    multipleChoice.removeItem(1);
    expect(multipleChoice.getItem(0)).toEqual({
      label: expectedLabels[0],
      value: expectedValues[0],
      isDisabled: false
    });
    expect(multipleChoice.getItem(1)).toEqual({
      label: expectedLabels[2],
      value: expectedValues[2],
      isDisabled: true
    });
  });

  test('Throw error with invalid index', () => {
    expect(() => {
      // @ts-ignore
      const multipleChoice = new MultipleChoice({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          }
        ]
      });
      // @ts-ignore
      multipleChoice.removeItem('abc');
    }).toThrowError();
  });

  test('Throw error with out of index', () => {
    expect(() => {
      // @ts-ignore
      const multipleChoice = new MultipleChoice({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          }
        ]
      });
      multipleChoice.removeItem(10);
    }).toThrowError();
  });

  test('Throw error without index', () => {
    expect(() => {
      const multipleChoice = new MultipleChoice({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          }
        ]
      });
      // @ts-ignore
      multipleChoice.removeItem(null);
    }).toThrowError();
  });
});