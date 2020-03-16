import Button from '../index';

describe('Unit test Button setText', () => {
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
  test('Function setText run successfully', () => {
    const button = new Button({});
    const container = button.render();
    button.setText('update');
    expect(container.textContent).toBe('update');
  });

  test('Function setText run successfully with empty text', () => {
    const button = new Button({});
    const container = button.render();
    button.setText('');
    expect(container.textContent).toBe('');
  });

  test('Function setText run successfully with number', () => {
    const button = new Button();
    const container = button.render();
    // @ts-ignore
    button.setText(10);
    expect(container.textContent).toBe('10');
  });

  test('Function setText run successfully with null', () => {
    const button = new Button();
    const container = button.render();
    // @ts-ignore
    button.setText(null);
    // setTextの更新方法がinnerHTMLになっている。要修正。
    expect(container.textContent).toBe('');
  });
});
