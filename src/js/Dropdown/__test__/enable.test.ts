import Dropdown from '../index';

describe('Unit test Dropdown enable', () => {
  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];

  test('Function enable run successfully', () => {
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
      isDisabled: true
    });
    const container = dropdown.render();
    dropdown.enable();
    expect(container.getAttribute('disabled')).toBe(null);
  });
});