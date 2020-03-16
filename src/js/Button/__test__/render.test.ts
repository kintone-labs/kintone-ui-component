import Button from '../index';

describe('Unit test Button render', () => {
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
    const button = new Button();
    const container = button.render();
    expect(container.classList.length).toBe(2);
    expect(['kuc-btn', 'normal'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).not.toBeDisabled();
    expect(container).toBeVisible();
    expect(container.textContent).toBe('');
  });

  test('Render successfully with full props', () => {
    // デフォルト値と異なる値をセットする。
    const button = new Button({
      text: 'Submit',
      type: 'submit',
      isDisabled: true,
      isVisible: false
    });
    const container = button.render();
    expect(container.classList.length).toBe(2);
    expect(['kuc-btn', 'submit'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).toBeDisabled();
    expect(container).not.toBeVisible();
    expect(container.textContent).toBe('Submit');
  });

  test('Render successfully with wrong props', () => {
    // 不正な値を設定した場合はデフォルト値がセットされることを確認する
    // @ts-ignore
    const button = new Button({
      type: 'button',
      isDisabled: 'abc',
      isVisible: 'abc'
    });
    const container = button.render();
    expect(container.classList.length).toBe(2);
    expect(['kuc-btn', 'normal'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).not.toBeDisabled();
    expect(container).toBeVisible();
  });
});
