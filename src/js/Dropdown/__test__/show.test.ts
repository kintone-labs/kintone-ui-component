import Dropdown from '../index';

describe('Unit test Dropdown show', () => {
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

  test('Function show run successfully', () => {
    const dropdown = new Dropdown({
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
        },
      ],
      value: expectedValues[1],
      isVisible: false
    });
    const container = dropdown.render();
    dropdown.show();
    expect(container).toBeVisible();
  });
});