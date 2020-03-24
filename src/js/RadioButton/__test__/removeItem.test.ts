import RadioButton from '../index';

describe('Unit test RadioButton removeItem', () => {
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

  test('Function removeItem run successfully', () => {
    const radioButton = new RadioButton({
      name: 'fruit',
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
    const container = radioButton.render();
    radioButton.removeItem(1);

    const itemsEl = container.getElementsByClassName('kuc-input-radio');
    if (!container.children || itemsEl.length !== 2) {
      expect(false);
    }
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
    expect(radioButton.getValue()).toEqual(null);
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
        name: 'fruit',
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