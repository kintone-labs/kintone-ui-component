import CheckBox from '../index';

describe('Unit test CheckBox getItem', () => {
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

  test('Function getItem run successfully', () => {
    const checkBox = new CheckBox({
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
        }
      ]
    });
    expect(checkBox.getItem(0)).toEqual({
      label: expectedLabels[0],
      value: expectedValues[0],
      isDisabled: false
    });
    expect(checkBox.getItem(1)).toEqual({
      label: expectedLabels[1],
      value: expectedValues[1],
      isDisabled: true
    });
  });

  test('throw error with invalid index', () => {
    expect(() => {
      // @ts-ignore
      const checkBox = new CheckBox({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          }
        ]
      });
      // @ts-ignore
      checkBox.getItem('abc');
    }).toThrowError();
  });

  test('throw error with out of index', () => {
    expect(() => {
      // @ts-ignore
      const checkBox = new CheckBox({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          }
        ]
      });
      checkBox.getItem(10);
    }).toThrowError();
  });

  test('throw error without index', () => {
    expect(() => {
      const checkBox = new CheckBox({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          }
        ]
      });
      // @ts-ignore
      checkBox.getItem(null);
    }).toThrowError();
  });
});
