import CheckBoxItem from '../Item';

describe('Unit test CheckBox Item', () => {
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

  test('Render successfully without props', () => {
    const item = new CheckBoxItem();
    const container = item.render();
    expect(container.className).toBe('kuc-input-checkbox-item');
  });

  test('getValue run successfully when value is not setted', () => {
    const item = new CheckBoxItem();
    expect(item.getValue()).toBe('');
  });
});