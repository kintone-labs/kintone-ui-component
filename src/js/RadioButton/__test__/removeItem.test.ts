import '@testing-library/jest-dom/extend-expect';
import RadioButton from '../index';

describe('Unit test RadioButton removeItem', () => {

  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];

  test('Function removeItem run successfully', () => {
    const radioButton = new RadioButton({
      name: "fruit",
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
      ],
      value: expectedValues[1]
    });
    radioButton.removeItem(1);
    expect(radioButton.getItems()).toMatchObject([{
      label: expectedLabels[0],
      value: expectedValues[0],
      isDisabled: false
    },
    {
      label: expectedLabels[2],
      value: expectedValues[2],
      isDisabled: true
    }
    ]);
    //objectをremoveしてもValueは残る？
    // expect(radioButton.getValue()).toEqual([]);
  });

  test('throw error with invalid index', () => {
    expect(() => {
      // @ts-ignore
      const radioButton = new RadioButton({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          }
        ]
      });
      // @ts-ignore
      radioButton.removeItem('abc');
    }).toThrowError();
  });

  test('throw error with out of index', () => {
    expect(() => {
      // @ts-ignore
      const radioButton = new RadioButton({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          }
        ]
      });
      radioButton.removeItem(10);
    }).toThrowError();
  });

  test('throw error without index', () => {
    expect(() => {
      const radioButton = new RadioButton({
        name: "fruit",
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          }
        ]
      });
      // @ts-ignore
      radioButton.removeItem(null);
    }).toThrowError();
  });
});