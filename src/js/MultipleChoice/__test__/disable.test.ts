import MultipleChoice from '../index';

describe('Unit test MultipleChoice disable', () => {
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

  test('Function disable run successfully', () => {

    const expectedLabels = ['Orange', 'Banana', 'Lemon'];
    const expectedValues = ['orange', 'banana', 'lemon'];

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
          isDisabled: false
        },
        {
          label: expectedLabels[2],
          value: expectedValues[2],
          isDisabled: true
        }
      ],
      isDisabled: false
    });
    const container = multipleChoice.render();
    multipleChoice.disable();
    if (!container.children || container.children.length !== 3) {
      expect(false);
    }
    const items = container.children;
    for (let index = 0; index < 3; index++) {
      const item = items[index];
      if (!item.children || item.children.length !== 2) {
        expect(false);
      }
      // Check input & label elements
      expect(item.classList.contains('kuc-list-item-disable')).toBe(true);
    }
  });
});