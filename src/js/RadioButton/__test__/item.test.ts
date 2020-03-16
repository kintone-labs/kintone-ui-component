import Item from '../Item';

describe('Unit test RadioButton Item', () => {
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
    const item = new Item({
      selected: true,
      item: {
        value: 'Lemon',
        label: 'lemon',
        isDisabled: false
      },
      isDisabled: false,
    });
    const container = item.render();
    const itemInputlEl = container.children[0] as HTMLInputElement;
    const itemLabelEl = container.children[1] as HTMLElement;
    expect(itemInputlEl.checked).toBe(true);
    expect(itemLabelEl.innerText).toBe('lemon');
    expect(itemInputlEl).not.toBeDisabled();
  });
});